import { CurrentlyBuilding } from "./CurrentlyBuilding";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden px-5 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
      <div className="hero-glow absolute left-1/2 top-0 -z-10 h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl dark:bg-cyan-400/25" />
      <div className="absolute right-0 top-16 -z-10 h-96 w-96 rounded-full bg-violet-500/20 blur-3xl" />
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_15%_20%,rgba(14,165,233,0.16),transparent_30%),radial-gradient(circle_at_75%_10%,rgba(139,92,246,0.16),transparent_28%)] dark:bg-[linear-gradient(120deg,#050816,#08111f_45%,#0d1025)]" />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.05fr_0.7fr]">
        <div>
          <div className="internship-badge mb-7 inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-700 dark:text-cyan-200">
            <span className="size-2 rounded-full bg-cyan-400" />
            Open to Winter 2027 internships
          </div>
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.24em] text-violet-600 dark:text-violet-300">
            Systems Design Engineering · Waterloo
          </p>
          <h1 className="max-w-4xl text-5xl font-black leading-[0.98] tracking-tight text-slate-950 dark:text-white sm:text-6xl lg:text-7xl">
            I build data, AI, and product systems that turn messy problems into usable tools.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-700 dark:text-slate-300">
            I&apos;m a Systems Design Engineering student at Waterloo with experience across machine learning, data
            pipelines, fintech dashboards, founder-led product work, and music.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="rounded-full bg-cyan-400 px-6 py-3 text-center text-sm font-bold text-slate-950 transition hover:-translate-y-0.5 hover:bg-cyan-300"
            >
              View Projects
            </a>
            <a
              href="#experience"
              className="rounded-full border border-slate-900/10 bg-white/70 px-6 py-3 text-center text-sm font-bold text-slate-900 transition hover:-translate-y-0.5 hover:border-cyan-400 dark:border-white/10 dark:bg-white/10 dark:text-white"
            >
              Experience
            </a>
            <a
              href="#contact"
              className="rounded-full border border-slate-900/10 px-6 py-3 text-center text-sm font-bold text-slate-700 transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-600 dark:border-white/10 dark:text-slate-200 dark:hover:text-cyan-200"
            >
              Contact
            </a>
          </div>
        </div>

        <div className="space-y-5">
          <CurrentlyBuilding />
          <div className="rounded-3xl border border-slate-900/10 bg-white/70 p-6 shadow-2xl shadow-slate-950/5 backdrop-blur dark:border-white/10 dark:bg-white/[0.06]">
            <p className="text-sm font-bold uppercase tracking-[0.24em] text-slate-500 dark:text-slate-400">Focus</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {["Software", "Data Engineering", "AI/ML", "Fintech", "Robotics", "Product", "Music"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-900/10 px-3 py-2 text-sm font-semibold text-slate-700 dark:border-white/10 dark:text-slate-200"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
