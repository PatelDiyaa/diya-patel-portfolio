"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, MapPin } from "lucide-react";
import { profile } from "@/lib/data";

const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden pt-28 pb-20"
    >
      <div className="absolute inset-0 mesh" aria-hidden />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgb(var(--background))_85%)]" aria-hidden />

      <div className="mx-auto max-w-6xl px-5 sm:px-8 w-full relative">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="show"
          className="flex flex-col gap-8"
        >
          <motion.div variants={item} className="flex flex-wrap items-center gap-3">
            <span className="mono inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/10 bg-white/50 dark:bg-white/[0.04] backdrop-blur px-3 py-1.5 text-ink-500 dark:text-ink-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 pulse-soft" />
              {profile.availability}
            </span>
            <span className="mono inline-flex items-center gap-1.5 text-ink-400 dark:text-ink-300">
              <MapPin className="h-3 w-3" /> {profile.location}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="serif text-[14vw] leading-[0.9] tracking-tightest sm:text-[10vw] md:text-[8.5vw] lg:text-[7.5rem]"
          >
            <span className="block">Diya Patel</span>
            <span className="block italic text-ink-500 dark:text-ink-300">
              designs
            </span>
            <span className="block">
              for the{" "}
              <span className="italic relative">
                people
                <svg
                  viewBox="0 0 240 12"
                  className="absolute left-0 right-0 -bottom-2 w-full text-accent dark:text-accent-soft"
                  fill="none"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path
                    d="M2 7 C 80 2, 160 12, 238 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>{" "}
              who use the product.
            </span>
          </motion.h1>

          <motion.div
            variants={item}
            className="grid md:grid-cols-12 gap-8 mt-4"
          >
            <p className="md:col-span-7 text-base sm:text-lg leading-relaxed text-ink-500 dark:text-ink-300 max-w-2xl">
              {profile.subhead}
            </p>

            <div className="md:col-span-5 md:justify-self-end flex flex-col gap-3">
              <div className="flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 rounded-full bg-ink-900 dark:bg-white text-white dark:text-ink-900 px-5 py-3 text-sm font-medium transition-transform hover:scale-[1.02]"
                >
                  View selected work
                  <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-2 rounded-full border border-black/15 dark:border-white/15 px-5 py-3 text-sm font-medium text-ink-700 dark:text-ink-100 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors"
                >
                  Get in touch
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
              <p className="mono text-ink-400 dark:text-ink-300">
                Currently → Product Designer @ Petpooja
              </p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          variants={item}
          initial="hidden"
          animate="show"
          transition={{ delay: 0.7 }}
          className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 border-t border-black/10 dark:border-white/10 pt-8"
        >
          {[
            { k: "B.S. CS", v: "+ Minor in Design, Ahmedabad University" },
            { k: "57.4%", v: "faster task creation, Petpooja Tasks" },
            { k: "2 yrs", v: "shipping B2B SaaS workflows" },
            { k: "Claude · Cursor · Codex", v: "in my daily design loop" },
          ].map((s) => (
            <div key={s.k} className="flex flex-col gap-1">
              <div className="serif text-2xl sm:text-3xl tracking-tight">
                {s.k}
              </div>
              <div className="text-xs text-ink-500 dark:text-ink-300 leading-snug">
                {s.v}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
