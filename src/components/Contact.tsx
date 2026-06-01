"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Mail, Linkedin, MapPin, Clock } from "lucide-react";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 mesh opacity-90" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,transparent,rgb(var(--background))_70%)]" aria-hidden />

      <div className="mx-auto max-w-5xl px-5 sm:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center text-center gap-8"
        >
          <span className="mono inline-flex items-center gap-2 text-ink-500 dark:text-ink-300">
            <span className="h-px w-6 bg-current opacity-60" />
            04 · Contact
          </span>

          <h2 className="serif text-5xl sm:text-7xl md:text-[6rem] tracking-tightest leading-[0.95]">
            Let&apos;s build
            <span className="italic block text-accent dark:text-accent-soft">
              something good.
            </span>
          </h2>

          <p className="max-w-xl text-base sm:text-lg text-ink-500 dark:text-ink-300 leading-relaxed">
            I&apos;m always open to talking about product design roles, side
            collaborations, or a thoughtful critique exchange. The fastest way
            to reach me is email.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 mt-2">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-ink-900 dark:bg-white text-white dark:text-ink-900 px-5 sm:px-6 py-3 sm:py-3.5 text-sm font-medium transition-transform hover:scale-[1.02]"
            >
              <Mail className="h-4 w-4" />
              {profile.email}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 rounded-full border border-black/15 dark:border-white/15 px-5 sm:px-6 py-3 sm:py-3.5 text-sm font-medium text-ink-700 dark:text-ink-100 hover:bg-black/[0.04] dark:hover:bg-white/[0.06] transition-colors"
            >
              <Linkedin className="h-4 w-4" />
              LinkedIn
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 mono text-ink-400 dark:text-ink-300">
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" /> {profile.location}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="h-3.5 w-3.5" /> {profile.timezone}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 pulse-soft" />
              {profile.availability}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
