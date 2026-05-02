import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    quote: "Digital Web Connection transformed our online presence completely. Our organic traffic grew by 340% in just 6 months. The team's strategic approach to SEO and content marketing exceeded all our expectations.",
    name: 'Neha Gupta',
    title: 'Product Manager',
    company: 'TechBridge India',
    image: 'https://i.pravatar.cc/150?img=12',
  },
  {
    quote: "The PPC campaigns DWC ran for us delivered a 5x return on ad spend. Their data-driven approach and transparent reporting made all the difference. We now consider them an extension of our own team.",
    name: 'Karan Patel',
    title: 'CEO',
    company: 'UrbanCo',
    image: 'https://i.pravatar.cc/150?img=11',
  },
  {
    quote: "From social media strategy to creative design, DWC handles everything flawlessly. Their creativity and dedication are unmatched. Our brand engagement increased by 280% across all channels.",
    name: 'Priya Sharma',
    title: 'Marketing Director',
    company: 'GrowFast Solutions',
    image: 'https://i.pravatar.cc/150?img=5',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)
  const [isHovered, setIsHovered] = useState(false)

  // Autoplay functionality
  useEffect(() => {
    if (isHovered) return;
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isHovered]);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () => setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="relative py-8 overflow-hidden bg-[#020303]">
      <style>{`
        .octogon-clip {
          clip-path: polygon(50% 0%, 82% 18%, 100% 50%, 82% 82%, 50% 100%, 18% 82%, 0% 50%, 18% 18%);
        }
      `}</style>

      <div className="max-w-[1200px] mx-auto px-8 relative z-10">
        
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="font-display font-bold text-[clamp(2rem,4vw,3rem)] text-white tracking-tight">
            Client <span className="bg-brand-gradient bg-clip-text text-transparent italic font-serif">Stories</span>
          </h2>
        </div>

        <div 
          className="relative max-w-[800px] mx-auto min-h-[300px] cursor-grab active:cursor-grabbing"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Navigation Arrows */}
          <button 
            onClick={prev}
            className="absolute left-[-20px] md:left-[-60px] top-1/2 -translate-y-1/2 text-cyan/40 hover:text-cyan transition-colors z-20 hover:scale-110"
            aria-label="Previous Testimonial"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M15 18l-6-6 6-6"/></svg>
          </button>
          
          <button 
            onClick={next}
            className="absolute right-[-20px] md:right-[-60px] top-1/2 -translate-y-1/2 text-cyan/40 hover:text-cyan transition-colors z-20 hover:scale-110"
            aria-label="Next Testimonial"
          >
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" d="M9 18l6-6-6-6"/></svg>
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-16 relative"
            >
              {/* Portrait Octagon */}
              <div className="w-[140px] h-[140px] shrink-0 octogon-clip bg-brand-gradient p-1 shadow-[0_0_30px_rgba(4,185,202,0.3)]">
                <img 
                  src={testimonials[active].image} 
                  alt={testimonials[active].name} 
                  className="w-full h-full object-cover octogon-clip" 
                />
              </div>

              {/* Quote */}
              <div className="relative pt-8 md:pt-4 flex-1 text-center md:text-left">
                {/* Giant Quote Mark */}
                <div className="absolute -top-12 left-1/2 -translate-x-1/2 md:translate-x-0 md:-left-8 text-[7.5em] font-bold text-cyan/20 leading-none font-serif z-0 select-none pointer-events-none drop-shadow-[0_0_15px_rgba(4,185,202,0.2)]">
                  &ldquo;
                </div>
                
                <blockquote className="relative z-10 text-white italic text-[20px] md:text-[22px] leading-relaxed font-body">
                  <p className="mb-8 font-light tracking-wide">{testimonials[active].quote}</p>
                  <cite className="block text-[14px] not-italic text-white/70 border-l-[3px] border-cyan/40 pl-4 text-left mx-auto md:mx-0 w-max">
                    <span className="text-[17px] uppercase tracking-widest bg-brand-gradient bg-clip-text text-transparent font-extrabold block mb-1">
                      {testimonials[active].name}
                    </span>
                    <span className="text-white/90 font-medium">{testimonials[active].title}</span>
                    <br />
                    {testimonials[active].company}
                  </cite>
                </blockquote>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/60'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  )
}
