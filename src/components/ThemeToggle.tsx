"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const current = mounted ? resolvedTheme ?? theme : "dark";
  const isDark = current === "dark";

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative h-9 w-9 rounded-full border border-black/10 dark:border-white/10 bg-white/40 dark:bg-white/[0.04] backdrop-blur grid place-items-center transition-colors hover:bg-black/[0.04] dark:hover:bg-white/[0.08]"
    >
      <Sun
        className={`absolute h-4 w-4 transition-all ${isDark ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"}`}
      />
      <Moon
        className={`absolute h-4 w-4 transition-all ${isDark ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"}`}
      />
    </button>
  );
}
