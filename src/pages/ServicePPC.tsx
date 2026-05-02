import ServicePageTemplate from './ServicePageTemplate'

export default function ServicePPC() {
  return (
    <ServicePageTemplate
      title="Pay-Per-Click\nAdvertising"
      subtitle="PPC Management"
      description="Drive instant, highly targeted traffic to your business with expertly managed Google Ads campaigns that maximize ROI and minimize wasted spend."
      color="#7C3AED"
      whatWeOffer={[
        { title: 'Google Search Ads', desc: 'Appear at the top of Google search results when potential customers are actively looking for your products or services.' },
        { title: 'Display Advertising', desc: 'Reach your target audience across millions of websites with visually engaging banner and display ads.' },
        { title: 'Shopping Campaigns', desc: 'Showcase your products directly in Google Shopping results with optimized product listings and bidding.' },
        { title: 'YouTube Ads', desc: 'Engage potential customers with compelling video ads on YouTube and across the Google Video Network.' },
        { title: 'Remarketing Campaigns', desc: 'Re-engage visitors who showed interest but did not convert with personalized retargeting ads.' },
        { title: 'Conversion Optimization', desc: 'Continuously improve ad copy, landing pages, and bidding strategies to lower CPA and increase ROAS.' },
      ]}
      steps={[
        { number: '01', title: 'Account Audit & Setup', desc: 'Full audit of existing campaigns or fresh account setup with proper tracking, conversion goals, and audience segments.' },
        { number: '02', title: 'Campaign Strategy', desc: 'Build a data-driven PPC strategy with keyword research, competitor analysis, and budget allocation.' },
        { number: '03', title: 'Launch & Monitor', desc: 'Launch campaigns with A/B tested ad copies and landing pages, monitoring performance from day one.' },
        { number: '04', title: 'Optimize & Scale', desc: 'Weekly optimizations — bid adjustments, negative keywords, ad rotation — to maximize ROI and scale winners.' },
      ]}
      pricing={[
        {
          name: 'Starter',
          price: '₹10,000',
          originalPrice: '₹18,000',
          features: ['Ad spend up to ₹30,000', 'Google Search campaigns', 'Up to 3 ad groups', 'Monthly optimization', 'Basic reporting', 'Call tracking setup'],
        },
        {
          name: 'Business',
          price: '₹22,000',
          badge: '⭐ Most Popular',
          recommended: true,
          features: ['Ad spend up to ₹1,00,000', 'Search + Display + Remarketing', 'Up to 10 ad groups', 'Weekly optimization', 'Landing page optimization', 'Conversion tracking', 'Bi-weekly reporting', 'Dedicated PPC manager'],
        },
        {
          name: 'Enterprise',
          price: '₹45,000',
          features: ['Unlimited ad spend', 'Full Google ecosystem (Search, Display, Shopping, YouTube)', 'Unlimited ad groups', 'Daily monitoring', 'Full funnel optimization', 'Custom dashboards', 'Daily reporting', 'Senior strategist access'],
        },
      ]}
    />
  )
}
