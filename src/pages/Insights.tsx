import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import DotBackground from '../components/three/DotBackground'
import insights3DVisual from '../assets/insights_3d_visual.png'
import hero_seo from "../assets/hero_seo.png"
import hero_social from "../assets/hero_social.png"
import hero_analytics from "../assets/hero_analytics.png"
import about_visual from "../assets/about_visual.png"
import insight_hero2 from "../assets/insight_hero2.jpg"
import insight_hero3 from "../assets/insight_hero3.jpg"

export const posts = [
  { slug: 'ultimate-guide-local-seo-ahmedabad-2025', category: 'SEO', date: 'Apr 28, 2025', title: 'The Ultimate Guide to Local SEO for Ahmedabad Businesses in 2025', excerpt: 'Learn how to dominate local search results and attract customers right in your neighborhood with these proven Local SEO strategies.', image: hero_seo },
  { slug: 'instagram-reels-vs-tiktok-2025', category: 'Social Media', date: 'Apr 20, 2025', title: 'Instagram Reels vs. TikTok: Where Should Your Brand Focus in 2025?', excerpt: 'A data-driven comparison of Instagram Reels and TikTok performance to help you decide where to invest your short-form video content strategy.', image: hero_social },
  { slug: 'google-ads-smart-bidding-strategies', category: 'PPC', date: 'Apr 15, 2025', title: 'Google Ads Smart Bidding Strategies That Actually Work', excerpt: 'Discover the most effective Smart Bidding strategies in Google Ads and how to set them up for maximum ROAS with real-world examples.', image: hero_analytics },
  { slug: 'how-ai-is-changing-content-marketing-2025', category: 'Content', date: 'Apr 10, 2025', title: 'How AI is Changing Content Marketing in 2025 (And What It Means for You)', excerpt: 'Explore how AI tools are transforming content creation, SEO, and digital marketing — and how to stay ahead of the curve.', image: about_visual },
  { slug: 'facebook-ads-still-powerful', category: 'Meta Ads', date: 'Apr 05, 2025', title: 'Facebook Ads Are Still Powerful: Here\'s How to Make Them Work', excerpt: 'Meta Ads continue to deliver strong ROI when done right. Here are the strategies top brands are using to win on Facebook and Instagram.', image: insight_hero2 },
  { slug: 'linkedin-lead-generation-playbook', category: 'LinkedIn', date: 'Mar 28, 2025', title: 'LinkedIn Lead Generation: A Complete Playbook for B2B Businesses', excerpt: 'Master LinkedIn lead generation with organic content, LinkedIn Ads, and automation strategies that turn connections into clients.', image: insight_hero3 },
]

export const categoryColors: Record<string, string> = {
  SEO: '#0D5EF6', 'Social Media': '#04B9CA', PPC: '#7C3AED',
  Content: '#F59E0B', 'Meta Ads': '#EF4444', LinkedIn: '#0A66C2',
}

export default function Insights() {
  const [selectedCat, setSelectedCat] = useState('All')
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const cats = ['All', ...Object.keys(categoryColors)]
  const filtered = selectedCat === 'All' ? posts : posts.filter(p => p.category === selectedCat)

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e
    const { left, top, width, height } = currentTarget.getBoundingClientRect()

    const x = clientX - left
    const y = clientY - top
    setMousePos({ x, y })

    const tx = ((clientX - left) / width - 0.5) * 20
    const ty = ((clientY - top) / height - 0.5) * -20
    setTilt({ x: tx, y: ty })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setTilt({ x: 0, y: 0 })
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.insights-hero-text', {
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
    <main className="bg-black">
      {/* Hero */}
      <section
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden bg-black no-splash min-h-screen lg:h-[100vh] flex items-center justify-center pt-28 pb-16 lg:pt-48 lg:pb-24 px-6 md:px-12"
      >
        {/* Giant rotated background element on the right-side top corner */}
        <div className="absolute -top-[10%] -right-[15%] w-[45vw] h-[45vw] min-w-[450px] min-h-[450px] bg-gradient-to-tr from-[#0D5EF6] via-[#4F46E5] to-[#7C3AED] rotate-[20deg] rounded-[70px] pointer-events-none z-0 shadow-2xl" />

        {/* Subtle Circuit Board Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-0">
          <svg className="w-full h-full" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="circuit" width="240" height="240" patternUnits="userSpaceOnUse">
                <path d="M10 10 L60 10 L80 30 L150 30 L170 50 L200 50" fill="none" stroke="white" strokeWidth="1.5" />
                <path d="M10 90 L50 90 L70 70 L120 70 L140 90 L190 90" fill="none" stroke="white" strokeWidth="1.5" />
                <path d="M100 10 L100 50 L120 70 L120 120 L140 140 L140 190" fill="none" stroke="white" strokeWidth="1.5" />
                <circle cx="60" cy="10" r="3" fill="white" />
                <circle cx="150" cy="30" r="3" fill="white" />
                <circle cx="120" cy="70" r="3" fill="white" />
                <circle cx="70" cy="70" r="3" fill="white" />
                <circle cx="140" cy="90" r="3" fill="white" />
                <circle cx="100" cy="50" r="3" fill="white" />
                <circle cx="120" cy="120" r="3" fill="white" />
                <circle cx="140" cy="140" r="3" fill="white" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#circuit)" />
          </svg>
        </div>

        {/* Subtle Cybernetic Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(135,94,246,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(135,94,246,0.015)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        {/* Subtle, soft drift particles */}
        <DotBackground variant="float" opacity={0.12} />

        {/* Dynamic Cursor Spotlight Glow */}
        {isHovered && (
          <div
            className="hidden lg:block absolute w-[500px] h-[500px] bg-cyan/5 rounded-full blur-[130px] pointer-events-none z-0 transition-opacity duration-300"
            style={{
              left: `${mousePos.x - 250}px`,
              top: `${mousePos.y - 250}px`,
            }}
          />
        )}

        <div className="max-w-[1400px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center relative z-10">
          {/* Left Side: Content Column */}
          <div className="lg:col-span-6 flex flex-col items-start text-left">
            {/* Translucent pill badge */}
            <div className="insights-hero-text bg-cyan/5 border border-cyan/50 text-cyan rounded-full inline-flex items-center px-5 py-1.5 mb-8 select-none backdrop-blur-md shadow-[0_0_15px_rgba(4,185,202,0.25)] hover:shadow-[0_0_25px_rgba(4,185,202,0.45)] hover:scale-[1.03] transition-all duration-300 cursor-pointer">
              <span className="font-mono text-xs tracking-widest uppercase font-semibold">KNOWLEDGE HUB</span>
            </div>

            {/* Headline */}
            <h1 className="insights-hero-text font-display font-bold text-white text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1] tracking-tighter mb-6">
              Latest Insights & <br className="hidden md:block" />
              <span className="gradient-text">Leadership</span>
            </h1>

            {/* Paragraph Description */}
            <p className="insights-hero-text font-body text-zinc-400 text-lg leading-relaxed max-w-xl mb-10">
              Stay updated with the latest trends, insights, and best practices in digital marketing, SEO, PPC, and brand strategy.
            </p>

            {/* Action Buttons Row */}
            <div className="insights-hero-text flex flex-wrap gap-4 items-center">
              <a
                href="#articles"
                data-cursor="button"
                className="group inline-flex items-center gap-2 text-white font-display font-bold px-8 py-3.5 rounded-full no-underline transition-all duration-300 hover:-translate-y-1 shadow-lg bg-brand-gradient hover:shadow-[0_8px_30px_rgba(13,94,246,0.3)] text-sm md:text-base"
              >
                Read Articles
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transform group-hover:translate-x-1 transition-transform duration-200"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </a>
              <Link
                to="/contact"
                data-cursor="link"
                className="inline-flex items-center gap-2 bg-transparent text-white font-display font-bold px-8 py-3.5 rounded-full no-underline border-2 border-white/10 transition-all duration-300 hover:text-primary hover:border-primary hover:bg-primary/5 text-sm md:text-base"
              >
                Subscribe
              </Link>
            </div>
          </div>

          {/* Right Side: The 3D Visual */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end items-center relative">
            {/* Ambient purple backlight behind the 3D visual */}
            <div className="absolute w-[450px] h-[450px] bg-purple/10 rounded-full blur-[120px] pointer-events-none z-0" />
            <div className="absolute w-[350px] h-[350px] bg-cyan/5 rounded-full blur-[100px] pointer-events-none z-0" />

            <img
              src={insights3DVisual}
              alt="3D Iridescent abstract knowledge prism visual representation of strategic insight"
              className="w-full max-w-[520px] xl:max-w-[620px] h-auto object-contain relative z-10 animate-float"
              style={{
                animationDuration: '8s',
                transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
                transition: 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)',
                filter: isHovered ? 'drop-shadow(0 15px 35px rgba(124,58,237,0.25))' : 'drop-shadow(0 5px 15px rgba(124,58,237,0.08))',
              }}
            />
          </div>
        </div>
      </section>

      {/* Filter tabs */}
      <section id="articles" className="bg-black pb-12 px-8 py-12">
        <div className="max-w-[1200px] mx-auto flex gap-3 flex-wrap justify-center">
          {cats.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-6 py-2 rounded-full font-display font-bold text-sm transition-all duration-300 ${selectedCat === cat
                ? 'bg-brand-gradient text-dark shadow-lg shadow-primary/20 scale-105'
                : 'bg-white border border-dark/10 text-dark/60 hover:border-primary hover:text-primary hover:bg-primary/5'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Blog grid */}
      <section className="bg-black py-12 px-8 no-splash">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post, i) => (
              <article
                key={i}
                data-aos="fade-up"
                data-aos-delay={`${i * 80}`}
                className="group bg-black rounded-xl overflow-hidden border border-white/20"
              >
                {/* Image area */}
                <Link
                  to={`/insights/${post.slug}`}
                  className="block h-56 flex items-center justify-center relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${categoryColors[post.category]}15, ${categoryColors[post.category]}05)` }}
                >
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700" />
                  <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none mix-blend-overlay" />
                </Link>

                {/* Content */}
                <div className="p-8">
                  <div className="flex justify-between items-center mb-6">
                    <span
                      className="font-mono text-[0.7rem] font-bold tracking-widest uppercase rounded-full px-4 py-1 border"
                      style={{ color: categoryColors[post.category], borderColor: `${categoryColors[post.category]}20`, background: `${categoryColors[post.category]}08` }}
                    >
                      {post.category}
                    </span>
                    <span className="font-mono text-[0.72rem] text-white font-medium">{post.date}</span>
                  </div>
                  <Link to={`/insights/${post.slug}`}>
                    <h3 className="font-display font-bold text-white text-xl leading-tight mb-4 group-hover:text-primary transition-colors duration-300">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="font-body text-white/55 text-[0.9rem] leading-relaxed mb-8 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/insights/${post.slug}`}
                    className="inline-flex items-center gap-2 font-display font-bold text-sm text-primary group/link"
                  >
                    Read Full Article
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-300 group-hover/link:translate-x-1">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="shimmer-btn inline-flex items-center gap-3 bg-brand-gradient text-dark font-display font-bold px-10 py-4 rounded-full no-underline shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              Load More Insights
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="relative py-12 px-8 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 px-4 md:px-8">

          {/* Rounded Box Container */}
          <div className="relative overflow-hidden bg-zinc-950/90 border border-white/5 rounded-2xl shadow-2xl py-12 px-6 md:px-10 flex flex-col items-center">

            {/* Background Visual Enhancements inside the box */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0" />
            <div className="absolute inset-0 grid-pattern opacity-25 z-0" />

            <div className="relative z-10 max-w-7xl mx-auto text-center flex flex-col items-center">
              {/* Pill Badge */}
              <div
                data-aos="fade-up"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs font-display font-semibold text-primary tracking-wider uppercase mb-6 shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
                Let's Collaborate
              </div>

              {/* Heading */}
              <h2
                data-aos="fade-up"
                data-aos-delay="100"
                className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 max-w-7xl"
              >
                Ready to Become Our <span className="gradient-text">Next Success Story?</span>
              </h2>

              {/* Description Content */}
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="font-body text-zinc-400 text-sm md:text-base lg:text-lg leading-relaxed max-w-3xl mb-10"
              >
                Partner with Digital Web Connection to build high-performance search campaigns, creative social marketing, and state-of-the-art web products that accelerate your business worldwide.
              </p>

              {/* Action Buttons Row */}
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
              >
                {/* Primary Action Button */}
                <Link
                  to="/contact"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-black hover:bg-zinc-100 transition-all duration-300 font-display font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 text-sm md:text-base"
                >
                  Let's Talk Business
                  <svg
                    className="transform group-hover:translate-x-1 transition-transform duration-200"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>

                {/* Secondary Action Link */}
                <Link
                  to="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/10 bg-zinc-900/50 hover:bg-zinc-900 text-white hover:text-white transition-all duration-300 font-display font-semibold px-8 py-4 rounded-full text-sm md:text-base hover:border-white/20"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
