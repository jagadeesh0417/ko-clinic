"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";

const categories = [
  { name: "Reception", items: 3 },
  { name: "VIP Lounge", items: 2 },
  { name: "Laser Rooms", items: 2 },
  { name: "Consultation Rooms", items: 2 },
  { name: "Hair Transplant Theatre", items: 2 },
  { name: "Patient Suites", items: 2 },
];

export function ClinicExperience() {
  return (
    <section className="section-padding bg-[#080808]">
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
              className="aspect-square bg-gradient-to-br from-[rgba(201,168,106,0.08)] to-[#101010] border border-[rgba(201,168,106,0.15)] hover:border-[rgba(201,168,106,0.4)] transition-all duration-500 flex items-center justify-center cursor-pointer group"
            >
              <div className="text-center p-4">
                <div className="w-12 h-12 mx-auto mb-3 rounded-sm border border-[rgba(201,168,106,0.2)] flex items-center justify-center group-hover:bg-[rgba(201,168,106,0.1)] transition-colors">
                  <span className="text-[#C9A86A] font-heading text-lg">{cat.items}</span>
                </div>
                <p className="text-[#A1A1AA] text-xs font-button uppercase tracking-wider">
                  {cat.name}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
