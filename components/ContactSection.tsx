import { Reveal } from "./Reveal";

export function ContactSection() {
  return (
    <Reveal>
      <section id="contact" className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-slate-900/10 bg-slate-950 p-8 text-white shadow-2xl shadow-cyan-950/20 dark:border-white/10 dark:bg-white/[0.055] md:p-10">
          <p className="text-sm font-bold uppercase tracking-[0.24em] text-cyan-300">Contact</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-black tracking-tight sm:text-5xl">
            Always down to talk about startups, music, data systems, or ambitious student-built products.
          </h2>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:aarav.modi@uwaterloo.ca"
              className="rounded-full bg-cyan-300 px-6 py-3 text-center text-sm font-bold text-slate-950 transition hover:-translate-y-0.5"
            >
              aarav.modi@uwaterloo.ca
            </a>
            {/* Replace this placeholder with your real LinkedIn URL. */}
            <a
              href="https://www.linkedin.com/"
              className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-cyan-300"
            >
              LinkedIn
            </a>
            {/* Replace this placeholder with your preferred GitHub profile URL. */}
            <a
              href="https://github.com/aaravhmodi"
              className="rounded-full border border-white/15 px-6 py-3 text-center text-sm font-bold text-white transition hover:-translate-y-0.5 hover:border-cyan-300"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
