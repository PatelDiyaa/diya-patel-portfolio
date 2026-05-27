"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { projects, type Project } from "@/lib/data";
import { cn } from "@/lib/utils";

export default function Projects() {
  const [active, setActive] = useState<Project | null>(null);
  const featured = projects.filter((p) => p.featured);
  const more = projects.filter((p) => !p.featured);

  return (
    <section id="work" className="relative py-24 sm:py-32 bg-ink-50/40 dark:bg-ink-800/20">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          label="02 · Selected Work"
          title="Case studies in shipping useful things."
          description="Three flagship projects from Petpooja and Apollo Infotech, plus a few earlier explorations. Click any project to see the full case study."
        />

        <div className="grid gap-6 sm:gap-8">
          {featured.map((p, i) => (
            <FeaturedCard key={p.slug} project={p} index={i} onOpen={() => setActive(p)} />
          ))}
        </div>

        <div className="mt-20">
          <div className="mono text-ink-500 dark:text-ink-300 mb-6">More work</div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {more.map((p) => (
              <CompactCard key={p.slug} project={p} onOpen={() => setActive(p)} />
            ))}
          </div>
        </div>
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}

function FeaturedCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className="card-lift group block text-left w-full rounded-3xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-ink-900/60 backdrop-blur-sm overflow-hidden hover:border-black/25 dark:hover:border-white/25"
    >
      <div className="grid md:grid-cols-12">
        <div
          className={cn(
            "md:col-span-5 relative aspect-[16/10] md:aspect-auto md:min-h-[320px] overflow-hidden bg-gradient-to-br",
            project.cover.gradient
          )}
        >
          <div className="absolute inset-0 noise" />
          <div className="absolute inset-0 p-7 flex flex-col justify-between">
            <span className="mono text-ink-700/80 dark:text-ink-900/80 bg-white/60 dark:bg-white/70 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5">
              {project.cover.eyebrow}
            </span>
            <div className="serif text-3xl sm:text-4xl text-ink-900 tracking-tight max-w-xs">
              {project.title}
            </div>
          </div>
        </div>

        <div className="md:col-span-7 p-7 sm:p-9 flex flex-col gap-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mono text-ink-500 dark:text-ink-300">
              {project.year} · {project.role}
            </span>
            <span className="mono text-ink-400 dark:text-ink-400">·</span>
            <span className="mono inline-flex items-center gap-1.5 text-ink-500 dark:text-ink-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              {project.status}
            </span>
          </div>

          <h3 className="serif text-3xl sm:text-4xl tracking-tight leading-[1.05]">
            {project.subtitle}
          </h3>

          <p className="text-ink-500 dark:text-ink-300 leading-relaxed">
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-2 mt-1">
            {project.tags.map((t) => (
              <span
                key={t}
                className="text-xs rounded-full border border-black/10 dark:border-white/10 px-2.5 py-1 text-ink-500 dark:text-ink-300"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-black/10 dark:border-white/10">
            <div className="flex flex-wrap gap-5">
              {project.outcome.slice(0, 3).map((o) => (
                <div key={o.label} className="flex flex-col">
                  <span className="serif text-xl tracking-tight">{o.metric}</span>
                  <span className="text-xs text-ink-500 dark:text-ink-300">
                    {o.label}
                  </span>
                </div>
              ))}
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium link">
              Read case study
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </div>
    </motion.button>
  );
}

function CompactCard({
  project,
  onOpen,
}: {
  project: Project;
  onOpen: () => void;
}) {
  return (
    <motion.button
      type="button"
      onClick={onOpen}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="card-lift text-left rounded-2xl border border-black/10 dark:border-white/10 bg-white/60 dark:bg-ink-900/60 overflow-hidden group hover:border-black/25 dark:hover:border-white/25"
    >
      <div
        className={cn(
          "relative aspect-[16/9] bg-gradient-to-br overflow-hidden",
          project.cover.gradient
        )}
      >
        <div className="absolute inset-0 noise" />
        <span className="absolute top-4 left-4 mono text-ink-700/80 bg-white/70 inline-flex items-center gap-2 rounded-full px-2.5 py-1">
          {project.cover.eyebrow}
        </span>
      </div>
      <div className="p-5 flex flex-col gap-2">
        <div className="flex items-center justify-between gap-3">
          <h4 className="serif text-xl tracking-tight">{project.title}</h4>
          <ArrowUpRight className="h-4 w-4 text-ink-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
        <p className="text-sm text-ink-500 dark:text-ink-300 leading-relaxed line-clamp-2">
          {project.subtitle}
        </p>
        <div className="flex flex-wrap gap-1.5 mt-2">
          {project.tags.slice(0, 3).map((t) => (
            <span
              key={t}
              className="text-[11px] rounded-full border border-black/10 dark:border-white/10 px-2 py-0.5 text-ink-500 dark:text-ink-300"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.button>
  );
}

function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="relative max-w-3xl mx-auto my-8 sm:my-16 mx-4 sm:mx-auto bg-ink-50 dark:bg-ink-900 text-ink-900 dark:text-ink-50 rounded-3xl border border-black/10 dark:border-white/10 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 h-9 w-9 rounded-full bg-white/80 dark:bg-ink-800/80 backdrop-blur grid place-items-center border border-black/10 dark:border-white/10 hover:scale-105 transition-transform"
          aria-label="Close case study"
        >
          <X className="h-4 w-4" />
        </button>

        <div
          className={cn(
            "relative aspect-[16/8] bg-gradient-to-br overflow-hidden",
            project.cover.gradient
          )}
        >
          <div className="absolute inset-0 noise" />
          <div className="absolute inset-0 p-8 sm:p-12 flex flex-col justify-end">
            <span className="mono text-ink-700/80 bg-white/70 inline-flex w-fit items-center gap-2 rounded-full px-3 py-1.5 mb-4">
              {project.cover.eyebrow}
            </span>
            <h3 className="serif text-3xl sm:text-5xl text-ink-900 tracking-tight max-w-2xl">
              {project.title}
            </h3>
          </div>
        </div>

        <div className="p-8 sm:p-12 flex flex-col gap-10">
          <div className="grid sm:grid-cols-3 gap-6 border-b border-black/10 dark:border-white/10 pb-8">
            <Meta label="Role" value={project.role} />
            <Meta label="Year" value={project.year} />
            <Meta label="Team" value={project.company} />
          </div>

          <Section title="The problem">{project.problem}</Section>

          <div className="flex flex-col gap-3">
            <SubLabel>Process</SubLabel>
            <ol className="flex flex-col gap-3">
              {project.process.map((step, i) => (
                <li key={i} className="flex gap-4">
                  <span className="mono text-ink-400 dark:text-ink-300 pt-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-ink-700 dark:text-ink-100 leading-relaxed">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <Section title="The solution">{project.solution}</Section>

          <div>
            <SubLabel>Outcome</SubLabel>
            <div className="grid sm:grid-cols-3 gap-5 mt-3">
              {project.outcome.map((o) => (
                <div
                  key={o.label}
                  className="rounded-2xl border border-black/10 dark:border-white/10 p-5 bg-white/50 dark:bg-white/[0.03]"
                >
                  <div className="serif text-3xl tracking-tight">{o.metric}</div>
                  <div className="text-sm text-ink-500 dark:text-ink-300 mt-1">
                    {o.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {project.reflection && (
            <div className="rounded-2xl bg-accent/[0.08] dark:bg-accent-soft/[0.08] p-6 border border-accent/15 dark:border-accent-soft/20">
              <SubLabel>Reflection</SubLabel>
              <p className="serif italic text-xl sm:text-2xl tracking-tight mt-2 leading-snug">
                &ldquo;{project.reflection}&rdquo;
              </p>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-3">
      <SubLabel>{title}</SubLabel>
      <p className="text-ink-700 dark:text-ink-100 text-base sm:text-lg leading-relaxed">
        {children}
      </p>
    </div>
  );
}

function SubLabel({ children }: { children: React.ReactNode }) {
  return <span className="mono text-ink-500 dark:text-ink-300">{children}</span>;
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col">
      <span className="mono text-ink-400 dark:text-ink-300">{label}</span>
      <span className="text-ink-900 dark:text-ink-50 mt-1">{value}</span>
    </div>
  );
}
