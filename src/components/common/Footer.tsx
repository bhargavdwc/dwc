import { Link } from 'react-router-dom'
import logoImg from '../../assets/white_logo.jpg'

const services = ['Social Media Marketing', 'Digital Consultancy', 'Email Marketing', 'Link Generation', 'Online Presence Analysis']
const company = ['Our Team', 'About Us', 'Contact Us']
const support = ['Help Center', 'Get Live Support', 'View Documentation']

const socials = [
  { label: 'LinkedIn', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
  ), href: '#' },
  { label: 'Instagram', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
  ), href: '#' },
  { label: 'Facebook', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>
  ), href: '#' },
  { label: 'Twitter', icon: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v11A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
  ), href: '#' },
]

export default function Footer() {
  return (
    <footer className="bg-white relative overflow-hidden border-t border-primary/10 noise-overlay">
      {/* Big display text */}
      <div className="pt-20 px-8 text-center overflow-hidden">
        <div className="font-display font-bold text-[clamp(2.5rem,8vw,7rem)] leading-none text-transparent [text-stroke:1px_rgba(13,94,246,0.15)] tracking-tighter opacity-80 uppercase">
          HELLO! WE'RE LISTENING
        </div>
      </div>

      {/* Main footer content */}
      <div className="max-w-[1400px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 no-underline mb-5 group">
              <img src={logoImg} alt="DWC Logo" className="h-11 w-auto object-contain transition-transform group-hover:scale-105" />
              <div className="font-display font-bold leading-[1.1]">
                <div className="text-dark">Digital Web</div>
                <div className="text-cyan">Connection</div>
              </div>
            </Link>
            <p className="text-dark/60 text-sm leading-relaxed mb-6 max-w-[280px]">
              AI-Driven Digital Marketing Agency in Ahmedabad. Helping brands grow with strategy, creativity, and research.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl bg-primary/5 border border-primary/10 flex items-center justify-center text-dark/60 transition-all duration-300 hover:bg-primary/10 hover:text-primary hover:border-primary hover:rotate-[10deg]"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-dark mb-5 text-base">Services</h4>
            <ul className="list-none flex flex-col gap-3">
              {services.map(s => (
                <li key={s}>
                  <Link to="/services" className="text-dark/55 no-underline text-sm transition-colors hover:text-primary">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display font-semibold text-dark mb-5 text-base">Company</h4>
            <ul className="list-none flex flex-col gap-3">
              {company.map(c => (
                <li key={c}>
                  <Link to="/about" className="text-dark/55 no-underline text-sm transition-colors hover:text-primary">
                    {c}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-display font-semibold text-dark mb-5 text-base">Support</h4>
            <ul className="list-none flex flex-col gap-3">
              {support.map(s => (
                <li key={s}>
                  <a href="#" className="text-dark/55 no-underline text-sm transition-colors hover:text-primary">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-dark mb-5 text-base">Contact</h4>
            <div className="flex flex-col gap-3">
              <a href="mailto:hello@digitalwebconnection.com" className="text-dark/55 no-underline text-sm transition-colors hover:text-primary break-all">
                hello@digitalwebconnection.com
              </a>
              <span className="text-dark/55 text-sm">Ahmedabad, Gujarat, India</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary/8 px-8 py-6">
        <div className="max-w-[1400px] mx-auto flex flex-wrap justify-between items-center gap-4">
          <p className="text-dark/40 text-[0.75rem] font-mono">
            © 2025 Digital Web Connection. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service'].map(t => (
              <a key={t} href="#" className="text-dark/40 no-underline text-[0.75rem] transition-colors hover:text-primary">
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
