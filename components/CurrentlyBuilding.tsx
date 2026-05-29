"use client";

import { useEffect, useState } from "react";

const items = ["LockerLink", "Data pipelines", "AI/ML systems", "Daydream songs", "Fintech dashboards"];

export function CurrentlyBuilding() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % items.length);
    }, 1800);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/70 p-5 shadow-2xl shadow-cyan-950/10 backdrop-blur dark:bg-white/[0.06]">
      <div className="absolute inset-x-6 top-8 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
      <div className="route-dot absolute left-6 top-[27px] size-3 rounded-full bg-cyan-300 shadow-lg shadow-cyan-300/60" />
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-cyan-600 dark:text-cyan-300">Currently building</p>
      <p className="mt-8 text-3xl font-black tracking-tight text-slate-950 transition dark:text-white">{items[index]}</p>
      <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">
        One card, a few active routes. The work changes, but the habit stays the same: ship useful systems.
      </p>
    </div>
  );
}
