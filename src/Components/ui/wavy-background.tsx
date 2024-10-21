"use client";
import { cn } from "@/utils/cn";
import React, { useEffect, useRef, useState } from "react";
import { createNoise3D } from "simplex-noise";

interface WavyBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: unknown;
}

export const WavyBackground: React.FC<WavyBackgroundProps> = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth = 50,
  backgroundFill = "black",
  blur = 10,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}) => {
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let animationId: number;

  const getSpeed = () => (speed === "slow" ? 0.001 : 0.002);

  const initCanvas = (ctx: CanvasRenderingContext2D) => {
    const resizeCanvas = () => {
      ctx.canvas.width = window.innerWidth;
      ctx.canvas.height = window.innerHeight;
      ctx.filter = `blur(${blur}px)`;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
    };
  };

  const waveColors = colors ?? [
    "#38bdf8",
    "#818cf8",
    "#c084fc",
    "#e879f9",
    "#22d3ee",
  ];

  const drawWave = (
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    nt: number
  ) => {
    for (let i = 0; i < 5; i++) {
      ctx.beginPath();
      ctx.lineWidth = waveWidth;
      ctx.strokeStyle = waveColors[i % waveColors.length];

      for (let x = 0; x < width; x += 5) {
        const y = noise(x / 800, 0.3 * i, nt) * 100;
        ctx.lineTo(x, y + height * 0.5); // center the wave vertically
      }

      ctx.stroke();
      ctx.closePath();
    }
  };

  const renderWaves = (ctx: CanvasRenderingContext2D) => {
    let nt = 0;

    const render = () => {
      nt += getSpeed();
      const width = ctx.canvas.width;
      const height = ctx.canvas.height;

      ctx.fillStyle = backgroundFill;
      ctx.globalAlpha = waveOpacity;
      ctx.fillRect(0, 0, width, height);

      drawWave(ctx, width, height, nt);
      animationId = requestAnimationFrame(render);
    };

    render();
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const cleanupResize = initCanvas(ctx);
        renderWaves(ctx);

        return () => {
          cancelAnimationFrame(animationId);
          cleanupResize();
        };
      }
    }
  });

  const [isSafari, setIsSafari] = useState(false);

  useEffect(() => {
    // Check for Safari browser
    setIsSafari(
      typeof window !== "undefined" &&
        /Safari/.test(navigator.userAgent) &&
        !/Chrome/.test(navigator.userAgent)
    );
  }, []);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center relative",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0"
        ref={canvasRef}
        style={{ filter: isSafari ? `blur(${blur}px)` : undefined }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
