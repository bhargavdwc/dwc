import { Link } from 'react-router-dom'

const projects = [
  { title: 'Ganesh Green — Real Estate SEO', category: 'SEO + Content', industry: 'Real Estate', result: '+340% Organic Traffic', color: '#0D5EF6', bg: 'from-blue-900 to-blue-700' },
  { title: 'Hello Realty — Meta Ads', category: 'Meta Ads + PPC', industry: 'Real Estate', result: '5x ROAS Achieved', color: '#04B9CA', bg: 'from-cyan-900 to-cyan-700' },
  { title: 'Pride Eco — SMM Campaign', category: 'Social Media', industry: 'Sustainability', result: '280% Engagement Boost', color: '#7C3AED', bg: 'from-purple-900 to-purple-700' },
  { title: 'UrbanCo — Full Digital Strategy', category: 'SEO + PPC + SMM', industry: 'E-Commerce', result: '₹1.2Cr Revenue Generated', color: '#F59E0B', bg: 'from-yellow-900 to-yellow-700' },
  { title: 'TechBridge — LinkedIn B2B', category: 'LinkedIn Marketing', industry: 'Technology', result: '150 Qualified Leads/Mo', color: '#0A66C2', bg: 'from-indigo-900 to-indigo-700' },
  { title: 'BrandForce — Website + SEO', category: 'Web Dev + SEO', industry: 'Agency', result: 'Page 1 for 45 Keywords', color: '#EF4444', bg: 'from-red-900 to-red-700' },
]

export default function Projects() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="pt-40 pb-24 px-8 bg-white text-center relative noise-overlay overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1000px] max-h-[1000px] bg-primary/5 rounded-full blur-[120px] -z-10" />
        <div className="relative z-10 max-w-[800px] mx-auto">
          <div data-aos="fade-down" className="inline-block font-mono text-[0.72rem] tracking-[0.2em] uppercase text-primary bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 mb-6">
            Our Work
          </div>
          <h1 data-aos="fade-up" className="font-display font-bold text-[clamp(2.5rem,6vw,4.5rem)] text-dark tracking-tighter leading-[1.1] mb-6">
            Success Stories & <span className="gradient-text">Client Impact</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="150" className="text-dark/65 leading-relaxed text-lg lg:text-xl">
            Discover how we've helped businesses across industries achieve measurable digital transformation goals.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-[#f8faff] py-24 px-8 noise-overlay">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={`${i * 80}`}
                className="group relative aspect-[16/11] bg-white rounded-[32px] overflow-hidden border border-primary/10 transition-all duration-500 shadow-[0_10px_30px_rgba(13,94,246,0.03)] hover:-translate-y-2"
              >
                {/* Background Decor */}
                <div 
                  className="absolute inset-0 opacity-[0.03] transition-opacity duration-500 group-hover:opacity-[0.08]" 
                  style={{ background: `linear-gradient(135deg, ${project.color}, transparent)` }} 
                />
                <div className="grid-pattern absolute inset-0 opacity-10" />

                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
                  <div className="flex justify-between items-start gap-4">
                    <span 
                      className="font-mono text-[0.7rem] font-bold tracking-widest uppercase rounded-full px-4 py-1.5 border"
                      style={{ color: project.color, borderColor: `${project.color}20`, background: `${project.color}08` }}
                    >
                      {project.category}
                    </span>
                    <span className="font-body text-[0.7rem] font-bold text-dark/40 bg-dark/5 rounded-full px-4 py-1.5 uppercase tracking-widest">
                      {project.industry}
                    </span>
                  </div>
                  
                  <div>
                    <h3 className="font-display font-bold text-dark text-xl lg:text-2xl mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: project.color }} />
                      <span className="font-display font-bold text-base lg:text-lg" style={{ color: project.color }}>
                        {project.result}
                      </span>
                    </div>
                  </div>
                </div>
                
                {/* Subtle Glow on Hover */}
                <div className="absolute -inset-2 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" style={{ backgroundColor: `${project.color}15` }} />
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/contact" data-cursor="button" className="inline-flex items-center gap-3 text-dark font-display font-bold px-10 py-4 rounded-full border-2 border-dark/10 transition-all duration-300 hover:border-primary hover:text-primary hover:bg-primary/5">
              Show All Projects
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Strip */}
      <section className="bg-white py-20 px-8 text-center border-t border-primary/10 relative noise-overlay">
        <h2 data-aos="zoom-in" className="font-display font-bold text-[clamp(1.8rem,4vw,2.8rem)] text-dark tracking-tight mb-10 leading-tight">
          Ready to Become Our <span className="gradient-text">Next Success Story?</span>
        </h2>
        <Link to="/contact" data-cursor="button" className="shimmer-btn inline-flex items-center gap-3 bg-brand-gradient text-dark font-display font-bold px-10 py-4 rounded-full no-underline shadow-[0_10px_30px_rgba(13,94,246,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(13,94,246,0.35)]">
          Contact Us
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </Link>
      </section>
    </main>
  )
}
