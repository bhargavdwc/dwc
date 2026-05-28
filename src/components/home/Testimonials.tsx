import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const testimonials = [
  {
    quote: "Digital Web Connection transformed our online presence completely. Our organic traffic grew by 340% in just 6 months and conversions reached an all-time high.",
    name: 'Neha Gupta',
    title: 'Head of Growth',
    company: 'TechBridge Solutions',
  },
  {
    quote: "The PPC campaigns DWC ran for us delivered an outstanding 5.8x return on ad spend. Their precise audience targeting and continuous optimization were absolute game-changers.",
    name: 'Vikram Malhotra',
    title: 'Managing Director',
    company: 'Apex Retail Group',
  },
  {
    quote: "Flawless brand strategy and creative execution. DWC grew our social media engagement by over 280% and successfully built a highly active community of brand advocates.",
    name: 'Priya Sharma',
    title: 'VP of Marketing',
    company: 'Luminary Co.',
  },
  {
    quote: "Their team brought a level of technical SEO expertise and analytics-driven insight that we couldn't find anywhere else. The organic growth has been phenomenal and highly sustainable.",
    name: 'Arjun Sen',
    title: 'Founder & CEO',
    company: 'NexaHealth',
  }
]

// 12 high-resolution portrait headshot images from Unsplash
const reviewerImages = [
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=400&fit=crop&q=80', // Man, dark shirt
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=400&fit=crop&q=80', // Woman, smiling
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&q=80', // Man, white shirt
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=400&fit=crop&q=80', // Man, black shirt
  'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=400&fit=crop&q=80', // Man, glasses
  'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=400&fit=crop&q=80', // Man, green/blue shirt
  'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=400&fit=crop&q=80', // Woman, suit
  'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=400&fit=crop&q=80', // Woman, light blue shirt
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=400&fit=crop&q=80', // Woman, beige blazer
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=400&fit=crop&q=80', // Woman, beige top
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=400&fit=crop&q=80', // Woman, smiling duplicate
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&q=80'  // Man, duplicate
]

function ImageCard({ src, aspect, tilted }: { src: string; aspect: string; tilted?: boolean }) {
  return (
    <div
      className={`relative w-full ${aspect} rounded-2xl overflow-hidden border border-white/10 shadow-sm transition-all duration-500 ease-out hover:scale-105 hover:shadow-xl hover:z-20 cursor-pointer ${
        tilted ? 'rotate-[-3deg] hover:rotate-0' : 'hover:-translate-y-1.5'
      }`}
    >
      <img src={src} alt="Trusted client portrait" className="w-full h-full object-cover" loading="lazy" />
    </div>
  )
}

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const next = () => setActive((prevIdx) => (prevIdx + 1) % testimonials.length)
  const prev = () => setActive((prevIdx) => (prevIdx - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prevIdx) => (prevIdx + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="testimonials-section" className="relative py-20 bg-black overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 relative flex flex-col items-center">


        {/* ── UPPER IMAGE GRID collaged as an Arch (Desktop View) ────────────────── */}
        <div className="hidden lg:grid grid-cols-9 gap-4 w-full max-w-[1240px] relative z-10 mb-8 select-none">
          
          {/* Column 1 */}
          <div className="flex flex-col gap-4 translate-y-[20px]">
            <ImageCard src={reviewerImages[10]} aspect="aspect-[5/4]" />
            <ImageCard src={reviewerImages[0]} aspect="aspect-[3/4]" />
            <ImageCard src={reviewerImages[1]} aspect="aspect-[3/4]" />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4 translate-y-[-45px]">
            <ImageCard src={reviewerImages[2]} aspect="aspect-[3/4]" />
            <ImageCard src={reviewerImages[3]} aspect="aspect-[3/4]" />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4 translate-y-[70px]">
            <ImageCard src={reviewerImages[4]} aspect="aspect-[3/4]" />
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-4 translate-y-[-20px]">
            <ImageCard src={reviewerImages[5]} aspect="aspect-[3/4]" />
          </div>

          {/* Column 5 */}
          <div className="flex flex-col gap-4 translate-y-[-55px]">
            <ImageCard src={reviewerImages[6]} aspect="aspect-[3/4]" />
          </div>

          {/* Column 6 */}
          <div className="flex flex-col gap-4 translate-y-[-20px]">
            <ImageCard src={reviewerImages[7]} aspect="aspect-[3/4]" />
          </div>

          {/* Column 7 */}
          <div className="flex flex-col gap-4 translate-y-[65px]">
            <ImageCard src={reviewerImages[8]} aspect="aspect-[3/4]" />
          </div>

          {/* Column 8 */}
          <div className="flex flex-col gap-4 translate-y-[-40px]">
            <ImageCard src={reviewerImages[9]} aspect="aspect-[3/4]" />
            <ImageCard src={reviewerImages[10]} aspect="aspect-[4/3]" tilted={true} />
          </div>

          {/* Column 9 */}
          <div className="flex flex-col gap-4 translate-y-[25px]">
            <ImageCard src={reviewerImages[11]} aspect="aspect-[3/4]" />
            <ImageCard src={reviewerImages[1]} aspect="aspect-[3/4]" />
          </div>

        </div>

        {/* ── RESPONSIVE IMAGE GRID (Tablet & Mobile View) ────────────────── */}
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4 w-full lg:hidden relative z-10 mb-10 select-none px-2">
          {/* Col 1 */}
          <div className="flex flex-col gap-4 translate-y-[10px]">
            <ImageCard src={reviewerImages[0]} aspect="aspect-[3/4]" />
            <ImageCard src={reviewerImages[1]} aspect="aspect-[3/4]" />
          </div>
          {/* Col 2 */}
          <div className="flex flex-col gap-4 translate-y-[-20px]">
            <ImageCard src={reviewerImages[2]} aspect="aspect-[3/4]" />
            <ImageCard src={reviewerImages[3]} aspect="aspect-[3/4]" />
          </div>
          {/* Col 3 (Center) */}
          <div className="flex flex-col gap-4 translate-y-[25px]">
            <ImageCard src={reviewerImages[5]} aspect="aspect-[3/4]" />
          </div>
          {/* Col 4 (Tablet Only) */}
          <div className="hidden md:flex flex-col gap-4 translate-y-[-20px]">
            <ImageCard src={reviewerImages[7]} aspect="aspect-[3/4]" />
          </div>
          {/* Col 5 (Tablet Only) */}
          <div className="hidden md:flex flex-col gap-4 translate-y-[10px]">
            <ImageCard src={reviewerImages[8]} aspect="aspect-[3/4]" />
            <ImageCard src={reviewerImages[9]} aspect="aspect-[3/4]" />
          </div>
        </div>

        {/* ── CENTER CONTENT ZONE (Nested in the bottom arch, pulled UP) ────────────────── */}
        <div className="relative z-10 w-full max-w-2xl text-center flex flex-col items-center mt-[-120px] md:mt-[-220px] lg:mt-[-320px] px-6">
          
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-zinc-900/50 text-[11px] font-display font-semibold text-zinc-400 tracking-wider uppercase mb-6 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            Testimonials
          </div>

          {/* Core Headings */}
          <h2 className="font-display font-bold text-3xl md:text-5xl text-white leading-tight tracking-tight mb-2">
            Trusted by leaders
          </h2>
         {/* Subtext */}
          <p className="font-body text-zinc-400 text-sm md:text-base leading-relaxed max-w-lg mb-8">
            Learn why professionals trust our solutions to complete their customer journeys.
          </p>

          {/* Testimonial Active Quotes Carousel */}
          <div className="relative w-full min-h-[140px] flex flex-col justify-center items-center px-4 mb-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="text-center"
              >
                <p className="font-body text-zinc-200 text-base md:text-lg font-medium leading-relaxed italic max-w-xl mx-auto mb-4">
                  "{testimonials[active].quote}"
                </p>
                <p className="font-display text-white font-bold text-sm tracking-wide">
                  {testimonials[active].name}
                </p>
                <p className="font-body text-zinc-500 text-xs mt-0.5">
                  {testimonials[active].title} &middot; {testimonials[active].company}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots & Navigation Arrows Row */}
          <div className="flex gap-4 items-center mb-8 relative z-20">
            {/* Prev Button */}
            <button
              onClick={prev}
              aria-label="Previous Testimonial"
              className="w-8 h-8 rounded-full border border-white/10 bg-zinc-900/50 hover:bg-zinc-800 text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 18l-6-6 6-6"
                />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2 items-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    i === active ? 'w-6 bg-white' : 'w-1.5 bg-zinc-700 hover:bg-zinc-600'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={next}
              aria-label="Next Testimonial"
              className="w-8 h-8 rounded-full border border-white/10 bg-zinc-900/50 hover:bg-zinc-800 text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                <path
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 18l6-6-6-6"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

