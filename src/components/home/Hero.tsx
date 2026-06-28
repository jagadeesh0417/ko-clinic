"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { MessageCircle, Play, ChevronDown } from "lucide-react";

const stats = [
  { end: 20, suffix: "+", label: "Years Experience" },
  { end: 3000, suffix: "+", label: "Successful Procedures" },
  { end: 10, suffix: "+", label: "Locations" },
];

const badges = [
  "FDA Approved", "Natural Results", "Celebrity Trusted",
  "Combination Techniques", "Minimal Downtime", "International Standards",
];

export function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#2A1A12]">
      <div className="absolute inset-0 bg-gradient-to-br from-[rgba(42,26,18,0.4)] via-[rgba(60,40,29,0.6)] to-[rgba(34,22,15,0.8)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(213,185,138,0.06),transparent_70%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#2A1A12] via-transparent to-[rgba(42,26,18,0.3)]" />

      <div className="relative z-10 container-custom px-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-button text-xs uppercase tracking-[5px] text-[#D5B98A] mb-6 block">
              KO Clinic by Kosmedixx
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-[#F5F0EA] leading-tight mb-6"
          >
            Best Hair, Skin &{" "}
            <span className="champagne-text">Aesthetic Treatments</span>
            <br />
            for a Confident You
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-heading text-xl md:text-2xl text-[#D5B98A] italic mb-4"
          >
            Transforming Confidence Through Science & Art
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-[#7D6B5A] text-base md:text-lg max-w-2xl mb-8 font-body leading-relaxed"
          >
            Dr. Vikas Singh is a globally recognized Celebrity Hair Transplant Surgeon and Cosmetic Dermatologist delivering advanced aesthetic transformations through innovation, regenerative medicine and artistic precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <Button variant="primary" size="lg" asChild>
              <Link href="/treatments"><Play className="w-4 h-4" /> Explore Treatments</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Book Consultation</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a href="https://wa.me/919148717036" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366]" /> WhatsApp
              </a>
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 flex flex-wrap gap-3"
        >
          {badges.map((badge) => (
            <span
              key={badge}
              className="text-xs font-button uppercase tracking-wider px-3 py-1.5 border border-[rgba(213,185,138,0.15)] text-[#7D6B5A] rounded-full"
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="container-custom px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-[rgba(213,185,138,0.1)]">
            {stats.map((stat) => (
              <AnimatedCounter key={stat.label} {...stat} />
            ))}
            <div className="text-center">
              <div className="font-heading text-5xl md:text-6xl lg:text-7xl font-light champagne-text">Global</div>
              <p className="mt-2 text-sm text-[#7D6B5A] uppercase tracking-[3px] font-button">Presence</p>
              <div className="flex gap-1 justify-center mt-1">
                {["IN", "HK", "TH", "AE"].map((code) => (
                  <span key={code} className="text-[10px] text-[#D5B98A] font-button">{code}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-36 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[3px] text-[#7D6B5A] font-button">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="w-4 h-4 text-[#D5B98A]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
