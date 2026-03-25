"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeading({
  label,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${centered ? "text-center" : ""}`}
    >
      {label && (
        <span className="inline-block text-primary font-semibold text-sm uppercase tracking-wider mb-2">
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight">{title}</h2>
      {description && (
        <p className="mt-4 text-neutral-600 max-w-2xl leading-relaxed mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}
