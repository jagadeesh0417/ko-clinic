"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  align?: "left" | "center";
  gold?: boolean;
}

export function SectionHeading({
  title,
  subtitle,
  description,
  align = "center",
  gold = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`max-w-3xl ${align === "center" ? "mx-auto text-center" : "text-left"}`}
    >
      {subtitle && (
        <span className="font-button text-xs uppercase tracking-[4px] text-[#C9A86A] mb-4 block">
          {subtitle}
        </span>
      )}
      <h2
        className={`font-heading text-4xl md:text-5xl lg:text-6xl font-light leading-tight ${
          gold ? "text-gradient-gold" : "text-[#FAFAFA]"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-[#A1A1AA] font-body text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </motion.div>
  );
}
