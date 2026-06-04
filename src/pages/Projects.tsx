import { Link } from 'react-router-dom'

const projects = [
  { title: 'Ganesh Green — Real Estate SEO', category: 'SEO + Content', industry: 'Real Estate', result: '+340% Organic Traffic', color: '#0D5EF6', bg: 'from-blue-900 to-blue-700', type: 'seo' },
  { title: 'Hello Realty — Meta Ads', category: 'Meta Ads + PPC', industry: 'Real Estate', result: '5x ROAS Achieved', color: '#04B9CA', bg: 'from-cyan-900 to-cyan-700', type: 'meta' },
  { title: 'Pride Eco — SMM Campaign', category: 'Social Media', industry: 'Sustainability', result: '280% Engagement Boost', color: '#7C3AED', bg: 'from-purple-900 to-purple-700', type: 'smm' },
  { title: 'UrbanCo — Full Digital Strategy', category: 'SEO + PPC + SMM', industry: 'E-Commerce', result: '₹1.2Cr Revenue Generated', color: '#F59E0B', bg: 'from-yellow-900 to-yellow-700', type: 'ecommerce' },
  { title: 'TechBridge — LinkedIn B2B', category: 'LinkedIn Marketing', industry: 'Technology', result: '150 Qualified Leads/Mo', color: '#0A66C2', bg: 'from-indigo-900 to-indigo-700', type: 'linkedin' },
  { title: 'BrandForce — Website + SEO', category: 'Web Dev + SEO', industry: 'Agency', result: 'Page 1 for 45 Keywords', color: '#EF4444', bg: 'from-red-900 to-red-700', type: 'webdev' },
]

function renderProjectVisual(type: string, color: string) {
  switch (type) {
    case 'seo':
      return (
        <div className="relative w-full h-full flex flex-col justify-end p-6 overflow-hidden bg-black/40">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(13,94,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(13,94,246,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
          {/* SEO Search box mockup */}
          <div className="absolute top-6 left-6 right-6 bg-zinc-900/90 border border-white/5 rounded-xl px-4 py-2.5 flex items-center gap-3 backdrop-blur-md z-10 transition-transform duration-500 group-hover:-translate-y-1">
            <span className="text-primary text-sm font-mono font-bold select-none">Google</span>
            <div className="h-4 w-[1px] bg-white/10" />
            <span className="text-white text-xs font-mono truncate select-none">ganesh green real estate</span>
            <svg className="w-3.5 h-3.5 text-primary ml-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          {/* SEO Graph Visual */}
          <div className="relative w-full h-24 flex items-end">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 300 100" preserveAspectRatio="none">
              <defs>
                <linearGradient id="seoGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0D5EF6" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#0D5EF6" stopOpacity="0.0" />
                </linearGradient>
              </defs>
              {/* Path of organic traffic growth */}
              <path 
                d="M 0 90 Q 50 85 100 65 T 200 45 T 300 10" 
                fill="none" 
                stroke="#0D5EF6" 
                strokeWidth="3.5" 
                style={{ filter: 'drop-shadow(0 0 8px rgba(13,94,246,0.6))' }}
              />
              <path d="M 0 90 Q 50 85 100 65 T 200 45 T 300 10 L 300 100 L 0 100 Z" fill="url(#seoGrad)" />
            </svg>
            {/* Glowing nodes */}
            <div className="absolute bottom-[90px] right-[4px] w-3 h-3 rounded-full bg-[#0D5EF6] shadow-[0_0_12px_#0D5EF6] animate-ping" />
            <div className="absolute bottom-[90px] right-[4px] w-2 h-2 rounded-full bg-[#0D5EF6] shadow-[0_0_8px_#0D5EF6]" />
          </div>
        </div>
      )
    case 'meta':
      return (
        <div className="relative w-full h-full flex items-center justify-center p-6 overflow-hidden bg-black/40">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(4,185,202,0.03)_1px,transparent_1px)] bg-[size:16px_16px]" />
          {/* Ad Targeting Graphic */}
          <div className="relative w-28 h-28 flex items-center justify-center">
            {/* Targets rings */}
            <div className="absolute w-28 h-28 rounded-full border border-cyan/10 animate-[ping_6s_infinite_linear]" />
            <div className="absolute w-20 h-20 rounded-full border border-cyan/20 animate-[spin_20s_linear_infinite]" />
            <div className="absolute w-12 h-12 rounded-full border border-cyan/40 flex items-center justify-center">
              <svg className="w-5 h-5 text-cyan animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </div>
            {/* Target dots */}
            <div className="absolute top-[10%] left-[20%] w-1.5 h-1.5 rounded-full bg-cyan shadow-[0_0_8px_#04B9CA]" />
            <div className="absolute bottom-[15%] right-[25%] w-1.5 h-1.5 rounded-full bg-cyan shadow-[0_0_8px_#04B9CA]" />
            <div className="absolute top-[50%] right-[5%] w-1.5 h-1.5 rounded-full bg-cyan shadow-[0_0_8px_#04B9CA]" />
          </div>
          {/* Small Floating Likes Overlay */}
          <div className="absolute bottom-6 left-6 bg-zinc-900/90 border border-white/5 rounded-xl px-3 py-1.5 flex items-center gap-1.5 backdrop-blur-md transition-transform duration-500 group-hover:translate-x-1">
            <span className="text-xs">❤️</span>
            <span className="text-[10px] font-mono text-zinc-400">4.8k Likes</span>
          </div>
        </div>
      )
    case 'smm':
      return (
        <div className="relative w-full h-full flex flex-col justify-end p-6 overflow-hidden bg-black/40">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(124,58,237,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(124,58,237,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />
          {/* SMM Engagement Waves */}
          <div className="relative w-full h-24 flex items-end justify-center">
            {/* Floating Hearts/Engagement Bubbles */}
            <div className="absolute bottom-12 left-1/4 w-8 h-8 rounded-full bg-purple/10 border border-purple/30 flex items-center justify-center animate-[float_4s_infinite_ease-in-out]">
              <span className="text-xs">💬</span>
            </div>
            <div className="absolute bottom-20 right-1/4 w-7 h-7 rounded-full bg-purple/10 border border-purple/30 flex items-center justify-center animate-[float_5s_infinite_ease-in-out_1s]">
              <span className="text-xs">✨</span>
            </div>
            {/* Symmetrical bar chart */}
            <div className="flex gap-3.5 items-end relative z-10 w-full justify-center">
              {[30, 45, 90, 60, 75, 40].map((val, idx) => (
                <div key={idx} className="w-2 bg-zinc-900 rounded-full h-16 flex items-end">
                  <div 
                    className="w-full rounded-full transition-all duration-700" 
                    style={{ 
                      height: `${val}%`, 
                      backgroundColor: '#7C3AED',
                      boxShadow: '0 0 10px #7C3AED',
                    }} 
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )
    case 'ecommerce':
      return (
        <div className="relative w-full h-full flex items-center justify-center p-6 overflow-hidden bg-black/40">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(245,158,11,0.03)_1px,transparent_1px)] bg-[size:18px_18px]" />
          <div className="absolute inset-0 bg-radial-gradient from-amber/5 via-transparent to-transparent opacity-60 pointer-events-none" />
          
          {/* Revenue Bag / Cart Graphic */}
          <div className="relative flex flex-col items-center gap-2">
            <div className="w-16 h-16 rounded-2xl bg-amber/10 border border-amber/30 flex items-center justify-center relative shadow-[0_0_20px_rgba(245,158,11,0.1)] transition-transform duration-500 group-hover:scale-105">
              <div className="absolute inset-0 rounded-2xl bg-amber/20 animate-pulse pointer-events-none" />
              <svg className="w-8 h-8 text-amber" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.116 60.116 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
              </svg>
            </div>
            {/* Floating Coins */}
            <div className="absolute top-[-10px] left-[-20px] w-6 h-6 rounded-full bg-zinc-900 border border-amber/40 flex items-center justify-center font-mono text-[9px] text-amber font-bold animate-[float_4s_infinite_ease-in-out]">₹</div>
            <div className="absolute bottom-[10px] right-[-20px] w-5 h-5 rounded-full bg-zinc-900 border border-amber/40 flex items-center justify-center font-mono text-[8px] text-amber font-bold animate-[float_5s_infinite_ease-in-out_0.5s]">₹</div>
          </div>
        </div>
      )
    case 'linkedin':
      return (
        <div className="relative w-full h-full flex items-center justify-center p-6 overflow-hidden bg-black/40">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(10,102,194,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(10,102,194,0.03)_1px,transparent_1px)] bg-[size:15px_15px]" />
          {/* B2B Mesh connection graphic */}
          <div className="relative w-32 h-24 flex items-center justify-center">
            {/* Mesh path */}
            <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 120 80">
              <path d="M 20 20 L 60 40 L 100 20 M 60 40 L 60 70 M 20 20 L 60 70 L 100 20" fill="none" stroke="rgba(10,102,194,0.2)" strokeWidth="1.5" />
            </svg>
            {/* Nodes */}
            <div className="absolute top-[10px] left-[10px] w-4 h-4 rounded-full bg-zinc-900 border border-[#0A66C2] flex items-center justify-center font-mono text-[7px] text-[#0A66C2] font-bold">B2B</div>
            <div className="absolute top-[10px] right-[10px] w-4 h-4 rounded-full bg-zinc-900 border border-[#0A66C2] flex items-center justify-center font-mono text-[7px] text-[#0A66C2] font-bold">HQ</div>
            <div className="absolute top-[32px] left-[52px] w-5 h-5 rounded-full bg-zinc-900 border border-[#0A66C2]/60 flex items-center justify-center font-mono text-[7px] text-[#0A66C2] font-bold shadow-[0_0_8px_rgba(10,102,194,0.3)] animate-pulse">Lead</div>
            <div className="absolute bottom-[2px] left-[52px] w-4 h-4 rounded-full bg-zinc-900 border border-[#0A66C2] flex items-center justify-center font-mono text-[7px] text-[#0A66C2] font-bold">ROI</div>
          </div>
        </div>
      )
    case 'webdev':
      return (
        <div className="relative w-full h-full flex flex-col justify-end p-6 overflow-hidden bg-black/40">
          <div className="absolute inset-0 bg-[radial-gradient(rgba(239,68,68,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
          {/* Web Browser Frame Mockup */}
          <div className="absolute top-6 left-6 right-6 bottom-10 bg-zinc-950/80 border border-white/5 rounded-xl overflow-hidden backdrop-blur-md z-10 transition-transform duration-500 group-hover:-translate-y-1 flex flex-col shadow-2xl">
            {/* Browser top header */}
            <div className="h-6 bg-zinc-900 px-3 flex items-center gap-1.5 border-b border-white/5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#EF4444]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#F59E0B]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <div className="h-3 w-28 bg-black/40 rounded-full ml-4" />
            </div>
            {/* Browser inner code mockup */}
            <div className="p-3 font-mono text-[8px] text-zinc-500 text-left flex flex-col gap-1 select-none">
              <span className="text-[#EF4444]">&lt;div className="portfolio"&gt;</span>
              <span className="text-zinc-300 pl-3">  &lt;h1&gt;Page 1 Rank&lt;/h1&gt;</span>
              <span className="text-primary pl-3">  &lt;SearchEngineOptimized /&gt;</span>
              <span className="text-[#EF4444]">&lt;/div&gt;</span>
            </div>
          </div>
        </div>
      )
    default:
      return null
  }
}

export default function Projects() {
  return (
    <main className="bg-black">
      {/* Hero */}
      <section className="pt-40 pb-28 px-8 text-center relative overflow-hidden">
        {/* Full-width Background Image & Soft Gradient Overlay */}
        <div className="absolute inset-0 z-0 select-none pointer-events-none">
          <img
            src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1600&auto=format&fit=crop&q=80"
            alt="Business analytics data visualization background"
            className="w-full h-full object-cover"
          />
          {/* Black Overlap Mask */}
          <div className="absolute inset-0 bg-black/20" />
          {/* Subtle gradient overlays to dissolve edges into the black theme */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
        </div>

        <div className="max-w-[900px] mx-auto relative z-10">
          <div data-aos="fade-down" className="inline-block font-mono text-[0.8rem] tracking-[0.2em] uppercase text-primary bg-primary/8 border border-primary/20 rounded-full px-5 py-1.5 mb-6">
            Our Work
          </div>
          <h1 data-aos="fade-up" className="font-display font-bold text-[clamp(2.5rem,6vw,4.5rem)] text-white tracking-tighter leading-[1.1] mb-6">
            Success Stories & <span className="gradient-text">Client Impact</span>
          </h1>
          <p data-aos="fade-up" data-aos-delay="150" className="font-body text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
            Discover how we've helped businesses across industries achieve measurable digital transformation goals.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="bg-black py-12 px-8 relative overflow-hidden">
        {/* Subtle mesh background glows */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[500px] h-[500px] bg-cyan/5 rounded-full blur-[140px] pointer-events-none z-0" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          {/* Centered Heading */}
          <div className="text-center mb-20">
            <div data-aos="fade-up" className="inline-block font-mono text-[0.8rem] tracking-[0.2em] uppercase text-primary bg-primary/8 border border-primary/20 rounded-full px-5 py-1.5 mb-6">
              Our Showcase
            </div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-white tracking-tight mb-6" data-aos="fade-up">
              Proven Results for <span className="gradient-text">Growing Brands</span>
            </h2>
            <p className="font-body text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Explore our curated selection of case studies demonstrating high-performance search campaigns, creative social marketing, and state-of-the-art web products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={`${i * 80}`}
                className="group relative flex flex-col h-full bg-zinc-950/80 rounded-xl overflow-hidden border border-white/5 transition-all duration-500 hover:-translate-y-2 no-splash"
                style={{
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 20px 40px -10px ${project.color}25`
                  e.currentTarget.style.borderColor = `${project.color}40`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'
                }}
              >
                {/* Visual Preview Section (Top) */}
                <div className="relative h-48 md:h-52 w-full overflow-hidden bg-black/30 border-b border-white/5">
                  {renderProjectVisual(project.type, project.color)}
                  {/* Glowing mask at hover */}
                  <div className="absolute -inset-1 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10" style={{ backgroundColor: `${project.color}08` }} />
                </div>

                {/* Content Section (Bottom) */}
                <div className="p-8 flex flex-col flex-grow justify-between relative z-10">
                  <div className="flex justify-between items-start gap-4 mb-6">
                    <span 
                      className="font-mono text-[0.7rem] font-bold tracking-widest uppercase rounded-full px-4 py-1.5 border"
                      style={{ color: project.color, borderColor: `${project.color}20`, background: `${project.color}08` }}
                    >
                      {project.category}
                    </span>
                    <span className="font-body text-[0.7rem] font-bold text-zinc-400 bg-white/5 rounded-full px-4 py-1.5 uppercase tracking-widest">
                      {project.industry}
                    </span>
                  </div>
                  
                  <div className="flex-grow flex flex-col justify-between">
                    <h3 
                      className="font-display font-bold text-white text-xl lg:text-2xl mb-6 leading-tight transition-colors duration-300"
                      style={{ color: '#ffffff' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = project.color }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = '#ffffff' }}
                    >
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-auto border-t border-white/5 pt-5">
                      <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: project.color, boxShadow: `0 0 8px ${project.color}` }} />
                      <span className="font-display font-bold text-base lg:text-lg" style={{ color: project.color }}>
                        {project.result}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link 
              to="/contact" 
              data-cursor="button" 
              className="inline-flex items-center gap-3 text-white font-display font-bold px-10 py-4 rounded-full border border-white/10 bg-zinc-900/50 hover:bg-zinc-900 transition-all duration-300 hover:border-white/20"
            >
              Show All Projects
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Process / Methodology Framework */}
      <section className="bg-black py-12 px-8 relative overflow-hidden border-t border-white/5">
        {/* Subtle mesh background glows */}
        <div className="absolute top-1/3 right-1/4 translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute bottom-1/3 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-cyan/5 rounded-full blur-[140px] pointer-events-none z-0" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          {/* Centered Heading */}
          <div className="text-center mb-20">
            <div data-aos="fade-up" className="inline-block font-mono text-[0.8rem] tracking-[0.2em] uppercase text-primary bg-primary/8 border border-primary/20 rounded-full px-5 py-1.5 mb-6">
              Our Framework
            </div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-white tracking-tight mb-6" data-aos="fade-up">
              How We Deliver <span className="gradient-text">Impact</span>
            </h2>
            <p className="font-body text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              Our structured, data-driven approach translates ambitious digital strategy into scalable and measurable client success.
            </p>
          </div>

          {/* Process Steps Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Audit & Discover',
                desc: 'We perform keyword gap audits, competitor analyses, and pixel tracking reviews to map the exact territory.',
                color: '#0D5EF6',
              },
              {
                step: '02',
                title: 'Campaign Blueprint',
                desc: 'We formulate the precise bidding setups, SMM demographic triggers, and search structural maps.',
                color: '#04B9CA',
              },
              {
                step: '03',
                title: 'Precision Launch',
                desc: 'Deploying high-converting ad assets, optimized search code, and active tracking structures.',
                color: '#7C3AED',
              },
              {
                step: '04',
                title: 'Continuous Scale',
                desc: 'Real-time bid adjustments, keyword scaling, and automated triggers to multiply business ROI.',
                color: '#F59E0B',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={`${idx * 100}`}
                className="group relative flex flex-col justify-between bg-zinc-950/80 rounded-xl border border-white/5 p-8 transition-all duration-500 hover:-translate-y-1.5 no-splash h-64"
                style={{
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 20px 40px -10px ${item.color}20`
                  e.currentTarget.style.borderColor = `${item.color}30`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'
                }}
              >
                <div className="flex justify-between items-start">
                  <span className="font-mono text-3xl font-black text-white/10 group-hover:text-white transition-colors duration-300">
                    {item.step}
                  </span>
                  <div 
                    className="w-2 h-2 rounded-full transition-all duration-300"
                    style={{ backgroundColor: item.color, boxShadow: `0 0 10px ${item.color}` }}
                  />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-lg md:text-xl mb-3 tracking-wide transition-colors duration-300 group-hover:text-white">
                    {item.title}
                  </h3>
                  <p className="font-body text-zinc-400 text-[13px] leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact in Numbers */}
      <section className="bg-black py-12 px-8 relative overflow-hidden border-t border-white/5">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[140px] pointer-events-none z-0" />

        <div className="max-w-[1400px] mx-auto relative z-10">
          {/* Centered Heading */}
          <div className="text-center mb-20">
            <div data-aos="fade-up" className="inline-block font-mono text-[0.8rem] tracking-[0.2em] uppercase text-cyan bg-cyan/8 border border-cyan/20 rounded-full px-5 py-1.5 mb-6">
              Our Track Record
            </div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-white tracking-tight mb-6" data-aos="fade-up">
              Impact in <span className="gradient-text">Numbers</span>
            </h2>
            <p className="font-body text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              The real weight of our partnerships is measured by the scale of growth we generate every single quarter.
            </p>
          </div>

          {/* Symmetrical Bento Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                metric: '+340%',
                label: 'Avg Organic Traffic Growth',
                desc: 'Consistently ranking clients in competitive local & international markets.',
                color: '#0D5EF6',
              },
              {
                metric: '5x ROAS',
                label: 'Paid Advertising Yield',
                desc: 'Direct revenue generation driven by strategic audience targeting.',
                color: '#04B9CA',
              },
              {
                metric: '95%',
                label: 'Client Growth Retention',
                desc: 'Partnerships backed by transparent reporting and recurring ROI.',
                color: '#7C3AED',
              },
            ].map((stat, idx) => (
              <div
                key={idx}
                data-aos="fade-up"
                data-aos-delay={`${idx * 100}`}
                className="group relative flex flex-col justify-between bg-zinc-950/80 rounded-xl border border-white/5 p-8 transition-all duration-500 hover:-translate-y-1.5 no-splash h-72 text-center items-center"
                style={{
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 20px 40px -10px ${stat.color}20`
                  e.currentTarget.style.borderColor = `${stat.color}30`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'
                }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 relative"
                  style={{ background: `${stat.color}08`, border: `1px solid ${stat.color}15` }}
                >
                  <div className="w-2.5 h-2.5 rounded-full animate-pulse" style={{ backgroundColor: stat.color, boxShadow: `0 0 10px ${stat.color}` }} />
                </div>
                <div>
                  <div className="text-4xl md:text-5xl font-black font-display tracking-tight mb-2 select-none" style={{ color: stat.color, filter: `drop-shadow(0 0 10px ${stat.color}15)` }}>
                    {stat.metric}
                  </div>
                  <h3 className="font-display font-bold text-white text-base md:text-lg mb-2">
                    {stat.label}
                  </h3>
                  <p className="font-body text-zinc-500 text-xs md:text-sm leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              </div>
            ))}
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
