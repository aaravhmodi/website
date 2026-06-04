"use client";

import { useEffect, useRef } from "react";

type Particle = {
  ox: number; // origin x (0–1 normalized)
  oy: number; // origin y (0–1 normalized)
  size: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  depth: number; // parallax layer 0–1 (deeper = less movement)
};

const COUNT = 180;

export default function Sparkles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0.5, y: 0.5 }); // normalized 0–1
  const particles = useRef<Particle[]>([]);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // seed fixed sparkles
    particles.current = Array.from({ length: COUNT }, () => ({
      ox: Math.random(),
      oy: Math.random(),
      size: Math.random() * 1.5 + 0.4,
      baseAlpha: Math.random() * 0.5 + 0.2,
      twinkleSpeed: Math.random() * 0.025 + 0.008,
      twinkleOffset: Math.random() * Math.PI * 2,
      depth: Math.random(),
    }));

    const onMove = (e: MouseEvent) => {
      mouse.current = {
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      };
    };
    window.addEventListener("mousemove", onMove);

    let t = 0;
    const tick = () => {
      t++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const mx = (mouse.current.x - 0.5) * 2; // -1 to 1
      const my = (mouse.current.y - 0.5) * 2;

      for (const p of particles.current) {
        const parallax = (1 - p.depth) * 28; // near particles move more
        const px = p.ox * canvas.width + mx * parallax;
        const py = p.oy * canvas.height + my * parallax;

        const twinkle = Math.sin(t * p.twinkleSpeed + p.twinkleOffset);
        const alpha = p.baseAlpha * (0.55 + 0.45 * twinkle);

        ctx.save();
        ctx.globalAlpha = Math.max(0, alpha);
        ctx.beginPath();
        ctx.arc(px, py, p.size, 0, Math.PI * 2);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.restore();
      }

      frameRef.current = requestAnimationFrame(tick);
    };
    tick();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="sparkle-canvas" />;
}
