import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollReveal from '../ui/ScrollReveal'

export default function AboutSnippet() {
  const sectionRef = useRef<HTMLElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)

  useGSAP(() => {
    // Smooth background glow pulse
    gsap.to(glowRef.current, {
      scale: 1.2,
      opacity: 0.2,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut'
    })

    // Stats counting animation
    const stats = [8, 500, 100];
    const countElements = document.querySelectorAll('.stat-item .count');
    
    countElements.forEach((el, i) => {
      gsap.to(el, {
        innerText: stats[i],
        duration: 2,
        snap: { innerText: 1 },
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
        }
      });
    });

    // Magnetic Button Effect
    const magneticBtn = document.querySelector('.magnetic-button');
    if (magneticBtn) {
      magneticBtn.addEventListener('mousemove', (e: any) => {
        const { left, top, width, height } = magneticBtn.getBoundingClientRect();
        const x = e.clientX - (left + width / 2);
        const y = e.clientY - (top + height / 2);
        
        gsap.to(magneticBtn, {
          x: x * 0.3,
          y: y * 0.3,
          duration: 0.4,
          ease: 'power2.out'
        });
      });

      magneticBtn.addEventListener('mouseleave', () => {
        gsap.to(magneticBtn, {
          x: 0,
          y: 0,
          duration: 0.6,
          ease: 'elastic.out(1, 0.3)'
        });
      });
    }
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#020202] py-12 lg:py-20 overflow-hidden flex flex-col items-center"
      id="about-snippet"
    >
      {/* Immersive Background Glows */}
      <div 
        ref={glowRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" 
      />
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '64px 64px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center">

        {/* Subtle Tagline */}
        <div className="mb-12">
          <span className="font-mono text-primary text-[0.65rem] tracking-[0.4em] uppercase font-bold border border-primary/20 px-6 py-2 rounded-full bg-primary/5">
            The Agency Philosophy
          </span>
        </div>

        {/* Main Immersive Heading */}
        <div className="max-w-[1000px] text-center mb-12 lg:mb-16">
          <ScrollReveal
            baseOpacity={0}
            enableBlur={true}
            baseRotation={2}
            blurStrength={12}
            containerClassName="w-full"
            textClassName="font-display font-bold text-white leading-[1.1] tracking-tight text-[clamp(2rem,5.5vw,4.2rem)]"
          >
            Leading Branding and Advertising Agency in Ahmedabad.
          </ScrollReveal>
        </div>

        {/* Secondary Description */}
        <div className="max-w-7xl text-center mb-16 lg:mb-24">
          <ScrollReveal
            baseOpacity={0.1}
            enableBlur={true}
            baseRotation={0}
            blurStrength={8}
            containerClassName="w-full"
            textClassName="font-body text-white/60 text-sm lg:text-base leading-relaxed"
          >
            Your brand deserves a digital presence that works as hard as you do. At Digital Web Connection, we go beyond basic marketing — we create strategies that help businesses across India stand out, attract the right audience, and drive measurable results.
          </ScrollReveal>
        </div>

        {/* Dynamic Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-20 w-full max-w-5xl mb-20 items-center">
          <div className="flex flex-col items-center group stat-item">
            <span className="text-primary font-display font-black text-4xl lg:text-6xl mb-3 transition-transform duration-500 group-hover:scale-110">
              <span className="count">0</span>+
            </span>
            <span className="text-white/30 font-mono text-[0.6rem] uppercase tracking-[0.25em] text-center">Years of Mastery</span>
          </div>

          <div className="flex flex-col items-center group stat-item border-y md:border-y-0 md:border-x border-white/5 py-8 md:py-0 md:px-12">
            <span className="text-white font-display font-black text-4xl lg:text-6xl mb-3 transition-transform duration-500 group-hover:scale-110">
              <span className="count">0</span>+
            </span>
            <span className="text-white/30 font-mono text-[0.6rem] uppercase tracking-[0.25em] text-center">Projects Delivered</span>
          </div>

          <div className="flex flex-col items-center group stat-item">
            <span className="text-primary font-display font-black text-4xl lg:text-6xl mb-3 transition-transform duration-500 group-hover:scale-110">
              <span className="count">0</span>%
            </span>
            <span className="text-white/30 font-mono text-[0.6rem] uppercase tracking-[0.25em] text-center">Satisfaction</span>
          </div>
        </div>

        {/* Enhanced Call to Action */}
        <div className="relative group mt-4 magnetic-button">
          <div className="absolute inset-0 bg-primary/20 blur-2xl group-hover:blur-3xl transition-all duration-500 rounded-full scale-110 opacity-0 group-hover:opacity-100" />
          <Link
            to="/about"
            className="group relative inline-flex items-center gap-5 px-10 py-5 bg-white text-black rounded-full font-display font-bold text-lg hover:bg-primary transition-all duration-500 shadow-[0_0_40px_rgba(255,255,255,0.05)] overflow-hidden"
          >
            <span className="relative z-10 tracking-wide">The DWC Story</span>
            <div className="relative z-10 w-10 h-10 rounded-full bg-black flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-45">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </div>
          </Link>
        </div>

      </div>
    </section>
  )
}
