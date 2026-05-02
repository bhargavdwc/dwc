import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import CircularGallery from '../ui/CircularGallery'

gsap.registerPlugin(ScrollTrigger)

const clients = [
  { text: 'Ganesh Green', image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=800&auto=format&fit=crop' },
  { text: 'Hello Realty', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop' },
  { text: 'Pride Eco', image: 'https://images.unsplash.com/photo-1501854140801-50d01698950b?q=80&w=800&auto=format&fit=crop' },
  { text: 'Urban Growth Co.', image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=800&auto=format&fit=crop' },
  { text: 'TechStart India', image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop' },
  { text: 'BuildSmart', image: 'https://picsum.photos/seed/build99/800/600?grayscale' },
  { text: 'BrandForce', image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop' },
  { text: 'NovaBiz', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop' },
  { text: 'Apex Solutions', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop' },
  { text: 'Catalyst Agency', image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop' },
  { text: 'IndiaBrands', image: 'https://picsum.photos/seed/india99/800/600?grayscale' },
  { text: 'NextGen Corp', image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop' },
]

export default function ClientLogos() {
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useGSAP(() => {
    // Pinning and Scroll Synchronization
    ScrollTrigger.create({
      trigger: sectionRef.current,
      start: 'top top',
      end: '+=200%', // Scroll for 2 full viewports
      pin: true,
      scrub: true,
      onUpdate: (self) => {
        setScrollProgress(self.progress)
      }
    })
  }, { scope: sectionRef })

  return (
    <section
      ref={sectionRef}
      className="bg-[#020202] h-screen overflow-hidden relative flex flex-col items-center pt-10 lg:pt-14"
      id="clients"
    >
      {/* Immersive Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px] pointer-events-none" />

      {/* Subtle Gradient Overlays */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#020202] to-transparent pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#020202] to-transparent pointer-events-none z-10" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center">
          <span className="font-mono text-primary text-[0.6rem] tracking-[0.4em] uppercase font-bold mb-1 block">
            Our Global Ecosystem
          </span>
          <h2 className="font-display font-bold text-[clamp(1.6rem,4.5vw,2.8rem)] text-white tracking-tight leading-[1.1]">
            Trusted by Industry{' '}
            <span className="bg-brand-gradient bg-clip-text text-transparent">
              Leaders
            </span>
          </h2>
        </div>

        {/* Circular Gallery Container */}
        <div
          ref={containerRef}
          className="relative h-[500px] lg:h-[600px] w-screen left-1/2 -translate-x-1/2 -mt-16 lg:-mt-32"
        >
          <CircularGallery
            items={clients}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.08}
            scrollEase={0.05}
            scrollSpeed={0} // Disable internal scroll listeners to avoid conflict
            externalScroll={scrollProgress}
          />
        </div>

        {/* Dynamic Progress Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-4 opacity-40">
          <div className="w-32 h-[1px] bg-white/10 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 h-full bg-primary transition-transform duration-100 ease-linear"
              style={{ width: '100%', transform: `translateX(${(scrollProgress - 1) * 100}%)` }}
            />
          </div>
          <span className="font-mono text-[0.55rem] text-white uppercase tracking-widest whitespace-nowrap">
            Scroll to Navigate
          </span>
        </div>
      </div>
    </section>
  )
}
