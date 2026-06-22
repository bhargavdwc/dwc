import { useState } from 'react'
import FAQ from '../components/home/FAQ'
import DotBackground from '../components/three/DotBackground'
import contact3dVisual from '../assets/contact_3d_visual.png'

const services = ['Search Engine Optimization', 'Social Media Marketing', 'Pay-Per-Click (PPC)', 'Meta Ads', 'LinkedIn Marketing', 'Website Development', 'Graphic Design', 'Content Marketing', 'Other']

export default function Contact() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', company: '', service: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle')
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const { clientX, clientY, currentTarget } = e
    const { left, top, width, height } = currentTarget.getBoundingClientRect()
    setMousePos({ x: clientX - left, y: clientY - top })
    setTilt({
      x: ((clientX - left) / width - 0.5) * 16,
      y: ((clientY - top) / height - 0.5) * -16
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setTimeout(() => setStatus('success'), 2000)
  }

  return (
    <main className="bg-black">

      {/* ─── HERO: Split-Screen Communication Hub ─── */}
      <section
        className="lg:pt-28 pt-20 pb-20 md:pb-28 px-6 md:px-12 relative overflow-hidden bg-black"
        onMouseMove={handleHeroMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => { setIsHovered(false); setTilt({ x: 0, y: 0 }) }}
      >
        {/* Cybernetic grid bg */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(13,94,246,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(13,94,246,0.025)_1px,transparent_1px)] bg-[size:42px_42px] pointer-events-none" />

        {/* DotBackground particles */}
        <DotBackground variant="float" opacity={0.10} />

        {/* Mouse spotlight */}
        {isHovered && (
          <div
            className="absolute w-[500px] h-[500px] bg-cyan/5 rounded-full blur-[150px] pointer-events-none z-0"
            style={{ left: `${mousePos.x - 250}px`, top: `${mousePos.y - 250}px` }}
          />
        )}

        {/* Ambient glows */}
        <div className="absolute top-1/2 right-[5%] -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-cyan/5 rounded-full blur-[120px] md:blur-[160px] pointer-events-none" />
        <div className="absolute bottom-[10%] left-[5%] w-[200px] md:w-[300px] h-[200px] md:h-[300px] bg-primary/6 rounded-full blur-[80px] md:blur-[100px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />

        {/* 12-col split grid */}
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">

          {/* ── LEFT: Text Content ── */}
          <div className="lg:col-span-6 flex flex-col items-start text-left lg:-mt-10 -mt-5 w-full">

            {/* Badge */}
            <div
              data-aos="fade-down"
              className="inline-flex items-center gap-2.5 font-mono text-[0.78rem] tracking-[0.2em] uppercase text-cyan bg-cyan/8 border border-cyan/25 rounded-full px-5 py-1.5 mb-7 shadow-[0_0_20px_rgba(4,185,202,0.15)] hover:shadow-[0_0_35px_rgba(4,185,202,0.3)] transition-shadow duration-300 cursor-default select-none bg-white"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
              Get In Touch
            </div>

            {/* Headline */}
            <h1
              data-aos="fade-up"
              className="font-display font-bold text-[clamp(2.4rem,4.5vw,4rem)] text-white tracking-tighter leading-[1.1] mb-5"
            >
              Let's Build{' '}<br className="hidden lg:block" />
              Something{' '}
              <span className="gradient-text">Amazing</span>
            </h1>

            {/* Description */}
            <p
              data-aos="fade-up"
              data-aos-delay="100"
              className="font-body text-lg text-zinc-400 leading-relaxed mb-10 max-w-[540px]"
            >
              Collaborate with our team to launch campaigns that win customers, elevate your brand, and drive real measurable growth.
            </p>

            {/* CTA Buttons */}
            <div data-aos="fade-up" data-aos-delay="150" className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+919876543210"
                className="inline-flex items-center gap-2 bg-brand-gradient text-dark font-display font-semibold px-7 py-3.5 rounded-full shadow-[0_0_25px_rgba(4,185,202,0.3)] hover:shadow-[0_0_40px_rgba(4,185,202,0.55)] hover:-translate-y-0.5 transition-all duration-300 shimmer-btn"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                Call Us Now
              </a>
            </div>
          </div>

          {/* ── RIGHT: 3D Visual ── */}
          <div className="lg:col-span-6 flex justify-center items-center relative lg:-mt-16 -mt-8 w-full">
            {/* Ambient cyan backlight behind the 3D visual */}
            <div className="absolute w-[240px] h-[240px] md:w-[360px] md:h-[360px] lg:w-[420px] lg:h-[420px] bg-cyan/15 rounded-full blur-[80px] md:blur-[100px] pointer-events-none z-0" />

            <img
              src={contact3dVisual}
              alt="3D Iridescent Contact Visual"
              className="w-full max-w-[280px] md:max-w-[380px] lg:max-w-[460px] xl:max-w-[550px] h-auto object-contain relative z-10 animate-float"
              style={{
                animationDuration: '8s',
                transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
                transition: 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)',
                filter: isHovered ? 'drop-shadow(0 15px 30px rgba(13,94,246,0.3))' : 'drop-shadow(0 5px 15px rgba(13,94,246,0.1))',
              }}
            />
          </div>

        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black to-transparent pointer-events-none" />
      </section>

      {/* Contact layout */}
      <section id="contact-form-section" className="bg-black px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — Info */}
          <div>
            <h2 data-aos="fade-right" className="font-display font-bold text-3xl lg:text-4xl text-white mb-10 tracking-tight">
              Send us a message
            </h2>

            <div className="flex flex-col gap-6 mb-12">
              {[
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  ),
                  label: 'Office Address',
                  value: 'B-1103, Titanium City Center, Prahladnagar, Ahmedabad, Gujarat, India — 380015'
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  ),
                  label: 'Email',
                  value: 'service@digitalwebconnection.com'
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                  ),
                  label: 'Phone',
                  value: '+91 98765 43210'
                },
                {
                  icon: (
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  ),
                  label: 'Response Time',
                  value: 'Within 24 hours guaranteed'
                },
              ].map((item, i) => (
                <div
                  key={i}
                  data-aos="fade-right"
                  data-aos-delay={`${i * 80}`}
                  className="flex items-start gap-5 group"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/8 border border-primary/15 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-mono text-[0.7rem] text-primary tracking-widest uppercase mb-1 font-bold">{item.label}</div>
                    <div className="font-body text-white text-lg">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div data-aos="fade-up" className="flex gap-3 flex-wrap">
              {[
                { name: 'LinkedIn', href: 'https://in.linkedin.com/company/digitalwebconnection', color: 'hover:text-[#0A66C2] hover:border-[#0A66C2] hover:bg-[#0A66C2]/10' },
                { name: 'Instagram', href: 'https://www.instagram.com/digitalwebconnection/', color: 'hover:text-[#E1306C] hover:border-[#E1306C] hover:bg-[#E1306C]/10' },
                { name: 'Facebook', href: 'https://www.facebook.com/p/Digitalwebconnection-100092036863467/', color: 'hover:text-[#1877F2] hover:border-[#1877F2] hover:bg-[#1877F2]/10' },
                { name: 'Twitter/X', href: 'https://x.com/Digiwebconnect', color: 'hover:text-[#1DA1F2] hover:border-[#1DA1F2] hover:bg-[#1DA1F2]/10' },
              ].map(s => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`px-5 py-2.5 rounded-full border border-white/20 text-white/70 no-underline text-sm font-display font-semibold transition-all duration-300 ${s.color}`}
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
              className="contact-form-container bg-white/5 backdrop-blur-xl border border-white/10 rounded-[20px] p-8 md:p-12 shadow-[0_0_50px_rgba(4,185,202,0.1)]"
            >
              <div className="grid gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="relative group">
                    <input
                      className="peer w-full bg-black/20 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white text-sm outline-none transition-all duration-300 focus:border-cyan focus:bg-black/40 focus:ring-4 focus:ring-cyan/10 placeholder-transparent"
                      type="text" placeholder="First Name" required value={form.firstName} onChange={e => setForm(s => ({ ...s, firstName: e.target.value }))} id="first-name"
                    />
                    <label className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 text-sm transition-all duration-300 pointer-events-none peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-[0.7rem] peer-focus:text-cyan peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[0.7rem] peer-[:not(:placeholder-shown)]:text-cyan" htmlFor="first-name">First Name</label>
                  </div>
                  <div className="relative group">
                    <input
                      className="peer w-full bg-black/20 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white text-sm outline-none transition-all duration-300 focus:border-cyan focus:bg-black/40 focus:ring-4 focus:ring-cyan/10 placeholder-transparent"
                      type="text" placeholder="Last Name" required value={form.lastName} onChange={e => setForm(s => ({ ...s, lastName: e.target.value }))} id="last-name"
                    />
                    <label className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 text-sm transition-all duration-300 pointer-events-none peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-[0.7rem] peer-focus:text-cyan peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[0.7rem] peer-[:not(:placeholder-shown)]:text-cyan" htmlFor="last-name">Last Name</label>
                  </div>
                </div>
                <div className="relative group">
                  <input
                    className="peer w-full bg-black/20 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white text-sm outline-none transition-all duration-300 focus:border-cyan focus:bg-black/40 focus:ring-4 focus:ring-cyan/10 placeholder-transparent"
                    type="email" placeholder="Email" required value={form.email} onChange={e => setForm(s => ({ ...s, email: e.target.value }))} id="contact-email-main"
                  />
                  <label className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 text-sm transition-all duration-300 pointer-events-none peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-[0.7rem] peer-focus:text-cyan peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[0.7rem] peer-[:not(:placeholder-shown)]:text-cyan" htmlFor="contact-email-main">Email Address</label>
                </div>
                <div className="relative group">
                  <input
                    className="peer w-full bg-black/20 border border-white/10 rounded-xl px-4 pt-6 pb-2 text-white text-sm outline-none transition-all duration-300 focus:border-cyan focus:bg-black/40 focus:ring-4 focus:ring-cyan/10 placeholder-transparent"
                    type="text" placeholder="Company" value={form.company} onChange={e => setForm(s => ({ ...s, company: e.target.value }))} id="company-name"
                  />
                  <label className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50 text-sm transition-all duration-300 pointer-events-none peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-[0.7rem] peer-focus:text-cyan peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[0.7rem] peer-[:not(:placeholder-shown)]:text-cyan" htmlFor="company-name">Your Company Name</label>
                </div>
                <div className="relative group">
                  <select
                    className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-4 text-white text-sm outline-none transition-all duration-300 focus:border-cyan focus:bg-black/40 focus:ring-4 focus:ring-cyan/10 appearance-none"
                    value={form.service} onChange={e => setForm(s => ({ ...s, service: e.target.value }))} id="service-select"
                  >
                    <option value="" className="text-dark bg-white">Select a Service</option>
                    {services.map(s => <option key={s} value={s} className="text-dark bg-white">{s}</option>)}
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-white/40">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M6 9l6 6 6-6" /></svg>
                  </div>
                </div>
                <div className="relative group">
                  <textarea
                    className="peer w-full bg-black/20 border border-white/10 rounded-xl px-4 pt-8 pb-2 text-white text-sm outline-none transition-all duration-300 focus:border-cyan focus:bg-black/40 focus:ring-4 focus:ring-cyan/10 placeholder-transparent min-h-[120px] resize-y"
                    placeholder="Project Requirements" rows={4} value={form.message} onChange={e => setForm(s => ({ ...s, message: e.target.value }))} id="project-message"
                  />
                  <label className="absolute left-4 top-6 -translate-y-1/2 text-white/50 text-sm transition-all duration-300 pointer-events-none peer-focus:top-3 peer-focus:translate-y-0 peer-focus:text-[0.7rem] peer-focus:text-cyan peer-[:not(:placeholder-shown)]:top-3 peer-[:not(:placeholder-shown)]:translate-y-0 peer-[:not(:placeholder-shown)]:text-[0.7rem] peer-[:not(:placeholder-shown)]:text-cyan" htmlFor="project-message">About Your Project Requirements</label>
                </div>

                <button
                  type="submit"
                  disabled={status !== 'idle'}
                  className={`w-full p-4 rounded-xl font-display font-semibold text-base transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden shadow-lg group
                    ${status === 'success' ? 'bg-gradient-to-r from-emerald-500 to-emerald-600 text-white' : 'bg-brand-gradient text-dark hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(4,185,202,0.4)]'}`}
                >
                  {status === 'idle' && (
                    <>
                      Send Message
                      <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </>
                  )}
                  {status === 'loading' && (
                    <>
                      <div className="w-4 h-4 border-2 border-dark/30 border-t-dark rounded-full animate-spin" />
                      Sending...
                    </>
                  )}
                  {status === 'success' && (
                    <>
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>
                      Message Sent!
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Full-width Google Map */}
        <div
          data-aos="fade-up"
          className="mt-16 rounded-xl overflow-hidden border border-white/10 h-[400px] bg-zinc-950/60 shadow-2xl relative"
        >
          <iframe
            src="https://maps.google.com/maps?q=Titanium+City+Center+-+Corporate+Offices,+Prahladnagar,+Ahmedabad,+Gujarat,+India&t=&z=17&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location Map"
          />
        </div>
      </section>

      <FAQ />
    </main>
  )
}
