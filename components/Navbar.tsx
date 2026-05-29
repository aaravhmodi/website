"use client";

import { navItems } from "@/lib/data";
import { ThemeToggle } from "./ThemeToggle";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-900/10 bg-white/75 backdrop-blur-xl transition-colors dark:border-white/10 dark:bg-[#050816]/75">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4 sm:px-6 lg:px-8">
        <a href="#" className="group flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-2xl border border-cyan-400/30 bg-cyan-400/10 text-sm font-black text-cyan-500 shadow-lg shadow-cyan-500/10 dark:text-cyan-300">
            AM
          </span>
          <span className="hidden text-sm font-semibold tracking-tight text-slate-900 dark:text-white sm:block">
            Aarav Modi
          </span>
        </a>

        <div className="hidden items-center gap-1 rounded-full border border-slate-900/10 bg-slate-100/70 p-1 text-sm font-medium text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 transition hover:bg-white hover:text-slate-950 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-cyan-500 dark:bg-white dark:text-slate-950 dark:hover:bg-cyan-200 sm:inline-flex"
          >
            Contact
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
