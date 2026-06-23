"use client";

import React, { useEffect, useState, useMemo } from "react";
import { cn } from "../../lib/utils";

interface PerspectiveGridProps {
    /** Additional CSS classes for the grid container */
    className?: string;
    /** Number of tiles per row/column (default: 36) */
    gridSize?: number;
    /** Whether to show the gradient overlay (default: true) */
    showOverlay?: boolean;
    /** Fade radius percentage for the gradient overlay (default: 80) */
    fadeRadius?: number;
}

const COLORS = [
  "#3b82f6", // Blue
  "#10b981", // Green
  "#ef4444", // Red
  "#f59e0b", // Yellow/Orange
  "#ec4899", // Pink
  "#8b5cf6", // Purple
  "#06b6d4", // Cyan
  "#f43f5e", // Rose
];

export function PerspectiveGrid({
    className,
    gridSize = 36,
    showOverlay = true,
    fadeRadius = 80,
}: PerspectiveGridProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Memoize tiles array to prevent unnecessary re-renders
    const tiles = useMemo(() => Array.from({ length: gridSize * gridSize }), [gridSize]);

    // Optimize performance by using event delegation and avoiding heavy box-shadow calculations
    const handlePointerOver = (e: React.PointerEvent<HTMLDivElement>) => {
      const target = e.target as HTMLElement;
      if (target && target.classList.contains("tile")) {
        const randomColor = COLORS[Math.floor(Math.random() * COLORS.length)];
        target.style.backgroundColor = randomColor;
      }
    };

    const handlePointerOut = (e: React.PointerEvent<HTMLDivElement>) => {
      const target = e.target as HTMLElement;
      if (target && target.classList.contains("tile")) {
        target.style.backgroundColor = "";
      }
    };

    return (
        <div
            className={cn(
                "relative w-full h-full overflow-hidden bg-transparent",
                "[--fade-stop:#000000]",
                className
            )}
            style={{
                perspective: "2000px",
                transformStyle: "preserve-3d",
            }}
        >
            <style>{`
                .tile {
                    transition: background-color 1500ms ease-out;
                    will-change: background-color;
                }
                .tile:hover {
                    transition: none !important;
                }
            `}</style>

            <div
                className="absolute w-[80rem] aspect-square grid origin-center"
                onPointerOver={handlePointerOver}
                onPointerOut={handlePointerOut}
                style={{
                    left: "50%",
                    top: "50%",
                    transform:
                        "translate(-50%, -50%) rotateX(30deg) rotateY(-5deg) rotateZ(20deg) scale(2)",
                    transformStyle: "preserve-3d",
                    gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
                    gridTemplateRows: `repeat(${gridSize}, 1fr)`,
                    maskImage: showOverlay ? `radial-gradient(circle, black 35%, transparent ${fadeRadius}%)` : undefined,
                    WebkitMaskImage: showOverlay ? `radial-gradient(circle, black 35%, transparent ${fadeRadius}%)` : undefined,
                }}
            >
                {/* Tiles */}
                {mounted &&
                    tiles.map((_, i) => (
                        <div
                            key={i}
                            className="tile min-h-[1px] min-w-[1px] border border-white/5 bg-transparent"
                        />
                    ))}
            </div>
        </div>
    );
}

export default PerspectiveGrid;
