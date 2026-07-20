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
  bodyClass?: string;
  image: string;
  items: SectionItem[];
};

const sections: Section[] = [
  {
    id: "home",
    label: "home",
    title: "aarav modi",
    body: "systems design engineering at the university of waterloo. building software, data systems, ai/ml tools, fintech dashboards, products, and music.",
    image: "/DSC05135.webp",
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
        title: "x",
        text: "",
        href: "https://x.com/aarav_mo",
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
    image: "/DSC05143.webp",
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
    image: "/DSC04808.webp",
    items: [
      {
        title: "lockerlink (founder)",
        text: "next.js · firebase — social app for ova volleyball players",
        href: "https://lockerlink.ca/",
      },
      {
        title: "gitgrade",
        text: "next.js · fastapi — scores github work by engineering signal, not commit volume",
        href: "https://github.com/aaravhmodi/gitgrade",
      },
      {
        title: "crai (hackmit)",
        text: "acoustic ml — baby cry analysis for early detection of health conditions",
        href: "https://github.com/aaravhmodi/crai",
      },
      {
        title: "nasa design challenge (grand prize winner)",
        text: "national space society — cosmic flower, agriculture and health in space",
        href: "https://nss.org/wp-content/uploads/Cosmic-Flower-Revolutionizing-Agriculture-and-Health-in-Space.pdf",
      },
      {
        title: "wrapped spotify",
        text: "next.js · spotify api — short-term listening wrapped, oauth from scratch",
        href: "https://github.com/aaravhmodi/wrapped-spotify",
      },
      {
        title: "answersurvivalrag",
        text: "research — budget-constrained multi-hop rag packing across hotpotqa, squad, triviaqa",
        href: "https://github.com/aaravhmodi/rag-packing",
      },
      {
        title: "fastbpe",
        text: "research — benchmarks bpe tokenizer backends for throughput, latency, memory",
        href: "https://github.com/aaravhmodi/tokenizer-benchmarking",
      },
      {
        title: "rag chunking benchmark",
        text: "research — evaluates chunking strategies for rag retrieval quality",
        href: "https://github.com/aaravhmodi/rag-chunking",
      },
      {
        title: "ai paper-to-code",
        text: "pytorch · langchain · chromadb — retrieves arxiv papers, generates code from them",
        href: "https://github.com/aaravhmodi/ai-paper2code",
      },
      {
        title: "osint canada threat actor profiler",
        text: "python · spacy · misp — clusters iocs from open sources into actor profiles",
        href: "https://github.com/aaravhmodi/aarav-canada-eye",
      },
    ],
  },
  {
    id: "articles",
    label: "articles",
    title: "articles",
    body: "writing on medium. mostly ml systems research and build logs.",
    bodyClass:
      "text-zinc-900 [text-shadow:-1px_-1px_0_rgba(255,255,255,0.45),1px_-1px_0_rgba(255,255,255,0.45),-1px_1px_0_rgba(255,255,255,0.45),1px_1px_0_rgba(255,255,255,0.45),0_2px_10px_rgba(255,255,255,0.3)]",
    image: "/DSC04988.webp",
    items: [
      {
        title: "answersurvivalrag: what happens when rag finds the answer, then drops it?",
        text: "july 2026",
        href: "https://medium.com/@aaravmodi20/answersurvivalrag-what-happens-when-rag-finds-the-answer-then-drops-it-43befdb4a46c",
      },
      {
        title: "fastbpe: can we make tokenization faster without changing the tokens?",
        text: "june 2026",
        href: "https://medium.com/@aaravmodi20/fastbpe-can-we-make-tokenization-faster-without-changing-the-tokens-7e2d644b1152",
      },
      {
        title: "building a short-term spotify wrapped taught me oauth the hard way",
        text: "january 2026",
        href: "https://medium.com/@aaravmodi20/building-a-short-term-spotify-wrapped-taught-me-oauth-the-hard-way-3cab646ddcdc",
      },
      {
        title: "how an athlete's amygdala and limbic system react in high-pressure game situations",
        text: "october 2022",
        href: "https://medium.com/@aaravmodi20/how-an-athletes-amygdala-and-limbic-system-react-in-high-pressure-game-situations-17d8e868bc72",
      },
    ],
  },
  {
    id: "music",
    label: "music / socials",
    title: "daydream",
    body: "lead guitar, songwriting, recording. outside of code, probably writing songs or rehearsing.",
    image: "/IMG_8808.webp",
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

  useEffect(() => {
    let startX = 0;
    const onTouchStart = (e: TouchEvent) => { startX = e.touches[0].clientX; };
    const onTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) < 40) return;
      if (dx < 0) move.next();
      else move.prev();
    };
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchend", onTouchEnd);
    };
  }, [move]);


  return (
    <main className="relative h-screen overflow-hidden bg-black text-zinc-100">
      <div className="absolute inset-0">
        {sections.map((section, index) => (
          <div
            key={section.id}
            className={`place-bg ${index === activeIndex ? "place-bg-active" : ""}`}
            style={{ backgroundImage: Math.abs(index - activeIndex) <= 1 ? `url('${section.image}')` : undefined }}
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
        {active.body ? (
          <p className={`mt-6 max-w-[560px] text-lg leading-8 ${active.bodyClass ?? "text-zinc-400"}`}>
            {active.body}
          </p>
        ) : null}

        {active.items.length ? (
          <div className="mt-8 grid max-w-[560px] gap-3 items-scroll">
            {active.items.map((item) => {
              const content = (
                <>
                  <span className="flex flex-col">
                    <span>
                      {item.icon ? <span className="minimal-icon">{item.icon}</span> : null}
                      <span>{item.title}</span>
                    </span>
                    {item.text ? <span className="minimal-sub">{item.text}</span> : null}
                  </span>
                  {item.href ? <span className="ml-2 shrink-0 self-start text-zinc-500">{"\u2192"}</span> : null}
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
