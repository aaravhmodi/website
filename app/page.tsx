"use client";

import { useEffect, useRef, useState } from "react";

const experience = [
  ["machine learning engineer", "upside robotics", "present"],
  ["software engineer", "cibc", "2025"],
];

const projects = [
  ["lockerlink", "social platform for ova volleyball athletes and coaches"],
  ["crai", "ai cry analyzer presented at hackmit 2025"],
  ["nasa design challenge", "grand prize winner out of 4,000+ global teams"],
];

const socials = [
  ["github", "https://github.com/aaravhmodi"],
  ["linkedin", "#"],
  ["email", "mailto:aarav.modi@uwaterloo.ca"],
];

export default function Home() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  const [activePanel, setActivePanel] = useState(0);

  useEffect(() => {
    const node = scrollRef.current;
    if (!node) return;

    const updateProgress = () => {
      const maxScroll = node.scrollWidth - node.clientWidth;
      const nextProgress = maxScroll > 0 ? node.scrollLeft / maxScroll : 0;
      const panelWidth = Math.max(1, node.clientWidth * 0.68);
      setProgress(nextProgress);
      setActivePanel(Math.round(node.scrollLeft / panelWidth));
    };

    const onWheel = (event: WheelEvent) => {
      if (window.innerWidth < 768 || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      event.preventDefault();
      node.scrollBy({ left: event.deltaY, behavior: "smooth" });
    };

    updateProgress();
    node.addEventListener("scroll", updateProgress, { passive: true });
    node.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("resize", updateProgress);

    return () => {
      node.removeEventListener("scroll", updateProgress);
      node.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-zinc-100">
      <div
        className="absolute inset-0 scale-110 bg-cover bg-center opacity-70 transition-transform duration-700"
        style={{ backgroundImage: "url('/mountain-bg.png')" }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25 blur-sm transition-transform duration-500"
        style={{
          backgroundImage: "url('/mountain-bg.png')",
          transform: `translateX(${-progress * 80}px) scale(${1.12 + progress * 0.08})`,
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_48%_20%,rgba(255,255,255,0.14),transparent_20%),linear-gradient(90deg,rgba(0,0,0,0.9),rgba(0,0,0,0.48)_45%,rgba(0,0,0,0.9))]" />
      <div className="absolute inset-0 backdrop-blur-[1.5px]" />
      <div className="funky-orb left-[8vw] top-[18vh]" />
      <div className="funky-orb funky-orb-two right-[14vw] top-[58vh]" />
      <div className="pointer-events-none fixed bottom-6 left-1/2 z-20 hidden h-px w-[min(520px,70vw)] -translate-x-1/2 bg-white/10 md:block">
        <div className="h-px bg-zinc-200 transition-all duration-300" style={{ width: `${progress * 100}%` }} />
      </div>
      <p className="pointer-events-none fixed bottom-10 right-10 z-20 hidden text-xs text-zinc-500 md:block">
        {String(Math.min(activePanel + 1, 4)).padStart(2, "0")} / 04
      </p>

      <div
        ref={scrollRef}
        className="horizontal-scroll relative z-10 flex min-h-screen snap-x snap-mandatory overflow-x-auto overflow-y-hidden scroll-smooth md:flex-nowrap"
      >
        <section className={`panel intro-panel ${activePanel === 0 ? "panel-active" : ""}`}>
          <span className="panel-number">01</span>
          <p className="mb-6 text-sm text-zinc-500">scroll sideways</p>
          <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">Aarav Modi</h1>
          <p className="mt-6 max-w-[540px] text-lg leading-7 text-zinc-400">
            systems design engineering at the university of waterloo. building software, data systems, ai/ml tools,
            fintech dashboards, products, and music.
          </p>
        </section>

        <section className={`panel ${activePanel === 1 ? "panel-active" : ""}`}>
          <span className="panel-number">02</span>
          <h2 className="section-label">experience</h2>
          <div className="mt-7 space-y-7">
            {experience.map(([role, place, year]) => (
              <a key={role} href="#" className="line-item group grid grid-cols-[1fr_auto] gap-10">
                <div>
                  <h3 className="text-xl font-medium text-zinc-100 transition group-hover:text-white">{role}</h3>
                  <p className="mt-1 text-base text-zinc-500 transition group-hover:text-zinc-300">
                    {place} <span className="text-zinc-600">↗</span>
                  </p>
                </div>
                <p className="pt-1 text-sm text-zinc-500">{year}</p>
              </a>
            ))}
          </div>
        </section>

        <section className={`panel ${activePanel === 2 ? "panel-active" : ""}`}>
          <span className="panel-number">03</span>
          <h2 className="section-label">projects</h2>
          <div className="mt-7 space-y-7">
            {projects.map(([name, description]) => (
              <a key={name} href="#" className="line-item group block">
                <h3 className="text-xl font-medium text-zinc-100 transition group-hover:text-white">
                  {name} <span className="text-zinc-600">↗</span>
                </h3>
                <p className="mt-1 text-base leading-6 text-zinc-500 transition group-hover:text-zinc-300">
                  {description}
                </p>
              </a>
            ))}
          </div>
        </section>

        <section className={`panel ${activePanel === 3 ? "panel-active" : ""}`}>
          <span className="panel-number">04</span>
          <h2 className="section-label">music</h2>
          <div className="mt-7">
            <h3 className="text-xl font-medium text-zinc-100">daydream</h3>
            <p className="mt-1 text-base text-zinc-500">lead guitar, songwriting, recording</p>
          </div>

          <div className="mt-12">
            <h2 className="section-label">socials</h2>
            <div className="mt-4 flex gap-5">
              {socials.map(([label, href]) => (
                <a key={label} href={href} className="text-base text-zinc-400 transition hover:text-white">
                  {label}
                </a>
              ))}
            </div>
            <a
              href="mailto:aarav.modi@uwaterloo.ca"
              className="mt-4 block text-base text-zinc-300 transition hover:text-white"
            >
              aarav.modi@uwaterloo.ca
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
