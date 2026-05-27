"use client";

import { profile } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 py-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="h-7 w-7 grid place-items-center rounded-full bg-ink-900 dark:bg-white text-white dark:text-ink-900 serif text-sm">
            D
          </span>
          <div className="flex flex-col">
            <span className="text-sm font-medium">{profile.name}</span>
            <span className="mono text-ink-400 dark:text-ink-300">
              Designed & built with care · {year}
            </span>
          </div>
        </div>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-ink-500 dark:text-ink-300">
          <a href={`mailto:${profile.email}`} className="link">
            Email
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="link">
            LinkedIn
          </a>
          <a href="#top" className="link">
            Back to top ↑
          </a>
        </nav>
      </div>
    </footer>
  );
}
