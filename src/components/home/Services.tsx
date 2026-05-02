import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import ScrollStack, { ScrollStackItem } from '../ui/ScrollStack'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
    title: 'Social Media Marketing',
    description: 'We create data-driven social media strategies that boost engagement, build brand awareness, and drive meaningful connections with your audience.',
    path: '/services/social-media-marketing',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" />
      </svg>
    ),
    title: 'Website Development',
    description: 'Our expert team designs and develops high-performance websites that are visually stunning, user-friendly, and optimized for maximum conversions.',
    path: '/services',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
    ),
    title: 'Paid Media Marketing',
    description: 'Real results through strategic paid marketing campaigns that boost visibility, generate quality leads, and maximize your ROI.',
    path: '/services/pay-per-click-ppc',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" />
      </svg>
    ),
    title: 'Search Engine Optimization',
    description: 'We craft personalized SEO campaigns that enhance customer relationships, increase engagement, and drive conversions through funnel.',
    path: '/services/search-engine-optimization',
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    title: 'Graphic Design And Video Editing',
    description: 'Craft eye-catching designs and engaging videos that elevate your brand and make every visual truly unforgettable.',
    path: '/services',
  }
]

export default function Services() {
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    // GSAP animation temporarily removed to ensure visibility
  }, [])


  return (
    <section ref={sectionRef} className="bg-[#020303] py-24 relative">
      <div className="max-w-[1400px] mx-auto px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start">
          
          {/* Left Side: Sticky Text */}
          <div className="lg:sticky lg:top-32 lg:pb-32 space-y-6">
            <div data-aos="fade-right" className="inline-block font-mono text-[0.72rem] tracking-[0.2em] uppercase text-primary bg-primary/8 border border-primary/25 rounded-full px-4 py-1.5 mb-2">
              What We Offer
            </div>
            <h2 data-aos="fade-right" className="font-display font-bold text-[clamp(2rem,4vw,3.2rem)] text-white tracking-tight leading-[1.1]">
              Our Comprehensive{' '}
              <span className="gradient-text block mt-2">Digital Marketing</span>{' '}
              Services in Ahmedabad
            </h2>
            <p data-aos="fade-left" className="text-white/80 max-w-[500px] leading-relaxed text-[1.05rem] pt-4">
              Every business is unique, and your marketing strategy should reflect that. As a leading Digital Marketing Agency in Ahmedabad, we design customised solutions tailored to your goals, target audience, and industry.
            </p>
          </div>
          
          {/* Right Side: Scroll Stack Cards */}
          <div className="relative pt-10 lg:pt-0">
            <ScrollStack 
              useWindowScroll={true} 
              itemDistance={20} 
              itemScale={0.03} 
              itemStackDistance={40}
              blurAmount={1}
              rotationAmount={0}
              baseScale={0.9}
            >
              {services.map((service, i) => (
                <ScrollStackItem key={i}>
                  <div className="flex flex-col h-full group">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 mb-6 border border-primary/25 bg-primary/12 text-primary group-hover:bg-brand-gradient group-hover:text-white shadow-lg">
                      {service.icon}
                    </div>
                    <h3 className="font-display font-bold text-[1.4rem] text-dark mb-3 leading-snug">
                      {service.title}
                    </h3>
                    <p className="font-body text-[0.95rem] text-dark/70 leading-relaxed mb-6">
                      {service.description}
                    </p>
                    <Link
                      to={service.path}
                      className="mt-auto inline-flex items-center gap-2 font-display font-bold text-[0.9rem] text-primary group-hover:text-cyan transition-all duration-300"
                    >
                      Learn More
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </Link>
                  </div>
                </ScrollStackItem>
              ))}
            </ScrollStack>
          </div>

        </div>

      </div>
    </section>
  )
}

