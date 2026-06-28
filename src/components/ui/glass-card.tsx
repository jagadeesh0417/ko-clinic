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
      transition={{ duration: 0.6, delay }}
      whileHover={hover ? { y: -5, transition: { duration: 0.3 } } : undefined}
      className={cn(
        "glassmorphism rounded-sm p-6 md:p-8 transition-all duration-500",
        hover && "hover:border-[rgba(201,168,106,0.3)] hover:shadow-lg hover:shadow-[rgba(201,168,106,0.05)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
