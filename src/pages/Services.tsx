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
    <main className="bg-white">
      {/* Hero */}
      <section className="pt-40 pb-24 px-8 text-center relative noise-overlay overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1000px] max-h-[1000px] bg-primary/5 rounded-full blur-[120px] -z-10" />
        <div className="relative z-10 max-w-[800px] mx-auto">
          <div data-aos="fade-down" className="inline-block font-mono text-[0.72rem] tracking-[0.2em] uppercase text-primary bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 mb-6">
            What We Offer
          </div>
          <h1 data-aos="fade-up" className="font-display font-bold text-[clamp(2.5rem,6vw,4.5rem)] text-dark tracking-tighter leading-[1.1] mb-6">
            Digital Marketing Services <span className="gradient-text">in Ahmedabad</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="150" className="text-dark/65 leading-relaxed text-lg lg:text-xl">
            Comprehensive, data-driven digital marketing solutions that help your business grow, compete, and win in today's digital landscape.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="bg-[#f8faff] py-24 px-8 noise-overlay">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-6">
          {serviceList.map((service, i) => (
            <div
              key={i}
              data-aos="fade-up"
              data-aos-delay={`${i * 100}`}
              className="group bg-white border border-primary/8 rounded-[24px] p-8 md:p-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-8 transition-all duration-500 shadow-[0_10px_30px_rgba(13,94,246,0.03)] hover:translate-x-2"
              style={{ '--hover-color': service.color } as any}
            >
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 flex-1">
                <div
                  className="w-16 h-16 md:w-20 md:h-20 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0 transition-transform duration-500 group-hover:scale-110"
                  style={{ background: `${service.color}10`, border: `1px solid ${service.color}20`, color: service.color }}
                >
                  {service.icon}
                </div>
                <div>
                  <div className="font-mono text-[0.75rem] font-bold tracking-widest mb-2" style={{ color: service.color }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h2 className="font-display font-bold text-dark text-2xl mb-3">{service.title}</h2>
                  <p className="font-body text-dark/60 text-[0.95rem] leading-relaxed max-w-xl">{service.desc}</p>
                </div>
              </div>

              <Link
                to={service.path}
                data-cursor="button"
                className="inline-flex items-center gap-3 text-white font-display font-bold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg hover:-translate-y-1 hover:shadow-xl shrink-0"
                style={{ background: `linear-gradient(135deg, ${service.color}, #04B9CA)`, boxShadow: `0 10px 25px ${service.color}30` }}
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
