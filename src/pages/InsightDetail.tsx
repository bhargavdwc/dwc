import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { posts, categoryColors } from './Insights'

// Detailed article content for each blog post
const articleDetails: Record<string, {
  readingTime: string;
  author: string;
  sections: Array<{
    type: 'paragraph' | 'heading' | 'list' | 'quote';
    content: string;
    items?: string[];
  }>;
}> = {
  'ultimate-guide-local-seo-ahmedabad-2025': {
    readingTime: '6 min read',
    author: 'Sagar Patel',
    sections: [
      {
        type: 'paragraph',
        content: 'Local search engine optimization (SEO) has transitioned from being an optional marketing strategy to an absolute necessity for businesses in Ahmedabad. With a booming economy and a rapid surge in digital adoption, local customers are searching for your services online every single day. If your business doesn\'t appear in the top results, you are directly giving away revenue to your competitors.'
      },
      {
        type: 'heading',
        content: '1. Claim and Optimize Your Google Business Profile (GBP)'
      },
      {
        type: 'paragraph',
        content: 'Your Google Business Profile is the absolute cornerstone of your local SEO presence. To fully optimize it, ensure your Name, Address, and Phone number (NAP) are 100% consistent with what is listed on your website and other public directories. Choose precise primary and secondary business categories, write a detailed business description utilizing local keywords (e.g., "best digital marketing agency in Prahladnagar"), and upload high-resolution photos of your office, products, or team weekly.'
      },
      {
        type: 'heading',
        content: '2. Build High-Quality Local Citations'
      },
      {
        type: 'paragraph',
        content: 'A citation is any online mention of your business name, address, and phone number. Building consistent citations across trusted directories in India (like Justdial, IndiaMART, and Sulekha) and niche industry-specific directories signals to search engine crawlers that your business is legitimate and active.'
      },
      {
        type: 'quote',
        content: 'Consistency is the gold standard of local search ranking. A single misspelling of your street name or a mismatched phone number across different directories can severely harm your domain credibility.'
      },
      {
        type: 'heading',
        content: '3. Focus on Review Acquisition and Engagement'
      },
      {
        type: 'paragraph',
        content: 'Reviews are one of the strongest ranking signals for Google\'s Local Map Pack. Establish a routine workflow to request reviews from satisfied clients immediately after a successful transaction. Always reply to reviews—both positive and negative—promptly and professionally, incorporating natural keywords where relevant.'
      },
      {
        type: 'list',
        content: 'Key Review Management Strategies:',
        items: [
          'Generate a direct Google Review shortcut link and share it via WhatsApp or email post-service.',
          'Respond to all reviews within 24 hours to show search algorithms that your business is highly responsive.',
          'Never purchase fake reviews; organic, steady feedback carries much higher algorithmic trust.'
        ]
      },
      {
        type: 'heading',
        content: 'Conclusion'
      },
      {
        type: 'paragraph',
        content: 'Dominating local search results in Ahmedabad doesn\'t happen overnight, but by consistently maintaining your Google Business Profile, acquiring fresh positive reviews, and building local citations, you will see a substantial boost in organic walk-ins and phone calls.'
      }
    ]
  },
  'instagram-reels-vs-tiktok-2025': {
    readingTime: '5 min read',
    author: 'Rahul Mehra',
    sections: [
      {
        type: 'paragraph',
        content: 'In 2025, short-form video continues to reign supreme as the highest-engagement content format on the internet. For brands operating globally, the choice between Instagram Reels and TikTok is one of the most critical decisions when structuring a creative social media marketing budget.'
      },
      {
        type: 'heading',
        content: 'Demographics and Audience Behavior'
      },
      {
        type: 'paragraph',
        content: 'While TikTok continues to capture the attention of Gen Z with its raw, authentic, and fast-paced ecosystem, Instagram Reels appeals to a slightly broader, mature demographic (millennials and Gen X) who appreciate polished, lifestyle-oriented content. If your product targets B2B buyers or high-income B2C consumers, Instagram Reels often yields better conversion rates.'
      },
      {
        type: 'heading',
        content: 'Algorithm Comparison'
      },
      {
        type: 'paragraph',
        content: 'TikTok\'s algorithm is highly interest-graph-driven, meaning that even a new account with zero followers can achieve millions of views if the content resonates with a highly specific subculture. In contrast, Instagram Reels relies more heavily on social graph signals (relationships, comments, and direct shares), making it excellent for fostering deep community engagement with existing followers.'
      },
      {
        type: 'quote',
        content: 'TikTok builds massive, viral viral reach; Instagram Reels builds sustainable, warm communities that convert into customers.'
      },
      {
        type: 'list',
        content: 'How to Choose Your Focus Area:',
        items: [
          'Choose TikTok if your brand thrives on fast-moving cultural trends, challenges, and raw user-generated content.',
          'Choose Instagram Reels if you already have an established business profile, rely heavily on aesthetic product visual showcases, and run shoppable social ads.',
          'Consider a hybrid cross-posting strategy, adjusting the editing style (more polished for Reels, raw/text-heavy for TikTok).'
        ]
      }
    ]
  },
  'google-ads-smart-bidding-strategies': {
    readingTime: '7 min read',
    author: 'Anjali Varma',
    sections: [
      {
        type: 'paragraph',
        content: 'Google Ads has evolved into a machine-learning-first platform. In 2025, advertisers who continue to rely solely on manual bidding are missing out on the efficiency and scale offered by Google\'s Smart Bidding framework. Smart Bidding optimizes for conversions or conversion value in real-time, utilizing hundreds of auction-time signals.'
      },
      {
        type: 'heading',
        content: 'Understanding Smart Bidding Types'
      },
      {
        type: 'paragraph',
        content: 'To achieve optimal results, you must match your campaign goals with the correct bidding strategy: Target CPA (Cost Per Acquisition) is ideal for keeping lead acquisition costs within a fixed budget; Target ROAS (Return on Ad Spend) works best for e-commerce stores looking to maximize order values; Maximize Conversions is great for spending your full budget while generating the highest volume of actions.'
      },
      {
        type: 'quote',
        content: 'Smart Bidding is only as smart as the data you feed it. Without clean conversion tracking, your campaigns will optimize for low-quality signals.'
      },
      {
        type: 'heading',
        content: 'Conversion Tracking Hygiene'
      },
      {
        type: 'paragraph',
        content: 'Before enabling smart bidding, verify that your conversion tracking is flawless. Implement Google Tag Manager correctly, set up enhanced conversions to capture hashed user data, and assign accurate monetary values to different conversion actions so the bidding algorithm can differentiate high-value customers from low-value leads.'
      },
      {
        type: 'list',
        content: 'Best Practices for Transitioning from Manual Bidding:',
        items: [
          'Start with a soft target: set your initial Target CPA or Target ROAS based on your historical average rather than an ambitious goal.',
          'Do not make major changes (budget adjustments over 20%) during the first 14 days of a new bidding strategy while the machine learning system learns.',
          'Monitor performance using the Bid Strategy Report in Google Ads to track learning status and optimization goals.'
        ]
      }
    ]
  },
  'how-ai-is-changing-content-marketing-2025': {
    readingTime: '6 min read',
    author: 'Kushal Shah',
    sections: [
      {
        type: 'paragraph',
        content: 'The content marketing landscape in 2025 has been completely reshaped by Generative AI. However, the initial hype of mass-producing cheap AI content has given way to a sophisticated "AI-assisted" hybrid model. Brands that win today are using AI not as a writer, but as an assistant.'
      },
      {
        type: 'heading',
        content: 'Search Engines and AI-Generated Content'
      },
      {
        type: 'paragraph',
        content: 'Google\'s search guidelines are clear: content is evaluated on its quality and helpfulness (E-E-A-T: Experience, Expertise, Authoritativeness, and Trustworthiness), regardless of how it is created. Simple AI-generated copies that add no original perspective are being penalized, while structured articles featuring proprietary data, expert quotes, and unique case studies continue to rank highly.'
      },
      {
        type: 'heading',
        content: 'The Hybrid Content Workflow'
      },
      {
        type: 'paragraph',
        content: 'Instead of letting AI write entire draft posts, high-performance content teams utilize generative models for outline generation, semantic keyword clustering, readability editing, and brainstorming creative hooks. The writing process itself is guided by human writers who insert authentic brand voice, real-world examples, and expert validation.'
      },
      {
        type: 'quote',
        content: 'AI can write a grammatically perfect article, but it cannot share a real client success story or express the passion behind your business mission.'
      },
      {
        type: 'list',
        content: 'How to AI-Proof Your Content Strategy:',
        items: [
          'Inject personal experience, screenshots, and custom diagrams that automated tools cannot replicate.',
          'Conduct original surveys or interviews within your industry and publish the raw findings.',
          'Focus on search intent matching: make sure your human-edited content answers the user\'s query faster and more thoroughly than generic search results.'
        ]
      }
    ]
  },
  'facebook-ads-still-powerful': {
    readingTime: '5 min read',
    author: 'Anjali Varma',
    sections: [
      {
        type: 'paragraph',
        content: 'Despite data tracking restrictions and shifting platform landscapes, Meta Ads remains one of the most powerful visual client acquisition engines in the world. By embracing machine learning and high-tempo creative iteration, brands are generating record-high return on ad spend (ROAS) in 2025.'
      },
      {
        type: 'heading',
        content: 'The Power of Advantage+ Campaigns'
      },
      {
        type: 'paragraph',
        content: 'Meta\'s Advantage+ Shopping and Creative suites automate audience targeting and placement selection. Rather than micro-managing details, advertisers achieve scale by feeding Meta\'s algorithm multiple visual assets and allowing the machine learning engine to find the highest-converting placements and audiences.'
      },
      {
        type: 'heading',
        content: 'Creative is the New Targeting'
      },
      {
        type: 'paragraph',
        content: 'Since standard audience lists have become less precise, the visual creative itself does the targeting. A video ad addressing B2B founders will naturally engage founders while other demographics swipe past. Focus your marketing budget on creative production—testing user-generated style videos, comparison graphics, and customer testimonials.'
      },
      {
        type: 'quote',
        content: 'Stop tweaking search parameters every day. Spend that time scripting three new video hook variations to test against your top-performing ad assets.'
      },
      {
        type: 'list',
        content: 'Meta Ads Optimization Checklist:',
        items: [
          'Utilize broad targeting (no interests or age constraints) for standard campaigns to allow the pixel maximum learning freedom.',
          'Test at least 3-5 distinct creative angles (e.g., emotional hook, logic hook, social proof) every week.',
          'Implement Meta Conversion API (CAPI) alongside the browser pixel to ensure data attribution accuracy.'
        ]
      }
    ]
  },
  'linkedin-lead-generation-playbook': {
    readingTime: '6 min read',
    author: 'Sagar Patel',
    sections: [
      {
        type: 'paragraph',
        content: 'For B2B businesses, LinkedIn is the ultimate business development goldmine. Generating high-quality leads on LinkedIn requires a balanced approach combining organic thought leadership and highly focused B2B paid campaigns.'
      },
      {
        type: 'heading',
        content: 'Optimizing for Conversions'
      },
      {
        type: 'paragraph',
        content: 'Before launching any outreach or advertising campaign, your personal profile or company page must act as a high-converting landing page. Your headline should clearly communicate the exact value you deliver (e.g., "Helping B2B SaaS companies scale from $1M to $10M ARR through paid search"), and your featured section should display link assets like case studies, free tool trials, or booking links.'
      },
      {
        type: 'heading',
        content: 'Organic Thought Leadership'
      },
      {
        type: 'paragraph',
        content: 'Consistency breeds trust. Share daily insights covering industry problems, breakdown reports of successful projects, and lessons learned. Do not write generic corporate updates; write with a personal tone, sharing the specific workflows and metrics your team executes.'
      },
      {
        type: 'quote',
        content: 'B2B clients do not buy from brands; they buy from experts who demonstrate a clear, repeatable process for solving their specific headaches.'
      },
      {
        type: 'list',
        content: 'LinkedIn Outreach & Advertising Plays:',
        items: [
          'Run LinkedIn Conversation Ads targeting specific job titles in your target industries with a low-friction offer (like a free audit).',
          'Use LinkedIn Lead Gen Forms in your campaigns, which auto-fill profile details and yield 3x higher conversion rates than external landing pages.',
          'Build an outreach sequence combining profile views, connection requests with short customized notes, and value-first follow-up messages.'
        ]
      }
    ]
  }
}

export default function InsightDetail() {
  const { slug } = useParams<{ slug: string }>()
  const [copied, setCopied] = useState(false)
  
  // Find the post details from Insights.tsx data
  const post = posts.find(p => p.slug === slug)
  const details = slug ? articleDetails[slug] : null

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (!post || !details) {
    return (
      <main className="bg-[#060B18] min-h-screen pt-40 pb-24 px-8 text-center flex flex-col items-center justify-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none z-0" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan/10 rounded-full blur-[150px] pointer-events-none z-0" />
        <div className="relative z-10">u
          <h1 className="font-display font-bold text-3xl text-white mb-6">Insight Not Found</h1>
          <p className="text-zinc-400 mb-8 max-w-md">The article you are looking for might have been moved or deleted.</p>
          <Link to="/insights" className="shimmer-btn inline-flex items-center gap-3 bg-brand-gradient text-dark font-display font-bold px-8 py-3.5 rounded-full shadow-lg">
            Back to Insights
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="bg-[#060B18] min-h-screen relative overflow-hidden">
      {/* Background visual elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute top-[40%] left-[-200px] w-[600px] h-[600px] bg-cyan/5 rounded-full blur-[150px] pointer-events-none z-0" />
      <div className="absolute inset-0 grid-pattern opacity-[0.03] pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto px-6 md:px-8 pt-28 pb-20 relative z-10">
        {/* Back Button */}
        <div className="mb-8">
          <Link
            to="/insights"
            className="inline-flex items-center gap-2 px-4 py-2 font-display font-bold text-xs uppercase tracking-wider text-zinc-400 hover:text-white border border-white/10 hover:border-primary/50 bg-white/5 hover:bg-primary/10 rounded-xl transition-all duration-300 group"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="transition-transform duration-300 group-hover:-translate-x-1">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Blogs
          </Link>
        </div>

        {/* Metadata Row */}
        <div className="flex items-center gap-6 flex-wrap font-mono text-[0.72rem] text-zinc-400 mb-6">
          <span
            className="font-mono text-[0.7rem] font-bold tracking-widest uppercase rounded-full px-4 py-1.5 border"
            style={{ color: categoryColors[post.category], borderColor: `${categoryColors[post.category]}30`, background: `${categoryColors[post.category]}0f` }}
          >
            {post.category}
          </span>
          
          <span className="flex items-center gap-2 text-zinc-400 font-medium">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            {post.date}
          </span>

          <span className="flex items-center gap-2 text-zinc-400 font-medium">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-zinc-500">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            {details.readingTime}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-8">
          {post.title}
        </h1>

        {/* Featured Image */}
        <div className="relative group overflow-hidden rounded-2xl border border-white/10 shadow-[0_20px_50px_rgba(13,94,246,0.12)] mb-12 select-none">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full aspect-[16/9] md:aspect-[21/9] object-cover transition-transform duration-700 group-hover:scale-[1.02]" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#060B18]/60 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* Article Body Content */}
        <div className="max-w-4xl flex flex-col gap-8 text-zinc-300 text-lg leading-relaxed font-body">
          {details.sections.map((section, idx) => {
            if (section.type === 'paragraph') {
              return <p key={idx} className="font-body text-zinc-300 text-lg leading-relaxed">{section.content}</p>
            }
            if (section.type === 'heading') {
              return (
                <h2 key={idx} className="font-display font-bold text-white text-2xl lg:text-3xl mt-10 mb-2 tracking-tight flex items-center gap-3 border-l-2 border-primary pl-4">
                  {section.content}
                </h2>
              )
            }
            if (section.type === 'quote') {
              return (
                <blockquote key={idx} className="border-l-4 border-primary bg-gradient-to-r from-primary/10 to-transparent rounded-r-xl px-8 py-6 font-display italic text-white text-xl my-6 relative overflow-hidden">
                  <span className="absolute -top-4 -left-2 text-[10rem] font-serif text-primary/10 select-none pointer-events-none">“</span>
                  <p className="relative z-10">"{section.content}"</p>
                </blockquote>
              )
            }
            if (section.type === 'list' && section.items) {
              return (
                <div key={idx} className="my-6 bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8">
                  <p className="font-display font-bold text-white text-xl mb-6">{section.content}</p>
                  <ul className="flex flex-col gap-4">
                    {section.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex gap-3 text-zinc-300 leading-relaxed text-[0.95rem]">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="text-cyan shrink-0 mt-0.5">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            }
            return null
          })}
        </div>

        {/* Author & Share Section */}
        <div className="border-t border-white/10 mt-16 pt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-8 max-w-4xl">
          {/* Author Card */}
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-primary to-cyan flex items-center justify-center text-white font-display font-bold text-xl shadow-lg shadow-primary/20">
              {details.author.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className="text-white font-display font-bold text-base leading-none mb-1.5">{details.author}</p>
              <p className="text-zinc-500 font-mono text-[0.7rem] uppercase tracking-wider">Expert Contributor, DWC</p>
            </div>
          </div>

          {/* Share widgets */}
          <div className="flex items-center gap-4">
            <span className="text-zinc-400 font-display font-semibold text-sm">Share this:</span>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(window.location.href)}`;
                  window.open(twitterUrl, '_blank');
                }}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                title="Share on Twitter"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v11A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </button>
              <button
                onClick={() => {
                  const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
                  window.open(linkedinUrl, '_blank');
                }}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                title="Share on LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" />
                </svg>
              </button>
              <button
                onClick={() => {
                  const fbUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
                  window.open(fbUrl, '_blank');
                }}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-300"
                title="Share on Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </button>
              <button
                onClick={handleCopy}
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 relative"
                title="Copy Link"
              >
                {copied && (
                  <span className="absolute -top-9 bg-primary text-white text-[0.7rem] font-mono py-1 px-2 rounded shadow-lg whitespace-nowrap">
                    Copied!
                  </span>
                )}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Footer Back Button */}
        <div className="border-t border-white/10 mt-16 pt-12 text-center max-w-4xl">
          <Link
            to="/insights"
            className="shimmer-btn inline-flex items-center gap-3 bg-brand-gradient text-dark font-display font-bold px-10 py-4 rounded-full shadow-lg transition-all duration-300 hover:-translate-y-1"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            View All Articles
          </Link>
        </div>
      </div>

      {/* CTA Strip */}
      <section className="relative py-12 px-8 bg-black overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto relative z-10 px-4 md:px-8">
          <div className="relative overflow-hidden bg-zinc-950/90 border border-white/5 rounded-2xl shadow-2xl py-12 px-6 md:px-10 flex flex-col items-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0" />
            <div className="absolute inset-0 grid-pattern opacity-25 z-0" />
            
            <div className="relative z-10 max-w-7xl mx-auto text-center flex flex-col items-center">
              <div data-aos="fade-up" className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs font-display font-semibold text-primary tracking-wider uppercase mb-6 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
                Let's Collaborate
              </div>

              <h2 data-aos="fade-up" data-aos-delay="100" className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 max-w-7xl">
                Ready to Become Our <span className="gradient-text">Next Success Story?</span>
              </h2>

              <p data-aos="fade-up" data-aos-delay="200" className="font-body text-zinc-400 text-sm md:text-base lg:text-lg leading-relaxed max-w-3xl mb-10">
                Partner with Digital Web Connection to build high-performance search campaigns, creative social marketing, and state-of-the-art web products that accelerate your business worldwide.
              </p>

              <div data-aos="fade-up" data-aos-delay="300" className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
                <Link
                  to="/contact"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-black hover:bg-zinc-100 transition-all duration-300 font-display font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  Let's Talk Business
                  <svg className="transform group-hover:translate-x-1 transition-transform duration-200" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>

                <Link
                  to="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/10 bg-zinc-900/50 hover:bg-zinc-900 text-white hover:text-white transition-all duration-300 font-display font-semibold px-8 py-4 rounded-full text-sm md:text-base"
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
