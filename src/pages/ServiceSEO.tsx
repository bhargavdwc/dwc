import ServicePageTemplate from './ServicePageTemplate'

export default function ServiceSEO() {
  return (
    <ServicePageTemplate
      title="Search Engine\nOptimization"
      subtitle="SEO Services"
      description="We help businesses grow with data-driven SEO strategies that deliver sustainable organic traffic growth, improved search rankings, and measurable ROI."
      color="#0D5EF6"
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
