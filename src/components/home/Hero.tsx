"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, Globe } from "lucide-react";
import { images } from "@/lib/images";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleParallax = () => {
      if (sectionRef.current) {
        const scrolled = window.scrollY;
        const bg = sectionRef.current.querySelector(".hero-bg") as HTMLElement;
        if (bg) {
          bg.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
      }
    };
    window.addEventListener("scroll", handleParallax, { passive: true });
    return () => window.removeEventListener("scroll", handleParallax);
  }, []);

  const scrollToDestinations = () => {
    const el = document.getElementById("destinations");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden"
    >
      {/* Background */}
      <div
        className="hero-bg absolute inset-0 bg-cover bg-center will-change-transform"
        style={{ backgroundImage: `url(${images.hero.bg})` }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-black/60 via-deep-black/40 to-deep-black/80" />

      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-5xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Globe className="w-4 h-4 text-champagne" />
            <span className="font-button text-[10px] uppercase tracking-[0.3em] text-champagne">
              Global Luxury Healthcare Concierge
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-ivory leading-[1.05] tracking-[-0.02em] mb-6 text-balance"
          >
            The World&apos;s Finest
            <br />
            <span className="champagne-gradient font-medium">Healthcare</span>
            <br />
            Reimagined
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-platinum text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-10"
          >
            Select your destination. Experience world-class care.
            A private concierge dedicated to your health, privacy, and well-being.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/destinations"
              className="group relative inline-flex items-center gap-2 bg-champagne text-deep-black px-8 py-3.5 text-xs font-button uppercase tracking-[0.2em] transition-all duration-500 hover:bg-ivory overflow-hidden"
            >
              <span className="relative z-10">Explore Destinations</span>
              <Globe className="relative z-10 w-3.5 h-3.5" />
              <span className="absolute inset-0 bg-ivory translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            </Link>
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 border border-ivory/30 text-ivory px-8 py-3.5 text-xs font-button uppercase tracking-[0.2em] transition-all duration-500 hover:border-champagne hover:text-champagne"
            >
              <span className="relative z-10">Speak to Concierge</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToDestinations}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-ivory/50 hover:text-champagne transition-colors"
          aria-label="Scroll to explore"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
