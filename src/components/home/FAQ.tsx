import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const faqs = [
  {
    q: 'What type of websites do you develop?',
    a: 'We develop all types of websites including corporate sites, e-commerce platforms, landing pages, portfolios, and custom web applications. We specialize in high-performance, SEO-optimized websites built with modern frameworks like React and Next.js.',
  },
  {
    q: 'What type of industries do you serve?',
    a: 'We serve a wide range of industries including real estate, healthcare, education, e-commerce, hospitality, fintech, manufacturing, and retail. Our diverse experience allows us to craft industry-specific strategies that deliver results.',
  },
  {
    q: 'Does paid media marketing have a fixed budget?',
    a: 'No, paid media budgets are flexible and customized to your goals. We recommend starting with a minimum budget, then scaling based on performance data. Our experts optimize every rupee spent to maximize your return on ad spend (ROAS).',
  },
  {
    q: 'How can we grow your business online?',
    a: 'We use a comprehensive digital ecosystem approach: SEO to build organic visibility, PPC for immediate traffic, social media for community building, and content marketing for thought leadership. Each strategy is data-driven and tailored to your specific business goals.',
  },
  {
    q: 'Do you only serve in Ahmedabad?',
    a: 'While we are based in Ahmedabad, we serve clients across India and internationally. Our digital-first approach means we can work effectively with businesses anywhere in the world, from Mumbai and Delhi to London and Dubai.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpen((prev) => (prev === index ? null : index))
  }

  return (
    <section className="bg-[#020303] py-20 sm:py-24">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        
        {/* text - start */}
        <div className="mb-10 md:mb-16">
          <h2
            data-aos="fade-up"
            className="mb-4 text-center font-display text-[clamp(2rem,5vw,3rem)] font-bold text-white md:mb-6 tracking-tight"
          >
            Still Have <span className="gradient-text">Qs?</span>
          </h2>

          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="mx-auto max-w-screen-md text-center text-white/60 md:text-lg"
          >
            Find answers to common questions about our services.
          </p>
        </div>
        {/* text - end */}

        <div className="mx-auto flex max-w-[860px] flex-col border-t border-white/10">
          {faqs.map((faq, i) => {
            const isOpen = open === i

            return (
              <div 
                key={i} 
                className="border-b border-white/10" 
                data-aos="fade-up" 
                data-aos-delay={`${i * 60}`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(i)}
                  aria-expanded={isOpen}
                  className={`w-full flex cursor-pointer justify-between items-center gap-4 py-5 transition duration-200 ${
                    isOpen ? 'text-primary' : 'text-white hover:text-primary active:text-primary'
                  }`}
                >
                  <span className="font-display font-semibold transition duration-100 md:text-lg text-left">
                    {faq.q}
                  </span>

                  <span className={`text-primary transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.35,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="overflow-hidden"
                    >
                      <p className="mb-6 text-white/55 font-body md:text-[0.95rem] leading-relaxed pr-8">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}