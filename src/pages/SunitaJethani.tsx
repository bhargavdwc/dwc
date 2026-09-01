import { useState, useEffect } from 'react'
import Contact from './Contact'

const services = [
  'Lead Generation',
  'Lead Calling & Qualifying',
  'Quoting Support',
  'End-to-End Sales Pipeline',
  'Other',
]

export default function SunitaJethani() {
  const [isOpen, setIsOpen] = useState(true)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')
    try {
      const formData = new FormData()
      formData.append('access_key', 'd4507fb4-e0de-4be5-8255-69de6d574fc8')
      formData.append('name', `${form.firstName} ${form.lastName}`.trim())
      formData.append('email', form.email)
      formData.append('phone', form.phone)
      formData.append('company', form.company)
      formData.append('service', form.service)
      formData.append('message', form.message)
      formData.append('subject', 'New Lead - Sunita Jethani Landing Page')
      formData.append('from_name', 'DWC Solar Website')
      formData.append(
        'autoresponse',
        'Thank you for reaching out! We have received your enquiry. Our team will review your details and get back to you within 24 hours. - The DWC Team'
      )
      formData.append('botcheck', '')

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })
      const data = await response.json()
      if (data.success) {
        setStatus('success')
        setForm({ firstName: '', lastName: '', email: '', phone: '', company: '', service: '', message: '' })
        setTimeout(() => {
          setStatus('idle')
          setIsOpen(false)
        }, 3000)
      } else {
        setStatus('error')
        setTimeout(() => setStatus('idle'), 4000)
      }
    } catch {
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <>
      {/* Full Contact page underneath */}
      <Contact />

      {/* White popup form overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-[99999] flex items-center justify-center px-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* Modal — White Theme */}
          <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.3)] overflow-hidden animate-[popIn_0.35s_ease-out] max-h-[90vh] overflow-y-auto">
            {/* Accent top bar */}
            <div className="h-1 w-full bg-gradient-to-r from-[#04b9ca] via-[#06d6a0] to-[#04b9ca]" />

            {/* Close button */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-800 transition-all duration-200 cursor-pointer border-none"
              aria-label="Close"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>

            {/* Header */}
            <div className="px-8 pt-7 pb-3">
              <div className="inline-flex items-center gap-2 bg-[#04b9ca]/10 px-3 py-1 rounded-full mb-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#04b9ca] animate-pulse" />
                <span className="font-mono text-[0.6rem] text-[#04b9ca] tracking-widest uppercase font-bold">Free Consultation</span>
              </div>
              <h2 className="font-display font-bold text-xl text-gray-900 tracking-tight mb-1">
                Book Your Strategy Call
              </h2>
              <p className="text-gray-500 text-sm">
                Fill in your details and we'll get back to you within 24 hours.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="px-8 pb-8">
              <input type="hidden" name="botcheck" style={{ display: 'none' }} />

              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="text-gray-500 text-[0.65rem] font-semibold uppercase tracking-wider mb-1 block">First Name *</label>
                  <input
                    type="text"
                    required
                    value={form.firstName}
                    onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:border-[#04b9ca] focus:ring-2 focus:ring-[#04b9ca]/15 transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="text-gray-500 text-[0.65rem] font-semibold uppercase tracking-wider mb-1 block">Last Name *</label>
                  <input
                    type="text"
                    required
                    value={form.lastName}
                    onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:border-[#04b9ca] focus:ring-2 focus:ring-[#04b9ca]/15 transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="text-gray-500 text-[0.65rem] font-semibold uppercase tracking-wider mb-1 block">Email *</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:border-[#04b9ca] focus:ring-2 focus:ring-[#04b9ca]/15 transition-all"
                  placeholder="john@company.com"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="text-gray-500 text-[0.65rem] font-semibold uppercase tracking-wider mb-1 block">Phone</label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:border-[#04b9ca] focus:ring-2 focus:ring-[#04b9ca]/15 transition-all"
                    placeholder="+91 99999 00000"
                  />
                </div>
                <div>
                  <label className="text-gray-500 text-[0.65rem] font-semibold uppercase tracking-wider mb-1 block">Company</label>
                  <input
                    type="text"
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:border-[#04b9ca] focus:ring-2 focus:ring-[#04b9ca]/15 transition-all"
                    placeholder="Company name"
                  />
                </div>
              </div>

              <div className="mb-3">
                <label className="text-gray-500 text-[0.65rem] font-semibold uppercase tracking-wider mb-1 block">Service Interested In</label>
                <select
                  value={form.service}
                  onChange={(e) => setForm({ ...form, service: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 text-sm focus:outline-none focus:border-[#04b9ca] focus:ring-2 focus:ring-[#04b9ca]/15 transition-all appearance-none cursor-pointer"
                >
                  <option value="">Select a service</option>
                  {services.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              <div className="mb-5">
                <label className="text-gray-500 text-[0.65rem] font-semibold uppercase tracking-wider mb-1 block">Message</label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2.5 text-gray-900 text-sm placeholder:text-gray-300 focus:outline-none focus:border-[#04b9ca] focus:ring-2 focus:ring-[#04b9ca]/15 transition-all resize-none"
                  placeholder="Tell us about your needs..."
                />
              </div>

              <button
                type="submit"
                disabled={status === 'loading' || status === 'success'}
                className={`w-full py-3 rounded-full font-display font-semibold text-sm transition-all duration-300 cursor-pointer border-none
                  ${status === 'success'
                    ? 'bg-green-500 text-white'
                    : status === 'error'
                      ? 'bg-red-500 text-white'
                      : 'bg-gradient-to-r from-[#04b9ca] to-[#06d6a0] text-white hover:shadow-[0_8px_25px_rgba(4,185,202,0.35)] hover:scale-[1.02]'
                  } disabled:opacity-60 disabled:cursor-not-allowed`}
              >
                {status === 'loading' ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                    </svg>
                    Sending...
                  </span>
                ) : status === 'success' ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    Sent Successfully!
                  </span>
                ) : status === 'error' ? (
                  'Something went wrong. Try again.'
                ) : (
                  'Book Your Free Strategy Call →'
                )}
              </button>
            </form>
          </div>
        </div>
      )}

      <style>{`
        @keyframes popIn {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
      `}</style>
    </>
  )
}
