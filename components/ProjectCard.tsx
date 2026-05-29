import type { Project } from "@/lib/data";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex min-h-[360px] flex-col rounded-3xl border border-slate-900/10 bg-white p-6 shadow-xl shadow-slate-950/5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/50 hover:shadow-violet-950/10 dark:border-white/10 dark:bg-white/[0.055] dark:shadow-black/20">
      <p className="text-xs font-bold uppercase tracking-[0.24em] text-violet-600 dark:text-violet-300">Project</p>
      <h3 className="mt-4 text-3xl font-black tracking-tight text-slate-950 dark:text-white">{project.name}</h3>
      <p className="mt-4 leading-7 text-slate-700 dark:text-slate-300">{project.summary}</p>
      <div className="mt-5 space-y-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
        {project.details.map((detail) => (
          <p key={detail}>{detail}</p>
        ))}
      </div>
      <div className="mt-auto flex flex-wrap gap-2 pt-8">
        {project.stack.map((item) => (
          <span
            key={item}
            className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-700 dark:bg-white/10 dark:text-slate-200"
          >
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}
