"use client";

import { useEffect, useRef } from "react";

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  wanderAngle: number;
  wanderSpeed: number; // how fast the direction turns
  speed: number;       // base drift speed
  size: number;
  baseAlpha: number;
  twinkleSpeed: number;
  twinkleOffset: number;
};

const COUNT = 250;
const DISTURB_RADIUS = 100;
const DISTURB_FORCE = 3.2;
const FRICTION = 0.90;

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
      particles.current = Array.from({ length: COUNT }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: 0,
        vy: 0,
        wanderAngle: Math.random() * Math.PI * 2,
        wanderSpeed: Math.random() * 0.04 + 0.008,
        speed: Math.random() * 0.35 + 0.08,
        size: Math.random() * 1.4 + 0.5,
        baseAlpha: Math.random() * 0.22 + 0.08,
        twinkleSpeed: Math.random() * 0.022 + 0.006,
        twinkleOffset: Math.random() * Math.PI * 2,
      }));
    };
    seed();

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (t) mouse.current = { x: t.clientX, y: t.clientY };
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("touchmove", onTouch, { passive: true });
    window.addEventListener("touchstart", onTouch, { passive: true });

    let t = 0;
    const tick = () => {
      t++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const p of particles.current) {
        // slowly turn the wander direction
        p.wanderAngle += (Math.random() - 0.5) * p.wanderSpeed;

        // add wander drift to velocity
        p.vx += Math.cos(p.wanderAngle) * p.speed * 0.06;
        p.vy += Math.sin(p.wanderAngle) * p.speed * 0.06;

        // mouse repulsion
        const dx = p.x - mouse.current.x;
        const dy = p.y - mouse.current.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < DISTURB_RADIUS && dist > 0) {
          const force = (1 - dist / DISTURB_RADIUS) * DISTURB_FORCE;
          const angle = Math.atan2(dy, dx);
          p.vx += Math.cos(angle) * force;
          p.vy += Math.sin(angle) * force;
        }

        p.vx *= FRICTION;
        p.vy *= FRICTION;

        p.x += p.vx;
        p.y += p.vy;

        // wrap around edges
        if (p.x < 0) p.x += canvas.width;
        if (p.x > canvas.width) p.x -= canvas.width;
        if (p.y < 0) p.y += canvas.height;
        if (p.y > canvas.height) p.y -= canvas.height;

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
      window.removeEventListener("touchmove", onTouch);
      window.removeEventListener("touchstart", onTouch);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return <canvas ref={canvasRef} className="sparkle-canvas" />;
}
