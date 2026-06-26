import { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
import ChromaGrid from './ChromaGrid'
import './ChromaGrid.css'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  {
    number: 90,
    suffix: '+',
    label: 'Accounts Boosted',
    shortDesc: 'Engagement & audience reach across all major platforms.',
    borderColor: '#4F46E5',
    gradient: 'linear-gradient(145deg, #1e1b4b 0%, #0f0d18 100%)',
  },
  {
    number: 73,
    suffix: '+',
    label: 'Accounts Optimized',
    shortDesc: 'Data-driven profile & content enhancements for max conversions.',
    borderColor: '#10B981',
    gradient: 'linear-gradient(145deg, #064e3b 0%, #0f0d18 100%)',
  },
  {
    number: 500,
    suffix: '+',
    label: 'Accounts Grown',
    shortDesc: 'Sustained organic follower growth through targeted content strategies.',
    borderColor: '#3B82F6',
    gradient: 'linear-gradient(145deg, #1e3a8a 0%, #0f0d18 100%)',
  },
  {
    number: 50,
    suffix: '+',
    label: 'Accounts Promoted',
    shortDesc: 'High-performance, multi-channel ad campaigns with exceptional ROAS.',
    borderColor: '#F59E0B',
    gradient: 'linear-gradient(145deg, #78350f 0%, #0f0d18 100%)',
  },
  {
    number: 40,
    suffix: '',
    label: 'Projects Delivered',
    shortDesc: 'End-to-end digital marketing solutions implemented globally.',
    borderColor: '#8B5CF6',
    gradient: 'linear-gradient(145deg, #3b0764 0%, #0f0d18 100%)',
  },
  {
    number: 8,
    suffix: '+',
    label: 'Years Experience',
    shortDesc: 'Proven track record of scaling businesses across industries.',
    borderColor: '#EF4444',
    gradient: 'linear-gradient(145deg, #7f1d1d 0%, #0f0d18 100%)',
  },
]

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null)

  const chromaItems = stats.map((stat) => ({
    number: stat.number,
    suffix: stat.suffix,
    title: stat.label,
    subtitle: stat.shortDesc,
    borderColor: stat.borderColor,
    gradient: stat.gradient,
    url: '',
  }))

  return (
    <section
      ref={sectionRef}
      className="bg-[#020303] md:py-12 relative overflow-hidden"
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            style={{
              background: 'linear-gradient(145deg, #4F46E5, #000)',
              borderRadius: '16px',
              padding: '2rem',
              color: '#fff',
              textAlign: 'center',
            }}
            data-aos="fade-up"
          >
            <h2 className="font-display font-bold text-[clamp(1.8rem,4vw,2.8rem)] mb-4">
              8+ Years of Marketing Experience
            </h2>
            <p className="text-white/80 mb-2">
              Growth with Every Click
            </p>
            <p className="text-white/60 max-w-2xl mx-auto">
              Our work is driven by a strong set of principles — data, creativity,
              and relentless focus on your results.
            </p>
          </div>
        </div>

        {/* ChromaGrid */}
        <div className="no-splash" style={{ minHeight: '500px', position: 'relative' }}>
          <ChromaGrid
            items={chromaItems}
            radius={300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            data-cursor="button"
            className="inline-flex items-center gap-2 bg-primary text-white font-display font-semibold px-8 py-3 rounded-full no-underline transition-all duration-300 hover:scale-105 shadow-[0_10px_30px_rgba(13,94,246,0.2)]"
          >
            See Plans
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
