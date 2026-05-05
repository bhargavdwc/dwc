import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import Ballpit from './Ballpit'


export default function Hero() {

  const h1Ref = useRef<HTMLHeadingElement>(null)
  const bodyRef = useRef<HTMLParagraphElement>(null)
  const btnsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()
    tl.to(h1Ref.current?.querySelectorAll('.word') || [], {
      y: 0, opacity: 1, stagger: 0.06, duration: 0.8, ease: 'power3.out'
    })
      .to(bodyRef.current, { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }, '-=0.2')
      .to(btnsRef.current?.children || [], { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: 'power2.out' }, '-=0.2')
      .to('.explore-btn', { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' }, '-=0.2')
    return () => { tl.kill() }
  }, [])

  const words = ['AI-Driven', 'Digital', 'Marketing', 'Agency', 'in', 'Ahmedabad']

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 overflow-hidden z-0">
        <Ballpit
          count={45}
          gravity={0.1}
          friction={0.99}
          wallBounce={0.9}
          followCursor={false}
          colors={['#0D5EF6', '#04B9CA', '#333333']}
          minSize={0.6}
          maxSize={1.0}
        />
      </div>

      {/* Radial glow */}
      <div className="hero-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-[200px] bg-gradient-to-t from-black to-transparent z-[1]" />

      <div className="relative z-[2] text-center px-6 pt-8 max-w-[1000px] flex flex-col items-center justify-center h-full">
        {/* H1 with word split */}
        <h1
          ref={h1Ref}
          className="font-display font-bold text-[clamp(2rem,6vw,4.2rem)] text-white leading-[1.1] tracking-tight mb-4"
        >
          {words.map((word, i) => (
            <span key={i} className="overflow-hidden inline-block mr-[0.3em]">
              <span
                className="word inline-block opacity-0 translate-y-[60px]"
              >
                {word === 'Digital' || word === 'Marketing' ? (
                  <span className="gradient-text">{word}</span>
                ) : word}
                {i < words.length - 1 ? '\u00A0' : ''}
              </span>
            </span>
          ))}
        </h1>

        {/* Body */}
        <p
          ref={bodyRef}
          className="font-body text-[clamp(0.9rem,1.1vw,1rem)] text-white/60 leading-relaxed mb-8 max-w-[640px] opacity-0 translate-y-[25px]"
        >
          Achieving measurable business growth through strategy, creativity, and research. We offer SEO, PPC, Social Media, and Web Development to help brands reach and convert their ideal audiences.
        </p>

        {/* New Button at last of content */}
        <div className="explore-btn opacity-0 translate-y-[20px] mt-5">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-black bg-white font-display font-medium text-[0.85rem] no-underline px-6 py-2.5 rounded-full border border-white transition-all duration-300 hover:text-primary hover:-translate-y-0.5 hover:shadow-[0_6px_20px_rgba(255,255,255,0.2)] shadow-[0_4px_15px_rgba(255,255,255,0.1)]"
          >
            Explore All Services
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
