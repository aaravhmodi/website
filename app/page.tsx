"use client";

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";

const Sparkles = dynamic(() => import("./components/Sparkles"), { ssr: false });

type SectionItem = {
  title: string;
  text: string;
  href?: string;
  icon?: string;
};

type Section = {
  id: string;
  label: string;
  title: string;
  body: string;
  image: string;
  items: SectionItem[];
};

const sections: Section[] = [
  {
    id: "home",
    label: "home",
    title: "aarav modi",
    body: "systems design engineering at the university of waterloo. building software, data systems, ai/ml tools, fintech dashboards, products, and music.",
    image: "/DSC05135.JPG",
    items: [
      {
        title: "resume",
        text: "",
        href: "/AaravModiResume.pdf",
      },
      {
        title: "github",
        text: "",
        href: "https://github.com/aaravhmodi",
      },
      {
        title: "linkedin",
        text: "",
        href: "https://linkedin.com/in/aaravhmodi",
      },
      {
        title: "email",
        text: "",
        href: "mailto:aarav.modi@uwaterloo.ca",
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
        title: "ai/ml engineering intern - upside robotics - summer 2026",
        text: "",
        href: "https://upsiderobotics.com/",
      },
      {
        title: "software engineering intern - cibc - fall 2025",
        text: "",
        href: "https://www.cibc.com/",
      },
      {
        title: "it project coordinator intern - cibc - winter 2025",
        text: "",
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
        title: "lockerlink (founder)",
        text: "",
        href: "https://lockerlink.ca/",
      },
      {
        title: "crai (hackmit)",
        text: "",
        href: "https://github.com/aaravhmodi/crai",
      },
      {
        title: "wrapped spotify",
        text: "",
        href: "https://github.com/aaravhmodi/wrapped-spotify",
      },
      {
        title: "nasa design challenge (grand prize winner)",
        text: "",
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
        title: "spotify",
        text: "",
        href: "https://open.spotify.com/artist/4ZlorZ6hE7ImbKwkpkvsaY?si=JMyJN66FQRWh3NiHTixnng",
        icon: "♬",
      },
      {
        title: "youtube",
        text: "",
        href: "https://www.youtube.com/@daydreamofl/",
        icon: "▶",
      },
      {
        title: "instagram",
        text: "",
        href: "https://www.instagram.com/daydreamofl/",
        icon: "◎",
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
    <main className="relative h-screen overflow-hidden bg-black text-zinc-100">
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
      <Sparkles />

      <section
        key={active.id}
        className={`place-content ${direction === "next" ? "place-content-next" : "place-content-prev"}`}
      >
        <h1 className="mt-5 text-4xl font-medium tracking-[-0.035em] text-white sm:text-6xl">{active.title}</h1>
        {active.body ? <p className="mt-6 max-w-[560px] text-lg leading-8 text-zinc-400">{active.body}</p> : null}

        {active.items.length ? (
          <div className="mt-8 grid max-w-[560px] gap-3">
            {active.items.map((item) => {
              const content = (
                <>
                  <span>
                    {item.icon ? <span className="minimal-icon">{item.icon}</span> : null}
                    <span>{item.title}</span>
                  </span>
                  {item.href ? <span className="ml-2 text-zinc-500">{"\u2192"}</span> : null}
                </>
              );

              return item.href ? (
                <a
                  key={item.title}
                  href={item.href}
                  target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                  rel={item.href.startsWith("mailto:") ? undefined : "noreferrer"}
                  className="journey-row minimal-link"
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
