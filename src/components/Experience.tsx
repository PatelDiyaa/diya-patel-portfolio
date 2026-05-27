"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { experience, education } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32 bg-ink-50/40 dark:bg-ink-800/20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          label="04 · Experience & Education"
          title="A short but intentional path so far."
          description="Each role taught me something different — from designing a B2B feature with measurable outcomes to bridging engineering and design with a CS background."
        />

        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-8 flex flex-col">
            <div className="mono text-ink-500 dark:text-ink-300 mb-6">Experience</div>
            <ol className="relative border-l border-black/10 dark:border-white/10 pl-7 flex flex-col gap-10">
              {experience.map((e, i) => (
                <motion.li
                  key={`${e.company}-${i}`}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                  className="relative"
                >
                  <span className="absolute -left-[34px] top-1.5 h-3 w-3 rounded-full bg-accent ring-4 ring-ink-50/40 dark:ring-ink-800/20" />
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <span className="serif text-2xl tracking-tight">{e.role}</span>
                    <span className="text-ink-500 dark:text-ink-300">· {e.company}</span>
                  </div>
                  <div className="mono text-ink-400 dark:text-ink-300 mt-1">
                    {e.period} · {e.location}
                  </div>
                  <p className="mt-3 text-ink-700 dark:text-ink-100 leading-relaxed max-w-2xl">
                    {e.blurb}
                  </p>
                  <ul className="mt-4 flex flex-col gap-2">
                    {e.bullets.map((b, bi) => (
                      <li
                        key={bi}
                        className="flex gap-3 text-sm text-ink-600 dark:text-ink-200 leading-relaxed"
                      >
                        <span className="text-accent shrink-0 mt-[7px] h-1 w-1 rounded-full bg-accent" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </motion.li>
              ))}
            </ol>
          </div>

          <div className="md:col-span-4 flex flex-col gap-8">
            <div>
              <div className="mono text-ink-500 dark:text-ink-300 mb-4">Education</div>
              <div className="flex flex-col gap-5">
                {education.map((e) => (
                  <div
                    key={e.school}
                    className="rounded-2xl border border-black/10 dark:border-white/10 p-5 bg-white/50 dark:bg-white/[0.03]"
                  >
                    <div className="serif text-xl tracking-tight">{e.school}</div>
                    <div className="text-sm text-ink-700 dark:text-ink-100 mt-1">
                      {e.degree}
                    </div>
                    <div className="mono text-ink-400 dark:text-ink-300 mt-2">
                      {e.period}
                    </div>
                    <p className="text-sm text-ink-500 dark:text-ink-300 mt-3 leading-relaxed">
                      {e.note}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mono text-ink-500 dark:text-ink-300 mb-4">Industries</div>
              <div className="flex flex-wrap gap-2">
                {[
                  "B2B SaaS",
                  "POS / Restaurant Tech",
                  "Healthcare",
                  "Mobility",
                  "Civic Tech",
                  "EdTech",
                ].map((t) => (
                  <span
                    key={t}
                    className="text-xs rounded-full border border-black/10 dark:border-white/10 px-2.5 py-1 text-ink-500 dark:text-ink-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
