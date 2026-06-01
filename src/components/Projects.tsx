"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";

type FeaturedCase = {
  href: string;
  tagline: string;
  title: string;
  titleEm?: string;
  role: string;
  desc: string;
  chips: string[];
  metrics: { num: string; lbl: string }[];
  cover: string;
  coverAlt: string;
  coverBg: string;
  reverse?: boolean;
};

const cases: FeaturedCase[] = [
  {
    href: "/work/nutrify-india",
    tagline: "Concept · Health & Nutrition · 2024 – 2025",
    title: "Nutrify India",
    role: "Product Designer · End-to-end · Concept",
    desc: "A nutrition mobile app designed for the Indian household — dual Individual/Family profiles, scan-to-understand meals, regional cuisine intelligence, and a community-led habits loop.",
    chips: ["Consumer", "Health", "Mobile", "Research-led"],
    metrics: [
      { num: "20+", lbl: "screens prototyped" },
      { num: "5", lbl: "core features" },
      { num: "2", lbl: "segments — Individual + Family" },
    ],
    cover: "/images/nutrify-home.png",
    coverAlt: "Nutrify India — Home screen with daily goal",
    coverBg: "from-[#BFBFD7] via-[#C9C9DB] to-[#A6A6C5]",
  },
  {
    href: "/work/petpooja-tasks",
    tagline: "Flagship · Petpooja · 2025 – 2026",
    title: "Petpooja Tasks",
    titleEm: " — task creation redesign",
    role: "Product Designer · End-to-end · Shipped",
    desc: "A task-management tool used by restaurant and retail SMBs — owners, managers, and frontline staff. The task-creation form was overwhelming users and driving drop-off. I rebuilt it around the five fields people actually fill.",
    chips: ["B2B SaaS", "Form Design", "Web + Mobile", "Operations"],
    metrics: [
      { num: "57.4%", lbl: "faster task creation" },
      { num: "18%", lbl: "lower drop-off mid-form" },
      { num: "5", lbl: "core fields surfaced (rest tucked into Advanced)" },
    ],
    cover: "/images/petpooja-new-default.png",
    coverAlt: "Petpooja Tasks — redesigned task creation form",
    coverBg: "from-[#E8D5C0] via-[#F0DDC4] to-[#DDB99A]",
    reverse: true,
  },
];

export default function Projects() {
  return (
    <section
      id="work"
      className="relative py-24 sm:py-32 bg-ink-50/40 dark:bg-ink-800/20"
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          label="02 · Selected Work"
          title="Case studies in shipping useful things."
          description="Two flagship projects — one consumer health concept, one B2B operations product. Click into either for the full case study: research, decisions, design moves, and what shipped."
        />

        <div className="flex flex-col gap-6 sm:gap-8">
          {cases.map((c, i) => (
            <CaseCard key={c.href} c={c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CaseCard({ c, index }: { c: FeaturedCase; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      <Link
        href={c.href}
        className={`card-lift group block rounded-[24px] border border-black/10 dark:border-white/10 bg-white/70 dark:bg-ink-900/60 overflow-hidden hover:border-black/25 dark:hover:border-white/25 grid lg:grid-cols-[1.05fr_1fr] min-h-[380px] ${
          c.reverse ? "lg:[&>.media]:order-2 lg:[&>.body]:order-1" : ""
        }`}
      >
        <div
          className={`media relative bg-gradient-to-br ${c.coverBg} min-h-[260px] lg:min-h-full overflow-hidden flex items-center justify-center p-8 lg:p-10`}
        >
          <div className="absolute inset-0 noise opacity-50" />
          <img
            src={c.cover}
            alt={c.coverAlt}
            loading="lazy"
            className="relative max-h-[400px] w-auto h-auto rounded-xl"
            style={{
              boxShadow:
                "0 24px 56px -16px rgba(23,23,21,0.18), 0 8px 20px -6px rgba(23,23,21,0.08)",
            }}
          />
        </div>

        <div className="body p-7 sm:p-10 flex flex-col justify-between gap-6">
          <div>
            <div className="mono inline-flex items-center gap-2 text-ink-500 dark:text-ink-300 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-ink-900 dark:bg-white" />
              {c.tagline}
            </div>
            <h3 className="serif text-3xl sm:text-4xl tracking-tight leading-[1.05] mb-2">
              {c.title}
              {c.titleEm && (
                <span className="italic text-ink-500 dark:text-ink-300">
                  {c.titleEm}
                </span>
              )}
            </h3>
            <div className="text-xs sm:text-sm text-ink-500 dark:text-ink-300 mb-5">
              {c.role}
            </div>
            <p className="text-ink-600 dark:text-ink-200 leading-relaxed text-sm sm:text-base max-w-md">
              {c.desc}
            </p>
            <div className="flex flex-wrap gap-1.5 mt-5">
              {c.chips.map((chip) => (
                <span
                  key={chip}
                  className="text-xs rounded-full border border-black/10 dark:border-white/10 px-2.5 py-1 text-ink-500 dark:text-ink-300 bg-white/40 dark:bg-white/[0.02]"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <div>
            <div className="grid grid-cols-3 border-t border-b border-black/10 dark:border-white/10 py-3.5 mb-5">
              {c.metrics.map((m, i) => (
                <div
                  key={m.lbl}
                  className={`px-3 ${
                    i < c.metrics.length - 1
                      ? "border-r border-black/10 dark:border-white/10"
                      : ""
                  } ${i === 0 ? "pl-0" : ""}`}
                >
                  <div className="serif text-xl sm:text-2xl tracking-tight leading-none">
                    {m.num}
                  </div>
                  <div className="text-[11px] sm:text-xs text-ink-500 dark:text-ink-300 mt-1.5 leading-snug">
                    {m.lbl}
                  </div>
                </div>
              ))}
            </div>
            <span className="inline-flex items-center gap-1.5 text-sm font-medium border-b border-current pb-0.5 transition-all group-hover:gap-3">
              Read case study
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
