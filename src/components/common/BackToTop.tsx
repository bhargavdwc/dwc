import { useEffect, useState } from 'react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <button
      onClick={scrollTop}
      className={`fixed bottom-8 right-8 w-[50px] h-[50px] bg-brand-gradient rounded-full flex items-center justify-center z-[9999] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(13,94,246,0.4)] ${visible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'}`}
      aria-label="Back to top"
      data-cursor="button"
    >
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </button>
  )
}
