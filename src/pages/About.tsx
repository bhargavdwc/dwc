import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const team = [
  { name: 'Sagar Patel', role: 'Founder & CEO', initials: 'SP', color: '#0D5EF6' },
  { name: 'Kushal Shah', role: 'Technical Head', initials: 'KS', color: '#04B9CA' },
  { name: 'Anjali Varma', role: 'Marketing Strategy', initials: 'AV', color: '#7C3AED' },
  { name: 'Rahul Mehra', role: 'Creative Director', initials: 'RM', color: '#F59E0B' },
]

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0)
    
    const ctx = gsap.context(() => {
      gsap.from('.about-hero-text', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="pt-40 pb-24 px-8 bg-[#f8faff] text-center relative noise-overlay overflow-hidden">
        <div className="max-w-[900px] mx-auto relative z-10">
          <div className="about-hero-text inline-block font-mono text-[0.8rem] tracking-[0.2em] uppercase text-primary bg-primary/8 border border-primary/20 rounded-full px-5 py-1.5 mb-6">
            Our Story
          </div>
          <h1 className="about-hero-text font-display font-bold text-[clamp(2.5rem,6vw,4.5rem)] text-dark tracking-tighter leading-[1.1] mb-6">
            We bridge the gap between <span className="gradient-text">Brands & People</span>
          </h1>
          <p className="about-hero-text font-body text-xl text-dark/60 leading-relaxed max-w-2xl mx-auto">
            At Digital Web Connection, we don't just provide services; we build relationships. Our mission is to empower businesses with the tools and strategies they need to thrive in a digital-first world.
          </p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-28 px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-dark mb-6 tracking-tight leading-tight">
              Driven by Data, <br/><span className="text-primary">Defined by Creativity</span>
            </h2>
            <p className="text-dark/65 leading-relaxed text-lg mb-10">
              We believe that every successful digital campaign is a perfect blend of analytical precision and creative intuition. Our approach is rooted in understanding your audience's behavior and crafting experiences that resonate with them on a deeper level.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-primary font-display mb-1">95%</div>
                <div className="text-[0.85rem] text-dark/50 uppercase tracking-widest font-semibold">Client Retention</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-cyan font-display mb-1">12M+</div>
                <div className="text-[0.85rem] text-dark/50 uppercase tracking-widest font-semibold">Ad Spend Managed</div>
              </div>
            </div>
          </div>
          <div className="relative" data-aos="fade-left">
            <div className="aspect-square bg-gradient-to-br from-[#f0f5ff] to-[#f0fbff] rounded-[32px] relative overflow-hidden border border-primary/10 shadow-inner">
              <div className="grid-pattern absolute inset-0 opacity-40" />
              <div className="absolute inset-[15%] bg-white rounded-3xl shadow-[0_30px_60px_rgba(13,94,246,0.12)] flex items-center justify-center p-8">
                <div className="text-center">
                  <div className="font-display text-5xl font-bold bg-brand-gradient bg-clip-text text-transparent">DWC</div>
                  <div className="font-body text-sm font-medium text-dark/40 mt-3 tracking-widest uppercase">Est. 2017</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-28 px-8 bg-[#f8faff] noise-overlay">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="font-display font-bold text-4xl text-dark text-center mb-16 tracking-tight" data-aos="fade-up">Our Journey</h2>
          <div className="flex flex-col gap-1">
            {[
              { year: '2017', title: 'The Beginning', desc: 'DWC was founded with a vision to transform the digital landscape of Ahmedabad.' },
              { year: '2019', title: 'National Expansion', desc: 'Successfully delivered over 100+ projects across major cities in India.' },
              { year: '2021', title: 'Tech Integration', desc: 'Integrated advanced AI and data analytics into our core marketing strategies.' },
              { year: '2025', title: 'Market Leaders', desc: 'Recognized as one of the top digital agencies, managing 50M+ in digital impact.' }
            ].map((item, i) => (
              <div key={i} className="flex gap-10 md:gap-16 items-start group" data-aos="fade-up" data-aos-delay={i * 100}>
                <div className="text-2xl font-bold text-primary font-display min-w-[80px] pt-1">{item.year}</div>
                <div className="pb-16 border-l-2 border-primary/10 pl-10 md:pl-16 relative last:pb-0">
                  <div className="absolute left-[-6px] top-3 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-primary/10 group-hover:scale-125 transition-transform duration-300" />
                  <h3 className="font-display font-bold text-dark text-xl mb-3">{item.title}</h3>
                  <p className="text-dark/60 leading-relaxed max-w-xl">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-28 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-dark mb-6 tracking-tight">The Minds Behind <span className="gradient-text">DWC</span></h2>
            <p className="text-dark/60 max-w-xl mx-auto text-lg leading-relaxed">Meet our expert team of strategists, creators, and technologists dedicated to your growth.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div 
                key={i} 
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="group p-10 rounded-3xl bg-white border border-primary/8 text-center transition-all duration-500 shadow-[0_10px_30px_rgba(13,94,246,0.03)] hover:-translate-y-2"
                style={{ '--hover-shadow': `${member.color}26` } as any}
              >
                <div 
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-bold text-dark font-display border-[3px] border-dark shadow-lg transition-transform duration-500 group-hover:scale-110"
                  style={{ background: `linear-gradient(135deg, ${member.color}, #04B9CA)` }}
                >
                  {member.initials}
                </div>
                <h3 className="font-display font-bold text-dark text-lg mb-1">{member.name}</h3>
                <p className="font-body text-dark/50 text-sm font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-white py-24 px-8 text-center border-t border-primary/10 relative noise-overlay">
        <h2 data-aos="zoom-in" className="font-display font-bold text-[clamp(1.8rem,4vw,2.8rem)] text-dark tracking-tight mb-10 leading-tight">
          Ready to Start Your <span className="gradient-text">Journey?</span>
        </h2>
        <Link to="/contact" data-cursor="button" className="shimmer-btn inline-flex items-center gap-3 bg-brand-gradient text-dark font-display font-bold px-10 py-4 rounded-full no-underline shadow-[0_10px_30px_rgba(13,94,246,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(13,94,246,0.35)]">
          Let's Talk Business
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </Link>
      </section>
    </main>
  )
}
