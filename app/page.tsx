"use client";

import { useEffect, useMemo, useState } from "react";

const sections = [
  {
    id: "home",
    label: "home",
    title: "Aarav Modi",
    body: "systems design engineering at the university of waterloo. building software, data systems, ai/ml tools, fintech dashboards, products, and music.",
    image: "/ocean.jpg",
    items: [],
  },
  {
    id: "experience",
    label: "experience",
    title: "experience",
    body: "",
    image: "/hills.jpg",
    items: [
      ["machine learning engineer", "upside robotics - present"],
      ["software engineer", "cibc - 2025"],
    ],
  },
  {
    id: "projects",
    label: "projects",
    title: "projects",
    body: "",
    image: "/porto.jpg",
    items: [
      ["lockerlink", "social platform for ova volleyball athletes and coaches"],
      ["crai", "ai cry analyzer presented at hackmit 2025"],
      ["nasa design challenge", "grand prize winner out of 4,000+ global teams"],
    ],
  },
  {
    id: "music",
    label: "music / socials",
    title: "daydream",
    body: "lead guitar, songwriting, recording. outside of code, probably writing songs or rehearsing.",
    image: "/mountain-bg.png",
    items: [
      ["github", "github.com/aaravhmodi"],
      ["email", "aarav.modi@uwaterloo.ca"],
    ],
  },
];

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const active = sections[activeIndex];

  const canGoPrev = activeIndex > 0;
  const canGoNext = activeIndex < sections.length - 1;

  const move = useMemo(
    () => ({
      next: () => {
        if (!canGoNext) return;
        setDirection("next");
        setActiveIndex((index) => Math.min(index + 1, sections.length - 1));
      },
      prev: () => {
        if (!canGoPrev) return;
        setDirection("prev");
        setActiveIndex((index) => Math.max(index - 1, 0));
      },
    }),
    [canGoNext, canGoPrev],
  );

  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    const hashIndex = sections.findIndex((section) => section.id === hash);

    if (hashIndex >= 0) {
      setActiveIndex(hashIndex);
    }
  }, []);

  useEffect(() => {
    window.history.replaceState(null, "", `#${active.id}`);
  }, [active.id]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight" || event.key === "ArrowDown") move.next();
      if (event.key === "ArrowLeft" || event.key === "ArrowUp") move.prev();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [move]);

  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-zinc-100">
      <div className="absolute inset-0">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`place-bg ${index === activeIndex ? "place-bg-active" : ""}`}
            style={{ backgroundImage: `url('${section.image}')` }}
          />
        ))}
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_44%_28%,rgba(255,255,255,0.10),transparent_22%),linear-gradient(90deg,rgba(0,0,0,0.62),rgba(0,0,0,0.18)_50%,rgba(0,0,0,0.58))]" />
      <div className="absolute inset-0 bg-black/5" />

      <section
        key={active.id}
        className={`place-content ${direction === "next" ? "place-content-next" : "place-content-prev"}`}
      >
        <p className="text-sm font-medium text-zinc-500">{active.label}</p>
        <h1 className="mt-5 text-4xl font-medium tracking-tight text-white sm:text-6xl">{active.title}</h1>
        {active.body ? <p className="mt-6 max-w-[560px] text-lg leading-8 text-zinc-400">{active.body}</p> : null}

        {active.items.length ? (
          <div className="mt-8 space-y-5">
            {active.items.map(([title, text]) => (
              <div key={title} className="journey-row">
                <h2 className="text-xl font-medium text-zinc-100">{title}</h2>
                <p className="mt-1 text-base text-zinc-500">{text}</p>
              </div>
            ))}
          </div>
        ) : null}
      </section>

      <nav className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 items-center gap-4">
        <button
          type="button"
          onClick={move.prev}
          disabled={!canGoPrev}
          aria-label="Previous section"
          className="arrow-button"
        >
          &larr;
        </button>
        <div className="flex items-center gap-2">
          {sections.map((section, index) => (
            <button
              key={section.id}
              type="button"
              onClick={() => {
                setDirection(index > activeIndex ? "next" : "prev");
                setActiveIndex(index);
              }}
              aria-label={`Go to ${section.label}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === activeIndex ? "w-9 bg-white" : "w-3 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={move.next}
          disabled={!canGoNext}
          aria-label="Next section"
          className="arrow-button"
        >
          &rarr;
        </button>
      </nav>

      <p className="absolute right-8 top-8 z-20 text-sm text-zinc-500">
        {String(activeIndex + 1).padStart(2, "0")} / {String(sections.length).padStart(2, "0")}
      </p>
    </main>
  );
}
