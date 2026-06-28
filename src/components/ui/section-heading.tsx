"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
}

export function SectionHeading({
  title,
  subtitle,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {subtitle && (
        <span className="font-button text-xs uppercase tracking-[5px] text-[#D5B98A] mb-4 block">
          {subtitle}
        </span>
      )}
      <h2
        className="font-heading text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-[#F5F0EA]"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-[#7D6B5A] font-body text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}
