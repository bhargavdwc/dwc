import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import MagicBento from '../ui/MagicBento'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { number: 90, suffix: '+', label: 'Accounts Boosted', desc: 'Significant increase in engagement and audience reach across all major platforms.' },
  { number: 73, suffix: '+', label: 'Accounts Optimized', desc: 'Data-driven profile and content enhancements for maximum conversion rates.' },
  { number: 500, suffix: '+', label: 'Accounts Grown', desc: 'Sustained, organic follower and community growth achieved through highly targeted content strategies, viral loops, and active community management. We focus on building authentic, highly engaged audiences that translate directly into measurable brand loyalty and long-term customer retention.', isHighlight: true },
  { number: 50, suffix: '+', label: 'Accounts Promoted', desc: 'High-performance, multi-channel ad campaigns delivering exceptional return on ad spend through precision targeting and A/B tested creatives. We continuously optimize your ad spend across platforms to ensure every marketing dollar drives maximum visibility and profitable conversions.', isHighlight: true },
  { number: 40, suffix: '', label: 'Projects Delivered', desc: 'Successful end-to-end digital marketing solutions implemented globally.' },
  { number: 8, suffix: '+', label: 'Years Experience', desc: 'Deep industry expertise and a proven track record of scaling businesses.' },
]

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null)
  const countersRef = useRef<HTMLSpanElement[]>([])

  useEffect(() => {
    countersRef.current.forEach((el, i) => {
      if (!el) return
      const target = stats[i].number
      gsap.to(el, {
        innerText: target,
        duration: 2,
        ease: 'power1.out',
        snap: { innerText: 1 },
        scrollTrigger: { trigger: el, start: 'top 85%' }
      })
    })
  }, [])

  const bentoItems = stats.map((stat, i) => ({
    title: (
      <div className={`font-display font-bold text-white leading-none flex items-baseline ${stat.isHighlight ? 'text-[clamp(2.5rem,5vw,4rem)]' : 'text-[clamp(1.5rem,3.5vw,2.5rem)]'}`}>
        <span ref={el => { if (el) countersRef.current[i] = el }}>0</span>
        <span className="text-primary ml-1 text-[0.6em]">{stat.suffix}</span>
      </div>
    ),
    label: (
      <span className="text-primary font-mono text-[0.55rem] tracking-[0.2em] uppercase font-semibold">
        {stat.label}
      </span>
    ),
    description: (
      <span className={`text-white/60 leading-relaxed block mt-2 max-w-[95%] ${stat.isHighlight ? 'text-[0.95rem] md:text-[1rem]' : 'text-[0.75rem]'}`}>
        {stat.desc}
      </span>
    ),
    color: '#120F17' // Matched exact background from original MagicBento instructions
  }));

  return (
    <section
      ref={sectionRef}
      className="bg-[#020303] py-28 relative overflow-hidden"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#020303] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            data-aos="fade-down"
            className="font-mono text-[0.72rem] tracking-[0.2em] uppercase text-primary mb-4"
          >
            8+ Years of Marketing Experience
          </div>
          <h2
            data-aos="fade-up"
            className="font-display font-bold text-[clamp(1.8rem,4vw,2.8rem)] text-white tracking-tight mb-4 leading-tight"
          >
            Growth with Every Click
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-white/50 max-w-7xl mx-auto leading-relaxed"
          >
            Our work is driven by a strong set of principles — data, creativity, and relentless focus on your results.
          </p>
        </div>

        {/* Magic Bento Grid */}
        <div className="mb-20 flex justify-center no-splash">
          <MagicBento 
            items={bentoItems} 
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={true}
            clickEffect={true}
            glowColor="132, 0, 255"
            textAutoHide={true}
          />
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/services"
            data-cursor="button"
            className="inline-flex items-center gap-2 bg-primary text-white font-display font-semibold px-8 py-3.5 rounded-full no-underline transition-all duration-300 hover:scale-105 shadow-[0_10px_30px_rgba(13,94,246,0.2)]"
          >
            See Plans
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
