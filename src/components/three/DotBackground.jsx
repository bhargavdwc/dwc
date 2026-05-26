import { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * variant: "float" | "ripple" | "orbit"
 * "float" — 3000 floating particles, mouse parallax
 * "ripple" — flat grid wave field
 * "orbit" — 5 rings of orbiting dots
 */
const DotBackground = ({ variant = 'float', opacity = 1 }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const isMobile = window.innerWidth < 768;
    let animId;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, el.clientWidth / el.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(el.clientWidth, el.clientHeight);
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    const onResize = () => {
      camera.aspect = el.clientWidth / el.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(el.clientWidth, el.clientHeight);
    };
    window.addEventListener('resize', onResize);
    let cleanup = () => {};

    /* ── FLOAT ── */
    if (variant === 'float') {
      const COUNT = isMobile ? 1200 : 3000;
      const group = new THREE.Group();
      scene.add(group);

      // Two size groups
      const smallCount = Math.floor(COUNT * 0.8);
      const bigCount = COUNT - smallCount;

      const makePoints = (count, size, spread = 1) => {
        const geo = new THREE.BufferGeometry();
        const pos = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
          pos[i * 3]     = (Math.random() - 0.5) * 80 * spread;
          pos[i * 3 + 1] = (Math.random() - 0.5) * 50 * spread;
          pos[i * 3 + 2] = (Math.random() - 0.5) * 50 * spread;
          // 60% white, 40% brand blue/cyan alternating
          if (Math.random() > 0.4) {
            colors[i*3] = 1; colors[i*3+1] = 1; colors[i*3+2] = 1;
          } else if (Math.random() > 0.5) {
            // #0D5EF6 → r:0.051, g:0.369, b:0.965
            colors[i*3] = 0.051; colors[i*3+1] = 0.369; colors[i*3+2] = 0.965;
          } else {
            // #04B9CA → r:0.016, g:0.725, b:0.792
            colors[i*3] = 0.016; colors[i*3+1] = 0.725; colors[i*3+2] = 0.792;
          }
        }
        geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
        const mat = new THREE.PointsMaterial({
          size, vertexColors: true, transparent: true, opacity: 0.55, sizeAttenuation: true,
        });
        return { points: new THREE.Points(geo, mat), geo, mat };
      };

      const { points: small, geo: smallGeo, mat: smallMat } = makePoints(smallCount, 0.06);
      const { points: big,   geo: bigGeo,   mat: bigMat   } = makePoints(bigCount,   0.15);
      group.add(small, big);
      camera.position.z = 30;

      let curX = 0, curY = 0, tgtX = 0, tgtY = 0, frame = 0;
      const onMouse = (e) => {
        tgtX = (e.clientX / window.innerWidth  - 0.5) * 0.3;
        tgtY = (e.clientY / window.innerHeight - 0.5) * 0.2;
      };
      window.addEventListener('mousemove', onMouse);

      const positions = smallGeo.attributes.position.array;
      const animate = () => {
        animId = requestAnimationFrame(animate);
        frame++;
        group.rotation.y += 0.0002;

        curX += (tgtX - curX) * 0.05;
        curY += (tgtY - curY) * 0.05;
        group.rotation.y = curX;
        group.rotation.x = curY;

        // Twinkle every 120 frames
        if (frame % 120 === 0) {
          for (let i = 0; i < 50; i++) {
            const idx = Math.floor(Math.random() * smallCount);
            positions[idx * 3 + 1] += (Math.random() - 0.5) * 0.05;
          }
          smallGeo.attributes.position.needsUpdate = true;
        }

        renderer.render(scene, camera);
      };
      animate();

      cleanup = () => {
        window.removeEventListener('mousemove', onMouse);
        smallGeo.dispose(); smallMat.dispose();
        bigGeo.dispose(); bigMat.dispose();
      };
    }

    /* ── RIPPLE ── */
    if (variant === 'ripple') {
      const COLS = 50, ROWS = 50;
      const COUNT = COLS * ROWS;
      const geo = new THREE.BufferGeometry();
      const pos = new Float32Array(COUNT * 3);

      for (let i = 0; i < COUNT; i++) {
        pos[i * 3]     = (i % COLS) * 1.2 - (COLS * 1.2) / 2;
        pos[i * 3 + 1] = Math.floor(i / COLS) * 1.2 - (ROWS * 1.2) / 2;
        pos[i * 3 + 2] = 0;
      }
      geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      const mat = new THREE.PointsMaterial({ color: 0x04B9CA, size: 0.08, transparent: true, opacity: 0.65 });
      const points = new THREE.Points(geo, mat);
      scene.add(points);
      camera.position.set(0, 20, 35);
      camera.lookAt(0, 0, 0);

      let t = 0;
      const animate = () => {
        animId = requestAnimationFrame(animate);
        t += 0.012;
        const arr = geo.attributes.position.array;
        for (let i = 0; i < COUNT; i++) {
          arr[i * 3 + 2] = Math.sin(i * 0.3 + t * 1.5) * 0.4 + Math.cos(i * 0.2 + t * 1.2) * 0.3;
        }
        geo.attributes.position.needsUpdate = true;
        renderer.render(scene, camera);
      };
      animate();
      cleanup = () => { geo.dispose(); mat.dispose(); };
    }

    /* ── ORBIT ── */
    if (variant === 'orbit') {
      const ringConfigs = [
        { r: 5,  count: 60, speed:  0.004, tiltX: 0,    color: 0xffffff },
        { r: 9,  count: 60, speed: -0.003, tiltX: 0.785, color: 0x0D5EF6 },
        { r: 13, count: 60, speed:  0.005, tiltX: 1.22,  color: 0x04B9CA },
        { r: 17, count: 60, speed: -0.002, tiltX: 0.35,  color: 0x0D5EF6 },
        { r: 21, count: 60, speed:  0.006, tiltX: 1.57,  color: 0x04B9CA },
      ];

      const rings = ringConfigs.map(cfg => {
        const geo = new THREE.BufferGeometry();
        const pos = new Float32Array(cfg.count * 3);
        for (let i = 0; i < cfg.count; i++) {
          const angle = (i / cfg.count) * Math.PI * 2;
          pos[i * 3]     = Math.cos(angle) * cfg.r;
          pos[i * 3 + 1] = Math.sin(angle) * cfg.r;
          pos[i * 3 + 2] = 0;
        }
        geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
        const mat = new THREE.PointsMaterial({ color: cfg.color, size: 0.1, transparent: true, opacity: 0.4 });
        const pts = new THREE.Points(geo, mat);
        pts.rotation.x = cfg.tiltX;
        pts.userData = { speed: cfg.speed };
        scene.add(pts);
        return { pts, geo, mat };
      });

      camera.position.set(0, 0, 35);
      camera.lookAt(0, 0, 0);

      const animate = () => {
        animId = requestAnimationFrame(animate);
        rings.forEach(({ pts }) => { pts.rotation.y += pts.userData.speed; });
        renderer.render(scene, camera);
      };
      animate();
      cleanup = () => rings.forEach(({ geo, mat }) => { geo.dispose(); mat.dispose(); });
    }

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', onResize);
      cleanup();
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, [variant]);

  return (
    <div
      ref={ref}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      style={{ opacity }}
    />
  );
};

export default DotBackground;
