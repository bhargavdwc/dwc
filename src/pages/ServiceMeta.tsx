import ServicePageTemplate from './ServicePageTemplate'

export default function ServiceMeta() {
  return (
    <ServicePageTemplate
      title="Meta Ads\nManagement"
      subtitle="Facebook & Instagram Ads"
      description="Reach billions of potential customers on Facebook and Instagram with creative, data-driven Meta ad campaigns that drive awareness, leads, and sales."
      color="#F59E0B"
      whatWeOffer={[
        { title: 'Facebook Ads', desc: 'Precision-targeted Facebook ad campaigns that reach your ideal customers based on demographics, interests, and behaviors.' },
        { title: 'Instagram Ads', desc: 'Visually stunning Instagram ads — Stories, Reels, Feed — that capture attention and drive action.' },
        { title: 'Audience Building', desc: 'Create laser-targeted Custom Audiences and Lookalike Audiences to maximize ad relevance and efficiency.' },
        { title: 'Lead Generation Ads', desc: 'Native lead forms that capture high-quality leads directly on Facebook and Instagram without leaving the platform.' },
        { title: 'E-Commerce Campaigns', desc: 'Dynamic product ads, catalog campaigns, and retargeting funnels optimized for online sales.' },
        { title: 'Creative Strategy', desc: 'Data-backed creative testing — images, videos, carousels — to find what resonates most with your audience.' },
      ]}
      steps={[
        { number: '01', title: 'Pixel & Account Setup', desc: 'Install Meta Pixel, set up conversions API, and configure your Business Manager for accurate tracking.' },
        { number: '02', title: 'Audience Research', desc: "Identify and build your target audiences using Facebook's powerful interest and behavior targeting." },
        { number: '03', title: 'Creative Production', desc: 'Design high-performing ad creatives with compelling copy, eye-catching visuals, and strong CTAs.' },
        { number: '04', title: 'Test, Optimize & Scale', desc: 'Launch multiple ad variations, identify winners through A/B testing, and scale profitable campaigns.' },
      ]}
      pricing={[
        {
          name: 'Starter',
          price: '₹10,000',
          features: ['Ad spend up to ₹25,000', 'Facebook + Instagram', '2 campaigns', 'Basic audience targeting', '3 ad creatives/month', 'Monthly reporting'],
        },
        {
          name: 'Growth',
          price: '₹20,000',
          badge: '⭐ Most Popular',
          recommended: true,
          features: ['Ad spend up to ₹75,000', 'Full Meta ecosystem', '5 campaigns + retargeting', 'Custom + Lookalike audiences', '8 ad creatives/month', 'Lead gen setup', 'Bi-weekly reporting', 'Dedicated manager'],
        },
        {
          name: 'Enterprise',
          price: '₹40,000',
          features: ['Unlimited ad spend', 'All Meta placements', 'Unlimited campaigns', 'Advanced audience strategy', 'Unlimited creatives', 'Full funnel + eCommerce', 'Daily monitoring', 'Creative team access'],
        },
      ]}
    />
  )
}
