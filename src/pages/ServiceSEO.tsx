import ServicePageTemplate from './ServicePageTemplate'

export default function ServiceSEO() {
  return (
    <ServicePageTemplate
      title="Search Engine\n Optimization"
      subtitle="SEO Services"
      description="We help businesses grow with data-driven SEO strategies that deliver sustainable organic traffic growth, improved search rankings, and measurable ROI."
      color="#0D5EF6"
      useImageTrail={true}
      imageTrailImages={[
        {
          src: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=480&q=80",
          alt: "Analytics dashboard showing charts and web traffic data"
        },
        {
          src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=480&q=80",
          alt: "SEO chart growth and website metrics on screen"
        },
        {
          src: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=480&q=80",
          alt: "SEO auditing dashboard displaying web analysis"
        },
        {
          src: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=480&q=80",
          alt: "Data analytics graphs and statistics sheet"
        },
        {
          src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=480&q=80",
          alt: "Team workspace with performance metrics and design sketches"
        },
        {
          src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=480&q=80",
          alt: "SEO strategy brainstorming session with digital marketers"
        },
        {
          src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=480&q=80",
          alt: "SEO search keyword planning and research on screen"
        },
        {
          src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=480&q=80",
          alt: "Team discussing digital marketing strategy and analytics graph"
        },
        {
          src: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=480&q=80",
          alt: "Presentation slide showing traffic conversion metrics and data"
        },
        {
          src: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=480&q=80",
          alt: "Workspace with SEO ranking charts on desktop screen"
        },
        {
          src: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=480&q=80",
          alt: "Web designer structuring site content layout for indexing"
        },
        {
          src: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=480&q=80",
          alt: "Launch data showing traffic growth trends"
        }
      ]}
      whatWeOffer={[
        { title: 'Technical SEO Audit', desc: 'Comprehensive audit of your website structure, speed, mobile optimization, and Core Web Vitals to eliminate ranking barriers.' },
        { title: 'Keyword Strategy', desc: 'In-depth keyword research to identify high-intent search terms your ideal customers are actively using.' },
        { title: 'On-Page Optimization', desc: 'Optimize title tags, meta descriptions, headings, content, and internal linking for maximum search visibility.' },
        { title: 'Content Marketing', desc: 'Create authoritative, SEO-optimized content that ranks, attracts backlinks, and converts visitors into leads.' },
        { title: 'Link Building', desc: 'Build high-quality backlinks from relevant, authoritative websites to boost your domain authority and rankings.' },
        { title: 'Local SEO', desc: 'Dominate local search results in Ahmedabad and across India with Google Business Profile optimization and local citations.' },
      ]}
      steps={[
        { number: '01', title: 'Free Consultation & Audit', desc: 'We analyze your current SEO performance, competitor landscape, and identify key growth opportunities.' },
        { number: '02', title: 'Strategy Development', desc: 'Our team builds a customized SEO roadmap with clear milestones, KPIs, and monthly deliverables.' },
        { number: '03', title: 'Implementation & Optimization', desc: 'We execute the strategy — technical fixes, content creation, link building — and continuously optimize.' },
        { number: '04', title: 'Reporting & Growth', desc: 'Monthly detailed reports with ranking improvements, traffic growth, and conversion data. We scale what works.' },
      ]}
      pricing={[
        {
          name: 'Starter',
          price: '₹15,000',
          originalPrice: '₹25,000',
          features: ['Up to 20 target keywords', 'Technical SEO audit', 'On-page optimization (5 pages)', 'Monthly reporting', 'Google Business Profile setup', 'Basic link building'],
        },
        {
          name: 'Business',
          price: '₹35,000',
          badge: '⭐ Most Popular',
          recommended: true,
          features: ['Up to 60 target keywords', 'Full technical SEO audit', 'On-page optimization (20 pages)', 'Content creation (4 blogs/mo)', 'Advanced link building (10 links/mo)', 'Competitor analysis', 'Weekly reporting', 'Dedicated SEO manager'],
        },
        {
          name: 'Enterprise',
          price: '₹65,000',
          features: ['Unlimited keywords', 'Comprehensive technical overhaul', 'Unlimited on-page optimization', 'Content strategy + 8 blogs/mo', 'Aggressive link building (25+ links/mo)', 'Full competitor monitoring', 'Real-time dashboard', 'Priority support'],
        },
      ]}
    />
  )
}
