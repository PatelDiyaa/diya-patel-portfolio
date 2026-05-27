"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { profile } from "@/lib/data";
import { Sparkles } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          label="01 · About"
          title="A junior product designer who thinks in systems and ships with AI."
          description="I care about the small details that make real software feel calm to use — and the underlying systems that let a team keep shipping that feeling, release after release."
        />

        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-7 flex flex-col gap-6"
          >
            {profile.bio.map((para, i) => (
              <p
                key={i}
                className="text-base sm:text-lg leading-relaxed text-ink-700 dark:text-ink-100"
              >
                {para}
              </p>
            ))}

            <div className="mt-4 rounded-2xl border border-black/10 dark:border-white/10 bg-gradient-to-br from-accent/[0.08] via-transparent to-accent-soft/[0.06] p-5 flex items-start gap-4">
              <div className="h-9 w-9 rounded-full grid place-items-center bg-ink-900 dark:bg-white text-white dark:text-ink-900 shrink-0">
                <Sparkles className="h-4 w-4" />
              </div>
              <div>
                <div className="mono text-ink-500 dark:text-ink-300 mb-1">
                  How I work with AI
                </div>
                <p className="text-sm sm:text-base leading-relaxed text-ink-700 dark:text-ink-100">
                  AI sits in my loop, not at the end of it. I use Claude to
                  synthesize messy research notes, Cursor to prototype real
                  interactions, and Codex when I need a working artifact in
                  front of a stakeholder fast. The taste, judgment, and
                  final calls stay mine.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-5 flex flex-col gap-4"
          >
            <div className="mono text-ink-500 dark:text-ink-300 mb-1">
              What I believe
            </div>
            <div className="flex flex-col divide-y divide-black/10 dark:divide-white/10 border-y border-black/10 dark:border-white/10">
              {profile.values.map((v) => (
                <div key={v.title} className="py-5 group">
                  <div className="flex items-center justify-between">
                    <span className="serif text-xl tracking-tight">
                      {v.title}
                    </span>
                    <span className="text-xs text-ink-400 dark:text-ink-300 opacity-0 group-hover:opacity-100 transition-opacity">
                      ↗
                    </span>
                  </div>
                  <p className="text-sm text-ink-500 dark:text-ink-300 mt-2 leading-relaxed">
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
