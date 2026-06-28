"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { MessageCircle, Play, ChevronDown, Shield, Sparkles, Award, Globe, Clock, HeartHandshake } from "lucide-react";

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

export function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => setVideoLoaded(false));
    }
  }, []);

  return (
    <section className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-[#241710]">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          className={`w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? "opacity-40" : "opacity-0"}`}
          poster="/hero-poster.jpg"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(36,23,16,0.7)] via-[rgba(58,40,30,0.5)] to-[rgba(43,28,21,0.85)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(214,183,135,0.05),transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#241710] via-transparent to-[rgba(36,23,16,0.4)]" />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNENkI3ODciIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTM2IDM0djItMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-30"
      />

      <div className="relative z-10 container-custom px-6">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="font-button text-[10px] uppercase tracking-[6px] text-[#D6B787] mb-6 block">
              KO CLINIC by Kosmedixx
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-light text-[#F6F0EA] leading-[0.95] mb-6"
          >
            Best Hair, Skin &{" "}
            <span className="champagne-text">Aesthetic Treatments</span>
            <br />
            <span className="font-heading italic font-light text-4xl md:text-5xl lg:text-6xl text-[#D6B787]">
              for a Confident You
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-section text-lg md:text-xl text-[#D6B787] italic mb-4 max-w-2xl"
          >
            Transforming Confidence Through Science & Art
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-[#8E7C6E] text-sm md:text-base max-w-2xl mb-8 font-body leading-relaxed"
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

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {badges.map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-1.5 text-[10px] font-button uppercase tracking-[0.15em] px-3 py-1.5 border border-[rgba(214,183,135,0.12)] text-[#8E7C6E] rounded-full"
              >
                <Icon className="w-3 h-3 text-[#D6B787]" />
                {label}
              </span>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="container-custom px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-[rgba(214,183,135,0.08)]">
            {stats.map((stat) => (
              <AnimatedCounter key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 1 }}
        className="absolute bottom-36 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[4px] text-[#8E7C6E] font-button">Scroll</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}>
          <ChevronDown className="w-4 h-4 text-[#D6B787]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
