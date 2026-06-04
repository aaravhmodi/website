"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  ox: number; // float origin x
  oy: number; // float origin y
  vx: number; // velocity (used when disturbed)
  vy: number;
  floatAmpX: number;
  floatAmpY: number;
  floatSpeedX: number;
  floatSpeedY: number;
  floatOffsetX: number;
  floatOffsetY: number;
  size: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinkleOffset: number;
  disturbed: boolean;
};

const COUNT = 160;
const DISTURB_RADIUS = 90;
const DISTURB_FORCE = 2.8;
const FRICTION = 0.88;

export default function Sparkles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: -9999, y: -9999 });
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

    const seed = () => {
      particles.current = Array.from({ length: COUNT }, () => {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        return {
          x,
          y,
          ox: x,
          oy: y,
          vx: 0,
          vy: 0,
          floatAmpX: Math.random() * 18 + 6,
          floatAmpY: Math.random() * 18 + 6,
          floatSpeedX: Math.random() * 0.0008 + 0.0003,
          floatSpeedY: Math.random() * 0.0008 + 0.0003,
          floatOffsetX: Math.random() * Math.PI * 2,
          floatOffsetY: Math.random() * Math.PI * 2,
          size: Math.random() * 1.4 + 0.5,
          baseAlpha: Math.random() * 0.22 + 0.08,
          twinkleSpeed: Math.random() * 0.022 + 0.006,
          twinkleOffset: Math.random() * Math.PI * 2,
          disturbed: false,
        };
      });
    };
    seed();

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);

    let t = 0;
    const tick = () => {
      t++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles.current) {
        const dx = p.x - mouse.current.x;
        const dy = p.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < DISTURB_RADIUS) {
          const force = (1 - dist / DISTURB_RADIUS) * DISTURB_FORCE;
          const angle = Math.atan2(dy, dx);
          p.vx += Math.cos(angle) * force;
          p.vy += Math.sin(angle) * force;
          p.disturbed = true;
        }

        if (p.disturbed) {
          p.x += p.vx;
          p.y += p.vy;
          p.vx *= FRICTION;
          p.vy *= FRICTION;

          // drift origin back toward float target
          const floatX = p.ox + Math.sin(t * p.floatSpeedX + p.floatOffsetX) * p.floatAmpX;
          const floatY = p.oy + Math.sin(t * p.floatSpeedY + p.floatOffsetY) * p.floatAmpY;
          p.x += (floatX - p.x) * 0.012;
          p.y += (floatY - p.y) * 0.012;

          if (Math.abs(p.vx) < 0.01 && Math.abs(p.vy) < 0.01) p.disturbed = false;
        } else {
          p.x = p.ox + Math.sin(t * p.floatSpeedX + p.floatOffsetX) * p.floatAmpX;
          p.y = p.oy + Math.sin(t * p.floatSpeedY + p.floatOffsetY) * p.floatAmpY;
        }

        const twinkle = Math.sin(t * p.twinkleSpeed + p.twinkleOffset);
        const alpha = p.baseAlpha * (0.5 + 0.5 * twinkle);

        ctx.save();
        ctx.globalAlpha = Math.max(0, alpha);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
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
