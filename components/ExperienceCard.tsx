import type { Experience } from "@/lib/data";

export function ExperienceCard({ experience }: { experience: Experience }) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-slate-900/10 bg-white p-6 shadow-xl shadow-slate-950/5 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:shadow-cyan-950/10 dark:border-white/10 dark:bg-white/[0.055] dark:shadow-black/20">
      <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${experience.accent}`} />
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-2xl font-black tracking-tight text-slate-950 dark:text-white">{experience.title}</h3>
          <p className="mt-1 text-sm font-semibold text-cyan-600 dark:text-cyan-300">{experience.company}</p>
        </div>
        <span className="rounded-full border border-slate-900/10 px-3 py-1 text-xs font-bold text-slate-500 dark:border-white/10 dark:text-slate-400">
          Role
        </span>
      </div>
      <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
        {experience.bullets.map((bullet) => (
          <li key={bullet} className="flex gap-3">
            <span className="mt-2 size-2 shrink-0 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/30" />
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}
