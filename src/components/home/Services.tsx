  import { useRef } from 'react';
  import { gsap } from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  import { useGSAP } from '@gsap/react';

  gsap.registerPlugin(ScrollTrigger);

  const cards = [
    { num: '01', title: 'Digital Strategy', desc: 'We dissect your market, audience, and competition to build bespoke roadmaps that turn ambition into measurable growth.', color: 'bg-white', text: 'text-black', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800' },
    { num: '02', title: 'Content & Media', desc: 'From scroll-stopping social content to cinematic brand films — we craft stories that captivate and convert.', color: 'bg-[#121212]', text: 'text-white', image: 'https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=800' },
    { num: '03', title: 'Growth Engine', desc: 'Every rupee of ad spend, optimised. Every organic search opportunity, captured. We engineer visibility.', color: 'bg-white', text: 'text-black', image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800' },
    { num: '04', title: 'Brand Identity', desc: 'The right message, the right platform, the right moment. We amplify your brand across every channel.', color: 'bg-[#121212]', text: 'text-white', image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800' },
  ];

  const ServicesOverview = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
      const cardsElements = gsap.utils.toArray<HTMLElement>('.stack-card');
      
      cardsElements.forEach((card, index) => {
        // Logic for the card that is CURRENTLY being covered by the next card
        if (index < cardsElements.length - 1) {
          const nextCard = cardsElements[index + 1];
          
          gsap.to(card as HTMLElement, {
            // Scale down slightly and fade as the next card slides over
            scale: 1 - (cardsElements.length - index) * 0.02, 
            opacity: 0.3,
            transformOrigin: "top center", // CRITICAL for layered look
            scrollTrigger: {
              trigger: nextCard,
              start: "top 90%",
              end: "top 15%",
              scrub: true,
            }
          });
        }
      });

    }, { scope: containerRef });

    return (
      <section ref={containerRef} className="relative w-full bg-[#000000] py-4 px-6">
        <div className="max-w-7xl mx-auto relative">
          
          {/* Heading */}
          <div className="mb-12 text-center">
            <h2 className="font-serif text-[clamp(2.5rem,5vw,5rem)] text-white">
              Our Expertise
            </h2>
          </div>

          {/* Stack Container */}
          <div className="flex flex-col items-center w-full relative pb-[10vh]">
            {cards.map((c, i) => (
              <div 
                key={i} 
                className={`stack-card sticky w-full min-h-[480px]  p-10 sm:p-16 shadow-[0_-20px_50px_rgba(0,0,0,0.1)] flex flex-col md:flex-row items-center justify-between gap-12 border border-black/5 ${c.color} ${c.text}`}
                style={{ 
                  // This creates the "Layered" offset: 
                  // Each card sits 30px lower than the previous one's top
                  top: `calc(10vh + ${i * 30}px)`, 
                  zIndex: i 
                }}
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
                <div className="w-full md:w-1/2 h-[300px] rounded-xl overflow-hidden relative border border-current/10 group">
                  <img 
                    src={c.image} 
                    alt={c.title} 
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  export default ServicesOverview;