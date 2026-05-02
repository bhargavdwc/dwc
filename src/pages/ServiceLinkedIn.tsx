import ServicePageTemplate from './ServicePageTemplate'

export default function ServiceLinkedIn() {
  return (
    <ServicePageTemplate
      title="LinkedIn\nMarketing"
      subtitle="LinkedIn B2B Marketing"
      description="Establish authority, generate high-quality B2B leads, and grow your professional network with strategic LinkedIn marketing campaigns."
      color="#0A66C2"
      whatWeOffer={[
        { title: 'LinkedIn Page Optimization', desc: 'Transform your company page into a powerful lead generation tool with compelling content and SEO optimization.' },
        { title: 'Content Strategy', desc: 'Position your brand as an industry leader with thought leadership articles, company updates, and engaging posts.' },
        { title: 'LinkedIn Ads', desc: 'Precisely targeted B2B ad campaigns — Sponsored Content, InMail, Lead Gen Forms — for maximum ROI.' },
        { title: 'Lead Generation', desc: 'Build automated outreach sequences and content funnels that consistently generate qualified B2B leads.' },
        { title: 'Personal Branding', desc: 'Elevate your founders and executives as industry thought leaders to build trust and attract opportunities.' },
        { title: 'Employee Advocacy', desc: 'Activate your team as brand ambassadors to amplify organic reach and company culture.' },
      ]}
      steps={[
        { number: '01', title: 'Profile & Page Audit', desc: 'Comprehensive audit of your LinkedIn presence with specific recommendations for immediate improvements.' },
        { number: '02', title: 'Content & Ad Strategy', desc: 'Build a 30-day content calendar and LinkedIn ad strategy aligned with your B2B sales goals.' },
        { number: '03', title: 'Execute & Publish', desc: 'Create and publish engaging content, run targeted ad campaigns, and manage your LinkedIn presence.' },
        { number: '04', title: 'Generate Leads & Optimize', desc: 'Monitor campaign performance, engage with prospects, and continuously optimize for better lead quality.' },
      ]}
      pricing={[
        {
          name: 'Starter',
          price: '₹15,000',
          features: ['Page optimization', '8 posts per month', 'LinkedIn basic ads', 'Connection outreach (50/mo)', 'Monthly reporting', 'Profile optimization'],
        },
        {
          name: 'Professional',
          price: '₹30,000',
          badge: '⭐ Most Popular',
          recommended: true,
          features: ['Full page management', '20 posts per month', 'Sponsored content + InMail', 'Lead Gen Forms', 'Connection outreach (200/mo)', 'Personal branding (1 executive)', 'Bi-weekly reporting', 'Dedicated manager'],
        },
        {
          name: 'Enterprise',
          price: '₹55,000',
          features: ['Unlimited content', 'Full LinkedIn ad suite', 'Account-based marketing', 'Outreach automation', 'Personal branding (team)', 'Sales Navigator integration', 'CRM integration', 'Priority support'],
        },
      ]}
    />
  )
}
