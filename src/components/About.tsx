"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { profile } from "@/lib/data";

const chapterLabels = ["Background", "Today at Petpooja", "AI in my loop"];

export default function About() {
  const chapters = profile.bio.map((body, i) => ({
    label: chapterLabels[i] ?? `Chapter ${i + 1}`,
    body,
  }));

  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          label="01 · About"
          title="The person behind the pixels."
          description="I care about the small details that make real software feel calm to use — and the underlying systems that let a team keep shipping that feeling, release after release."
        />

        <div className="grid lg:grid-cols-2 gap-6 lg:gap-8">
          {/* Story column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            <ColumnLabel index="A" title="My story" />
            <div className="flex flex-col gap-4">
              {chapters.map((c, i) => (
                <FacetCard
                  key={c.label}
                  index={i + 1}
                  label={c.label}
                  body={c.body}
                />
              ))}
            </div>
          </motion.div>

          {/* Beliefs column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-4"
          >
            <ColumnLabel index="B" title="What I believe" />
            <div className="flex flex-col gap-4">
              {profile.values.map((v, i) => (
                <FacetCard
                  key={v.title}
                  index={i + 1}
                  label={v.title}
                  body={v.body}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ColumnLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center gap-3 pb-2 border-b border-black/10 dark:border-white/10">
      <span className="h-6 w-6 grid place-items-center rounded-full bg-ink-900 dark:bg-white text-white dark:text-ink-900 mono text-[10px]">
        {index}
      </span>
      <span className="mono text-ink-500 dark:text-ink-300">{title}</span>
    </div>
  );
}

function FacetCard({
  index,
  label,
  body,
}: {
  index: number;
  label: string;
  body: string;
}) {
  return (
    <div className="card-lift rounded-2xl border border-black/10 dark:border-white/10 bg-white/55 dark:bg-white/[0.03] backdrop-blur-sm p-5 sm:p-6 flex flex-col gap-3 hover:border-accent/30 dark:hover:border-accent-soft/30 transition-colors">
      <div className="flex items-center justify-between">
        <span className="serif text-xl sm:text-[1.35rem] tracking-tight leading-snug">
          {label}
        </span>
        <span className="mono text-ink-300 dark:text-ink-400">
          {String(index).padStart(2, "0")}
        </span>
      </div>
      <p className="text-sm sm:text-[15px] leading-relaxed text-ink-600 dark:text-ink-200">
        {body}
      </p>
    </div>
  );
}
