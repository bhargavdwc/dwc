import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import DotBackground from '../three/DotBackground';
import DomeGallery from '../ui/DomeGallery';

gsap.registerPlugin(ScrollTrigger);

const AGENCY_IMAGES = [
  { src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&auto=format&fit=crop', alt: 'Marketing strategy' },
  { src: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&auto=format&fit=crop', alt: 'Social media' },
  { src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop', alt: 'Analytics' },
  { src: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=600&auto=format&fit=crop', alt: 'Digital campaign' },
  { src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&auto=format&fit=crop', alt: 'Growth charts' },
  { src: 'https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&auto=format&fit=crop', alt: 'Team collaboration' },
  { src: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&auto=format&fit=crop', alt: 'Brand design' },
];

const AboutTeaser = () => {
  const sectionRef = useRef(null);
  const [minRadius, setMinRadius] = useState(380);
  const [opWidth, setOpWidth] = useState('260px');
  const [opHeight, setOpHeight] = useState('320px');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMinRadius(200);
        setOpWidth('200px');
        setOpHeight('240px');
      } else {
        setMinRadius(380);
        setOpWidth('260px');
        setOpHeight('320px');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  /* Word split heading */
  useEffect(() => {
    const el = sectionRef.current?.querySelector('.about-heading');
    if (!el) return;
    const words = el.textContent.split(' ');
    el.innerHTML = words.map(w => `<span class="word"><span class="word-inner">${w}</span></span>`).join(' ');
    gsap.fromTo(el.querySelectorAll('.word-inner'),
      { y: '100%' },
      {
        y: '0%', duration: 0.9, stagger: 0.07, ease: 'expo.out',
        scrollTrigger: { trigger: el, start: 'top 80%', once: true }
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-2"
      style={{ background: '#111111' }}
      data-bg="#111111"
      data-text="#ffffff"
    >
      <DotBackground variant="orbit" opacity={0.15} />
      <div className="absolute inset-0 bg-dot-dark bg-[length:28px_28px] pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

        {/* Left — Text */}
        <div data-aos="fade-right" data-aos-duration="1000">
          <p
            className="font-outfit text-[11px] font-semibold tracking-[0.25em] uppercase flex items-center gap-[12px] mb-6"
            style={{ color: 'rgba(255,255,255,0.4)' }}
          >
            <span className="inline-block w-[28px] h-[1px] bg-gradient-to-r from-blue-500 to-cyan-400" />
            About Our Agency
          </p>

          <h2 className="about-heading font-cormorant font-700 leading-[1] tracking-[-0.02em] text-5xl text-white mb-8">
            8 Years of Crafting Campaigns That Grow Brands
          </h2>

          <p className="font-dm leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem' }}>
            We started as a boutique consultancy with a single mission: bridge the gap between creative brilliance and data precision. Today, 40+ specialists across strategy, content, paid media, SEO, and brand identity work together under one roof.
          </p>
          <p className="font-dm leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '1rem' }}>
            United by one goal: your growth. We don't just run campaigns — we build marketing ecosystems that make brands impossible to ignore.
          </p>

          <a
            href="/about"
            className="magnetic"
            style={{
              fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'white', textDecoration: 'none',
              borderBottom: '1px solid rgba(255,255,255,0.3)', paddingBottom: 3,
              transition: 'border-color 0.3s',
            }}
          >
            Know More →
          </a>
        </div>

        {/* Right — DomeGallery */}
        <div
          className="relative h-[280px] lg:h-[520px]"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <DomeGallery
            images={AGENCY_IMAGES}
            fit={0.48}
            minRadius={minRadius}
            overlayBlurColor="#111111"
            grayscale={false}
            imageBorderRadius="16px"
            openedImageBorderRadius="20px"
            openedImageWidth={opWidth}
            openedImageHeight={opHeight}
            dragSensitivity={18}
            dragDampening={1.8}
          />
        </div>

      </div>
    </section>
  );
};

export default AboutTeaser;
