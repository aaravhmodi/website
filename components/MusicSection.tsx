import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function MusicSection() {
  return (
    <Reveal>
      <section id="music" className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_0.65fr]">
          <div>
            <SectionHeading eyebrow="Music / Daydream" title="The other thing I build is songs." />
            <div className="space-y-5 text-base leading-8 text-slate-700 dark:text-slate-300">
              <p>
                I co-founded a pop band called Daydream, where I write songs and play lead guitar. Music is my creative
                outlet outside of software, school, and work, but it has never felt separate from the way I think.
              </p>
              <p>
                We did not start Daydream for ambition or recognition. We started because we genuinely love music:
                writing melodies, recording guitar parts, rehearsing until a song feels alive, and playing it for
                people. The opportunities came naturally from that.
              </p>
              <p>
                Daydream has released 15+ songs with 15K+ streams, performed at TIFF, and opened for Finn Wolfhard and
                Grammy-winning artists.
              </p>
            </div>
          </div>
          <aside className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-cyan-400/15 via-violet-500/10 to-slate-950/5 p-7 shadow-2xl shadow-cyan-950/10 dark:from-cyan-400/15 dark:via-violet-500/15 dark:to-white/5">
            <div className="absolute -right-16 -top-16 size-48 rounded-full bg-cyan-300/20 blur-3xl" />
            <p className="relative text-2xl font-black leading-tight tracking-tight text-slate-950 dark:text-white">
              “Outside of code, I&apos;m probably writing songs, recording guitar parts, or rehearsing with Daydream.”
            </p>
            <div className="relative mt-8 grid grid-cols-3 gap-3 text-center">
              {[
                ["15+", "songs"],
                ["15K+", "streams"],
                ["TIFF", "stage"],
              ].map(([value, label]) => (
                <div key={value} className="rounded-2xl bg-white/70 p-4 dark:bg-white/10">
                  <p className="text-xl font-black text-cyan-600 dark:text-cyan-200">{value}</p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-slate-500 dark:text-slate-400">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </Reveal>
  );
}
