import { useState } from 'react'

const faqs = [
  { q: 'What type of websites do you develop?', a: 'We develop all types of websites including corporate sites, e-commerce platforms, landing pages, portfolios, and custom web applications. We specialize in high-performance, SEO-optimized websites built with modern frameworks like React and Next.js.' },
  { q: 'What type of industries do you serve?', a: 'We serve a wide range of industries including real estate, healthcare, education, e-commerce, hospitality, fintech, manufacturing, and retail. Our diverse experience allows us to craft industry-specific strategies that deliver results.' },
  { q: 'Does paid media marketing have a fixed budget?', a: 'No, paid media budgets are flexible and customized to your goals. We recommend starting with a minimum budget, then scaling based on performance data. Our experts optimize every rupee spent to maximize your return on ad spend (ROAS).' },
  { q: 'How can we grow your business online?', a: 'We use a comprehensive digital ecosystem approach: SEO to build organic visibility, PPC for immediate traffic, social media for community building, and content marketing for thought leadership. Each strategy is data-driven and tailored to your specific business goals.' },
  { q: 'Do you only serve in Ahmedabad?', a: 'While we are based in Ahmedabad, we serve clients across India and internationally. Our digital-first approach means we can work effectively with businesses anywhere in the world, from Mumbai and Delhi to London and Dubai.' },
  { q: 'Does SEO really work?', a: 'Absolutely. SEO is one of the highest-ROI digital marketing channels when done correctly. Our clients typically see 150–400% increases in organic traffic within 6–12 months. SEO builds compounding, long-term value unlike paid advertising.' },
  { q: 'Do you offer ongoing support?', a: 'Yes, all our engagements include ongoing support, monthly reporting, and strategy reviews. We believe in long-term partnerships and provide dedicated account managers who are always available to answer your questions.' },
  { q: 'What is the pricing structure?', a: 'Our pricing is project-based or retainer-based depending on your needs. We offer transparent, tiered pricing starting from ₹15,000/month for basic packages. Custom enterprise solutions are also available. Contact us for a detailed quote.' },
  { q: 'Can I track the progress of my campaigns?', a: 'Absolutely. We provide real-time dashboards, monthly detailed reports, and quarterly strategy reviews. You will have full visibility into all campaign metrics including traffic, conversions, ROI, and keyword rankings.' },
  { q: 'How do I get started with DWC?', a: 'Getting started is simple. Book a free 30-minute consultation call, where our strategist will analyze your current digital presence and propose a customized growth plan. There is no commitment required for the initial consultation.' },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="bg-white py-28">
      <div className="max-w-[900px] mx-auto px-8">
        <div className="text-center mb-16">
          <h2 data-aos="fade-up" className="font-display font-bold text-[clamp(2rem,5vw,3rem)] text-dark tracking-tight mb-4">
            Still Have <span className="gradient-text">Qs?</span>
          </h2>
          <p data-aos="fade-up" data-aos-delay="100" className="text-dark/55 text-lg leading-relaxed">
            Find answers to common questions about our services.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={`${i * 50}`}
              className={`border rounded-2xl overflow-hidden transition-all duration-300 border-l-4
                ${open === i ? 'border-primary/30 bg-primary/2 border-l-primary shadow-sm' : 'border-dark/10 bg-white border-l-transparent hover:border-dark/20'}`}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full px-6 md:px-8 py-6 flex justify-between items-center gap-4 text-left group"
                aria-expanded={open === i}
              >
                <div className="flex items-center gap-4">
                  <span className={`font-mono text-[0.75rem] font-bold min-w-[24px] ${open === i ? 'text-primary' : 'text-dark/35'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-display font-semibold text-[clamp(0.95rem,2vw,1.05rem)] text-dark leading-tight">
                    {faq.q}
                  </span>
                </div>
                <svg
                  className={`w-5 h-5 transition-transform duration-300 shrink-0 ${open === i ? 'rotate-180 text-primary' : 'rotate-0 text-dark/40'}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M6 9l6 6 6-6"/>
                </svg>
              </button>

              <div 
                className={`grid transition-all duration-500 ease-in-out ${open === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
              >
                <div className="overflow-hidden">
                  <p className="px-6 md:px-8 pb-6 pl-14 md:pl-[4.5rem] font-body text-dark/65 leading-relaxed text-[0.95rem]">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
