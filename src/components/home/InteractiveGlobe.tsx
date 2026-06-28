"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import { images } from "@/lib/images";

const cities = [
  { name: "Dubai", x: "72%", y: "36%" },
  { name: "London", x: "48%", y: "24%" },
  { name: "Singapore", x: "82%", y: "50%" },
  { name: "Paris", x: "46%", y: "26%" },
  { name: "New York", x: "22%", y: "28%" },
  { name: "Hong Kong", x: "80%", y: "38%" },
  { name: "Sydney", x: "83%", y: "70%" },
  { name: "Bahrain", x: "60%", y: "35%" },
  { name: "Abu Dhabi", x: "65%", y: "34%" },
];

export function InteractiveGlobe() {
  return (
    <section className="section-luxury bg-deep-black relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay opacity-20" />
      <div className="container-luxury relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="font-button text-[10px] uppercase tracking-[0.3em] text-champagne mb-4 block">
            Global Presence
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-ivory leading-[1.1] text-balance">
            Wherever You Are,
            <br />
            <span className="font-medium champagne-gradient">We&apos;re There</span>
          </h2>
        </motion.div>

        {/* Map container */}
        <div className="relative max-w-5xl mx-auto">
          <div
            className="w-full aspect-[21/9] rounded-2xl luxury-border bg-cover bg-center relative overflow-hidden"
            style={{ backgroundImage: `url(${images.global.map})` }}
          >
            <div className="absolute inset-0 bg-deep-black/40" />

            {/* City markers */}
            {cities.map((city, i) => (
              <motion.div
                key={city.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                className="absolute z-20 group/marker"
                style={{ left: city.x, top: city.y }}
              >
                <div className="relative">
                  <MapPin className="w-5 h-5 text-champagne drop-shadow-lg cursor-pointer hover:text-champagne-light transition-colors" />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover/marker:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <div className="bg-deep-black text-champagne text-[10px] font-button uppercase tracking-[0.1em] px-2 py-1 rounded whitespace-nowrap luxury-border">
                      {city.name}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="text-center mt-10"
        >
          <Link
            href="/destinations"
            className="group inline-flex items-center gap-2 text-xs font-button uppercase tracking-[0.2em] text-champagne hover:text-champagne-light transition-colors"
          >
            <span>Explore All Destinations</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
