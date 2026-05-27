"use client";

import { motion } from "framer-motion";

type Props = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export default function SectionHeader({ label, title, description, align = "left" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col gap-4 mb-12 sm:mb-16 ${align === "center" ? "items-center text-center" : ""}`}
    >
      <span className="mono inline-flex items-center gap-2 text-ink-500 dark:text-ink-300">
        <span className="h-px w-6 bg-current opacity-60" />
        {label}
      </span>
      <h2 className="serif text-4xl sm:text-5xl md:text-6xl tracking-tight max-w-3xl">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-ink-500 dark:text-ink-300 max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}
