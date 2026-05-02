import { useState } from 'react'

const testimonials = [
  {
    quote: "Digital Web Connection transformed our online presence completely. Our organic traffic grew by 340% in just 6 months. The team's strategic approach to SEO and content marketing exceeded all our expectations.",
    name: 'Neha Gupta',
    title: 'Product Manager',
    company: 'TechBridge India',
    initials: 'NG',
    color: '#0D5EF6',
  },
  {
    quote: "The PPC campaigns DWC ran for us delivered a 5x return on ad spend. Their data-driven approach and transparent reporting made all the difference. We now consider them an extension of our own team.",
    name: 'Karan Patel',
    title: 'CEO',
    company: 'UrbanCo',
    initials: 'KP',
    color: '#04B9CA',
  },
  {
    quote: "From social media strategy to creative design, DWC handles everything flawlessly. Their creativity and dedication are unmatched. Our brand engagement increased by 280% across all channels.",
    name: 'Priya Sharma',
    title: 'Marketing Director',
    company: 'GrowFast Solutions',
    initials: 'PS',
    color: '#7C3AED',
  },
]

export default function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section className="bg-white py-28">
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div data-aos="fade-down" className="inline-block font-mono text-[0.72rem] tracking-[0.2em] uppercase text-primary bg-primary/8 border border-primary/20 rounded-full px-4 py-1.5 mb-5">
            What Our Clients Say
          </div>
          <h2 data-aos="fade-up" className="font-display font-bold text-[clamp(1.8rem,4vw,2.5rem)] text-dark tracking-tight">
            Client <span className="bg-brand-gradient bg-clip-text text-transparent">Success Stories</span>
          </h2>
        </div>

        {/* Active card */}
        <div data-aos="fade-up" className="max-w-[800px] mx-auto text-center mb-12">
          <div className="bg-gradient-to-br from-[#f8f9ff] to-white border border-primary/12 rounded-[24px] p-8 md:p-12 shadow-[0_20px_60px_rgba(13,94,246,0.08)] transition-all duration-500">
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-amber-500 fill-current" viewBox="0 0 24 24">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              ))}
            </div>

            {/* Quote */}
            <p className="font-body text-[clamp(1rem,2vw,1.2rem)] text-dark/75 leading-relaxed italic mb-8 relative">
              <span className="font-display text-[4rem] text-primary/30 leading-none align-[-0.5em] mr-1">"</span>
              {testimonials[active].quote}
            </p>

            {/* Client */}
            <div className="flex items-center justify-center gap-4">
              <div 
                className="w-[52px] h-[52px] rounded-full flex items-center justify-center text-dark font-display font-bold text-lg border-[3px] border-dark"
                style={{ background: `linear-gradient(135deg, ${testimonials[active].color}, #04B9CA)` }}
              >
                {testimonials[active].initials}
              </div>
              <div className="text-left">
                <div className="font-display font-bold text-dark text-base">{testimonials[active].name}</div>
                <div className="font-body text-[0.85rem] text-dark/50">{testimonials[active].title} — {testimonials[active].company}</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-3">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${i === active ? 'w-8 bg-brand-gradient' : 'w-2.5 bg-primary/20'}`}
              aria-label={`Testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Thumbnail cards */}
        <div className="flex gap-6 justify-center mt-10 flex-wrap">
          {testimonials.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`flex items-center gap-3 px-5 py-3 rounded-full border transition-all duration-300 
                ${i === active ? 'border-primary bg-primary/6 shadow-sm' : 'border-primary/15 bg-transparent hover:border-primary/30'}`}
            >
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center text-dark font-display font-bold text-[0.8rem] shrink-0"
                style={{ background: `linear-gradient(135deg, ${t.color}, #04B9CA)` }}
              >
                {t.initials}
              </div>
              <div className="text-left">
                <div className="font-display font-semibold text-[0.85rem] text-dark">{t.name}</div>
                <div className="font-body text-[0.75rem] text-dark/50">{t.company}</div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
