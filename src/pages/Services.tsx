import { Link } from 'react-router-dom'

const serviceList = [
  { title: 'Search Engine Optimization', desc: 'Rank higher, attract more organic traffic, and convert searchers into customers with our proven SEO methodology.', path: '/services/search-engine-optimization', icon: '🔍', color: '#0D5EF6' },
  { title: 'Social Media Marketing', desc: 'Build a loyal community, drive meaningful engagement, and grow your brand across all major social platforms.', path: '/services/social-media-marketing', icon: '📱', color: '#04B9CA' },
  { title: 'Pay-Per-Click (PPC)', desc: 'Get instant, targeted traffic and maximize ROI with precision Google Ads campaigns managed by certified experts.', path: '/services/pay-per-click-ppc', icon: '💰', color: '#7C3AED' },
  { title: 'Meta Ads', desc: 'Reach millions of potential customers on Facebook and Instagram with creative, high-converting ad campaigns.', path: '/services/meta-ads', icon: '🎯', color: '#F59E0B' },
  { title: 'LinkedIn Marketing', desc: 'Generate high-quality B2B leads and establish thought leadership with strategic LinkedIn campaigns.', path: '/services/linkedin-marketing', icon: '💼', color: '#0A66C2' },
]

export default function Services() {
  return (
    <main className="bg-black">
      {/* Hero */}
      <section className="pt-40 pb-28 px-8 text-center relative overflow-hidden bg-black">
        {/* Full-width Background Image & Soft Gradient Overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1600&auto=format&fit=crop&q=80"
            alt="Digital Marketing services background"
            className="w-full h-full object-cover opacity-60"
          />
          {/* Black Overlap Mask */}
          <div className="absolute inset-0 bg-black/20" />
          {/* Subtle gradient overlays to dissolve edges into the black theme */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
        </div>

        <div className="max-w-[900px] mx-auto relative z-10">
          <div data-aos="fade-down" className="inline-block font-mono text-[0.8rem] tracking-[0.2em] uppercase text-primary bg-primary/8 border border-primary/20 rounded-full px-5 py-1.5 mb-6">
            What We Offer
          </div>
          <h1 data-aos="fade-up" className="font-display font-bold text-[clamp(2.5rem,6vw,4.5rem)] text-white tracking-tighter leading-[1.1] mb-6">
            Digital Marketing Services <span className="gradient-text">in Ahmedabad</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="150" className="text-white/60 leading-relaxed text-lg lg:text-xl max-w-2xl mx-auto">
            Comprehensive, data-driven digital marketing solutions that help your business grow, compete, and win in today's digital landscape.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-black py-24 px-8 relative overflow-hidden">
        {/* Ambient background glowing grids */}
        <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] pointer-events-none z-0" />
        <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-cyan/5 rounded-full blur-[100px] pointer-events-none z-0" />

        <div className="max-w-[1200px] mx-auto relative z-10 flex flex-col gap-6">
          {serviceList.map((service, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={`${i * 100}`}
              className="group bg-zinc-950/60 border border-white/5 rounded-[2rem] p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 transition-all duration-500 shadow-2xl hover:border-white/10 hover:translate-x-2 animate-[fadeIn_0.5s_ease-out]"
              style={{
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = `${service.color}35`
                e.currentTarget.style.boxShadow = `0 20px 40px -10px ${service.color}15`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.4)'
              }}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 flex-1">
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 transition-all duration-500 group-hover:scale-105"
                  style={{ background: `${service.color}12`, border: `1px solid ${service.color}30`, color: service.color }}
                >
                  {service.icon}
                </div>
                <div>
                  <div className="font-mono text-[0.75rem] font-bold tracking-widest mb-2" style={{ color: service.color }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h2 className="font-display font-bold text-white text-2xl mb-3">{service.title}</h2>
                  <p className="font-body text-zinc-400 text-[0.95rem] leading-relaxed max-w-xl">{service.desc}</p>
                </div>
              </div>

              <Link
                to={service.path}
                data-cursor="button"
                className="inline-flex items-center gap-3 text-white font-display font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:-translate-y-1 hover:shadow-xl shrink-0"
                style={{ background: `linear-gradient(135deg, ${service.color}, #04B9CA)`, boxShadow: `0 10px 25px ${service.color}25` }}
              >
                View Service
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
