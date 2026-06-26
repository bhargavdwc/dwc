import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import DotBackground from '../components/three/DotBackground'
import purple3dLoop from '../assets/purple_3d_loop.png'

gsap.registerPlugin(ScrollTrigger)

const team = [
  {
    name: 'Sagar Patel',
    role: 'Founder & CEO',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&q=80',
    bio: 'A growth-focused leader directing business strategy and partnerships with over 8 years of digital marketing expertise.',
    color: '#0D5EF6'
  },
  {
    name: 'Kushal Shah',
    role: 'Technical Head',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&q=80',
    bio: 'Oversees core systems and high-scale web development, engineering intelligent marketing solutions.',
    color: '#04B9CA'
  },
  {
    name: 'Anjali Varma',
    role: 'Marketing Strategy',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&q=80',
    bio: 'Crafts data-driven, customer-centric acquisition strategies that yield high conversion and scale.',
    color: '#7C3AED'
  },
  {
    name: 'Rahul Mehra',
    role: 'Creative Director',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&q=80',
    bio: 'Shapes original brand experiences and drives cross-channel creative design with flawless visual execution.',
    color: '#F59E0B'
  },
]

export default function About() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e
    const { left, top, width, height } = currentTarget.getBoundingClientRect()

    // Relative coordinates for cursor spotlight glow
    const x = clientX - left
    const y = clientY - top
    setMousePos({ x, y })

    // 3D parallax tilt rotation calculations
    const tx = ((clientX - left) / width - 0.5) * 20
    const ty = ((clientY - top) / height - 0.5) * -20
    setTilt({ x: tx, y: ty })
  }

  const handleMouseEnter = () => {
    setIsHovered(true)
  }

  const handleMouseLeave = () => {
    setIsHovered(false)
    setTilt({ x: 0, y: 0 })
  }

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-hero-text', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <main className="bg-black">
      {/* Hero */}
      <section
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative overflow-hidden bg-black no-splash min-h-screen lg:h-[100vh] flex items-center justify-center pt-28 pb-16 lg:pt-48 lg:pb-24 px-6 md:px-12"
      >
        {/* Giant rotated background element on the right-side top corner */}
        <div className="absolute -top-[10%] -right-[15%] w-[45vw] h-[45vw] min-w-[450px] min-h-[450px] bg-gradient-to-tr from-[#7C3AED] via-[#EC4899] to-[#F59E0B] rotate-[20deg] rounded-[70px] pointer-events-none z-0 shadow-2xl" />

        {/* Subtle Cybernetic Grid Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(13,94,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(13,94,246,0.02)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        {/* Subtle, soft drift particles */}
        <DotBackground variant="float" opacity={0.12} />

        {/* Dynamic Cursor Spotlight Glow */}
        {isHovered && (
          <div
            className="hidden lg:block absolute w-[500px] h-[500px] bg-primary/10 rounded-full blur-[130px] pointer-events-none z-0 transition-opacity duration-300"
            style={{
              left: `${mousePos.x - 250}px`,
              top: `${mousePos.y - 250}px`,
            }}
          />
        )}

        {/* Ambient Blue/Cyan Glowing Orbs */}
        <div className="absolute top-[20%] right-[10%] w-[45vw] h-[45vw] bg-primary/10 rounded-full blur-[140px] pointer-events-none animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute bottom-[10%] left-[10%] w-[35vw] h-[35vw] bg-cyan/10 rounded-full blur-[120px] pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />

        <div className="max-w-[1280px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">

          {/* Left Side: Content Column */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Translucent pill badge */}
            <div className="bg-white border border-primary/20 rounded-full inline-flex items-center gap-2.5 px-4.5 py-1.5 mb-8 select-none backdrop-blur-md shadow-[0_0_15px_rgba(13,94,246,0.12)] hover:shadow-[0_0_25px_rgba(13,94,246,0.25)] hover:scale-[1.03] transition-all duration-300 cursor-pointer">
              <span className="font-mono text-sm text-primary tracking-wider">AVAILABLE FOR PROJECTS</span>
            </div>

            {/* Headline */}
            <h1 className="about-hero-text font-display font-bold text-white text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1] tracking-tighter mb-6">
              Transform your ideas <br className="hidden md:block" />
              into <span className="gradient-text">digital success</span> <br className="hidden md:block" />
              with us!
            </h1>

            {/* Paragraph Description */}
            <p className="about-hero-text font-body text-zinc-400 text-lg leading-relaxed max-w-xl mb-10">
              We're your partner in product design, website creation, and branding for every stage of your business.
            </p>
          </div>

          {/* Right Side: The 3D Loop Visual */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            {/* Ambient cyan backlight behind the 3D loop */}
            <div className="absolute w-[350px] h-[350px] bg-cyan/15 rounded-full blur-[100px] pointer-events-none z-0" />

            <img
              src={purple3dLoop}
              alt="3D Iridescent abstract purple ribbon torus knot sculpture"
              className="w-full max-w-[280px] md:max-w-[380px] lg:max-w-[460px] xl:max-w-[550px] h-auto object-contain relative z-10 animate-float"
              style={{
                animationDuration: '8s',
                transform: `rotateY(${tilt.x}deg) rotateX(${tilt.y}deg)`,
                transition: 'transform 0.15s cubic-bezier(0.25, 1, 0.5, 1)',
                filter: isHovered ? 'drop-shadow(0 15px 30px rgba(13,94,246,0.3))' : 'drop-shadow(0 5px 15px rgba(13,94,246,0.1))',
              }}
            />
          </div>

        </div>
      </section>

      {/* Philosophy */}
      <section className="py-12 px-8">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-white mb-6 tracking-tight leading-tight">
              Driven by Data, <br /><span className="text-primary">Defined by Creativity</span>
            </h2>
            <p className="text-white/65 leading-relaxed text-lg mb-10">
              We believe that every successful digital campaign is a perfect blend of analytical precision and creative intuition. Our approach is rooted in understanding your audience's behavior and crafting experiences that resonate with them on a deeper level.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-primary font-display mb-1">95%</div>
                <div className="text-[0.85rem] text-white/50 uppercase tracking-widest font-semibold">Client Retention</div>
              </div>
              <div>
                <div className="text-4xl lg:text-5xl font-bold text-cyan font-display mb-1">12M+</div>
                <div className="text-[0.85rem] text-white/50 uppercase tracking-widest font-semibold">Ad Spend Managed</div>
              </div>
            </div>
          </div>
          <div className="relative" data-aos="fade-left">
            <div className="aspect-[3/2] w-full rounded-xl overflow-hidden border border-white/10 shadow-2xl relative group">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80"
                alt="Creative Marketing Team Collaborating"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-12 px-8 bg-black relative overflow-hidden">
        {/* Subtle mesh background glows */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 w-[500px] h-[500px] bg-cyan/5 rounded-full blur-[140px] pointer-events-none z-0" />

        <div className="max-w-[1200px] mx-auto relative z-10">
          {/* Centered Heading */}
          <div className="text-center mb-20">
            <div data-aos="fade-up" className="inline-block font-mono text-[0.8rem] tracking-[0.2em] uppercase text-primary bg-primary/8 border border-primary/20 rounded-full px-5 py-1.5 mb-6">
              Our Legacy
            </div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-white tracking-tight mb-6" data-aos="fade-up">
              The Journey of <span className="gradient-text">Innovation</span>
            </h2>
            <p className="font-body text-zinc-400 text-sm md:text-base leading-relaxed max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="100">
              We broke standard timeline patterns. Here is an interactive map of the key milestones and technological leaps that fueled our transformation.
            </p>
          </div>

          {/* Symmetrical Bento Timeline Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 select-none no-splash">

            {/* Card 1: 2017 - The Beginning (Span 4) */}
            <div
              data-aos="fade-up"
              className="lg:col-span-4 group relative overflow-hidden rounded-2xl bg-zinc-950/60 border border-white/5 p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 shadow-2xl"
              style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(13,94,246,0.3)'
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(13,94,246,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)'
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary">
                    2017
                  </span>
                  <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">
                    Ground Zero
                  </span>
                </div>
                <h3 className="font-display font-bold text-white text-xl md:text-2xl mb-3 tracking-wide group-hover:text-primary transition-colors duration-300">
                  The Beginning
                </h3>
                <p className="font-body text-zinc-400 text-sm leading-relaxed">
                  Digital Web Connection was founded in Ahmedabad, Gujarat, with a clear mission: to revolutionize the brand landscape through fresh creative strategies and robust web foundations.
                </p>
              </div>

              {/* Graphic Element */}
              <div className="relative w-full h-32 flex items-center justify-center overflow-hidden rounded-2xl bg-black/40 border border-white/5 mt-8">
                {/* Grid coordinate system */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:16px_16px]" />

                {/* Glowing radar rings */}
                <div className="absolute w-24 h-24 rounded-full border border-primary/20 animate-[ping_4s_infinite_ease-in-out]" />
                <div className="absolute w-16 h-16 rounded-full border border-primary/40 animate-[spin_12s_linear_infinite] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0D5EF6] shadow-[0_0_12px_#0D5EF6]" />
                </div>
                {/* Crosshair lines */}
                <div className="absolute w-32 h-[1px] bg-white/5" />
                <div className="absolute h-32 w-[1px] bg-white/5" />
              </div>
            </div>

            {/* Card 2: 2019 - National Expansion (Span 8) */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="lg:col-span-8 group relative overflow-hidden rounded-2xl bg-zinc-950/60 border border-white/5 p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 shadow-2xl"
              style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(4,185,202,0.3)'
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(4,185,202,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)'
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-cyan/30 bg-cyan/10 text-cyan">
                    2019
                  </span>
                  <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">
                    100+ Deliveries
                  </span>
                </div>
                <h3 className="font-display font-bold text-white text-xl md:text-2xl mb-3 tracking-wide group-hover:text-cyan transition-colors duration-300">
                  National Expansion
                </h3>
                <p className="font-body text-zinc-400 text-sm leading-relaxed max-w-2xl">
                  We successfully delivered over 100+ creative digital products and multi-channel marketing campaigns, establishing our footprint across major business hubs in India.
                </p>
              </div>

              {/* Graphic Element */}
              <div className="relative w-full h-32 flex items-center justify-between px-6 md:px-12 overflow-hidden rounded-2xl bg-black/40 border border-white/5 mt-8">
                {/* Grid coordinate system */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />

                {/* SVG connection path with animated flow particles */}
                <svg className="absolute left-10 right-10 md:left-20 md:right-20 top-1/2 -translate-y-1/2 w-[calc(100%-5rem)] md:w-[calc(100%-10rem)] h-1 z-0 overflow-visible pointer-events-none" fill="none">
                  <line x1="0%" y1="50%" x2="100%" y2="50%" stroke="rgba(4,185,202,0.15)" strokeWidth="2" strokeDasharray="4 4" />
                  <line
                    x1="0%"
                    y1="50%"
                    x2="100%"
                    y2="50%"
                    stroke="url(#flow-gradient)"
                    strokeWidth="3"
                    strokeDasharray="20 100"
                    className="animate-flow"
                  />
                  <defs>
                    <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#0D5EF6" stopOpacity="0" />
                      <stop offset="50%" stopColor="#04B9CA" stopOpacity="1" />
                      <stop offset="100%" stopColor="#0D5EF6" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Ahmedabad Node */}
                <div className="relative z-10 flex flex-col items-center group/node cursor-pointer">
                  {/* Glow Backdrop */}
                  <div className="absolute -inset-3 rounded-full bg-primary/10 opacity-50 blur-md group-hover/node:opacity-100 group-hover/node:bg-primary/20 transition-all duration-500" />

                  {/* Outer Orbit Ring + Inner Core */}
                  <div className="w-11 h-11 rounded-full border border-dashed border-primary/30 flex items-center justify-center relative transition-colors duration-300 group-hover/node:border-primary/60">
                    <div className="absolute inset-0 rounded-full animate-[spin_10s_linear_infinite]">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#0D5EF6]" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-zinc-950 border border-primary/50 flex items-center justify-center font-mono text-[9px] text-primary font-bold shadow-[0_0_15px_rgba(13,94,246,0.3)] transition-all duration-300 group-hover/node:scale-105 group-hover/node:bg-primary group-hover/node:text-white">
                      AHM
                    </div>
                  </div>
                  <span className="text-[9px] font-mono text-zinc-500 mt-2 uppercase tracking-wider group-hover/node:text-white transition-colors duration-300 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                    Origin
                  </span>
                </div>

                {/* Mumbai Node */}
                <div className="relative z-10 flex flex-col items-center group/node cursor-pointer">
                  {/* Glow Backdrop */}
                  <div className="absolute -inset-3 rounded-full bg-cyan/10 opacity-50 blur-md group-hover/node:opacity-100 group-hover/node:bg-cyan/20 transition-all duration-500" />

                  {/* Outer Orbit Ring + Inner Core */}
                  <div className="w-11 h-11 rounded-full border border-dashed border-cyan/30 flex items-center justify-center relative transition-colors duration-300 group-hover/node:border-cyan/60">
                    <div className="absolute inset-0 rounded-full animate-[spin_8s_linear_infinite]">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan shadow-[0_0_8px_#04B9CA]" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-zinc-950 border border-cyan/50 flex items-center justify-center font-mono text-[9px] text-cyan font-bold shadow-[0_0_15px_rgba(4,185,202,0.3)] transition-all duration-300 group-hover/node:scale-105 group-hover/node:bg-cyan group-hover/node:text-black">
                      MUM
                    </div>
                  </div>
                  <span className="text-[9px] font-mono text-zinc-500 mt-2 uppercase tracking-wider group-hover/node:text-white transition-colors duration-300 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-cyan animate-ping" />
                    Hub
                  </span>
                </div>

                {/* Bangalore Node */}
                <div className="relative z-10 flex flex-col items-center group/node cursor-pointer">
                  {/* Glow Backdrop */}
                  <div className="absolute -inset-3 rounded-full bg-cyan/10 opacity-50 blur-md group-hover/node:opacity-100 group-hover/node:bg-cyan/20 transition-all duration-500" />

                  {/* Outer Orbit Ring + Inner Core */}
                  <div className="w-11 h-11 rounded-full border border-dashed border-cyan/30 flex items-center justify-center relative transition-colors duration-300 group-hover/node:border-cyan/60">
                    <div className="absolute inset-0 rounded-full animate-[spin_12s_linear_infinite]">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-cyan shadow-[0_0_8px_#04B9CA]" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-zinc-950 border border-cyan/50 flex items-center justify-center font-mono text-[9px] text-cyan font-bold shadow-[0_0_15px_rgba(4,185,202,0.3)] transition-all duration-300 group-hover/node:scale-105 group-hover/node:bg-cyan group-hover/node:text-black">
                      BLR
                    </div>
                  </div>
                  <span className="text-[9px] font-mono text-zinc-500 mt-2 uppercase tracking-wider group-hover/node:text-white transition-colors duration-300 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-cyan animate-pulse" />
                    Tech
                  </span>
                </div>

                {/* Delhi Node */}
                <div className="relative z-10 flex flex-col items-center group/node cursor-pointer">
                  {/* Glow Backdrop */}
                  <div className="absolute -inset-3 rounded-full bg-primary/10 opacity-50 blur-md group-hover/node:opacity-100 group-hover/node:bg-primary/20 transition-all duration-500" />

                  {/* Outer Orbit Ring + Inner Core */}
                  <div className="w-11 h-11 rounded-full border border-dashed border-primary/30 flex items-center justify-center relative transition-colors duration-300 group-hover/node:border-primary/60">
                    <div className="absolute inset-0 rounded-full animate-[spin_10s_linear_infinite_reverse]">
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_#0D5EF6]" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-zinc-950 border border-primary/50 flex items-center justify-center font-mono text-[9px] text-primary font-bold shadow-[0_0_15px_rgba(13,94,246,0.3)] transition-all duration-300 group-hover/node:scale-105 group-hover/node:bg-primary group-hover/node:text-white">
                      DEL
                    </div>
                  </div>
                  <span className="text-[9px] font-mono text-zinc-500 mt-2 uppercase tracking-wider group-hover/node:text-white transition-colors duration-300 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-primary animate-pulse" />
                    Core
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3: 2021 - Tech Integration (Span 8) */}
            <div
              data-aos="fade-up"
              className="lg:col-span-8 group relative overflow-hidden rounded-2xl bg-zinc-950/60 border border-white/5 p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 shadow-2xl"
              style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(124,58,237,0.3)'
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(124,58,237,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)'
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-purple/30 bg-purple/10 text-purple">
                    2021
                  </span>
                  <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">
                    AI Core Integrated
                  </span>
                </div>
                <h3 className="font-display font-bold text-white text-xl md:text-2xl mb-3 tracking-wide group-hover:text-purple transition-colors duration-300">
                  Tech & AI Integration
                </h3>
                <p className="font-body text-zinc-400 text-sm leading-relaxed max-w-2xl">
                  We pioneered custom AI-driven organic strategies and built our own proprietary data-analytics systems, merging engineering precision with creative marketing solutions.
                </p>
              </div>

              {/* Graphic Element */}
              <div className="relative w-full h-32 overflow-hidden rounded-2xl bg-black/40 border border-white/5 mt-8 px-6 flex items-center justify-between">
                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[radial-gradient(rgba(124,58,237,0.04)_1px,transparent_1px)] bg-[size:12px_12px]" />

                {/* Interactive Neural Core */}
                <div className="relative z-10 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple/10 border border-purple/30 flex items-center justify-center relative">
                    <div className="absolute inset-0 rounded-xl bg-purple/20 animate-pulse pointer-events-none" />
                    <svg className="w-6 h-6 text-purple" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.26m4.5-5.26v5.26M3 9h5.25M3 14.25h5.25m12.75-5.25h-5.25m5.25 5.25h-5.25M9.75 15.64v5.26m4.5-5.26v5.26m-9.504-12.042l3.72 3.72m8.294-3.72l-3.72 3.72m0 8.294l3.72 3.72m-12.042 0l3.72-3.72" />
                    </svg>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-mono text-white tracking-wider font-semibold">DWC_AI_ENGINE_V2</span>
                    <span className="text-[9px] font-mono text-purple tracking-widest uppercase mt-0.5">System Operational</span>
                  </div>
                </div>

                {/* Simulated performance chart bars */}
                <div className="relative z-10 flex gap-2 items-end h-16">
                  {[45, 75, 55, 90, 65, 80].map((val, idx) => (
                    <div key={idx} className="w-1.5 h-16 bg-zinc-900 rounded-full overflow-hidden flex items-end">
                      <div
                        className="w-full rounded-full animate-[pulse_2s_infinite_ease-in-out]"
                        style={{
                          height: `${val}%`,
                          backgroundColor: '#7C3AED',
                          boxShadow: '0 0 8px #7C3AED',
                          animationDelay: `${idx * 150}ms`
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Card 4: 2025 - Global Impact (Span 4) */}
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="lg:col-span-4 group relative overflow-hidden rounded-2xl bg-zinc-950/60 border border-white/5 p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 shadow-2xl"
              style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(245,158,11,0.3)'
                e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(245,158,11,0.15)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'
                e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.5)'
              }}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-amber/30 bg-amber/10 text-amber">
                    2025
                  </span>
                  <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">
                    Market Leaders
                  </span>
                </div>
                <h3 className="font-display font-bold text-white text-xl md:text-2xl mb-3 tracking-wide group-hover:text-amber transition-colors duration-300">
                  Global Impact
                </h3>
                <p className="font-body text-zinc-400 text-sm leading-relaxed">
                  Recognized as one of the country's premier digital impact agencies, managing substantial advertising asset portfolios and guiding brand scaling journeys globally.
                </p>
              </div>

              {/* Graphic Element */}
              <div className="relative w-full h-32 overflow-hidden rounded-2xl bg-black/40 border border-white/5 mt-8 flex flex-col items-center justify-center">
                {/* Glowing radial gradient backdrop */}
                <div className="absolute inset-0 bg-radial-gradient from-amber/10 via-transparent to-transparent opacity-40 pointer-events-none" />
                <div className="text-center relative z-10">
                  <div className="text-4xl md:text-5xl font-black font-display tracking-tight text-[#F59E0B] shadow-sm select-none">
                    50M+
                  </div>
                  <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest mt-1.5">
                    Worldwide Brand Reach
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-12 px-8">
        <div className="max-w-[1200px] mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-white mb-6 tracking-tight">The Minds Behind <span className="gradient-text">DWC</span></h2>
            <p className="text-white/60 max-w-xl mx-auto text-lg leading-relaxed">Meet our expert team of strategists, creators, and technologists dedicated to your growth.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                data-aos="fade-up"
                data-aos-delay={i * 100}
                className="group p-8 rounded-xl bg-zinc-950/80 border border-white/5 text-center transition-all duration-500 hover:-translate-y-2 relative overflow-hidden flex flex-col items-center h-full"
                style={{
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 20px 40px -10px ${member.color}25`
                  e.currentTarget.style.borderColor = `${member.color}40`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)'
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.05)'
                }}
              >
                {/* Avatar with Glow Border */}
                <div
                  className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-[3px] shadow-lg transition-all duration-500 group-hover:scale-105"
                  style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = member.color
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>

                {/* Name */}
                <h3 className="font-display font-bold text-white text-xl mb-1 transition-colors duration-300">
                  {member.name}
                </h3>

                {/* Role */}
                <p
                  className="font-mono text-[11px] font-bold uppercase tracking-wider mb-4 transition-colors duration-300"
                  style={{ color: member.color }}
                >
                  {member.role}
                </p>

                {/* Biography description */}
                <p className="font-body text-zinc-400 text-[13px] leading-relaxed max-w-[240px] mx-auto border-t border-white/5 pt-4 group-hover:text-zinc-300 transition-colors duration-300">
                  {member.bio}
                </p>

                {/* Social Links (Static at bottom of card, perfectly aligned) */}
                <div className="mt-auto pt-6 flex justify-center gap-3 relative z-20 w-full">
                  {/* LinkedIn */}
                  <a
                    href="#"
                    aria-label={`${member.name} LinkedIn`}
                    className="w-8 h-8 rounded-full border border-white/10 bg-zinc-900/50 text-zinc-400 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = member.color
                      e.currentTarget.style.color = '#ffffff'
                      e.currentTarget.style.backgroundColor = member.color
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                      e.currentTarget.style.color = '#a1a1aa'
                      e.currentTarget.style.backgroundColor = 'rgba(24, 24, 27, 0.5)'
                    }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  {/* Instagram */}
                  <a
                    href="#"
                    aria-label={`${member.name} Instagram`}
                    className="w-8 h-8 rounded-full border border-white/10 bg-zinc-900/50 text-zinc-400 hover:text-white flex items-center justify-center transition-all duration-200 cursor-pointer"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = member.color
                      e.currentTarget.style.color = '#ffffff'
                      e.currentTarget.style.backgroundColor = member.color
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)'
                      e.currentTarget.style.color = '#a1a1aa'
                      e.currentTarget.style.backgroundColor = 'rgba(24, 24, 27, 0.5)'
                    }}
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA strip */}
      <section className="relative py-12 px-8 bg-black overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10 px-4 md:px-8">

          {/* Rounded Box Container */}
          <div className="relative overflow-hidden bg-zinc-950/90 border border-white/5 rounded-2xl shadow-2xl py-12 px-6 md:px-10 flex flex-col items-center">

            {/* Background Visual Enhancements inside the box */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none z-0" />
            <div className="absolute inset-0 grid-pattern opacity-25 z-0" />

            <div className="relative z-10 max-w-7xl mx-auto text-center flex flex-col items-center">
              {/* Pill Badge */}
              <div
                data-aos="fade-up"
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-xs font-display font-semibold text-primary tracking-wider uppercase mb-6 shadow-sm"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-pulse" />
                Let's Collaborate
              </div>

              {/* Heading */}
              <h2
                data-aos="fade-up"
                data-aos-delay="100"
                className="font-display font-bold text-4xl md:text-5xl lg:text-6xl text-white tracking-tight leading-[1.1] mb-6 max-w-7xl"
              >
                Ready to Start Your <span className="gradient-text">Journey?</span>
              </h2>

              {/* Description Content */}
              <p
                data-aos="fade-up"
                data-aos-delay="200"
                className="font-body text-zinc-400 text-sm md:text-base lg:text-lg leading-relaxed max-w-3xl mb-10"
              >
                Partner with Digital Web Connection to build high-performance search campaigns, creative social marketing, and state-of-the-art web products that accelerate your business worldwide.
              </p>

              {/* Action Buttons Row */}
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full"
              >
                {/* Primary Action Button */}
                <Link
                  to="/contact"
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-black hover:bg-zinc-100 transition-all duration-300 font-display font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 text-sm md:text-base"
                >
                  Let's Talk Business
                  <svg
                    className="transform group-hover:translate-x-1 transition-transform duration-200"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </Link>

                {/* Secondary Action Link */}
                <Link
                  to="/services"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 border border-white/10 bg-zinc-900/50 hover:bg-zinc-900 text-white hover:text-white transition-all duration-300 font-display font-semibold px-8 py-4 rounded-full text-sm md:text-base hover:border-white/20"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
