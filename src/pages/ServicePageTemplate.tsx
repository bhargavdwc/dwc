import { Link } from 'react-router-dom'
import FAQ from '../components/home/FAQ'
import Testimonials from '../components/home/Testimonials'
import ImageTrail, { type ImageTrailImage } from '../components/ui/ImageTrail'
import AuroraHero from '../components/ui/AuroraHero'
import FluidMorphBg from '../components/ui/FluidMorphBg'
import PerspectiveGrid from '../components/ui/PerspectiveGrid'
import LightLines from '../components/ui/LightLines'
import PrismaticBurst from '../components/ui/PrismaticBurst'

interface PricingPlan {
  name: string
  price: string
  originalPrice?: string
  badge?: string
  recommended?: boolean
  features: string[]
}

interface ServicePageProps {
  title: string
  subtitle: string
  description: string
  color?: string
  bgImage?: string
  useImageTrail?: boolean
  useAuroraHero?: boolean
  useFluidMorphBg?: boolean
  usePerspectiveGrid?: boolean
  useLightLines?: boolean
  usePrismaticBurst?: boolean
  imageTrailImages?: Array<string | ImageTrailImage>
  whatWeOffer: { title: string; desc: string }[]
  steps: { number: string; title: string; desc: string }[]
  pricing: PricingPlan[]
  largeHero?: boolean
}

export default function ServicePageTemplate({
  title, subtitle, description, color = '#0D5EF6', bgImage, useImageTrail, useAuroraHero, useFluidMorphBg, usePerspectiveGrid, useLightLines, usePrismaticBurst, imageTrailImages,
  whatWeOffer, steps, pricing, largeHero = false
}: ServicePageProps) {
  const sectionClass = `pt-40 pb-24 px-8 text-center relative overflow-hidden flex items-center bg-black no-splash ${largeHero ? 'min-h-screen py-32' : 'min-h-[70vh]'}`

  const containerClass = "relative z-10 mx-auto w-full pointer-events-none max-w-[900px]"

  const containerInteractiveClass = "relative z-10 mx-auto w-full max-w-[900px]"

  const subtitleClass = "inline-block font-mono font-black tracking-[0.2em] uppercase rounded-full border bg-white shadow-md px-5 py-2 mb-6 text-[0.78rem]"

  const titleClass = "font-display font-bold text-white tracking-tighter leading-[1.1] mb-6 whitespace-pre-line text-[clamp(2.5rem,6vw,4.5rem)]"

  const descClass = "text-white/65 leading-relaxed mx-auto text-lg lg:text-xl max-w-2xl mb-10"

  const primaryBtnClass = "shimmer-btn inline-flex items-center text-white font-display font-bold rounded-full no-underline transition-all duration-300 hover:-translate-y-1 shadow-lg pointer-events-auto px-8 py-3.5 gap-2"

  const secondaryBtnClass = "inline-flex items-center bg-transparent text-white font-display font-bold rounded-full no-underline border-2 border-white/10 transition-all duration-300 hover:text-primary hover:border-primary hover:bg-primary/5 pointer-events-auto px-8 py-3.5 gap-2"

  return (
    <main className="bg-black">
      {/* Hero */}
      {usePerspectiveGrid ? (
        <section className={sectionClass}>
          {/* Background Grid */}
          <div className="absolute inset-0 z-1 select-none pointer-events-auto">
            <PerspectiveGrid className="w-full h-full" fadeRadius={100} />
          </div>

          {/* Ambient radial glow overlay */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            {/* Black Overlap Mask */}
            <div className="absolute inset-0 bg-black/10" />
            {/* Subtle gradient overlays to dissolve edges into the black theme */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
            {/* Subtle color ambient radial glow overlay */}
            <div
              className="absolute inset-0 opacity-[0.25]"
              style={{ background: `radial-gradient(circle at 50% 50%, ${color}, transparent 65%)` }}
            />
          </div>

          <div className={containerClass}>
            <div
              data-aos="fade-down"
              className={`${subtitleClass} text-black`}
              style={{ borderColor: `${color}30` }}
            >
              {subtitle}
            </div>
            <h1 data-aos="fade-up" className={titleClass}>
              {title.split(/\n|\\n/).map((line, i) => (
                <span key={i} className={i === 1 ? 'gradient-text' : ''}>
                  {line}
                </span>
              ))}
            </h1>
            <p data-aos="fade-up" data-aos-delay="100" className={descClass}>
              {description}
            </p>
            <div data-aos="fade-up" data-aos-delay="200" className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                data-cursor="button"
                className={primaryBtnClass}
                style={{ background: `linear-gradient(135deg, ${color}, #04B9CA)`, boxShadow: `0 8px 30px ${color}40` }}
              >
                Get Started
                <svg width={largeHero ? "20" : "18"} height={largeHero ? "20" : "18"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link
                to="/projects"
                data-cursor="link"
                className={secondaryBtnClass}
                style={{ '--hover-color': color } as any}
              >
                View Achievements
              </Link>
            </div>
          </div>
        </section>
      ) : useLightLines ? (
        <section className={sectionClass}>
          {/* Light Lines Background */}
          <LightLines
            className="w-full h-full"
            gradientFrom="#02040a"
            gradientTo="#000000"
            lightColor="#0D5EF6"
            lineColor="rgba(13, 94, 246, 0.15)"
            linesOpacity={0.4}
            lightsOpacity={0.6}
            speedMultiplier={0.7}
          />

          {/* Ambient radial glow overlay */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            {/* Subtle gradient overlays to dissolve edges into the black theme */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
            {/* Subtle color ambient radial glow overlay */}
            <div
              className="absolute inset-0 opacity-[0.2]"
              style={{ background: `radial-gradient(circle at 50% 50%, #0D5EF6, transparent 65%)` }}
            />
          </div>

          <div className={containerClass}>
            <div
              data-aos="fade-down"
              className={`${subtitleClass} text-black`}
              style={{ borderColor: `${color}30` }}
            >
              {subtitle}
            </div>
            <h1 data-aos="fade-up" className={titleClass}>
              {title.split(/\n|\\n/).map((line, i) => (
                <span key={i} className={i === 1 ? 'gradient-text' : ''}>
                  {line}
                </span>
              ))}
            </h1>
            <p data-aos="fade-up" data-aos-delay="100" className={descClass}>
              {description}
            </p>
            <div data-aos="fade-up" data-aos-delay="200" className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                data-cursor="button"
                className={primaryBtnClass}
                style={{ background: `linear-gradient(135deg, ${color}, #04B9CA)`, boxShadow: `0 8px 30px ${color}40` }}
              >
                Get Started
                <svg width={largeHero ? "20" : "18"} height={largeHero ? "20" : "18"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link
                to="/projects"
                data-cursor="link"
                className={secondaryBtnClass}
                style={{ '--hover-color': color } as any}
              >
                View Achievements
              </Link>
            </div>
          </div>
        </section>
      ) : useFluidMorphBg ? (
        <section className={`${sectionClass} !bg-[#282886]`}>
          {/* FluidMorphBg fills the entire section */}
          <div className="absolute inset-0 z-0">
            <FluidMorphBg className="w-full h-full" duration={4} />
          </div>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 z-[1] bg-black/30" />

          <div className={`${containerInteractiveClass} z-10`}>
            <div
              data-aos="fade-down"
              className={`${subtitleClass} text-black`}
              style={{ borderColor: `${color}30` }}
            >
              {subtitle}
            </div>
            <h1 data-aos="fade-up" className={titleClass}>
              {title.split(/\n|\\n/).map((line, i) => (
                <span key={i} className={i === 1 ? 'gradient-text' : ''}>
                  {line}
                </span>
              ))}
            </h1>
            <p data-aos="fade-up" data-aos-delay="100" className={descClass}>
              {description}
            </p>
            <div data-aos="fade-up" data-aos-delay="200" className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                data-cursor="button"
                className={primaryBtnClass}
                style={{ background: `linear-gradient(135deg, ${color}, #04B9CA)`, boxShadow: `0 8px 30px ${color}40` }}
              >
                Get Started
                <svg width={largeHero ? "20" : "18"} height={largeHero ? "20" : "18"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link
                to="/projects"
                data-cursor="link"
                className={secondaryBtnClass}
                style={{ '--hover-color': color } as any}
              >
                View Achievements
              </Link>
            </div>
          </div>
        </section>
      ) : useAuroraHero ? (
        <AuroraHero className={sectionClass} color={color}>
          <div className={containerInteractiveClass}>
            <div
              data-aos="fade-down"
              className={`${subtitleClass} text-black`}
              style={{ borderColor: `${color}30` }}
            >
              {subtitle}
            </div>
            <h1 data-aos="fade-up" className={titleClass}>
              {title.split(/\n|\\n/).map((line, i) => (
                <span key={i} className={i === 1 ? 'gradient-text' : ''}>
                  {line}
                </span>
              ))}
            </h1>
            <p data-aos="fade-up" data-aos-delay="100" className={descClass}>
              {description}
            </p>
            <div data-aos="fade-up" data-aos-delay="200" className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                data-cursor="button"
                className={primaryBtnClass}
                style={{ background: `linear-gradient(135deg, ${color}, #04B9CA)`, boxShadow: `0 8px 30px ${color}40` }}
              >
                Get Started
                <svg width={largeHero ? "20" : "18"} height={largeHero ? "20" : "18"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link
                to="/projects"
                data-cursor="link"
                className={secondaryBtnClass}
                style={{ '--hover-color': color } as any}
              >
                View Achievements
              </Link>
            </div>
          </div>
        </AuroraHero>
      ) : useImageTrail ? (
        <ImageTrail
          images={imageTrailImages}
          className={sectionClass}
        >
          {/* Soft Gradient Overlay and Ambient Radial Glow */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            {/* Black Overlap Mask */}
            <div className="absolute inset-0 bg-black/20" />
            {/* Subtle gradient overlays to dissolve edges into the black theme */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
            {/* Subtle color ambient radial glow overlay */}
            <div
              className="absolute inset-0 opacity-[0.25]"
              style={{ background: `radial-gradient(circle at 50% 50%, ${color}, transparent 65%)` }}
            />
          </div>

          <div className={containerInteractiveClass}>
            <div
              data-aos="fade-down"
              className={subtitleClass}
              style={{ color: color, borderColor: `${color}30` }}
            >
              {subtitle}
            </div>
            <h1 data-aos="fade-up" className={titleClass}>
              {title.split(/\n|\\n/).map((line, i) => (
                <span key={i} className={i === 1 ? 'gradient-text' : ''}>
                  {line}
                </span>
              ))}
            </h1>
            <p data-aos="fade-up" data-aos-delay="100" className={descClass}>
              {description}
            </p>
            <div data-aos="fade-up" data-aos-delay="200" className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                data-cursor="button"
                className={primaryBtnClass}
                style={{ background: `linear-gradient(135deg, ${color}, #04B9CA)`, boxShadow: `0 8px 30px ${color}40` }}
              >
                Get Started
                <svg width={largeHero ? "20" : "18"} height={largeHero ? "20" : "18"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link
                to="/projects"
                data-cursor="link"
                className={secondaryBtnClass}
                style={{ '--hover-color': color } as any}
              >
                View Achievements
              </Link>
            </div>
          </div>
        </ImageTrail>
      ) : usePrismaticBurst ? (
        <section className={sectionClass}>
          {/* Prismatic Burst Background */}
          <div className="absolute inset-0 z-0 select-none pointer-events-auto">
            <PrismaticBurst
              intensity={0.6}
              speed={0.4}
              animationType="rotate3d"
              paused={false}
              offset={{ x: 0, y: 0 }}
              hoverDampness={0.25}
              rayCount={24}
              mixBlendMode="lighten"
              colors={[color, '#034B8C', '#01162C']}
            />
          </div>

          {/* Ambient radial glow overlay */}
          <div className="absolute inset-0 z-1 select-none pointer-events-none">
            {/* Subtle gradient overlays to dissolve edges into the black theme */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
            {/* Subtle color ambient radial glow overlay */}
            <div
              className="absolute inset-0 opacity-[0.12]"
              style={{ background: `radial-gradient(circle at 50% 50%, ${color}, transparent 65%)` }}
            />
          </div>

          <div className={containerClass}>
            <div
              data-aos="fade-down"
              className={`${subtitleClass} text-black`}
              style={{ borderColor: `${color}30` }}
            >
              {subtitle}
            </div>
            <h1 data-aos="fade-up" className={titleClass}>
              {title.split(/\n|\\n/).map((line, i) => (
                <span key={i} className={i === 1 ? 'gradient-text' : ''}>
                  {line}
                </span>
              ))}
            </h1>
            <p data-aos="fade-up" data-aos-delay="100" className={descClass}>
              {description}
            </p>
            <div data-aos="fade-up" data-aos-delay="200" className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                data-cursor="button"
                className={primaryBtnClass}
                style={{ background: `linear-gradient(135deg, ${color}, #04B9CA)`, boxShadow: `0 8px 30px ${color}40` }}
              >
                Get Started
                <svg width={largeHero ? "20" : "18"} height={largeHero ? "20" : "18"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link
                to="/projects"
                data-cursor="link"
                className={secondaryBtnClass}
                style={{ '--hover-color': color } as any}
              >
                View Achievements
              </Link>
            </div>
          </div>
        </section>
      ) : (
        <section className={sectionClass}>
          {/* Full-width Background Image & Soft Gradient Overlay */}
          <div className="absolute inset-0 z-0 select-none pointer-events-none">
            <img
              src={bgImage || "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&auto=format&fit=crop&q=80"}
              alt={`${title} background`}
              className="w-full h-full object-cover opacity-60"
            />
            {/* Black Overlap Mask */}
            <div className="absolute inset-0 bg-black/20" />
            {/* Subtle gradient overlays to dissolve edges into the black theme */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
            {/* Subtle color ambient radial glow overlay */}
            <div
              className="absolute inset-0 opacity-[0.25]"
              style={{ background: `radial-gradient(circle at 50% 50%, ${color}, transparent 65%)` }}
            />
          </div>

          <div className={containerInteractiveClass}>
            <div
              data-aos="fade-down"
              className={subtitleClass}
              style={{ color: color, borderColor: `${color}30` }}
            >
              {subtitle}
            </div>
            <h1 data-aos="fade-up" className={titleClass}>
              {title.split(/\n|\\n/).map((line, i) => (
                <span key={i} className={i === 1 ? 'gradient-text' : ''}>
                  {line}
                </span>
              ))}
            </h1>
            <p data-aos="fade-up" data-aos-delay="100" className={descClass}>
              {description}
            </p>
            <div data-aos="fade-up" data-aos-delay="200" className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                data-cursor="button"
                className={primaryBtnClass}
                style={{ background: `linear-gradient(135deg, ${color}, #04B9CA)`, boxShadow: `0 8px 30px ${color}40` }}
              >
                Get Started
                <svg width={largeHero ? "20" : "18"} height={largeHero ? "20" : "18"} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
              <Link
                to="/projects"
                data-cursor="link"
                className={secondaryBtnClass}
                style={{ '--hover-color': color } as any}
              >
                View Achievements
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* What We Offer */}
      <section className="bg-black py-12 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 data-aos="fade-up" className="font-display font-bold text-3xl lg:text-4xl text-white tracking-tight">
              Where <span className="gradient-text">Strategy Meets</span> Digital Success
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whatWeOffer.map((item, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={`${i * 80}`}
                className="group bg-zinc-950/60 border border-white/5 rounded-2xl p-8 transition-all duration-500 shadow-2xl hover:border-white/10 hover:-translate-y-1.5"
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = `${color}70`
                  e.currentTarget.style.boxShadow = `0 15px 30px -5px ${color}25`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.4)'
                }}
              >
                <div
                  className="w-10 h-1 rounded-full mb-6"
                  style={{ background: `linear-gradient(90deg, ${color}, #04B9CA)` }}
                />
                <h3 className="font-display font-bold text-white text-xl mb-3 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                <p className="font-body text-zinc-400 text-[0.95rem] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Step Process Framework */}
      <section className="bg-black py-12 px-8 relative overflow-hidden">
        {/* Soft background ambient mesh glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0" />

        <div className="max-w-[1200px] mx-auto relative z-10">

          {/* Header */}
          <div className="text-center mb-20">
            <div
              data-aos="fade-down"
              className="inline-block font-mono text-[0.7rem] font-bold tracking-[0.2em] uppercase rounded-full px-4 py-1.5 mb-6 border"
              style={{ color: color, backgroundColor: `${color}15`, borderColor: `${color}30` }}
            >
              Execution Framework
            </div>
            <h2 data-aos="fade-up" className="font-display font-bold text-4xl lg:text-5xl text-white tracking-tight">
              Achieve Incredible Results in <br />
              <span className="gradient-text">Just {steps.length} Steps</span>
            </h2>
            <p className="font-body text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto mt-4" data-aos="fade-up" data-aos-delay="100">
              Our systematic approach is engineered for precision, consistency, and scalable growth, guiding your brand from initial consultation to market leadership.
            </p>
          </div>

          {/* Connected Steps Grid */}
          <div className="relative">
            <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${Math.min(steps.length, 4)} gap-8 relative z-10`}>
              {steps.map((step, i) => (
                <div
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={`${i * 100}`}
                  className="group relative flex flex-col items-stretch text-left"
                >
                  {/* Step Card */}
                  <div
                    className="flex-grow rounded-xl bg-zinc-950/40 border border-white/5 p-8 transition-all duration-500 hover:-translate-y-1.5 hover:border-white/10 relative flex flex-col justify-between min-h-[280px]"
                    style={{
                      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.4)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = `${color}70`;
                      e.currentTarget.style.boxShadow = `0 20px 40px -10px ${color}25`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.4)';
                    }}
                  >
                    {/* Top Content Row */}
                    <div>
                      {/* Step Indicator Badge */}
                      <div className="flex items-center justify-between mb-8">
                        <div
                          className="w-11 h-11 rounded-full border border-white/10 flex items-center justify-center bg-zinc-900 font-mono font-black text-sm text-white shadow-inner relative group-hover:scale-105 transition-all duration-500"
                        >
                          {/* Pulsing colored center core */}
                          <div
                            className="absolute -inset-0.5 rounded-full opacity-[0.1] group-hover:opacity-[0.25] transition-opacity duration-300"
                            style={{ backgroundColor: color }}
                          />
                          <span className="relative z-10" style={{ color: color }}>{step.number}</span>
                        </div>
                      </div>

                      <h3 className="font-display font-bold text-white text-lg lg:text-xl mb-4 group-hover:text-primary transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="font-body text-zinc-400 text-[13px] sm:text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                    {/* Bottom Dynamic Accent Bar */}
                    <div
                      className="h-1 w-12 rounded-full mt-8 opacity-40 group-hover:w-full group-hover:opacity-100 transition-all duration-500"
                      style={{ background: `linear-gradient(90deg, ${color}, #04B9CA)` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Testimonials />

      {/* Pricing */}
      <section className="bg-black py-4 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-16">
            <h2 data-aos="fade-up" className="font-display font-bold text-3xl lg:text-4xl text-white tracking-tight">
              Pricing & <span className="gradient-text">Plans</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
            {pricing.map((plan, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={`${i * 100}`}
                className={`rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 shadow-2xl relative overflow-hidden flex flex-col h-full hover:-translate-y-1.5 ${plan.recommended
                  ? 'border-2 scale-105 z-10 hover:scale-[1.07]'
                  : 'bg-zinc-950/50 border border-white/5 hover:border-white/10'
                  }`}
                style={{
                  borderColor: plan.recommended ? color : 'rgba(255, 255, 255, 0.05)',
                  backgroundColor: plan.recommended ? `${color}0d` : undefined,
                  boxShadow: plan.recommended ? `0 30px 80px ${color}15` : '0 15px 40px rgba(0, 0, 0, 0.4)'
                }}
                onMouseEnter={(e) => {
                  if (!plan.recommended) {
                    e.currentTarget.style.borderColor = `${color}70`
                    e.currentTarget.style.boxShadow = `0 25px 50px -12px ${color}25`
                  } else {
                    e.currentTarget.style.boxShadow = `0 35px 90px ${color}40`
                    e.currentTarget.style.backgroundColor = `${color}16`
                  }
                }}
                onMouseLeave={(e) => {
                  if (!plan.recommended) {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'
                    e.currentTarget.style.boxShadow = '0 15px 40px rgba(0, 0, 0, 0.4)'
                  } else {
                    e.currentTarget.style.boxShadow = `0 30px 80px ${color}15`
                    e.currentTarget.style.backgroundColor = `${color}0d`
                  }
                }}
              >
                {plan.badge && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-b-xl font-mono text-[0.68rem] font-black text-black bg-white shadow-md uppercase tracking-widest">
                    {plan.badge}
                  </div>
                )}

                <div className="mb-8">
                  <h3 className="font-display font-bold text-white text-xl mb-4">{plan.name}</h3>
                  <div className="flex items-baseline gap-1">
                    <span className="font-display font-extrabold text-4xl lg:text-5xl text-white tracking-tighter">{plan.price}</span>
                    <span className="font-body text-zinc-500 text-sm font-medium">/month</span>
                  </div>
                  {plan.originalPrice && (
                    <div className="font-body text-zinc-600 text-sm line-through mt-1">
                      was {plan.originalPrice}
                    </div>
                  )}
                </div>

                <div className="border-t border-white/5 pt-8 mb-10 space-y-4 flex-1">
                  {plan.features.map((f, j) => (
                    <div key={j} className="flex items-start gap-3">
                      <div
                        className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 shadow-sm"
                        style={{ background: `linear-gradient(135deg, ${color}, #04B9CA)` }}
                      >
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="3.5"><polyline points="20 6 9 17 4 12" /></svg>
                      </div>
                      <span className="font-body text-zinc-400 text-sm leading-relaxed">{f}</span>
                    </div>
                  ))}
                </div>

                <Link
                  to="/contact"
                  data-cursor="button"
                  className={`w-full py-4 rounded-2xl font-display font-bold text-center transition-all duration-300 shadow-lg hover:-translate-y-1 hover:shadow-xl ${plan.recommended ? 'text-black font-extrabold' : 'bg-transparent border-2 border-white/10 text-white hover:border-white/20 hover:bg-white/5'
                    }`}
                  style={{
                    background: plan.recommended ? `linear-gradient(135deg, ${color}, #04B9CA)` : undefined,
                    borderColor: !plan.recommended ? 'rgba(255, 255, 255, 0.1)' : undefined
                  }}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <FAQ />
    </main>
  )
}
