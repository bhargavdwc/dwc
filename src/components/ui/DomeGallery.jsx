import { useEffect, useMemo, useRef, useCallback } from 'react';
import { useGesture } from '@use-gesture/react';
import './DomeGallery.css';

const DEFAULT_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&auto=format&fit=crop', alt: 'Marketing strategy' },
  { src: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop', alt: 'Social media' },
  { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop', alt: 'Analytics' },
  { src: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&auto=format&fit=crop', alt: 'Digital campaign' },
  { src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&auto=format&fit=crop', alt: 'Growth charts' },
  { src: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&auto=format&fit=crop', alt: 'Team collaboration' },
  { src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&auto=format&fit=crop', alt: 'Brand design' },
];

const DEFAULTS = { maxVerticalRotationDeg: 5, dragSensitivity: 20, enlargeTransitionMs: 300, segments: 35 };

const clamp = (v, min, max) => Math.min(Math.max(v, min), max);
const normalizeAngle = d => ((d % 360) + 360) % 360;
const wrapAngleSigned = deg => { const a = (((deg + 180) % 360) + 360) % 360; return a - 180; };
const getDataNumber = (el, name, fallback) => {
  const attr = el.dataset[name] ?? el.getAttribute(`data-${name}`);
  const n = attr == null ? NaN : parseFloat(attr);
  return Number.isFinite(n) ? n : fallback;
};

function buildItems(pool, seg) {
  const xCols = Array.from({ length: seg }, (_, i) => -37 + i * 2);
  const evenYs = [-4, -2, 0, 2, 4];
  const oddYs = [-3, -1, 1, 3, 5];
  const coords = xCols.flatMap((x, c) => (c % 2 === 0 ? evenYs : oddYs).map(y => ({ x, y, sizeX: 2, sizeY: 2 })));
  const totalSlots = coords.length;
  if (!pool.length) return coords.map(c => ({ ...c, src: '', alt: '' }));
  const normalized = pool.map(img => typeof img === 'string' ? { src: img, alt: '' } : { src: img.src || '', alt: img.alt || '' });
  const used = Array.from({ length: totalSlots }, (_, i) => normalized[i % normalized.length]);
  for (let i = 1; i < used.length; i++) {
    if (used[i].src === used[i - 1].src) {
      for (let j = i + 1; j < used.length; j++) {
        if (used[j].src !== used[i].src) { [used[i], used[j]] = [used[j], used[i]]; break; }
      }
    }
  }
  return coords.map((c, i) => ({ ...c, src: used[i].src, alt: used[i].alt }));
}

function computeItemBaseRotation(offsetX, offsetY, sizeX, sizeY, segments) {
  const unit = 360 / segments / 2;
  return { rotateX: unit * (offsetY - (sizeY - 1) / 2), rotateY: unit * (offsetX + (sizeX - 1) / 2) };
}

export default function DomeGallery({
  images = DEFAULT_IMAGES,
  fit = 0.5, fitBasis = 'auto', minRadius = 600, maxRadius = Infinity,
  padFactor = 0.25, overlayBlurColor = '#111111',
  maxVerticalRotationDeg = DEFAULTS.maxVerticalRotationDeg,
  dragSensitivity = DEFAULTS.dragSensitivity,
  enlargeTransitionMs = DEFAULTS.enlargeTransitionMs,
  segments = DEFAULTS.segments, dragDampening = 2,
  openedImageWidth = '250px', openedImageHeight = '350px',
  imageBorderRadius = '30px', openedImageBorderRadius = '30px',
  grayscale = false
}) {
  const rootRef = useRef(null), mainRef = useRef(null), sphereRef = useRef(null);
  const frameRef = useRef(null), viewerRef = useRef(null), scrimRef = useRef(null);
  const focusedElRef = useRef(null), originalTilePositionRef = useRef(null);
  const rotationRef = useRef({ x: 0, y: 0 }), startRotRef = useRef({ x: 0, y: 0 });
  const startPosRef = useRef(null), draggingRef = useRef(false), movedRef = useRef(false);
  const inertiaRAF = useRef(null), openingRef = useRef(false);
  const openStartedAtRef = useRef(0), lastDragEndAt = useRef(0);
  const scrollLockedRef = useRef(false);

  /* ── Cursor-follow refs ── */
  const targetRotRef = useRef({ x: 0, y: 0 });
  const lerpRAF = useRef(null);
  const pointerInsideRef = useRef(false);

  const lockScroll = useCallback(() => {
    if (scrollLockedRef.current) return;
    scrollLockedRef.current = true;
    document.body.classList.add('dg-scroll-lock');
  }, []);

  const unlockScroll = useCallback(() => {
    if (!scrollLockedRef.current) return;
    if (rootRef.current?.getAttribute('data-enlarging') === 'true') return;
    scrollLockedRef.current = false;
    document.body.classList.remove('dg-scroll-lock');
  }, []);

  const items = useMemo(() => buildItems(images, segments), [images, segments]);
  const applyTransform = (xDeg, yDeg) => {
    const el = sphereRef.current;
    if (el) el.style.transform = `translateZ(calc(var(--radius) * -1)) rotateX(${xDeg}deg) rotateY(${yDeg}deg)`;
  };
  const lockedRadiusRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const ro = new ResizeObserver(entries => {
      const cr = entries[0].contentRect;
      const w = Math.max(1, cr.width), h = Math.max(1, cr.height);
      const minDim = Math.min(w, h), maxDim = Math.max(w, h), aspect = w / h;
      let basis;
      switch (fitBasis) {
        case 'min': basis = minDim; break;
        case 'max': basis = maxDim; break;
        case 'width': basis = w; break;
        case 'height': basis = h; break;
        default: basis = aspect >= 1.3 ? w : minDim;
      }
      let radius = clamp(Math.min(basis * fit, h * 1.35), minRadius, maxRadius);
      lockedRadiusRef.current = Math.round(radius);
      const viewerPad = Math.max(8, Math.round(minDim * padFactor));
      root.style.setProperty('--radius', `${lockedRadiusRef.current}px`);
      root.style.setProperty('--viewer-pad', `${viewerPad}px`);
      root.style.setProperty('--overlay-blur-color', overlayBlurColor);
      root.style.setProperty('--tile-radius', imageBorderRadius);
      root.style.setProperty('--enlarge-radius', openedImageBorderRadius);
      root.style.setProperty('--image-filter', grayscale ? 'grayscale(1)' : 'none');
      applyTransform(rotationRef.current.x, rotationRef.current.y);
    });
    ro.observe(root);
    return () => ro.disconnect();
  }, [fit, fitBasis, minRadius, maxRadius, padFactor, overlayBlurColor, grayscale, imageBorderRadius, openedImageBorderRadius, openedImageWidth, openedImageHeight]);

  useEffect(() => { applyTransform(rotationRef.current.x, rotationRef.current.y); }, []);

  /* ── Continuous lerp loop: sphere follows cursor smoothly ── */
  useEffect(() => {
    const lerp = (a, b, t) => a + (b - a) * t;
    const tick = () => {
      if (!draggingRef.current && !inertiaRAF.current) {
        const tx = targetRotRef.current.x;
        const ty = targetRotRef.current.y;
        const cx = rotationRef.current.x;
        const cy = rotationRef.current.y;
        const nx = lerp(cx, tx, 0.06);
        const ny = lerp(cy, ty, 0.06);
        if (Math.abs(nx - cx) > 0.001 || Math.abs(ny - cy) > 0.001) {
          rotationRef.current = { x: nx, y: ny };
          applyTransform(nx, ny);
        }
      }
      lerpRAF.current = requestAnimationFrame(tick);
    };
    lerpRAF.current = requestAnimationFrame(tick);
    return () => { if (lerpRAF.current) cancelAnimationFrame(lerpRAF.current); };
  }, []);

  /* ── Mouse move handler: update target rotation ── */
  const onMouseMove = useCallback((e) => {
    if (draggingRef.current || focusedElRef.current) return;
    const rect = mainRef.current?.getBoundingClientRect();
    if (!rect) return;
    const nx = (e.clientX - rect.left - rect.width / 2) / (rect.width / 2);  // -1 to 1
    const ny = (e.clientY - rect.top - rect.height / 2) / (rect.height / 2); // -1 to 1
    targetRotRef.current = {
      x: clamp(-ny * 18, -maxVerticalRotationDeg * 3, maxVerticalRotationDeg * 3),
      y: nx * 50,
    };
  }, [maxVerticalRotationDeg]);

  const onMouseLeave = useCallback(() => {
    pointerInsideRef.current = false;
    targetRotRef.current = { x: 0, y: 0 }; // drift back to neutral
  }, []);

  const onMouseEnter = useCallback(() => {
    pointerInsideRef.current = true;
  }, []);

  const stopInertia = useCallback(() => {
    if (inertiaRAF.current) { cancelAnimationFrame(inertiaRAF.current); inertiaRAF.current = null; }
  }, []);

  const startInertia = useCallback((vx, vy) => {
    const MAX_V = 1.4;
    let vX = clamp(vx, -MAX_V, MAX_V) * 80, vY = clamp(vy, -MAX_V, MAX_V) * 80;
    let frames = 0;
    const d = clamp(dragDampening ?? 0.6, 0, 1);
    const frictionMul = 0.94 + 0.055 * d, stopThreshold = 0.015 - 0.01 * d;
    const maxFrames = Math.round(90 + 270 * d);
    const step = () => {
      vX *= frictionMul; vY *= frictionMul;
      if ((Math.abs(vX) < stopThreshold && Math.abs(vY) < stopThreshold) || ++frames > maxFrames) { inertiaRAF.current = null; return; }
      const nextX = clamp(rotationRef.current.x - vY / 200, -maxVerticalRotationDeg, maxVerticalRotationDeg);
      const nextY = wrapAngleSigned(rotationRef.current.y + vX / 200);
      rotationRef.current = { x: nextX, y: nextY };
      applyTransform(nextX, nextY);
      inertiaRAF.current = requestAnimationFrame(step);
    };
    stopInertia();
    inertiaRAF.current = requestAnimationFrame(step);
  }, [dragDampening, maxVerticalRotationDeg, stopInertia]);

  useGesture({
    onDragStart: ({ event }) => {
      if (focusedElRef.current) return;
      stopInertia();
      draggingRef.current = true; movedRef.current = false;
      startRotRef.current = { ...rotationRef.current };
      startPosRef.current = { x: event.clientX, y: event.clientY };
    },
    onDrag: ({ event, last, velocity = [0, 0], direction = [0, 0], movement }) => {
      if (focusedElRef.current || !draggingRef.current || !startPosRef.current) return;
      const dxTotal = event.clientX - startPosRef.current.x, dyTotal = event.clientY - startPosRef.current.y;
      if (!movedRef.current && dxTotal * dxTotal + dyTotal * dyTotal > 16) movedRef.current = true;
      const nextX = clamp(startRotRef.current.x - dyTotal / dragSensitivity, -maxVerticalRotationDeg, maxVerticalRotationDeg);
      const nextY = wrapAngleSigned(startRotRef.current.y + dxTotal / dragSensitivity);
      if (rotationRef.current.x !== nextX || rotationRef.current.y !== nextY) {
        rotationRef.current = { x: nextX, y: nextY }; applyTransform(nextX, nextY);
      }
      if (last) {
        draggingRef.current = false;
        let [vMagX, vMagY] = velocity, [dirX, dirY] = direction;
        let vx = vMagX * dirX, vy = vMagY * dirY;
        if (Math.abs(vx) < 0.001 && Math.abs(vy) < 0.001 && Array.isArray(movement)) {
          const [mx, my] = movement;
          vx = clamp((mx / dragSensitivity) * 0.02, -1.2, 1.2);
          vy = clamp((my / dragSensitivity) * 0.02, -1.2, 1.2);
        }
        if (Math.abs(vx) > 0.005 || Math.abs(vy) > 0.005) startInertia(vx, vy);
        if (movedRef.current) lastDragEndAt.current = performance.now();
        movedRef.current = false;
      }
    }
  }, { target: mainRef, eventOptions: { passive: true } });

  useEffect(() => {
    const scrim = scrimRef.current;
    if (!scrim) return;
    const close = () => {
      if (performance.now() - openStartedAtRef.current < 250) return;
      const el = focusedElRef.current;
      if (!el) return;
      const parent = el.parentElement;
      const overlay = viewerRef.current?.querySelector('.enlarge');
      if (!overlay) return;
      const refDiv = parent.querySelector('.item__image--reference');
      const originalPos = originalTilePositionRef.current;
      if (!originalPos) {
        overlay.remove(); if (refDiv) refDiv.remove();
        parent.style.setProperty('--rot-y-delta', '0deg');
        parent.style.setProperty('--rot-x-delta', '0deg');
        el.style.visibility = ''; el.style.zIndex = 0;
        focusedElRef.current = null;
        rootRef.current?.removeAttribute('data-enlarging');
        openingRef.current = false; unlockScroll(); return;
      }
      const currentRect = overlay.getBoundingClientRect();
      const rootRect = rootRef.current.getBoundingClientRect();
      const origRel = { left: originalPos.left - rootRect.left, top: originalPos.top - rootRect.top, width: originalPos.width, height: originalPos.height };
      const overlayRel = { left: currentRect.left - rootRect.left, top: currentRect.top - rootRect.top, width: currentRect.width, height: currentRect.height };
      const anim = document.createElement('div');
      anim.className = 'enlarge-closing';
      anim.style.cssText = `position:absolute;left:${overlayRel.left}px;top:${overlayRel.top}px;width:${overlayRel.width}px;height:${overlayRel.height}px;z-index:9999;border-radius:var(--enlarge-radius,32px);overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,.35);transition:all ${enlargeTransitionMs}ms ease-out;pointer-events:none;margin:0;transform:none;`;
      const origImg = overlay.querySelector('img');
      if (origImg) { const img = origImg.cloneNode(); img.style.cssText = 'width:100%;height:100%;object-fit:cover;'; anim.appendChild(img); }
      overlay.remove(); rootRef.current.appendChild(anim);
      void anim.getBoundingClientRect();
      requestAnimationFrame(() => { anim.style.left = origRel.left + 'px'; anim.style.top = origRel.top + 'px'; anim.style.width = origRel.width + 'px'; anim.style.height = origRel.height + 'px'; anim.style.opacity = '0'; });
      anim.addEventListener('transitionend', () => {
        anim.remove(); originalTilePositionRef.current = null;
        if (refDiv) refDiv.remove();
        parent.style.transition = 'none'; el.style.transition = 'none';
        parent.style.setProperty('--rot-y-delta', '0deg'); parent.style.setProperty('--rot-x-delta', '0deg');
        requestAnimationFrame(() => {
          el.style.visibility = ''; el.style.opacity = '0'; el.style.zIndex = 0;
          focusedElRef.current = null; rootRef.current?.removeAttribute('data-enlarging');
          requestAnimationFrame(() => {
            parent.style.transition = ''; el.style.transition = 'opacity 300ms ease-out';
            requestAnimationFrame(() => {
              el.style.opacity = '1';
              setTimeout(() => { el.style.transition = ''; el.style.opacity = ''; openingRef.current = false; if (!draggingRef.current) document.body.classList.remove('dg-scroll-lock'); }, 300);
            });
          });
        });
      }, { once: true });
    };
    scrim.addEventListener('click', close);
    const onKey = e => { if (e.key === 'Escape') close(); };
    window.addEventListener('keydown', onKey);
    return () => { scrim.removeEventListener('click', close); window.removeEventListener('keydown', onKey); };
  }, [enlargeTransitionMs, unlockScroll]);

  const openItemFromElement = useCallback(el => {
    if (openingRef.current) return;
    openingRef.current = true; openStartedAtRef.current = performance.now();
    lockScroll();
    const parent = el.parentElement;
    focusedElRef.current = el; el.setAttribute('data-focused', 'true');
    const offsetX = getDataNumber(parent, 'offsetX', 0), offsetY = getDataNumber(parent, 'offsetY', 0);
    const sizeX = getDataNumber(parent, 'sizeX', 2), sizeY = getDataNumber(parent, 'sizeY', 2);
    const parentRot = computeItemBaseRotation(offsetX, offsetY, sizeX, sizeY, segments);
    const parentY = normalizeAngle(parentRot.rotateY), globalY = normalizeAngle(rotationRef.current.y);
    let rotY = -(parentY + globalY) % 360; if (rotY < -180) rotY += 360;
    parent.style.setProperty('--rot-y-delta', `${rotY}deg`);
    parent.style.setProperty('--rot-x-delta', `${-parentRot.rotateX - rotationRef.current.x}deg`);
    const refDiv = document.createElement('div');
    refDiv.className = 'item__image item__image--reference';
    refDiv.style.opacity = '0'; refDiv.style.transform = `rotateX(${-parentRot.rotateX}deg) rotateY(${-parentRot.rotateY}deg)`;
    parent.appendChild(refDiv); void refDiv.offsetHeight;
    const tileR = refDiv.getBoundingClientRect(), mainR = mainRef.current?.getBoundingClientRect(), frameR = frameRef.current?.getBoundingClientRect();
    if (!mainR || !frameR || tileR.width <= 0 || tileR.height <= 0) { openingRef.current = false; focusedElRef.current = null; parent.removeChild(refDiv); unlockScroll(); return; }
    originalTilePositionRef.current = { left: tileR.left, top: tileR.top, width: tileR.width, height: tileR.height };
    el.style.visibility = 'hidden'; el.style.zIndex = 0;
    const overlay = document.createElement('div');
    overlay.className = 'enlarge';
    Object.assign(overlay.style, { position: 'absolute', left: frameR.left - mainR.left + 'px', top: frameR.top - mainR.top + 'px', width: frameR.width + 'px', height: frameR.height + 'px', opacity: '0', zIndex: '30', willChange: 'transform, opacity', transformOrigin: 'top left', transition: `transform ${enlargeTransitionMs}ms ease, opacity ${enlargeTransitionMs}ms ease` });
    const rawSrc = parent.dataset.src || el.querySelector('img')?.src || '';
    const img = document.createElement('img'); img.src = rawSrc; overlay.appendChild(img);
    viewerRef.current.appendChild(overlay);
    const tx0 = tileR.left - frameR.left, ty0 = tileR.top - frameR.top;
    const sx0 = isFinite(tileR.width / frameR.width) && tileR.width / frameR.width > 0 ? tileR.width / frameR.width : 1;
    const sy0 = isFinite(tileR.height / frameR.height) && tileR.height / frameR.height > 0 ? tileR.height / frameR.height : 1;
    overlay.style.transform = `translate(${tx0}px,${ty0}px) scale(${sx0},${sy0})`;
    setTimeout(() => { if (!overlay.parentElement) return; overlay.style.opacity = '1'; overlay.style.transform = 'translate(0px,0px) scale(1,1)'; rootRef.current?.setAttribute('data-enlarging', 'true'); }, 16);
    if (openedImageWidth || openedImageHeight) {
      overlay.addEventListener('transitionend', ev => {
        if (ev.propertyName !== 'transform') return;
        const prevTrans = overlay.style.transition;
        overlay.style.transition = 'none';
        const tw = openedImageWidth || `${frameR.width}px`, th = openedImageHeight || `${frameR.height}px`;
        overlay.style.width = tw; overlay.style.height = th;
        const newRect = overlay.getBoundingClientRect();
        overlay.style.width = frameR.width + 'px'; overlay.style.height = frameR.height + 'px';
        void overlay.offsetWidth;
        overlay.style.transition = `left ${enlargeTransitionMs}ms ease, top ${enlargeTransitionMs}ms ease, width ${enlargeTransitionMs}ms ease, height ${enlargeTransitionMs}ms ease`;
        const cL = frameR.left - mainR.left + (frameR.width - newRect.width) / 2;
        const cT = frameR.top - mainR.top + (frameR.height - newRect.height) / 2;
        requestAnimationFrame(() => { overlay.style.left = `${cL}px`; overlay.style.top = `${cT}px`; overlay.style.width = tw; overlay.style.height = th; });
        overlay.addEventListener('transitionend', () => { overlay.style.transition = prevTrans; }, { once: true });
      }, { once: true });
    }
  }, [enlargeTransitionMs, lockScroll, openedImageHeight, openedImageWidth, segments, unlockScroll]);

  const onTileClick = useCallback(e => {
    if (draggingRef.current || movedRef.current || performance.now() - lastDragEndAt.current < 80 || openingRef.current) return;
    openItemFromElement(e.currentTarget);
  }, [openItemFromElement]);

  const onTilePointerUp = useCallback(e => {
    if (e.pointerType !== 'touch' || draggingRef.current || movedRef.current || performance.now() - lastDragEndAt.current < 80 || openingRef.current) return;
    openItemFromElement(e.currentTarget);
  }, [openItemFromElement]);

  useEffect(() => () => { document.body.classList.remove('dg-scroll-lock'); }, []);

  /* ── Hover popup handlers ── */
  const popupRef = useRef(null);
  const popupImgRef = useRef(null);
  const popupLabelRef = useRef(null);

  const showPopup = useCallback((src, alt, clientX, clientY) => {
    const popup = popupRef.current;
    if (!popup || !rootRef.current) return;
    const root = rootRef.current.getBoundingClientRect();
    if (popupImgRef.current) popupImgRef.current.src = src;
    if (popupLabelRef.current) popupLabelRef.current.textContent = alt || '';
    // Position: offset from cursor, clamp inside root
    const W = 200, H = 150;
    let left = clientX - root.left + 18;
    let top = clientY - root.top - H / 2;
    if (left + W > root.width - 8) left = clientX - root.left - W - 18;
    if (top < 8) top = 8;
    if (top + H > root.height - 8) top = root.height - H - 8;
    popup.style.left = `${left}px`;
    popup.style.top = `${top}px`;
    popup.style.opacity = '1';
    popup.style.transform = 'scale(1) translateY(0px)';
    popup.style.pointerEvents = 'none';
  }, []);

  const movePopup = useCallback((clientX, clientY) => {
    const popup = popupRef.current;
    if (!popup || popup.style.opacity === '0') return;
    const root = rootRef.current?.getBoundingClientRect();
    if (!root) return;
    const W = 200, H = 150;
    let left = clientX - root.left + 18;
    let top = clientY - root.top - H / 2;
    if (left + W > root.width - 8) left = clientX - root.left - W - 18;
    if (top < 8) top = 8;
    if (top + H > root.height - 8) top = root.height - H - 8;
    popup.style.left = `${left}px`;
    popup.style.top = `${top}px`;
  }, []);

  const hidePopup = useCallback(() => {
    const popup = popupRef.current;
    if (!popup) return;
    popup.style.opacity = '0';
    popup.style.transform = 'scale(0.88) translateY(8px)';
  }, []);

  const onTileMouseEnter = useCallback(e => {
    if (draggingRef.current || focusedElRef.current || openingRef.current) return;
    const parent = e.currentTarget.parentElement;
    const src = parent?.dataset?.src || e.currentTarget.querySelector('img')?.src || '';
    const alt = e.currentTarget.querySelector('img')?.alt || '';
    showPopup(src, alt, e.clientX, e.clientY);
  }, [showPopup]);

  const onTileMouseMove = useCallback(e => {
    if (draggingRef.current) { hidePopup(); return; }
    movePopup(e.clientX, e.clientY);
  }, [movePopup, hidePopup]);

  const onTileMouseLeave = useCallback(() => {
    hidePopup();
  }, [hidePopup]);

  return (
    <div ref={rootRef} className="sphere-root" style={{ ['--segments-x']: segments, ['--segments-y']: segments, ['--overlay-blur-color']: overlayBlurColor, ['--tile-radius']: imageBorderRadius, ['--enlarge-radius']: openedImageBorderRadius, ['--image-filter']: grayscale ? 'grayscale(1)' : 'none' }}>
      <main ref={mainRef} className="sphere-main" onMouseMove={onMouseMove} onMouseLeave={onMouseLeave} onMouseEnter={onMouseEnter}>
        <div className="stage">
          <div ref={sphereRef} className="sphere">
            {items.map((it, i) => (
              <div key={`${it.x},${it.y},${i}`} className="item" data-src={it.src} data-offset-x={it.x} data-offset-y={it.y} data-size-x={it.sizeX} data-size-y={it.sizeY} style={{ ['--offset-x']: it.x, ['--offset-y']: it.y, ['--item-size-x']: it.sizeX, ['--item-size-y']: it.sizeY }}>
                <div
                  className="item__image"
                  role="button"
                  tabIndex={0}
                  aria-label={it.alt || 'Open image'}
                  onClick={onTileClick}
                  onPointerUp={onTilePointerUp}
                  onMouseEnter={onTileMouseEnter}
                  onMouseMove={onTileMouseMove}
                  onMouseLeave={onTileMouseLeave}
                >
                  <img src={it.src} draggable={false} alt={it.alt} />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="overlay" /><div className="overlay overlay--blur" />
        <div className="edge-fade edge-fade--top" /><div className="edge-fade edge-fade--bottom" />
        <div className="viewer" ref={viewerRef}>
          <div ref={scrimRef} className="scrim" />
          <div ref={frameRef} className="frame" />
        </div>
      </main>

      {/* Hover popup */}
      <div
        ref={popupRef}
        className="dg-hover-popup"
        style={{ opacity: 0, transform: 'scale(0.88) translateY(8px)' }}
      >
        <img ref={popupImgRef} src="" alt="" className="dg-hover-popup__img" />
        <div className="dg-hover-popup__footer">
          <span ref={popupLabelRef} className="dg-hover-popup__label" />
          <span className="dg-hover-popup__hint">Click to open</span>
        </div>
      </div>

    </div>
  );
}
