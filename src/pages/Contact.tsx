import { useState } from 'react'
import FAQ from '../components/home/FAQ'

const services = ['Search Engine Optimization', 'Social Media Marketing', 'Pay-Per-Click (PPC)', 'Meta Ads', 'LinkedIn Marketing', 'Website Development', 'Graphic Design', 'Content Marketing', 'Other']

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', company: '', service: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => setStatus('success'), 2000)
  }

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="pt-40 pb-24 px-8 bg-white text-center relative noise-overlay overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1000px] max-h-[1000px] bg-primary/5 rounded-full blur-[120px] -z-10" />
        <div className="relative z-10 max-w-[800px] mx-auto w-full">
          <div data-aos="fade-down" className="inline-block font-mono text-[0.72rem] tracking-[0.2em] uppercase text-primary bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 mb-6">
            Get In Touch
          </div>
          <h1 data-aos="fade-up" className="font-display font-bold text-[clamp(2.5rem,7vw,5rem)] text-dark tracking-tighter leading-[1.05] mb-6">
            Let's Build Something <span className="gradient-text">Amazing</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="150" className="text-dark/65 leading-relaxed text-lg lg:text-xl max-w-2xl mx-auto">
            We look forward to hearing about your project. Let's collaborate, win new customers, and move your brand forward.
          </p>
        </div>
      </section>

      {/* Contact layout */}
      <section className="bg-[#f8faff] py-24 px-8 noise-overlay">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — Info */}
          <div>
            <h2 data-aos="fade-right" className="font-display font-bold text-3xl lg:text-4xl text-dark mb-10 tracking-tight">
              Send us a message
            </h2>

            <div className="flex flex-col gap-6 mb-12">
              {[
                { icon: '📍', label: 'Office Address', value: 'Ahmedabad, Gujarat, India — 380015' },
                { icon: '📧', label: 'Email', value: 'hello@digitalwebconnection.com' },
                { icon: '📞', label: 'Phone', value: '+91 98765 43210' },
                { icon: '🕐', label: 'Response Time', value: 'Within 24 hours guaranteed' },
              ].map((item, i) => (
                <div
                  key={i}
                  data-aos="fade-right"
                  data-aos-delay={`${i * 80}`}
                  className="flex items-start gap-5 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/8 border border-primary/15 flex items-center justify-center text-2xl shrink-0 transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-mono text-[0.7rem] text-primary tracking-widest uppercase mb-1 font-bold">{item.label}</div>
                    <div className="font-body text-dark/70 text-lg">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div data-aos="fade-up" className="flex gap-3 flex-wrap">
              {[
                { name: 'LinkedIn', color: '#0A66C2' },
                { name: 'Instagram', color: '#E1306C' },
                { name: 'Facebook', color: '#1877F2' },
                { name: 'Twitter/X', color: '#1DA1F2' },
              ].map(s => (
                <a
                  key={s.name}
                  href="#"
                  className="px-6 py-2.5 rounded-full border border-dark/10 text-dark/50 no-underline text-sm font-display font-semibold transition-all duration-300 hover:text-white"
                  style={{ '--hover-bg': s.color } as any}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = s.color; e.currentTarget.style.borderColor = s.color }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.borderColor = 'rgba(6, 11, 24, 0.1)' }}
                >
                  {s.name}
                </a>
              ))}
            </div>

            {/* Map placeholder */}
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-12 rounded-[32px] overflow-hidden border border-primary/10 h-[280px] bg-white flex items-center justify-center relative shadow-lg group cursor-pointer"
            >
              <div className="grid-pattern absolute inset-0 opacity-10" />
              <div className="relative z-10 text-center transition-transform duration-500 group-hover:scale-110">
                <div className="text-5xl mb-4">📍</div>
                <div className="font-display font-bold text-dark text-xl">Ahmedabad, Gujarat</div>
                <div className="font-body text-dark/40 text-sm mt-1 uppercase tracking-widest">View on Google Maps</div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div data-aos="fade-left">
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-primary/10 rounded-[32px] p-8 md:p-12 shadow-2xl relative overflow-hidden"
            >
              <div className="grid gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative group">
                    <input 
                      className="peer w-full bg-primary/5 border border-primary/10 rounded-2xl px-5 pt-7 pb-2.5 text-dark outline-none transition-all focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 placeholder-transparent" 
                      type="text" placeholder="First Name" required value={form.firstName} onChange={e => setForm(s => ({...s, firstName: e.target.value}))} id="first-name" 
                    />
                    <label className="absolute left-5 top-2.5 text-[0.7rem] font-bold text-primary uppercase tracking-widest transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-dark/40 peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal peer-focus:top-2.5 peer-focus:text-[0.7rem] peer-focus:text-primary peer-focus:font-bold peer-focus:tracking-widest" htmlFor="first-name">First Name</label>
                  </div>
                  <div className="relative group">
                    <input 
                      className="peer w-full bg-primary/5 border border-primary/10 rounded-2xl px-5 pt-7 pb-2.5 text-dark outline-none transition-all focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 placeholder-transparent" 
                      type="text" placeholder="Last Name" required value={form.lastName} onChange={e => setForm(s => ({...s, lastName: e.target.value}))} id="last-name" 
                    />
                    <label className="absolute left-5 top-2.5 text-[0.7rem] font-bold text-primary uppercase tracking-widest transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-dark/40 peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal peer-focus:top-2.5 peer-focus:text-[0.7rem] peer-focus:text-primary peer-focus:font-bold peer-focus:tracking-widest" htmlFor="last-name">Last Name</label>
                  </div>
                </div>
                <div className="relative group">
                  <input 
                    className="peer w-full bg-primary/5 border border-primary/10 rounded-2xl px-5 pt-7 pb-2.5 text-dark outline-none transition-all focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 placeholder-transparent" 
                    type="email" placeholder="Email" required value={form.email} onChange={e => setForm(s => ({...s, email: e.target.value}))} id="contact-email-main" 
                  />
                  <label className="absolute left-5 top-2.5 text-[0.7rem] font-bold text-primary uppercase tracking-widest transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-dark/40 peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal peer-focus:top-2.5 peer-focus:text-[0.7rem] peer-focus:text-primary peer-focus:font-bold peer-focus:tracking-widest" htmlFor="contact-email-main">Email Address</label>
                </div>
                <div className="relative group">
                  <input 
                    className="peer w-full bg-primary/5 border border-primary/10 rounded-2xl px-5 pt-7 pb-2.5 text-dark outline-none transition-all focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 placeholder-transparent" 
                    type="text" placeholder="Company" value={form.company} onChange={e => setForm(s => ({...s, company: e.target.value}))} id="company-name" 
                  />
                  <label className="absolute left-5 top-2.5 text-[0.7rem] font-bold text-primary uppercase tracking-widest transition-all peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-dark/40 peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal peer-focus:top-2.5 peer-focus:text-[0.7rem] peer-focus:text-primary peer-focus:font-bold peer-focus:tracking-widest" htmlFor="company-name">Your Company Name</label>
                </div>
                <div className="relative group">
                  <select 
                    className="w-full bg-primary/5 border border-primary/10 rounded-2xl px-5 py-4 text-dark outline-none transition-all focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 appearance-none" 
                    value={form.service} onChange={e => setForm(s => ({...s, service: e.target.value}))} id="service-select"
                  >
                    <option value="" className="text-dark/40">Select a Service</option>
                    {services.map(s => <option key={s} value={s}>{s}</option>)}
                  </select>
                </div>
                <div className="relative group">
                  <textarea 
                    className="peer w-full bg-primary/5 border border-primary/10 rounded-2xl px-5 pt-8 pb-3 text-dark outline-none transition-all focus:bg-white focus:border-primary focus:ring-4 focus:ring-primary/10 placeholder-transparent resize-none" 
                    placeholder="Project Requirements" rows={4} value={form.message} onChange={e => setForm(s => ({...s, message: e.target.value}))} id="project-message" 
                  />
                  <label className="absolute left-5 top-3 text-[0.7rem] font-bold text-primary uppercase tracking-widest transition-all peer-placeholder-shown:top-6 peer-placeholder-shown:text-base peer-placeholder-shown:text-dark/40 peer-placeholder-shown:font-normal peer-placeholder-shown:tracking-normal peer-focus:top-3 peer-focus:text-[0.7rem] peer-focus:text-primary peer-focus:font-bold peer-focus:tracking-widest" htmlFor="project-message">About Your Project Requirements</label>
                </div>

                <button
                  type="submit"
                  disabled={status !== 'idle'}
                  className={`shimmer-btn w-full py-4 rounded-2xl font-display font-bold text-lg transition-all duration-300 flex items-center justify-center gap-3 shadow-xl ${
                    status === 'success' ? 'bg-emerald-500 text-white' : 'bg-brand-gradient text-white hover:-translate-y-1 hover:shadow-2xl'
                  }`}
                >
                  {status === 'idle' && (
                    <>
                      Send Message
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-300 group-hover:translate-x-1">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </>
                  )}
                  {status === 'loading' && (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  )}
                  {status === 'success' && (
                    <>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                      Message Sent!
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <FAQ />
    </main>
  )
}
