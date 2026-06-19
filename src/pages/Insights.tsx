import { useState } from 'react'
import { Link } from 'react-router-dom'
import insights_hero from "../assets/insight_hero1.jpg"
import hero_seo from "../assets/hero_seo.png"
import hero_social from "../assets/hero_social.png"
import hero_analytics from "../assets/hero_analytics.png"
import about_visual from "../assets/about_visual.png"
import insight_hero2 from "../assets/insight_hero2.jpg"
import insight_hero3 from "../assets/insight_hero3.jpg"

const posts = [
  { category: 'SEO', date: 'Apr 28, 2025', title: 'The Ultimate Guide to Local SEO for Ahmedabad Businesses in 2025', excerpt: 'Learn how to dominate local search results and attract customers right in your neighborhood with these proven Local SEO strategies.', image: hero_seo },
  { category: 'Social Media', date: 'Apr 20, 2025', title: 'Instagram Reels vs. TikTok: Where Should Your Brand Focus in 2025?', excerpt: 'A data-driven comparison of Instagram Reels and TikTok performance to help you decide where to invest your short-form video content strategy.', image: hero_social },
  { category: 'PPC', date: 'Apr 15, 2025', title: 'Google Ads Smart Bidding Strategies That Actually Work', excerpt: 'Discover the most effective Smart Bidding strategies in Google Ads and how to set them up for maximum ROAS with real-world examples.', image: hero_analytics },
  { category: 'Content', date: 'Apr 10, 2025', title: 'How AI is Changing Content Marketing in 2025 (And What It Means for You)', excerpt: 'Explore how AI tools are transforming content creation, SEO, and digital marketing — and how to stay ahead of the curve.', image: about_visual },
  { category: 'Meta Ads', date: 'Apr 05, 2025', title: 'Facebook Ads Are Still Powerful: Here\'s How to Make Them Work', excerpt: 'Meta Ads continue to deliver strong ROI when done right. Here are the strategies top brands are using to win on Facebook and Instagram.', image: insight_hero2 },
  { category: 'LinkedIn', date: 'Mar 28, 2025', title: 'LinkedIn Lead Generation: A Complete Playbook for B2B Businesses', excerpt: 'Master LinkedIn lead generation with organic content, LinkedIn Ads, and automation strategies that turn connections into clients.', image: insight_hero3 },
]

const categoryColors: Record<string, string> = {
  SEO: '#0D5EF6', 'Social Media': '#04B9CA', PPC: '#7C3AED',
  Content: '#F59E0B', 'Meta Ads': '#EF4444', LinkedIn: '#0A66C2',
}

export default function Insights() {
  const [selectedCat, setSelectedCat] = useState('All')
  const cats = ['All', ...Object.keys(categoryColors)]
  const filtered = selectedCat === 'All' ? posts : posts.filter(p => p.category === selectedCat)

  return (
    <main className="bg-black">
      {/* Hero */}
      <section className="pt-40 pb-28 px-8 text-center relative overflow-hidden">
        {/* Full-width Background Image & Soft Gradient Overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img src={insights_hero} alt="Insights" className='w-full h-full object-cover' />
          {/* Black Overlap Mask */}
          <div className="absolute inset-0 bg-black/20" />
          {/* Subtle gradient overlays to dissolve edges into the black theme */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
        </div>
        {/* Hero Content */}
        <div className="max-w-[900px] mx-auto relative z-10">
          <div data-aos="fade-down" className="inline-block font-mono text-[0.72rem] tracking-[0.2em] uppercase text-primary bg-white border border-primary/15 rounded-full px-4 py-1.5 mb-6">
            Knowledge Hub
          </div>
          <h1 data-aos="fade-up" className="font-display font-bold text-[clamp(2.5rem,6vw,4.5rem)] text-white tracking-tighter leading-[1.1] mb-6">
            Latest Insights & <span className="gradient-text">Thought Leadership</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="150" className="text-white/65 leading-relaxed text-lg lg:text-xl">
            Stay updated with the latest trends, insights, and best practices in digital marketing.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="bg-black pb-12 px-8 py-12">
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
                <div
                  className="h-56 flex items-center justify-center relative overflow-hidden"
                  style={{ background: `linear-gradient(135deg, ${categoryColors[post.category]}15, ${categoryColors[post.category]}05)` }}
                >
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-700" />
                  <div className="absolute inset-0 grid-pattern opacity-30 pointer-events-none mix-blend-overlay" />
                </div>

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
                  <h3 className="font-display font-bold text-white text-xl leading-tight mb-4 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="font-body text-white/55 text-[0.9rem] leading-relaxed mb-8 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    to="/insights"
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
