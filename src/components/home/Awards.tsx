"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Medal, Star } from "lucide-react";

const awards = [
  { icon: Trophy, title: "Best Medical Travel Platform", year: "2025", org: "Global Health Awards" },
  { icon: Award, title: "Luxury Healthcare Innovation", year: "2025", org: "International Medical Travel Journal" },
  { icon: Medal, title: "Excellence in Patient Experience", year: "2024", org: "Healthcare Asia" },
  { icon: Star, title: "Top Luxury Concierge Service", year: "2024", org: "World Luxury Awards" },
];

export function Awards() {
  return (
    <section className="section-luxury bg-warm-beige">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="font-button text-[10px] uppercase tracking-[0.3em] text-champagne-dark mb-4 block">
            Recognition
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light text-deep-black leading-[1.1] text-balance">
            Awards &amp;
            <br />
            <span className="font-medium">Accolades</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {awards.map((award, i) => {
            const Icon = award.icon;
            return (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="p-6 sm:p-8 bg-ivory luxury-border card-luxury text-center group hover:shadow-lg transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-full bg-champagne/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-champagne/20 transition-all duration-500">
                  <Icon className="w-5 h-5 text-champagne-dark" />
                </div>
                <h3 className="font-heading text-base font-medium text-deep-black mb-1">{award.title}</h3>
                <p className="font-body text-xs text-mid-gray mb-2">{award.org}</p>
                <span className="font-button text-[10px] uppercase tracking-[0.15em] text-champagne-dark">{award.year}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
