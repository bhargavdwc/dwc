import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import CardSwap, { Card } from '../ui/CardSwap';

import analyticsImg from '../../assets/hero_analytics.png';
import brandImg from '../../assets/hero_brand.png';
import seoImg from '../../assets/hero_seo.png';
import socialImg from '../../assets/hero_social.png';

gsap.registerPlugin(ScrollTrigger);



const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      /* Heading word-split reveal */
      if (headRef.current) {
        const words = headRef.current.textContent!.split(' ');
        headRef.current.innerHTML = words
          .map((w: string) => `<span class="ab-word"><span class="ab-word-inner">${w}</span></span>`)
          .join(' ');
        gsap.fromTo(
          (headRef.current as HTMLElement).querySelectorAll('.ab-word-inner'),
          { y: '110%' },
          {
            y: '0%', duration: 1, stagger: 0.06, ease: 'expo.out',
            scrollTrigger: { trigger: headRef.current, start: 'top 82%', once: true }
          }
        );
      }

      /* Body + button fade up */
      gsap.fromTo(
        [bodyRef.current, btnRef.current],
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.9, stagger: 0.15, ease: 'expo.out',
          scrollTrigger: { trigger: bodyRef.current, start: 'top 82%', once: true }
        }
      );

      /* Stats counter */
      if (statsRef.current) {
        gsap.fromTo(
          (statsRef.current as HTMLElement).querySelectorAll('.ab-stat'),
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'expo.out',
            scrollTrigger: { trigger: statsRef.current, start: 'top 85%', once: true }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      style={{ background: '#060608', position: 'relative', overflow: 'hidden' }}
      className="py-10 lg:py-12"
      data-bg="#060608"
      data-text="#ffffff"
    >
      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '50%', right: '-10%',
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(59,130,246,0.08) 0%, transparent 70%)',
        transform: 'translateY(-50%)',
        pointerEvents: 'none'
      }} />

      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

          {/* ── LEFT: Company Details ── */}
          <div>
            {/* Eyebrow */}
            <p style={{
              fontFamily: 'Outfit, sans-serif',
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.28em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.35)',
              marginBottom: 24,
              display: 'flex',
              alignItems: 'center',
              gap: 12,
            }}>
              <span style={{
                display: 'inline-block', width: 28, height: 1,
                background: 'linear-gradient(90deg,#3b82f6,#06b6d4)'
              }} />
              About DWC Studio
            </p>

            {/* Heading */}
            <h2
              ref={headRef}
              style={{
                fontFamily: 'Cormorant Garamond, serif',
                fontSize: 'clamp(2.4rem, 4.5vw, 4.8rem)',
                fontWeight: 700,
                lineHeight: 1.02,
                letterSpacing: '-0.02em',
                color: '#ffffff',
                marginBottom: 28,
                overflow: 'hidden',
              }}
            >
              We Build Brands That Are Impossible to Ignore
            </h2>

            {/* Body */}
            <div ref={bodyRef}>
              <p style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: '1rem',
                lineHeight: 1.8, color: 'rgba(255,255,255,0.5)', marginBottom: 16
              }}>
                DWC Studio started as a boutique consultancy with a single mission — bridge the gap between creative brilliance and data precision. Today, 40+ specialists across strategy, content, paid media, SEO, and brand identity work together under one roof.
              </p>
              <p style={{
                fontFamily: 'DM Sans, sans-serif', fontSize: '1rem',
                lineHeight: 1.8, color: 'rgba(255,255,255,0.5)', marginBottom: 36
              }}>
                We don't just run campaigns — we build marketing ecosystems that make brands unstoppable in their markets.
              </p>
            </div>


            {/* CTA */}
            <div ref={btnRef}>
              <a
                href="/about"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 10,
                  fontFamily: 'Outfit, sans-serif', fontSize: 13, fontWeight: 600,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: '#ffffff', textDecoration: 'none',
                  background: 'rgba(59,130,246,0.12)',
                  border: '1px solid rgba(59,130,246,0.4)',
                  borderRadius: 100, padding: '14px 28px',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = '#3b82f6';
                  e.currentTarget.style.borderColor = '#3b82f6';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(59,130,246,0.12)';
                  e.currentTarget.style.borderColor = 'rgba(59,130,246,0.4)';
                }}
              >
                Discover Our Story
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── RIGHT: CardSwap ── */}
          <div style={{ position: 'relative', height: 520, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <CardSwap

              width={520}
              height={500}
              cardDistance={55}
              verticalDistance={65}
              delay={3000}
              pauseOnHover={true}
              skewAmount={5}
              easing="elastic"

            >
              <Card>
                <img
                  src={brandImg}
                  alt="Brand Strategy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 16, display: 'block' }}
                />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)',
                  borderRadius: '0 0 16px 16px', padding: '28px 20px 16px',
                }}>
                  <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: 15, color: '#fff', margin: 0 }}>Brand Identity</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.55)', margin: '4px 0 0' }}>Visual storytelling that converts</p>
                </div>
              </Card>

              <Card>
                <img
                  src={analyticsImg}
                  alt="Analytics & Growth"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 16, display: 'block' }}
                />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)',
                  borderRadius: '0 0 16px 16px', padding: '28px 20px 16px',
                }}>
                  <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: 15, color: '#fff', margin: 0 }}>Data & Analytics</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.55)', margin: '4px 0 0' }}>Insights that drive growth</p>
                </div>
              </Card>

              <Card>
                <img
                  src={seoImg}
                  alt="SEO Strategy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 16, display: 'block' }}
                />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)',
                  borderRadius: '0 0 16px 16px', padding: '28px 20px 16px',
                }}>
                  <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: 15, color: '#fff', margin: 0 }}>SEO & Performance</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.55)', margin: '4px 0 0' }}>Rank higher, reach further</p>
                </div>
              </Card>

              <Card>
                <img
                  src={socialImg}
                  alt="Social Media"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 16, display: 'block' }}
                />
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0,
                  background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)',
                  borderRadius: '0 0 16px 16px', padding: '28px 20px 16px',
                }}>
                  <p style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 600, fontSize: 15, color: '#fff', margin: 0 }}>Social Media</p>
                  <p style={{ fontFamily: 'DM Sans, sans-serif', fontSize: 12, color: 'rgba(255,255,255,0.55)', margin: '4px 0 0' }}>Communities that advocate for you</p>
                </div>
              </Card>
            </CardSwap>
          </div>

        </div>
      </div>

      <style>{`
        .ab-word { display: inline-block; overflow: hidden; vertical-align: bottom; }
        .ab-word-inner { display: inline-block; }
      `}</style>
    </section>
  );
};

export default AboutSection;
