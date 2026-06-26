"use client";

import React from "react";
import { cn } from "../../lib/utils";

export interface AuroraHeroProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The main title text to display with the glass displacement effect. */
  title?: string;
  /** Whether to show the toggle switch for background modes. */
  showSwitch?: boolean;
  /** Custom theme color matching the page's theme color. */
  color?: string;
}



export function AuroraHero({
  title,
  className,
  children,
  color,
  ...props
}: AuroraHeroProps) {

  // Safely URL-encoded SVG string for the fluted glass effect
  const filterImageHref = "data:image/svg+xml," + encodeURIComponent(`
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1' color-interpolation-filters='sRGB'>
      <g>
        <rect width='1' height='1' fill='black' />
        <rect width='1' height='1' fill='url(#red)' style='mix-blend-mode:screen' />
        <rect width='1' height='1' fill='url(#green)' style='mix-blend-mode:screen' />
        <rect width='1' height='1' fill='url(#yellow)' style='mix-blend-mode:screen' />
      </g>
      <defs>
        <radialGradient id='yellow' cx='0' cy='0' r='1' >
          <stop stop-color='yellow' />
          <stop stop-color='yellow' offset='1' stop-opacity='0' />
        </radialGradient>
        <radialGradient id='green' cx='1' cy='0' r='1' >
          <stop stop-color='green' />
          <stop stop-color='green' offset='1' stop-opacity='0' />
        </radialGradient>
        <radialGradient id='red' cx='0' cy='1' r='1' >
          <stop stop-color='red' />
          <stop stop-color='red' offset='1' stop-opacity='0' />
        </radialGradient>
      </defs>
    </svg>
  `);

  const themeColor = color || "#0D5EF6";
  const secondaryColor = "#04B9CA";
  const accentColor = "#7C3AED";

  return (
    <section
      className={cn("aurora-hero-wrapper w-full min-h-[400px] h-[500px] sm:h-[600px] relative overflow-hidden flex items-center justify-center", className)}
      style={{
        "--theme-color": themeColor,
        "--secondary-color": secondaryColor,
        "--accent-color": accentColor,
      } as React.CSSProperties}
      {...props}
    >
      <style>{`
        .aurora-hero-wrapper {
          --stripe-color: #bae6fd;
          --bg-filter: blur(20px) opacity(65%) saturate(150%);
          background: var(--stripe-color) !important;
          font-family: Inter, sans-serif;
        }
        :is(.dark) .aurora-hero-wrapper {
          --stripe-color: #bae6fd;
          --bg-filter: blur(20px) opacity(65%) saturate(150%);
          background: var(--stripe-color) !important;
        }
        @keyframes smoothBgTransform {
          0% {
            transform: translate3d(0%, 0, 0);
          }
          100% {
            transform: translate3d(-50%, 0, 0);
          }
        }
        .aurora-hero-bg {
          width: 100%;
          height: 100%;
          position: absolute;
          inset: 0;
          background: #bae6fd;
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
            #c084fc 15%, 
            #60a5fa 20%, 
            #22d3ee 25%, 
            #60a5fa 30%
          );
          background-image: var(--stripes), var(--rainbow);
          background-size: 300% auto, 200% auto;
          background-position: 50% 50%, 50% 50%;
          filter: var(--bg-filter) url(#fluted);
          overflow: hidden;
        }
        .aurora-hero-bg-anim {
          position: absolute;
          top: 0;
          left: 0;
          width: 200%;
          height: 100%;
          background-image: var(--stripes), var(--rainbow);
          background-size: 100% auto, 50% auto;
          animation: smoothBgTransform 60s linear infinite;
          will-change: transform;
          transform: translate3d(0, 0, 0);
        }
        .aurora-glass-overlay {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          background-image: repeating-linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.02) 0px,
            rgba(0, 0, 0, 0.02) 4px,
            transparent 4px,
            transparent 24px
          );
          z-index: 1;
          pointer-events: none;
        }
        .aurora-content {
          position: relative;
          z-index: 10;
          width: 100%;
          display: flex;
          place-content: center;
          place-items: center;
          flex-flow: column;
          gap: 4.5%;
          text-align: center;
        }
        .aurora-content h1, 
        .aurora-content h1 span:not(.gradient-text) {
          color: #0f172a !important;
        }
        .aurora-content p {
          color: #334155 !important;
        }
        .aurora-content a:not(.shimmer-btn) {
          color: #0f172a !important;
          border-color: rgba(15, 23, 42, 0.15) !important;
        }
        .aurora-content a:not(.shimmer-btn):hover {
          background-color: rgba(15, 23, 42, 0.05) !important;
          border-color: #0f172a !important;
        }
        :is(.dark) .aurora-content h1, 
        :is(.dark) .aurora-content h1 span:not(.gradient-text) {
          color: #ffffff !important;
        }
        :is(.dark) .aurora-content p {
          color: rgba(255, 255, 255, 0.65) !important;
        }
        :is(.dark) .aurora-content a:not(.shimmer-btn) {
          color: #ffffff !important;
          border-color: rgba(255, 255, 255, 0.15) !important;
        }
        :is(.dark) .aurora-content a:not(.shimmer-btn):hover {
          background-color: rgba(255, 255, 255, 0.05) !important;
          border-color: #ffffff !important;
        }
        
        /* Global Navbar Link Styling Overrides on Light Hero Pages */
        body:has(.aurora-hero-wrapper) nav:not(.bg-black\/70) button,
        body:has(.aurora-hero-wrapper) nav:not(.bg-black\/70) a:not(.bg-brand-gradient) {
          color: #0D5EF6 !important;
        }
        body:has(.aurora-hero-wrapper) nav:not(.bg-black\/70) a:not(.bg-brand-gradient):hover,
        body:has(.aurora-hero-wrapper) nav:not(.bg-black\/70) button:hover {
          color: #04B9CA !important;
          background-color: rgba(13, 94, 246, 0.05) !important;
        }
        body:has(.aurora-hero-wrapper) nav:not(.bg-black\/70) button span {
          background-color: #0D5EF6 !important;
        }

        .h1-scalingSize {
          font-size: calc(1rem - -5vw);
          position: relative;
          isolation: isolate;
          font-weight: 700;
        }
        .h1-scalingSize::first-letter {
          font-size: 300%;
        }
        .h1-scalingSize::before {
          content: attr(data-text);
          position: absolute;
          inset: 0;
          background: white;
          text-shadow: 0 0 1px #ffffff;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          background-color: white;
          -webkit-mask: linear-gradient(#000 0 0) luminance;
          mask: linear-gradient(#000 0 0) luminance, alpha;
          backdrop-filter: blur(19px) brightness(12.5);
          -webkit-text-stroke: 1px white;
          display: flex;
          margin: auto;
          z-index: 1;
          pointer-events: none;
        }
      `}</style>

      {/* Animated stripes background with mask and SVG fluted filter */}
      <div className="aurora-hero-bg">
        <div className="aurora-hero-bg-anim"></div>
      </div>

      {/* Lightweight vertical ridges overlay to reinforce fluted glass tactile texture */}
      <div className="aurora-glass-overlay"></div>

      {/* Centered content overlay with difference blending and invert(1) */}
      <div className="aurora-content">
        {title && <h1 className="h1-scalingSize" data-text={title}>{title}</h1>}
        {children}
      </div>

      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        colorInterpolationFilters="sRGB"
        style={{ position: "absolute", opacity: 0, height: 0, width: 0, pointerEvents: "none" }}
        aria-hidden="true"
        focusable="false"
      >
        <filter id="fluted" primitiveUnits="objectBoundingBox">
          <feImage
            x="0"
            y="0"
            result="image_0"
            crossOrigin="anonymous"
            href={filterImageHref}
            preserveAspectRatio="none meet"
            width=".03"
            height="1"
          />
          <feTile in="image_0" result="tile_0" />
          <feGaussianBlur stdDeviation=".0001" edgeMode="none" in="tile_0" result="bar_smoothness" x="0" y="0" />
          <feDisplacementMap scale=".08" xChannelSelector="R" yChannelSelector="G" in="SourceGraphic" in2="bar_smoothness" result="displacement_0" />
        </filter>
      </svg>
    </section>
  );
}

export default AuroraHero;
