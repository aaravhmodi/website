import { skills } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function SkillsGrid() {
  return (
    <Reveal>
      <section id="skills" className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="A practical stack for product, data, and ML work."
          description="Grouped so the site is easy to scan and easy to edit later."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skillGroup) => (
            <article
              key={skillGroup.group}
              className="rounded-3xl border border-slate-900/10 bg-white p-6 shadow-xl shadow-slate-950/5 dark:border-white/10 dark:bg-white/[0.055] dark:shadow-black/20"
            >
              <h3 className="text-lg font-black text-slate-950 dark:text-white">{skillGroup.group}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-slate-900/10 px-3 py-2 text-sm font-semibold text-slate-700 dark:border-white/10 dark:text-slate-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </Reveal>
  );
}
