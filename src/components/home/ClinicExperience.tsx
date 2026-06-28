"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

const categories = [
  { name: "Luxury Reception", items: "05" },
  { name: "VIP Lounge", items: "03" },
  { name: "Laser Suites", items: "04" },
  { name: "Consultation Rooms", items: "06" },
  { name: "Hair Theatre", items: "02" },
  { name: "Patient Suites", items: "04" },
];

export function ClinicExperience() {
  return (
    <section className="section-padding bg-[#2A1A12]">
      <div className="container-custom">
        <SectionHeading
          title="Clinic Experience"
          subtitle="Gallery"
          description="Step into world-class luxury and medical excellence"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-16">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -5 }}
              className="aspect-square rounded-2xl bg-gradient-to-br from-[rgba(213,185,138,0.06)] to-[rgba(34,22,15,0.6)] border border-[rgba(213,185,138,0.1)] hover:border-[rgba(213,185,138,0.3)] transition-all duration-500 flex items-center justify-center cursor-pointer group"
            >
              <div className="text-center p-4">
                <div className="w-14 h-14 mx-auto mb-3 rounded-full border border-[rgba(213,185,138,0.15)] flex items-center justify-center group-hover:bg-[rgba(213,185,138,0.08)] transition-colors">
                  <span className="text-[#C8A96B] font-heading text-lg">{cat.items}</span>
                </div>
                <p className="text-[#7D6B5A] text-xs font-button uppercase tracking-wider">{cat.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
