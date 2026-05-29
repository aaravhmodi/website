"use client";

import { useEffect, useMemo, useState } from "react";

const sections = [
  {
    id: "home",
    label: "home",
    title: "Aarav Modi",
    body: "systems design engineering at the university of waterloo. building software, data systems, ai/ml tools, fintech dashboards, products, and music.",
    image: "/DSC05135.JPG",
    items: [
      {
        title: "resume",
        text: "view pdf",
        href: "/AaravModiResume.pdf",
      },
    ],
  },
  {
    id: "experience",
    label: "experience",
    title: "experience",
    body: "",
    image: "/DSC05143.JPG",
    items: [
      {
        title: "ai/ml engineering intern",
        text: "upside robotics",
        href: "https://upsiderobotics.com/",
      },
      {
        title: "software engineer",
        text: "cibc - fall 2025",
        href: "https://www.cibc.com/",
      },
      {
        title: "it project coordinator",
        text: "cibc - winter 2025",
        href: "https://www.cibc.com/",
      },
    ],
  },
  {
    id: "projects",
    label: "projects",
    title: "projects",
    body: "",
    image: "/DSC04808.JPG",
    items: [
      {
        title: "lockerlink",
        text: "social platform for ova volleyball athletes and coaches",
        href: "https://lockerlink.ca/",
      },
      {
        title: "crai",
        text: "ai cry analyzer presented at hackmit 2025",
        href: "https://github.com/aaravhmodi/crai",
      },
      {
        title: "nasa design challenge",
        text: "grand prize winner out of 4,000+ global teams",
        href: "https://nss.org/wp-content/uploads/Cosmic-Flower-Revolutionizing-Agriculture-and-Health-in-Space.pdf",
      },
    ],
  },
  {
    id: "music",
    label: "music / socials",
    title: "daydream",
    body: "lead guitar, songwriting, recording. outside of code, probably writing songs or rehearsing.",
    image: "/IMG_8808.jpeg",
    items: [
      {
        title: "github",
        text: "github.com/aaravhmodi",
        href: "https://github.com/aaravhmodi",
      },
      {
        title: "linkedin",
        text: "linkedin.com/in/aaravhmodi",
        href: "https://linkedin.com/in/aaravhmodi",
      },
      {
        title: "email",
        text: "aarav.modi@uwaterloo.ca",
        href: "mailto:aarav.modi@uwaterloo.ca",
      },
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
            {active.items.map((item) => {
              const content = (
                <>
                  <h2 className="text-xl font-medium text-zinc-100">
                    {item.title}
                    {item.href ? <span className="ml-2 text-zinc-500">{"\u2197"}</span> : null}
                  </h2>
                  <p className="mt-1 text-base text-zinc-500">{item.text}</p>
                </>
              );

              return item.href ? (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="journey-row block"
                >
                  {content}
                </a>
              ) : (
                <div key={item.title} className="journey-row">
                  {content}
                </div>
              );
            })}
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
