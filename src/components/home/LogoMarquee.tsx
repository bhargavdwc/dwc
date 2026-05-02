import ScrollVelocity from './ScrollVelocity'

const partners = [
  { name: 'Google Partner', slug: 'googleads', color: '4285F4' },
  { name: 'Meta Business', slug: 'meta', color: '0668E1' },
  { name: 'TikTok', slug: 'tiktok', color: 'FFFFFF' },
  // { name: 'LinkedIn', slug: 'linkedin', color: '0A66C2' },
  { name: 'HubSpot', slug: 'hubspot', color: 'FF7A59' },
  { name: 'Shopify', slug: 'shopify', color: '96BF48' },
  { name: 'Mailchimp', slug: 'mailchimp', color: 'FFE01B' },
  // { name: 'Salesforce', slug: 'salesforce', color: '00A1E0' },
  { name: 'WordPress', slug: 'wordpress', color: '21759B' },
  // { name: 'Canva', slug: 'canva', color: '00C4CC' },
  // { name: 'Ahrefs', slug: 'ahrefs', color: 'FF8C00' },
  // { name: 'Moz', slug: 'moz', color: '00AEEF' },
  { name: 'Semrush', slug: 'semrush', color: 'FF642D' },
]

export default function LogoMarquee() {
  const renderRow = (items: typeof partners, isReverse = false) => {
    const list = isReverse ? [...items].reverse() : items;
    return (
      <div className="flex items-center gap-12">
        {list.map((p, i) => (
          <div key={i} className="flex items-center gap-6">
            <img 
              src={`https://cdn.simpleicons.org/${p.slug}/${p.color}`} 
              alt={p.name}
              className="w-11 h-11 opacity-95 transition-transform duration-300 hover:scale-110"
            />
            <span 
              className="whitespace-nowrap font-display font-bold text-3xl md:text-4xl tracking-tight"
              style={{ color: `#${p.color}` }}
            >
              {p.name}
            </span>
          </div>
        ))}
      </div>
    );
  };

  return (
    <section className="bg-black py-8 overflow-hidden">
      <div className="text-center mb-8">
        <span className="font-mono text-base text-white uppercase">
          Trusted by Industry Leaders
        </span>
      </div>

      <ScrollVelocity
        texts={[renderRow(partners), renderRow(partners, true)] as any}
        velocity={50}
        className=""
        parallaxStyle={{ padding: '0.5rem 0' }}
        scrollerStyle={{ gap: '6rem' }} 
        scrollContainerRef={undefined} 
        lineGap="gap-0"
      />
    </section>
  )
}
