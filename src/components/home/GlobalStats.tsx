"use client";

import { motion } from "framer-motion";
import { images } from "@/lib/images";

export function GlobalStats() {
  return (
    <section className="relative h-[500px] sm:h-[600px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url(${images.global.map})` }}
      />
      <div className="absolute inset-0 bg-deep-black/70" />
      <div className="absolute inset-0 noise-overlay opacity-20" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-ivory leading-[1.1] mb-12 text-balance"
        >
          A Global Network of
          <br />
          <span className="font-medium champagne-gradient">Excellence</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
          {[
            { value: "9", label: "Cities" },
            { value: "50+", label: "Clinics" },
            { value: "10K+", label: "Patients" },
            { value: "200+", label: "Specialists" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-champagne mb-1">
                {stat.value}
              </div>
              <div className="font-body text-xs sm:text-sm text-platinum uppercase tracking-[0.15em]">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
