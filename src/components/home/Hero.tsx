"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ScrollIndicator } from "@/components/ui/scroll-indicator";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { MessageCircle, Play } from "lucide-react";
import { useEffect, useRef } from "react";

const stats = [
  { end: 20, suffix: "+", label: "Years Experience" },
  { end: 3000, suffix: "+", label: "Successful Procedures" },
  { end: 10, suffix: "+", label: "Locations" },
];

const badges = [
  "US-FDA Approved Products",
  "20+ Years Experience",
  "3000+ Procedures",
  "International Presence",
  "Celebrity Trusted",
  "Natural Looking Results",
  "Minimal Downtime",
  "Combination Technique",
];

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/hero-poster.jpg"
          className="w-full h-full object-cover"
        >
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[rgba(8,8,8,0.7)] to-[rgba(8,8,8,0.3)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[rgba(8,8,8,0.5)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,106,0.08),transparent_70%)]" />
      </div>

      <div className="relative z-10 container-custom px-6">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-button text-xs uppercase tracking-[4px] text-[#C9A86A] mb-6 block">
              KO Clinic by Kosmedixx
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-light text-[#FAFAFA] leading-tight mb-6"
          >
            Best Hair, Skin &{" "}
            <span className="text-gradient-gold">Aesthetic Treatments</span>
            <br />
            for a Confident You
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-heading text-xl md:text-2xl text-[#C9A86A] italic mb-4"
          >
            Transforming Confidence Through Science & Art
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-[#A1A1AA] text-base md:text-lg max-w-2xl mb-8 font-body leading-relaxed"
          >
            Dr. Vikas Singh is a globally recognized Celebrity Hair Transplant Surgeon and Cosmetic Dermatologist. 
            Combining scientific precision with artistic excellence to deliver transformational results.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-4"
          >
            <Button variant="primary" size="lg" asChild>
              <Link href="/treatments">
                <Play className="w-4 h-4" />
                Explore Treatments
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Book Appointment</Link>
            </Button>
            <Button variant="ghost" size="lg" asChild>
              <a
                href="https://wa.me/919148717036"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                WhatsApp Consultation
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
              className="text-xs font-button uppercase tracking-wider px-3 py-1.5 border border-[rgba(201,168,106,0.2)] text-[#A1A1AA]"
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="container-custom px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-[rgba(201,168,106,0.15)]">
            {stats.map((stat) => (
              <AnimatedCounter key={stat.label} {...stat} />
            ))}
            <div className="text-center">
              <div className="font-heading text-5xl md:text-6xl lg:text-7xl font-light text-gradient-gold">
                Global
              </div>
              <p className="mt-2 text-sm text-[#A1A1AA] uppercase tracking-[3px] font-button">
                Presence
              </p>
              <div className="flex gap-1 justify-center mt-1">
                {["IN", "HK", "TH", "AE"].map((code) => (
                  <span
                    key={code}
                    className="text-[10px] text-[#C9A86A] font-button"
                  >
                    {code}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <ScrollIndicator />
    </section>
  );
}
