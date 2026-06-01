"use client";

import { useEffect, useState } from "react";
import { FileText } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { profile } from "@/lib/data";
import { cn } from "@/lib/utils";

const links = [
  { href: "/#work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#skills", label: "Skills" },
  { href: "/#contact", label: "Contact" },
];

const RESUME_URL =
  "https://docs.google.com/document/d/1lPwNgix7OKGl7WivAmd64UoROUM2VLqoMD1HkDoOYsE/edit?usp=share_link";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-500",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div
          className={cn(
            "flex items-center justify-between rounded-full transition-all duration-500 px-4 sm:px-5 py-2.5",
            scrolled
              ? "border border-black/10 dark:border-white/10 bg-white/70 dark:bg-ink-900/70 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.05)]"
              : "border border-transparent"
          )}
        >
          <a href="/" className="flex items-center gap-2.5 group">
            <span className="relative h-7 w-7 grid place-items-center rounded-full bg-ink-900 dark:bg-white text-white dark:text-ink-900 serif text-sm">
              D
            </span>
            <span className="text-sm font-medium tracking-tight">
              {profile.name}
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="px-3 py-1.5 text-sm text-ink-500 dark:text-ink-300 hover:text-ink-900 dark:hover:text-white rounded-full transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={RESUME_URL}
              target="_blank"
              rel="noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-ink-900 dark:bg-white text-white dark:text-ink-900 px-3.5 py-1.5 text-sm font-medium transition-transform hover:scale-[1.02]"
            >
              <FileText className="h-3.5 w-3.5" />
              Resume
            </a>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
