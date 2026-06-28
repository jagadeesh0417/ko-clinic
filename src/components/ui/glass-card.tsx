"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  hover?: boolean;
}

export function GlassCard({
  children,
  className,
  delay = 0,
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      whileHover={hover ? { y: -6, transition: { duration: 0.3 } } : undefined}
      className={cn(
        "glassmorphism rounded-2xl p-6 md:p-8 transition-all duration-500",
        hover && "hover:border-[rgba(213,185,138,0.25)] hover:shadow-xl hover:shadow-[rgba(34,22,15,0.3)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
