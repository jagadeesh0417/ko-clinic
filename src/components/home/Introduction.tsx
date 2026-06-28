"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Sparkles, Shield, Heart } from "lucide-react";

const features = [
  { icon: Shield, title: "Science-Backed", description: "Every treatment is rooted in the latest medical research and performed by certified professionals." },
  { icon: Sparkles, title: "Artistically Delivered", description: "We approach every procedure as a craft, ensuring results that enhance your natural beauty." },
  { icon: Heart, title: "Luxuriously Experienced", description: "From the moment you arrive, every detail is curated for your comfort and privacy." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export function Introduction() {
  return (
    <section className="section-padding bg-[#3A281E]">
      <div className="container-custom">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
        >
          <motion.div variants={itemVariants}>
            <p className="mb-4 font-button text-xs sm:text-sm uppercase tracking-[0.2em] text-[#D6B787]">
              Welcome to KO CLINIC
            </p>
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-light leading-tight text-[#F6F0EA]">
              Where Science{" "}
              <span className="italic text-[#D6B787]">Meets</span>{" "}
              Art
            </h2>
            <div className="relative my-6 sm:my-8 h-px w-20 sm:w-24 bg-gradient-to-r from-[#D6B787] to-transparent" />
            <p className="max-w-md text-base sm:text-lg leading-relaxed text-[#8E7C6E]">
              We believe that true beauty emerges when clinical excellence meets artistic vision. Our approach is built on a foundation of rigorous science, elevated by an uncompromising dedication to aesthetics.
            </p>
            <p className="mt-3 sm:mt-4 max-w-md text-sm sm:text-base leading-relaxed text-[#8E7C6E]">
              At KO CLINIC, every treatment plan is as unique as you are. Our specialists combine advanced technology with an artisan&apos;s touch to deliver results that feel as natural as they are transformative.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-4 sm:space-y-6">
            <GlassCard className="relative overflow-hidden border p-5 sm:p-6 md:p-8 border-[rgba(214,183,135,0.25)] bg-[#2B1C15]">
              <p className="relative text-sm sm:text-base leading-relaxed text-[#E8DDD1]">
                Our philosophy is simple: you deserve a space where medical expertise and luxurious care coexist. From the warmth of our consultation rooms to the precision of our techniques, every element is designed to make you feel seen, safe, and extraordinary.
              </p>
            </GlassCard>

            <div className="grid grid-cols-3 gap-2 sm:gap-4">
              {[
                { value: "15+", label: "Years Excellence" },
                { value: "10K+", label: "Happy Clients" },
                { value: "98%", label: "Satisfaction" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4 }}
                  className="rounded-xl border border-[rgba(214,183,135,0.25)] bg-[rgba(43,28,21,0.6)] p-3 sm:p-4 text-center backdrop-blur-sm transition-colors"
                >
                  <p className="font-heading text-lg sm:text-xl md:text-2xl text-[#D6B787]">{stat.value}</p>
                  <p className="mt-1 text-[10px] sm:text-xs tracking-wide text-[#8E7C6E]">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="space-y-3 sm:space-y-4 pt-3 sm:pt-4">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <GlassCard className="flex items-start gap-3 sm:gap-4 border border-[rgba(214,183,135,0.25)] bg-[#241710] p-4 sm:p-5 transition-colors">
                      <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-[rgba(214,183,135,0.12)]">
                        <Icon className="h-4 w-4 sm:h-5 sm:w-5 text-[#D6B787]" />
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm font-semibold text-[#C5A067]">{feature.title}</p>
                        <p className="mt-1 text-xs sm:text-sm leading-relaxed text-[#8E7C6E]">{feature.description}</p>
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
