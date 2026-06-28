"use client";

import { motion } from "framer-motion";
import { Globe, Building2, Users, Award } from "lucide-react";

const stats = [
  { icon: Globe, value: "9", label: "Global Destinations" },
  { icon: Building2, value: "50+", label: "Partner Clinics" },
  { icon: Users, value: "10,000+", label: "Patients Served" },
  { icon: Award, value: "200+", label: "Leading Specialists" },
];

export function GlobalPresence() {
  return (
    <section className="section-luxury bg-ivory">
      <div className="container-luxury">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-warm-beige flex items-center justify-center">
                    <Icon className="w-5 h-5 text-champagne-dark" />
                  </div>
                </div>
                <div className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-deep-black mb-1">
                  {stat.value}
                </div>
                <div className="font-body text-xs sm:text-sm text-mid-gray uppercase tracking-[0.15em]">
                  {stat.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
