"use client";

import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import { skills } from "@/lib/data";
import { Cpu, PenTool, Users2, Wrench } from "lucide-react";

const groups = [
  {
    icon: PenTool,
    title: "Craft",
    description: "The fundamentals of designing software people actually use.",
    items: skills.craft,
  },
  {
    icon: Wrench,
    title: "Tools",
    description: "What I reach for when the cursor needs to start moving.",
    items: skills.tools,
  },
  {
    icon: Cpu,
    title: "AI-augmented workflow",
    description: "How I use modern AI tools as part of my design process.",
    items: skills.aiWorkflow,
  },
  {
    icon: Users2,
    title: "Collaboration",
    description: "How I work with PMs, engineers, and stakeholders.",
    items: skills.collaboration,
  },
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          label="03 · Skills & Tools"
          title="The toolkit behind the work."
          description="A combination of classic design craft, modern AI workflows, and the soft skills it takes to ship inside a product team."
        />

        <div className="grid sm:grid-cols-2 gap-4 sm:gap-5">
          {groups.map((g, i) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl border border-black/10 dark:border-white/10 bg-white/50 dark:bg-ink-900/50 p-6 sm:p-7 flex flex-col gap-4 card-lift"
            >
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-ink-900 dark:bg-white text-white dark:text-ink-900 grid place-items-center">
                  <g.icon className="h-4 w-4" />
                </div>
                <div className="flex flex-col">
                  <span className="serif text-2xl tracking-tight">{g.title}</span>
                </div>
              </div>
              <p className="text-sm text-ink-500 dark:text-ink-300 leading-relaxed">
                {g.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs sm:text-sm rounded-full border border-black/10 dark:border-white/10 px-3 py-1.5 text-ink-700 dark:text-ink-100 bg-white/70 dark:bg-white/[0.03] hover:border-accent/40 hover:text-accent dark:hover:text-accent-soft transition-colors"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
