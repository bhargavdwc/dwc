"use client";

import React from "react";
import { cn } from "../../lib/utils";

export interface AuroraHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The main title text to display (optional, can also render via children). */
  title?: string;
}

export function AuroraHero({
  title,
  className,
  children,
  ...props
}: AuroraHeroProps) {
  return (
    <section
      className={cn("aurora-hero-wrapper w-full relative overflow-hidden flex items-center justify-center min-h-[70vh] bg-black", className)}
      {...props}
    >
      <style>{`
        .aurora-hero-wrapper {
          --stripe-color: #000;
          --bg-filter: blur(10px) opacity(50%) saturate(200%);
          background: var(--stripe-color);
          font-family: Inter, sans-serif;
        }
        :is(.dark) .aurora-hero-wrapper {
          --stripe-color: #fff;
          --bg-filter: blur(10px) invert(100%);
        }
        @keyframes smoothBg {
          from { background-position: 50% 50%, 50% 50%; }
          to { background-position: 350% 50%, 350% 50%; }
        }
        .aurora-hero-bg {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          --stripes: repeating-linear-gradient(
            100deg, 
            var(--stripe-color) 0%, 
            var(--stripe-color) 7%, 
            transparent 10%, 
            transparent 12%, 
            var(--stripe-color) 16%
          );
          --rainbow: repeating-linear-gradient(
            100deg, 
            #60a5fa 10%, 
            #e879f9 15%, 
            #60a5fa 20%, 
            #5eead4 25%, 
            #60a5fa 30%
          );
          background-image: var(--stripes), var(--rainbow);
          background-size: 300%, 200%;
          background-position: 50% 50%, 50% 50%;
          filter: var(--bg-filter);
        }
        .aurora-hero-bg::after {
          content: "";
          position: absolute;
          inset: 0;
          background-image: var(--stripes), var(--rainbow);
          background-size: 200%, 100%;
          animation: smoothBg 60s linear infinite;
          mix-blend-mode: difference;
        }
        .aurora-glass-overlay {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          backdrop-filter: contrast(0.95) blur(10px);
          -webkit-backdrop-filter: contrast(0.95) blur(10px);
          background-image: repeating-linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.03) 0px,
            rgba(255, 255, 255, 0.03) 4px,
            transparent 4px,
            transparent 24px
          );
          z-index: 1;
          pointer-events: none;
        }
      `}</style>

      {/* Animated stripes background */}
      <div className="aurora-hero-bg"></div>

      {/* Fluted glass distortion overlay for the background */}
      <div className="aurora-glass-overlay"></div>

      {/* Content rendered on top of the background, fully sharp and crisp */}
      {title ? (
        <div className="relative z-10 w-full max-w-[900px] mx-auto px-8 text-center flex flex-col items-center justify-center">
          <h1 className="font-display font-bold text-[clamp(2.5rem,6vw,4.5rem)] text-white tracking-tighter leading-[1.1] mb-6">
            {title}
          </h1>
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}

export default AuroraHero;
