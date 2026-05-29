import { ContactSection } from "@/components/ContactSection";
import { ExperienceCard } from "@/components/ExperienceCard";
import { Hero } from "@/components/Hero";
import { MusicSection } from "@/components/MusicSection";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { SkillsGrid } from "@/components/SkillsGrid";
import { experiences, projects } from "@/lib/data";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-950 transition-colors duration-300 dark:bg-[#050816] dark:text-slate-50">
      <Navbar />
      <Hero />

      <Reveal>
        <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="About" title="Practical systems, built from scratch." />
          <div className="grid gap-8 text-base leading-8 text-slate-700 dark:text-slate-300 md:grid-cols-[0.75fr_1fr]">
            <p className="text-2xl font-semibold leading-snug text-slate-950 dark:text-white">
              I like taking ambiguous problems and turning them into tools that people can actually use.
            </p>
            <div className="space-y-5">
              <p>
                That has meant AI prototypes, data infrastructure, fintech dashboards, founder-led product work, and
                automation that makes teams faster. I care a lot about speed, execution, and solving real user problems
                instead of polishing ideas forever.
              </p>
              <p>
                Outside of engineering, I spend real time writing, recording, and performing music. It is a different
                kind of building, but the taste, iteration, and momentum feel connected.
              </p>
            </div>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section id="experience" className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Experience"
            title="Engineering work with data, products, and production pressure."
            description="Recent roles across robotics and fintech, with an emphasis on pipelines, dashboards, automation, and applied ML."
          />
          <div className="grid gap-5 md:grid-cols-2">
            {experiences.map((experience) => (
              <ExperienceCard key={experience.company} experience={experience} />
            ))}
          </div>
        </section>
      </Reveal>

      <Reveal>
        <section id="projects" className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Projects"
            title="Student-built products and technical experiments."
            description="A mix of shipped communities, applied ML, and design challenges where the output had to be legible."
          />
          <div className="grid gap-5 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          </div>
        </section>
      </Reveal>

      <MusicSection />
      <SkillsGrid />
      <ContactSection />
    </main>
  );
}
