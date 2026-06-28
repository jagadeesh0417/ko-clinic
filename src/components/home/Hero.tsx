"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { MessageCircle, Play, Shield, Sparkles, Award, Globe, Clock, HeartHandshake } from "lucide-react";
import { images } from "@/lib/images";

const stats = [
  { end: 20, suffix: "+", label: "Years Experience" },
  { end: 3000, suffix: "+", label: "Successful Procedures" },
  { end: 10, suffix: "+", label: "Clinic Locations" },
  { end: 50, suffix: "+", label: "Countries Served" },
];

const badges = [
  { icon: Shield, label: "FDA Approved" },
  { icon: Sparkles, label: "Natural Results" },
  { icon: Award, label: "Celebrity Trusted" },
  { icon: Globe, label: "International Standards" },
  { icon: Clock, label: "Minimal Downtime" },
  { icon: HeartHandshake, label: "Combination Technique" },
];

const headlineWords = ["Best", "Hair,", "Skin", "&", "Aesthetic", "Treatments"];

export function Hero() {
  return (
    <section className="relative h-svh min-h-[600px] md:min-h-[800px] flex items-center justify-center overflow-hidden bg-[#241710]">
      <div className="absolute inset-0">
        <Image
          src={images.hero.bg}
          alt="KO CLINIC"
          fill
          className="object-cover opacity-50 scale-105"
          priority
          sizes="100vw"
          quality={85}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(36,23,16,0.75)] via-[rgba(58,40,30,0.5)] to-[rgba(43,28,21,0.9)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(214,183,135,0.08),transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#241710] via-transparent to-[rgba(36,23,16,0.4)]" />
        <div className="noise-overlay absolute inset-0" />
      </div>

      <div className="relative z-10 container-custom">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="font-button text-[10px] uppercase tracking-[6px] text-[#D6B787] mb-6 block">
              KO CLINIC by Kosmedixx
            </span>
          </motion.div>

          <h1 className="font-heading text-[clamp(34px,8vw,96px)] font-light text-[#F6F0EA] leading-[0.95] mb-6 text-balance">
            {headlineWords.map((word, i) => (
              <motion.span
                key={word}
                initial={{ opacity: 0, y: 80 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.4 + i * 0.12,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                className="inline-block mr-[0.2em]"
              >
                {word === "&" || word === "Treatments" ? (
                  <span className={word === "Treatments" ? "champagne-text" : ""}>{word}</span>
                ) : (
                  word
                )}
              </motion.span>
            ))}
            <br />
            <motion.span
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-heading italic font-light text-[clamp(24px,5vw,64px)] text-[#D6B787]"
            >
              for a Confident You
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="font-section text-lg md:text-xl text-[#D6B787] italic mb-4 max-w-2xl"
          >
            Transforming Confidence Through Science & Art
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-[#8E7C6E] text-sm md:text-base max-w-2xl mb-8 font-body leading-relaxed"
          >
            Dr. Vikas Singh is a globally recognized Celebrity Hair Transplant Surgeon and Cosmetic Dermatologist delivering advanced aesthetic transformations through innovation, regenerative medicine and artistic precision.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4"
          >
            <Button variant="primary" size="lg" asChild className="magnetic w-full sm:w-auto">
              <Link href="/treatments"><Play className="w-4 h-4" /> Explore Treatments</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="magnetic w-full sm:w-auto">
              <Link href="/contact">Book Consultation</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild className="magnetic w-full sm:w-auto">
              <a href="https://wa.me/919148717036" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366]" /> WhatsApp
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-8 sm:mt-10 flex flex-wrap gap-2 sm:gap-3"
          >
            {badges.map(({ icon: Icon, label }, i) => (
              <motion.span
                key={label}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.6 + i * 0.08, duration: 0.4 }}
                className="inline-flex items-center gap-1.5 text-[9px] sm:text-[10px] font-button uppercase tracking-[0.15em] px-2 sm:px-3 py-1 sm:py-1.5 border border-[rgba(214,183,135,0.12)] text-[#8E7C6E] rounded-full hover:border-[rgba(214,183,135,0.3)] hover:text-[#D6B787] transition-all duration-300"
              >
                <Icon className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#D6B787]" />
                {label}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8 py-6 sm:py-8 border-t border-[rgba(214,183,135,0.08)]"
          >
            {stats.map((stat) => (
              <AnimatedCounter key={stat.label} {...stat} />
            ))}
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.8, duration: 1 }}
        className="absolute bottom-32 sm:bottom-36 left-1/2 -translate-x-1/2 flex-col items-center gap-2 hidden sm:flex"
      >
        <span className="text-[10px] uppercase tracking-[4px] text-[#8E7C6E] font-button">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 sm:w-6 sm:h-10 rounded-full border border-[rgba(214,183,135,0.3)] flex items-center justify-center"
        >
          <motion.div className="w-0.5 h-1.5 sm:h-2 bg-[#D6B787] rounded-full" />
        </motion.div>
      </motion.div>

      <div className="absolute top-1/4 right-0 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] rounded-full bg-[rgba(214,183,135,0.03)] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[200px] sm:w-[400px] h-[200px] sm:h-[400px] rounded-full bg-[rgba(197,160,103,0.02)] blur-[80px] pointer-events-none" />
    </section>
  );
}
