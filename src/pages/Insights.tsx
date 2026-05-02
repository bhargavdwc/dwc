import { useState } from 'react'
import { Link } from 'react-router-dom'

const posts = [
  { category: 'SEO', date: 'Apr 28, 2025', title: 'The Ultimate Guide to Local SEO for Ahmedabad Businesses in 2025', excerpt: 'Learn how to dominate local search results and attract customers right in your neighborhood with these proven Local SEO strategies.' },
  { category: 'Social Media', date: 'Apr 20, 2025', title: 'Instagram Reels vs. TikTok: Where Should Your Brand Focus in 2025?', excerpt: 'A data-driven comparison of Instagram Reels and TikTok performance to help you decide where to invest your short-form video content strategy.' },
  { category: 'PPC', date: 'Apr 15, 2025', title: 'Google Ads Smart Bidding Strategies That Actually Work', excerpt: 'Discover the most effective Smart Bidding strategies in Google Ads and how to set them up for maximum ROAS with real-world examples.' },
  { category: 'Content', date: 'Apr 10, 2025', title: 'How AI is Changing Content Marketing in 2025 (And What It Means for You)', excerpt: 'Explore how AI tools are transforming content creation, SEO, and digital marketing — and how to stay ahead of the curve.' },
  { category: 'Meta Ads', date: 'Apr 05, 2025', title: 'Facebook Ads Are Still Powerful: Here\'s How to Make Them Work', excerpt: 'Meta Ads continue to deliver strong ROI when done right. Here are the strategies top brands are using to win on Facebook and Instagram.' },
  { category: 'LinkedIn', date: 'Mar 28, 2025', title: 'LinkedIn Lead Generation: A Complete Playbook for B2B Businesses', excerpt: 'Master LinkedIn lead generation with organic content, LinkedIn Ads, and automation strategies that turn connections into clients.' },
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
    <main className="bg-white">
      {/* Hero */}
      <section className="pt-40 pb-24 px-8 bg-white text-center relative noise-overlay overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1000px] max-h-[1000px] bg-primary/5 rounded-full blur-[120px] -z-10" />
        <div className="relative z-10 max-w-[800px] mx-auto">
          <div data-aos="fade-down" className="inline-block font-mono text-[0.72rem] tracking-[0.2em] uppercase text-primary bg-primary/8 border border-primary/15 rounded-full px-4 py-1.5 mb-6">
            Knowledge Hub
          </div>
          <h1 data-aos="fade-up" className="font-display font-bold text-[clamp(2.5rem,6vw,4.5rem)] text-dark tracking-tighter leading-[1.1] mb-6">
            Latest Insights & <span className="gradient-text">Thought Leadership</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="150" className="text-dark/65 leading-relaxed text-lg lg:text-xl">
            Stay updated with the latest trends, insights, and best practices in digital marketing.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="bg-white pb-12 px-8">
        <div className="max-w-[1200px] mx-auto flex gap-3 flex-wrap justify-center">
          {cats.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-6 py-2 rounded-full font-display font-bold text-sm transition-all duration-300 ${
                selectedCat === cat 
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
      <section className="bg-[#f8faff] py-24 px-8 noise-overlay">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post, i) => (
              <article
                key={i}
                data-aos="fade-up"
                data-aos-delay={`${i * 80}`}
                className="group bg-white rounded-[32px] overflow-hidden border border-primary/8 transition-all duration-500 shadow-[0_10px_30px_rgba(13,94,246,0.03)] hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Image area */}
                <div 
                  className="h-56 flex items-center justify-center relative overflow-hidden transition-all duration-500 group-hover:h-60" 
                  style={{ background: `linear-gradient(135deg, ${categoryColors[post.category]}15, ${categoryColors[post.category]}05)` }}
                >
                  <div className="grid-pattern absolute inset-0 opacity-10" />
                  <span className="text-6xl transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6">
                    {post.category === 'SEO' ? '🔍' : post.category === 'Social Media' ? '📱' : post.category === 'PPC' ? '💰' : post.category === 'Content' ? '✍️' : post.category === 'Meta Ads' ? '🎯' : '💼'}
                  </span>
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
                    <span className="font-mono text-[0.72rem] text-dark/40 font-medium">{post.date}</span>
                  </div>
                  <h3 className="font-display font-bold text-dark text-xl leading-tight mb-4 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="font-body text-dark/55 text-[0.9rem] leading-relaxed mb-8 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    to="/insights"
                    className="inline-flex items-center gap-2 font-display font-bold text-sm text-primary group/link"
                  >
                    Read Full Article
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-300 group-hover/link:translate-x-1">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-16">
            <button className="shimmer-btn inline-flex items-center gap-3 bg-brand-gradient text-dark font-display font-bold px-10 py-4 rounded-full no-underline shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              Load More Insights
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="bg-white py-20 px-8 text-center border-t border-primary/10 relative noise-overlay">
        <h2 data-aos="zoom-in" className="font-display font-bold text-[clamp(1.8rem,4vw,2.8rem)] text-dark tracking-tight mb-10 leading-tight">
          Ready to Grow Your <span className="gradient-text">Digital Presence?</span>
        </h2>
        <Link to="/contact" data-cursor="button" className="shimmer-btn inline-flex items-center gap-3 bg-brand-gradient text-dark font-display font-bold px-10 py-4 rounded-full no-underline shadow-[0_10px_30px_rgba(13,94,246,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(13,94,246,0.35)]">
          Start Your Journey
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </Link>
      </section>
    </main>
  )
}
