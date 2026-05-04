import { useState } from 'react'

const services = ['Search Engine Optimization', 'Social Media Marketing', 'Pay-Per-Click (PPC)', 'Meta Ads', 'LinkedIn Marketing', 'Website Development', 'Graphic Design', 'Content Marketing']

export default function ContactForm() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => setStatus('success'), 1800)
  }

  return (
    <section className="bg-[#020303] py-24">
      <div className="max-w-[1300px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Left */}
        <div>
          <div data-aos="fade-right" className="inline-block font-mono text-[0.72rem] tracking-[0.2em] uppercase text-primary bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 mb-5">
            Let's Connect
          </div>
          <h2 data-aos="fade-right" className="font-display font-bold text-[clamp(1.8rem,4vw,2.8rem)] text-white tracking-tight mb-6 leading-tight">
            Experience the{' '}
            <span className="gradient-text">DWC Advantage</span>
          </h2>
          <p data-aos="fade-right" data-aos-delay="100" className="text-white leading-relaxed mb-10 text-base max-w-xl">
            We've mastered the art of blending creativity and data to deliver marketing that maximizes your ROI. Let's build your roadmap to digital success. Fill in the form and our strategist will reach out within 24 hours.
          </p>

          {/* Social row */}
          <div data-aos="fade-up" data-aos-delay="200" className="flex gap-3 flex-wrap">
            {[
              { name: 'LinkedIn', color: 'hover:text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#0A66C2]/10' },
              { name: 'Instagram', color: 'hover:text-[#E1306C] hover:border-[#E1306C] hover:bg-[#E1306C]/10' },
              { name: 'Facebook', color: 'hover:text-[#1877F2] hover:border-[#1877F2] hover:bg-[#1877F2]/10' },
              { name: 'Twitter/X', color: 'hover:text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#0A66C2]/10' },
            ].map(s => (
              <a
                key={s.name}
                href="#"
                className={`px-5 py-2 rounded-full border border-white text-white no-underline text-[0.85rem] font-display font-medium transition-all duration-300 ${s.color}`}
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>

        {/* Right — Form */}
        <div data-aos="fade-left">
          <form
            onSubmit={handleSubmit}
            className="contact-form-container bg-white/5 backdrop-blur-xl border border-white/10 rounded-[20px] p-8 md:p-10 shadow-[0_0_50px_rgba(4,185,202,0.1)]"
          >
            <div className="grid gap-5">
              {/* Name */}
              <div className="relative group">
                <input 
                  className="peer w-full bg-black/20 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white text-sm outline-none transition-all duration-300 focus:border-cyan focus:bg-black/40 focus:ring-4 focus:ring-cyan/10 placeholder-transparent" 
                  type="text" placeholder="Full Name" required 
                  value={formState.name} onChange={e => setFormState(s => ({...s, name: e.target.value}))} id="contact-name" 
                />
                <label className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 text-sm transition-all duration-300 pointer-events-none peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-[0.7rem] peer-focus:text-cyan peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[0.7rem] peer-[:not(:placeholder-shown)]:text-cyan" htmlFor="contact-name">
                  Full Name
                </label>
              </div>

              {/* Email */}
              <div className="relative group">
                <input 
                  className="peer w-full bg-black/20 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white text-sm outline-none transition-all duration-300 focus:border-cyan focus:bg-black/40 focus:ring-4 focus:ring-cyan/10 placeholder-transparent" 
                  type="email" placeholder="Email Address" required 
                  value={formState.email} onChange={e => setFormState(s => ({...s, email: e.target.value}))} id="contact-email" 
                />
                <label className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 text-sm transition-all duration-300 pointer-events-none peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-[0.7rem] peer-focus:text-cyan peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[0.7rem] peer-[:not(:placeholder-shown)]:text-cyan" htmlFor="contact-email">
                  Email Address
                </label>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Phone */}
                <div className="relative group">
                  <input 
                    className="peer w-full bg-black/20 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white text-sm outline-none transition-all duration-300 focus:border-cyan focus:bg-black/40 focus:ring-4 focus:ring-cyan/10 placeholder-transparent" 
                    type="tel" placeholder="Phone Number" 
                    value={formState.phone} onChange={e => setFormState(s => ({...s, phone: e.target.value}))} id="contact-phone" 
                  />
                  <label className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 text-sm transition-all duration-300 pointer-events-none peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-[0.7rem] peer-focus:text-cyan peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[0.7rem] peer-[:not(:placeholder-shown)]:text-cyan" htmlFor="contact-phone">
                    Phone Number
                  </label>
                </div>

                {/* Company */}
                <div className="relative group">
                  <input 
                    className="peer w-full bg-black/20 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white text-sm outline-none transition-all duration-300 focus:border-cyan focus:bg-black/40 focus:ring-4 focus:ring-cyan/10 placeholder-transparent" 
                    type="text" placeholder="Company Name" 
                    value={formState.company} onChange={e => setFormState(s => ({...s, company: e.target.value}))} id="contact-company" 
                  />
                  <label className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 text-sm transition-all duration-300 pointer-events-none peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-[0.7rem] peer-focus:text-cyan peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[0.7rem] peer-[:not(:placeholder-shown)]:text-cyan" htmlFor="contact-company">
                    Company Name
                  </label>
                </div>
              </div>

              {/* Service */}
              <div className="relative group">
                <select
                  className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-white text-sm outline-none transition-all duration-300 focus:border-cyan focus:bg-black/40 focus:ring-4 focus:ring-cyan/10 appearance-none"
                  value={formState.service}
                  onChange={e => setFormState(s => ({...s, service: e.target.value}))}
                  id="contact-service"
                >
                  <option value="" className="text-dark bg-white">Select a Service</option>
                  {services.map(s => <option key={s} value={s} className="text-dark bg-white">{s}</option>)}
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6"/></svg>
                </div>
              </div>

              {/* Message */}
              <div className="relative group">
                <textarea 
                  className="peer w-full bg-black/20 border border-white/10 rounded-xl px-4 pt-8 pb-2 text-white text-sm outline-none transition-all duration-300 focus:border-cyan focus:bg-black/40 focus:ring-4 focus:ring-cyan/10 placeholder-transparent min-h-[120px] resize-y" 
                  placeholder="Project Brief" rows={4} 
                  value={formState.message} onChange={e => setFormState(s => ({...s, message: e.target.value}))} id="contact-message" 
                />
                <label className="absolute left-4 top-6 -translate-y-1/2 text-white/50 text-sm transition-all duration-300 pointer-events-none peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-[0.7rem] peer-focus:text-cyan peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[0.7rem] peer-[:not(:placeholder-shown)]:text-cyan" htmlFor="contact-message">
                  Project Brief
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                className={`w-full p-4 rounded-xl font-display font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden shadow-lg group
                  ${status === 'success' ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white' : 'bg-brand-gradient text-dark hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(4,185,202,0.4)]'}`}
                disabled={status !== 'idle'}
              >
                {status === 'idle' && <>Submit<svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg></>}
                {status === 'loading' && <><div className="w-4 h-4 border-2 border-dark/30 border-t-dark rounded-full animate-spin" />Sending...</>}
                {status === 'success' && <><svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>Message Sent!</>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
