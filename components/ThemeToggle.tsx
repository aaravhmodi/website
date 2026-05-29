"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const storedTheme = window.localStorage.getItem("theme");
    const shouldUseDark = storedTheme ? storedTheme === "dark" : true;
    document.documentElement.classList.toggle("dark", shouldUseDark);
    setIsDark(shouldUseDark);
    setMounted(true);
  }, []);

  function toggleTheme() {
    const nextTheme = !isDark;
    setIsDark(nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme);
    window.localStorage.setItem("theme", nextTheme ? "dark" : "light");
  }

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className="grid size-10 place-items-center rounded-full border border-slate-900/10 bg-white text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-cyan-400 hover:text-cyan-500 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:text-cyan-200"
    >
      <span className="text-base">{mounted && !isDark ? "☾" : "☀"}</span>
    </button>
  );
}
