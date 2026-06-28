"use client";

import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Sparkles, Shield, Heart } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Science-Backed",
    description:
      "Every treatment is rooted in the latest medical research and performed by certified professionals.",
  },
  {
    icon: Sparkles,
    title: "Artistically Delivered",
    description:
      "We approach every procedure as a craft, ensuring results that enhance your natural beauty.",
  },
  {
    icon: Heart,
    title: "Luxuriously Experienced",
    description:
      "From the moment you arrive, every detail is curated for your comfort and privacy.",
  },
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
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

export function Introduction() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32" style={{ backgroundColor: "#3A281E" }}>
      {/* Decorative glassmorphism elements */}
      <div
        className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #D6B787 0%, transparent 70%)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-40 -right-40 h-[30rem] w-[30rem] rounded-full opacity-10 blur-3xl"
        style={{ background: "radial-gradient(circle, #C5A067 0%, transparent 70%)" }}
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24"
        >
          {/* Left — Brand Statement */}
          <motion.div variants={itemVariants}>
            <p
              className="mb-4 text-sm font-semibold uppercase tracking-[0.2em]"
              style={{ color: "#D6B787" }}
            >
              Welcome to KO CLINIC
            </p>
            <h2
              className="text-4xl font-light leading-tight tracking-tight sm:text-5xl lg:text-6xl"
              style={{ color: "#F6F0EA" }}
            >
              Where Science{" "}
              <span className="italic" style={{ color: "#D6B787" }}>
                Meets
              </span>{" "}
              Art
            </h2>

            {/* Glassmorphism decorative divider */}
            <div className="relative my-8 h-px w-24 overflow-hidden">
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(90deg, #D6B787, transparent)" }}
              />
              <div
                className="absolute inset-0 backdrop-blur-sm"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(214,183,135,0.5), transparent)",
                }}
              />
            </div>

            <p className="max-w-md text-lg leading-relaxed" style={{ color: "#8E7C6E" }}>
              We believe that true beauty emerges when clinical excellence meets
              artistic vision. Our approach is built on a foundation of rigorous
              science, elevated by an uncompromising dedication to aesthetics.
            </p>
            <p
              className="mt-4 max-w-md text-base leading-relaxed"
              style={{ color: "#8E7C6E" }}
            >
              At KO CLINIC, every treatment plan is as unique as you are. Our
              specialists combine advanced technology with an artisan&apos;s touch
              to deliver results that feel as natural as they are transformative.
            </p>
          </motion.div>

          {/* Right — Description & Stats */}
          <motion.div variants={itemVariants} className="space-y-6">
            <GlassCard className="relative overflow-hidden border p-8" style={{ borderColor: "rgba(214,183,135,0.25)", backgroundColor: "#2B1C15" }}>
              {/* Inner glass sheen */}
              <div
                className="pointer-events-none absolute -inset-1 opacity-30"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(214,183,135,0.1) 0%, transparent 50%, rgba(214,183,135,0.05) 100%)",
                }}
              />
              <p className="relative text-base leading-relaxed" style={{ color: "#E8DDD1" }}>
                Our philosophy is simple: you deserve a space where medical
                expertise and luxurious care coexist. From the warmth of our
                consultation rooms to the precision of our techniques, every
                element is designed to make you feel seen, safe, and
                extraordinary.
              </p>
            </GlassCard>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                { value: "15+", label: "Years Excellence" },
                { value: "10K+", label: "Happy Clients" },
                { value: "98%", label: "Satisfaction" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -4 }}
                  className="rounded-xl border p-4 text-center backdrop-blur-sm transition-colors"
                  style={{
                    borderColor: "rgba(214,183,135,0.25)",
                    backgroundColor: "rgba(43,28,21,0.6)",
                  }}
                >
                  <p
                    className="text-xl font-semibold sm:text-2xl"
                    style={{ color: "#D6B787" }}
                  >
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs tracking-wide" style={{ color: "#8E7C6E" }}>
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Feature cards */}
            <div className="space-y-4 pt-4">
              {features.map((feature) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <GlassCard
                      className="flex items-start gap-4 border p-5 transition-colors"
                      style={{
                        borderColor: "rgba(214,183,135,0.25)",
                        backgroundColor: "#241710",
                      }}
                    >
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg"
                        style={{ backgroundColor: "rgba(214,183,135,0.12)" }}
                      >
                        <Icon className="h-5 w-5" style={{ color: "#D6B787" }} />
                      </div>
                      <div>
                        <p
                          className="text-sm font-semibold"
                          style={{ color: "#C5A067" }}
                        >
                          {feature.title}
                        </p>
                        <p
                          className="mt-1 text-sm leading-relaxed"
                          style={{ color: "#8E7C6E" }}
                        >
                          {feature.description}
                        </p>
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
