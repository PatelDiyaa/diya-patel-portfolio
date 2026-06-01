"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";
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
          {/* Prominent current role badge */}
          <motion.div variants={item}>
            <a
              href="#about"
              className="group inline-flex items-center gap-3 rounded-full border border-black/10 dark:border-white/10 bg-white/60 dark:bg-white/[0.04] backdrop-blur px-4 py-2 hover:border-accent/40 dark:hover:border-accent-soft/40 transition-colors"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="mono text-ink-400 dark:text-ink-300">
                Currently
              </span>
              <span className="text-sm font-medium text-ink-900 dark:text-white">
                UI/UX Designer
              </span>
              <span className="text-sm text-ink-400 dark:text-ink-300">at</span>
              <span className="text-sm font-semibold text-ink-900 dark:text-white">
                Petpooja
              </span>
              <ArrowUpRight className="h-3.5 w-3.5 text-ink-400 dark:text-ink-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </motion.div>

          <motion.h1
            variants={item}
            className="serif tracking-tightest leading-[0.95] text-[14vw] sm:text-[11vw] md:text-[9vw] lg:text-[8rem]"
          >
            Hi. I&apos;m <span className="italic">Diya</span>.
          </motion.h1>

          <motion.p
            variants={item}
            className="serif text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] leading-[1.18] tracking-tight max-w-4xl text-ink-700 dark:text-ink-100"
          >
            I study how{" "}
            <em className="italic text-accent dark:text-accent-soft">people</em>{" "}
            behave, question how things are done, and design products and
            systems that{" "}
            <em className="italic text-accent dark:text-accent-soft">
              make sense
            </em>{" "}
            to the people using them.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-wrap gap-3 mt-4"
          >
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
