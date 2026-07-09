import ScrollStack, { ScrollStackItem } from '../ui/ScrollStack';

const cards = [
  { num: '01', title: 'Digital Strategy', desc: 'We dissect your market, audience, and competition to build bespoke roadmaps that turn ambition into measurable growth.', color: 'bg-white', text: 'text-black', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
  { num: '02', title: 'Content & Media', desc: 'From scroll-stopping social content to cinematic brand films — we craft stories that captivate and convert.', color: 'bg-[#121212]', text: 'text-white', image: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=800' },
  { num: '03', title: 'Growth Engine', desc: 'Every rupee of ad spend, optimised. Every organic search opportunity, captured. We engineer visibility.', color: 'bg-white', text: 'text-black', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' },
  { num: '04', title: 'Brand Identity', desc: 'The right message, the right platform, the right moment. We amplify your brand across every channel.', color: 'bg-[#121212]', text: 'text-white', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800' },
];

const ServicesOverview = () => {
  return (
    <section className="relative w-full bg-[#000000] py-12 px-6">
      <div className="max-w-7xl mx-auto relative">
       
        {/* Heading */}
        <div className="mb-24 text-center">
          <h2 className="font-serif text-[clamp(2.5rem,5vw,5rem)] text-white">
            Our Expertise
          </h2>
        </div>

        {/* Stack Container */}
        <ScrollStack
          useWindowScroll={true}
          itemDistance={80}
          itemScale={0.03}
          itemStackDistance={35}
          stackPosition="12%"
          scaleEndPosition="10%"
          baseScale={0.92}
        >
          {cards.map((c, i) => (
            <ScrollStackItem key={i}>
              <div
                className={`stack-card w-full min-h-[480px] rounded-[1rem] p-10 sm:p-16 shadow-[0_-20px_50px_rgba(0,0,0,0.15)] flex flex-col md:flex-row items-center justify-between gap-12 border border-current/10 ${c.color} ${c.text}`}
              >
                <div className="w-full md:w-1/2 flex flex-col gap-6">
                  <span className="font-serif text-8xl font-bold opacity-10">
                    {c.num}
                  </span>
                  <h3 className="font-serif text-5xl font-bold leading-tight">
                    {c.title}
                  </h3>
                  <p className="text-lg opacity-70 max-w-md">
                    {c.desc}
                  </p>
                </div>

                {/* Decorative Visual */}
                <div className="w-full md:w-1/2 h-[300px] rounded-3xl overflow-hidden relative border border-current/10 group">
                  <img
                    src={c.image}
                    alt={c.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
};

export default ServicesOverview;