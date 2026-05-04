import { useState } from 'react'

const faqs = [
  { q: 'What type of websites do you develop?', a: 'We develop all types of websites including corporate sites, e-commerce platforms, landing pages, portfolios, and custom web applications. We specialize in high-performance, SEO-optimized websites built with modern frameworks like React and Next.js.' },
  { q: 'What type of industries do you serve?', a: 'We serve a wide range of industries including real estate, healthcare, education, e-commerce, hospitality, fintech, manufacturing, and retail. Our diverse experience allows us to craft industry-specific strategies that deliver results.' },
  { q: 'Does paid media marketing have a fixed budget?', a: 'No, paid media budgets are flexible and customized to your goals. We recommend starting with a minimum budget, then scaling based on performance data. Our experts optimize every rupee spent to maximize your return on ad spend (ROAS).' },
  { q: 'How can we grow your business online?', a: 'We use a comprehensive digital ecosystem approach: SEO to build organic visibility, PPC for immediate traffic, social media for community building, and content marketing for thought leadership. Each strategy is data-driven and tailored to your specific business goals.' },
  { q: 'Do you only serve in Ahmedabad?', a: 'While we are based in Ahmedabad, we serve clients across India and internationally. Our digital-first approach means we can work effectively with businesses anywhere in the world, from Mumbai and Delhi to London and Dubai.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="bg-[#020303] py-20">
      <div className="max-w-[860px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2
            data-aos="fade-up"
            className="font-display font-bold text-[clamp(2rem,5vw,3rem)] text-white tracking-tight mb-4"
          >
            Still Have <span className="gradient-text">Qs?</span>
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-white/60 text-lg leading-relaxed"
          >
            Find answers to common questions about our services.
          </p>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={`${i * 60}`}
                onClick={() => setOpen(isOpen ? null : i)}
                className={`
                  relative rounded-2xl cursor-pointer select-none
                  border transition-all duration-400 overflow-hidden
                  ${isOpen
                    ? 'border-white/10 bg-white/5'
                    : 'border-white/5 bg-white/[0.03] hover:bg-white/[0.06] hover:border-white/10'
                  }
                `}
              >
                {/* Left accent bar */}
                <div
                  className={`
                    absolute left-0 top-0 bottom-0 w-[3px] rounded-l-2xl transition-all duration-400
                    ${isOpen ? 'bg-gradient-to-b from-primary via-primary/70 to-transparent opacity-100' : 'opacity-0'}
                  `}
                />

                {/* Header row */}
                <div className="flex items-center gap-5 px-6 py-5">
                  {/* Number badge */}
                  <span
                    className={`
                      font-mono text-xs font-bold shrink-0 w-7 h-7 rounded-full flex items-center justify-center
                      transition-all duration-300
                      ${isOpen
                        ? 'bg-primary/20 text-primary'
                        : 'bg-white/5 text-white/25'
                      }
                    `}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>

                  {/* Question */}
                  <span
                    className={`
                      flex-1 font-display font-semibold text-[clamp(0.92rem,2vw,1.05rem)] leading-snug
                      transition-colors duration-300
                      ${isOpen ? 'text-white' : 'text-white/70'}
                    `}
                  >
                    {faq.q}
                  </span>

                  {/* Arrow circle button */}
                  <div
                    className={`
                      shrink-0 w-9 h-9 rounded-full flex items-center justify-center
                      border transition-all duration-300
                      ${isOpen
                        ? 'border-primary/50 bg-primary/15 text-primary'
                        : 'border-white/10 bg-white/5 text-white/40'
                      }
                    `}
                  >
                    <svg
                      className={`w-4 h-4 transition-transform duration-400 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M6 9l6 6 6-6" />
                    </svg>
                  </div>
                </div>

                {/* Answer — animated expand */}
                <div
                  className={`
                    grid transition-all duration-500 ease-in-out
                    ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}
                  `}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 pl-[4.5rem] text-white/55 font-body text-[0.93rem] leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
