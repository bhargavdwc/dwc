import { Link } from 'react-router-dom'
import FAQ from '../components/home/FAQ'
import Testimonials from '../components/home/Testimonials'

interface PricingPlan {
  name: string
  price: string
  originalPrice?: string
  badge?: string
  recommended?: boolean
  features: string[]
}

interface ServicePageProps {
  title: string
  subtitle: string
  description: string
  color?: string
  whatWeOffer: { title: string; desc: string }[]
  steps: { number: string; title: string; desc: string }[]
  pricing: PricingPlan[]
}

export default function ServicePageTemplate({
  title, subtitle, description, color = '#0D5EF6',
  whatWeOffer, steps, pricing
}: ServicePageProps) {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="pt-40 pb-24 px-8 text-center relative noise-overlay overflow-hidden min-h-[70vh] flex items-center bg-white">
        <div 
          className="absolute inset-0 opacity-[0.15] -z-10" 
          style={{ background: `radial-gradient(circle at 50% 50%, ${color}, transparent 70%)` }} 
        />
        <div className="relative z-10 max-w-[900px] mx-auto w-full">
          <div 
            data-aos="fade-down" 
            className="inline-block font-mono text-[0.72rem] tracking-[0.2em] uppercase rounded-full px-4 py-1.5 mb-6 border"
            style={{ color: color, backgroundColor: `${color}10`, borderColor: `${color}25` }}
          >
            {subtitle}
          </div>
          <h1 data-aos="fade-up" className="font-display font-bold text-[clamp(2.5rem,6vw,4.5rem)] text-dark tracking-tighter leading-[1.1] mb-6 whitespace-pre-line">
            {title.split(/\n|\\n/).map((line, i) => (
              <span key={i} className={i === 1 ? 'gradient-text' : ''}>
                {line}
              </span>
            ))}
          </h1>
          <p data-aos="fade-up" data-aos-delay="100" className="text-dark/65 leading-relaxed text-lg lg:text-xl max-w-2xl mx-auto mb-10">
            {description}
          </p>
          <div data-aos="fade-up" data-aos-delay="200" className="flex flex-wrap gap-4 justify-center">
            <Link 
              to="/contact" 
              data-cursor="button" 
              className="shimmer-btn inline-flex items-center gap-2 text-dark font-display font-bold px-8 py-3.5 rounded-full no-underline transition-all duration-300 hover:-translate-y-1 shadow-lg"
              style={{ background: `linear-gradient(135deg, ${color}, #04B9CA)`, boxShadow: `0 8px 30px ${color}40` }}
            >
              Get Started
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
            <Link 
              to="/projects" 
              data-cursor="link" 
              className="inline-flex items-center gap-2 bg-transparent text-dark font-display font-bold px-8 py-3.5 rounded-full no-underline border-2 border-dark/10 transition-all duration-300 hover:text-primary hover:border-primary hover:bg-primary/5"
              style={{ '--hover-color': color } as any}
            >
              View Achievements
            </Link>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="bg-[#f8faff] py-24 px-8 noise-overlay">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 data-aos="fade-up" className="font-display font-bold text-3xl lg:text-4xl text-dark tracking-tight">
              Where <span className="gradient-text">Strategy Meets</span> Digital Success
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeOffer.map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={`${i * 80}`}
                className="group bg-white border border-primary/8 rounded-2xl p-8 transition-all duration-500 shadow-[0_10px_30px_rgba(13,94,246,0.03)] hover:-translate-y-1 hover:shadow-xl"
              >
                <div 
                  className="w-10 h-1 rounded-full mb-6"
                  style={{ background: `linear-gradient(90deg, ${color}, #04B9CA)` }}
                />
                <h3 className="font-display font-bold text-dark text-xl mb-3 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                <p className="font-body text-dark/60 text-[0.95rem] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Step Process */}
      <section className="bg-white py-24 px-8">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-20">
            <h2 data-aos="fade-up" className="font-display font-bold text-3xl lg:text-4xl text-dark tracking-tight">
              Achieve Incredible Results in <span className="gradient-text">Just {steps.length} Easy Steps!</span>
            </h2>
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-${Math.min(steps.length, 4)} gap-12`}>
            {steps.map((step, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={`${i * 120}`}
                className="text-center relative group"
              >
                {i < steps.length - 1 && (
                  <div className="absolute top-10 left-[60%] right-[-40%] h-0.5 bg-gradient-to-r from-primary/20 to-cyan/5 z-0 hidden lg:block" />
                )}
                <div className="relative z-10">
                  <div 
                    className="font-display font-extrabold text-7xl lg:text-8xl leading-none mb-6 opacity-20 transition-all duration-500 group-hover:opacity-40 group-hover:scale-110 select-none"
                    style={{ background: `linear-gradient(135deg, ${color}, #04B9CA)`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}
                  >
                    {step.number}
                  </div>
                  <h3 className="font-display font-bold text-dark text-lg mb-3">{step.title}</h3>
                  <p className="font-body text-dark/60 text-sm leading-relaxed max-w-[240px] mx-auto">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      {/* Pricing */}
      <section className="bg-[#f8faff] py-24 px-8 noise-overlay">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 data-aos="fade-up" className="font-display font-bold text-3xl lg:text-4xl text-dark tracking-tight">
              Pricing & <span className="gradient-text">Plans</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {pricing.map((plan, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={`${i * 100}`}
                className={`rounded-[32px] p-8 md:p-10 transition-all duration-500 shadow-xl relative overflow-hidden flex flex-col h-full ${
                  plan.recommended 
                  ? 'border-2 scale-105 z-10' 
                  : 'bg-white border border-primary/10 hover:border-primary/30'
                }`}
                style={{ 
                  borderColor: plan.recommended ? color : undefined,
                  backgroundColor: plan.recommended ? `${color}05` : undefined,
                  boxShadow: plan.recommended ? `0 30px 80px ${color}15` : undefined
                }}
              >
                {plan.badge && (
                  <div 
                    className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1 rounded-b-xl font-mono text-[0.7rem] font-bold text-dark shadow-sm uppercase tracking-widest"
                    style={{ background: `linear-gradient(135deg, ${color}, #04B9CA)` }}
                  >
                    {plan.badge}
                  </div>
                )}
                
                <div className="mb-8">
                  <h3 className="font-display font-bold text-dark text-xl mb-4">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="font-display font-extrabold text-4xl lg:text-5xl text-dark tracking-tighter">{plan.price}</span>
                    <span className="font-body text-dark/40 text-sm font-medium">/month</span>
                  </div>
                  {plan.originalPrice && (
                    <div className="font-body text-dark/30 text-sm line-through mt-1">
                      was {plan.originalPrice}
                    </div>
                  )}
                </div>

                <div className="border-t border-primary/8 pt-8 mb-10 space-y-4 flex-1">
                  {plan.features.map((f, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <div 
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-sm"
                        style={{ background: `linear-gradient(135deg, ${color}, #04B9CA)` }}
                      >
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5"><polyline points="20 6 9 17 4 12"/></svg>
                      </div>
                      <span className="font-body text-dark/60 text-sm leading-relaxed">{f}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  data-cursor="button"
                  className={`w-full py-4 rounded-2xl font-display font-bold text-center transition-all duration-300 shadow-lg hover:-translate-y-1 hover:shadow-xl ${
                    plan.recommended ? 'text-dark' : 'bg-transparent border-2 border-primary/10 text-dark hover:border-primary hover:bg-primary/5'
                  }`}
                  style={{ 
                    background: plan.recommended ? `linear-gradient(135deg, ${color}, #04B9CA)` : undefined,
                    borderColor: !plan.recommended ? `${color}20` : undefined
                  }}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FAQ />
    </main>
  )
}
