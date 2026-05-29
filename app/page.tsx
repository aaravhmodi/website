const experience = [
  ["machine learning engineer", "upside robotics", "present"],
  ["software engineer", "cibc", "2025"],
];

const projects = [
  ["lockerlink", "social platform for ova volleyball athletes and coaches"],
  ["crai", "ai cry analyzer presented at hackmit 2025"],
  ["nasa design challenge", "grand prize winner out of 4,000+ global teams"],
];

const socials = [
  ["github", "https://github.com/aaravhmodi"],
  ["linkedin", "#"],
  ["email", "mailto:aarav.modi@uwaterloo.ca"],
];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-zinc-100">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: "url('/mountain-bg.png')" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_20%,rgba(255,255,255,0.16),transparent_22%),linear-gradient(90deg,rgba(0,0,0,0.88),rgba(0,0,0,0.44)_45%,rgba(0,0,0,0.92))]" />
      <div className="absolute inset-0 backdrop-blur-[1.5px]" />

      <section className="relative mx-auto min-h-screen w-full max-w-[620px] px-6 py-20 sm:py-24">
        <h1 className="text-4xl font-medium tracking-tight text-white sm:text-5xl">Aarav Modi</h1>
        <p className="mt-6 max-w-[540px] text-lg leading-7 text-zinc-400">
          systems design engineering at the university of waterloo. building software, data systems, ai/ml tools,
          fintech dashboards, products, and music.
        </p>

        <div className="mt-14 space-y-10">
          <section>
            <h2 className="section-label">experience</h2>
            <div className="mt-4 space-y-5">
              {experience.map(([role, place, year]) => (
                <a key={role} href="#" className="group grid grid-cols-[1fr_auto] gap-6">
                  <div>
                    <h3 className="text-lg font-medium text-zinc-100 transition group-hover:text-white">
                      {role}
                    </h3>
                    <p className="mt-1 text-base text-zinc-500 transition group-hover:text-zinc-300">
                      {place} <span className="text-zinc-600">↗</span>
                    </p>
                  </div>
                  <p className="pt-1 text-sm text-zinc-500">{year}</p>
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="section-label">projects</h2>
            <div className="mt-4 space-y-5">
              {projects.map(([name, description]) => (
                <a key={name} href="#" className="group block">
                  <h3 className="text-lg font-medium text-zinc-100 transition group-hover:text-white">
                    {name} <span className="text-zinc-600">↗</span>
                  </h3>
                  <p className="mt-1 text-base leading-6 text-zinc-500 transition group-hover:text-zinc-300">
                    {description}
                  </p>
                </a>
              ))}
            </div>
          </section>

          <section>
            <h2 className="section-label">music</h2>
            <div className="mt-4">
              <h3 className="text-lg font-medium text-zinc-100">daydream</h3>
              <p className="mt-1 text-base text-zinc-500">lead guitar, songwriting, recording</p>
            </div>
          </section>

          <section>
            <h2 className="section-label">socials</h2>
            <div className="mt-4 flex gap-5">
              {socials.map(([label, href]) => (
                <a key={label} href={href} className="text-base text-zinc-400 transition hover:text-white">
                  {label}
                </a>
              ))}
            </div>
            <a
              href="mailto:aarav.modi@uwaterloo.ca"
              className="mt-4 block text-base text-zinc-300 transition hover:text-white"
            >
              aarav.modi@uwaterloo.ca
            </a>
          </section>
        </div>
      </section>
    </main>
  );
}
