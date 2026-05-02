import ServicePageTemplate from './ServicePageTemplate'

export default function ServiceSMM() {
  return (
    <ServicePageTemplate
      title="Social Media\nMarketing"
      subtitle="SMM Services"
      description="Build a powerful brand presence, grow an engaged community, and drive real business results across Instagram, Facebook, LinkedIn, and more."
      color="#04B9CA"
      whatWeOffer={[
        { title: 'Social Media Strategy', desc: 'Custom content strategies tailored to your brand voice, target audience, and business goals.' },
        { title: 'Content Creation', desc: 'Stunning graphics, videos, reels, and carousels that stop the scroll and drive engagement.' },
        { title: 'Community Management', desc: 'Daily engagement with your audience — responding to comments, DMs, and building brand loyalty.' },
        { title: 'Influencer Partnerships', desc: 'Connect with relevant micro and macro influencers to amplify your brand reach authentically.' },
        { title: 'Social Media Ads', desc: 'Targeted paid social campaigns that maximize your reach and drive measurable conversions.' },
        { title: 'Analytics & Reporting', desc: 'Monthly performance reports with insights on reach, engagement, follower growth, and ROI.' },
      ]}
      steps={[
        { number: '01', title: 'Brand Audit & Research', desc: 'We audit your current social presence and research your audience, competitors, and trending content.' },
        { number: '02', title: 'Content Calendar', desc: 'We build a 30-day content calendar with platform-specific posts, stories, and campaign ideas.' },
        { number: '03', title: 'Create & Publish', desc: 'Our creative team produces and publishes high-quality content consistently across all platforms.' },
        { number: '04', title: 'Engage & Grow', desc: 'We manage your community, run campaigns, and continuously optimize to accelerate growth.' },
      ]}
      pricing={[
        {
          name: 'Starter',
          price: '₹12,000',
          originalPrice: '₹20,000',
          features: ['2 platforms (Insta + FB)', '12 posts per month', 'Basic graphic design', 'Caption writing', 'Monthly reporting', 'Community management'],
        },
        {
          name: 'Growth',
          price: '₹25,000',
          badge: '⭐ Most Popular',
          recommended: true,
          features: ['4 platforms', '30 posts per month', 'Professional graphics + Reels', 'Hashtag strategy', 'Story creation (daily)', 'Influencer outreach (2/mo)', 'Weekly reporting', 'Dedicated manager'],
        },
        {
          name: 'Enterprise',
          price: '₹50,000',
          features: ['All platforms', '60+ posts per month', 'Full video production', 'Paid social campaigns', 'Influencer partnerships (5/mo)', 'Live session management', 'Real-time analytics', 'Priority support'],
        },
      ]}
    />
  )
}
