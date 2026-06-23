"use client";

import { useEffect, useRef, useMemo } from "react";
import { cn } from "../../lib/utils";

interface LightLinesProps {
    /** Additional CSS classes */
    className?: string;
    /** Lines opacity (0-1) */
    linesOpacity?: number;
    /** Lights opacity (0-1) */
    lightsOpacity?: number;
    /** Animation speed multiplier */
    speedMultiplier?: number;
    /** Primary gradient color (from) */
    gradientFrom?: string;
    /** Primary gradient color (to) */
    gradientTo?: string;
    /** Light color */
    lightColor?: string;
    /** Line color */
    lineColor?: string;
    /** Children content to overlay */
    children?: React.ReactNode;
}


export function LightLines({
    className,
    linesOpacity = 0.05,
    lightsOpacity = 0.9,
    speedMultiplier = 1,
    gradientFrom = "#2462F6",
    gradientTo = "#5999F8",
    lightColor = "#fff",
    lineColor = "#fff",
    children,
}: LightLinesProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const lightsRef = useRef<(SVGGElement | null)[]>([]);
    const frameRef = useRef<number | null>(null);

    // Dynamically generate lines configurations
    const lineConfigs = useMemo(() => {
        const configs = [];
        const totalWidth = 1920;
        // Increase count to 48 lines for a denser, more immersive laser effect
        const count = 48; 
        const step = totalWidth / count;
        
        for (let i = 0; i < count; i++) {
            // Apply randomized jitter to prevent strict grid uniformity
            const jitter = (i === 0 || i === count - 1) ? 0 : (Math.random() - 0.5) * 18;
            const x = Math.round(i * step + step / 2 + jitter);
            
            // Choose line width from variations
            const widths = [0.9, 1.8, 3.0, 4.5];
            const width = widths[Math.floor(Math.random() * widths.length)];
            
            // Randomize scroll direction (up/down)
            const dir = Math.random() > 0.55 ? "up" : "down";
            
            // Generate multiple light segments per line
            const segments = [];
            const segmentCount = Math.floor(Math.random() * 3) + 2; // 2 to 4 segments per line
            let currentY = Math.random() * 150;
            
            for (let j = 0; j < segmentCount; j++) {
                const height = Math.floor(Math.random() * 90) + 20;
                segments.push({
                    y: currentY,
                    height: height
                });
                currentY += height + Math.floor(Math.random() * 250) + 120; // safe padding gap
            }
            
            configs.push({
                x,
                width,
                dir,
                segments
            });
        }
        return configs;
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Map line configurations to their DOM elements and durations
        const speed = speedMultiplier;
        const animations = lineConfigs.map((config, index) => {
            const element = lightsRef.current[index];
            const duration = (Math.floor(Math.random() * 40) + 15) * 0.4; // 6 to 22 seconds duration
            const from = config.dir === "down" ? -1080 : 1080;
            const to = config.dir === "down" ? 1080 : -1080;
            
            return {
                element,
                from,
                to,
                duration: duration / speed,
            };
        });

        // Track startTime with staggered initial offset
        const animationState = animations.map(() => ({
            startTime: performance.now() - Math.random() * 15000, 
        }));

        let isVisible = false;

        const animate = (time: number) => {
            if (!isVisible) {
                frameRef.current = requestAnimationFrame(animate);
                return;
            }

            animations.forEach((ref, index) => {
                if (!ref.element) return;

                const state = animationState[index];
                const elapsed = (time - state.startTime) / 1000;
                const progress = (elapsed % ref.duration) / ref.duration;
                const currentY = ref.from + (ref.to - ref.from) * progress;

                ref.element.style.transform = `translateY(${currentY}px)`;
            });

            frameRef.current = requestAnimationFrame(animate);
        };

        const observer = new IntersectionObserver(
            ([entry]) => {
                isVisible = entry.isIntersecting;
            },
            { threshold: 0 }
        );

        observer.observe(container);
        frameRef.current = requestAnimationFrame(animate);

        return () => {
            if (frameRef.current) {
                cancelAnimationFrame(frameRef.current);
            }
            observer.disconnect();
        };
    }, [lineConfigs, speedMultiplier]);

    return (
        <div
            ref={containerRef}
            className={cn(
                "absolute inset-0 h-full w-full flex justify-center overflow-hidden",
                className
            )}
            style={{
                background: `linear-gradient(180deg, ${gradientFrom} 0%, ${gradientTo} 100%)`,
            }}
        >
            <svg
                className="absolute h-full w-full"
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                viewBox="0 0 1920 1080"
                preserveAspectRatio="none"
            >
                {/* Static Lines */}
                <g className="lines" style={{ opacity: linesOpacity }}>
                    {lineConfigs.map((config, index) => (
                        <rect
                            key={`line-${index}`}
                            className="line"
                            x={config.x - config.width / 2}
                            width={config.width}
                            height="1080"
                            style={{ fill: lineColor, fillRule: "evenodd", clipRule: "evenodd" }}
                        />
                    ))}
                </g>

                {/* Animated Lights */}
                <g className="lights" style={{ opacity: lightsOpacity }}>
                    {lineConfigs.map((config, index) => (
                        <g
                            key={`light-group-${index}`}
                            ref={(el) => {
                                lightsRef.current[index] = el;
                            }}
                            style={{ fill: lightColor }}
                        >
                            {config.segments.map((seg, sIdx) => (
                                <rect
                                    key={`seg-${sIdx}`}
                                    className="light"
                                    x={config.x - config.width / 2}
                                    width={config.width}
                                    y={seg.y}
                                    height={seg.height}
                                    style={{ fillRule: "evenodd", clipRule: "evenodd" }}
                                />
                            ))}
                        </g>
                    ))}
                </g>
            </svg>

            {/* Content overlay */}
            {children && (
                <div className="relative z-10 w-full h-full">{children}</div>
            )}
        </div>
    );
}

export default LightLines;
