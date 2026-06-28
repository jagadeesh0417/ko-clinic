"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { ArrowRight } from "lucide-react";

const conditions = [
  { name: "Sagging Skin", slug: "sagging-skin" },
  { name: "Hair Loss", slug: "hair-loss" },
  { name: "Acne Scars", slug: "acne-scars" },
  { name: "Pigmentation", slug: "pigmentation" },
  { name: "Wrinkles", slug: "wrinkles" },
  { name: "Fine Lines", slug: "fine-lines" },
  { name: "Volume Loss", slug: "volume-loss" },
  { name: "Dark Circles", slug: "dark-circles" },
  { name: "Sun Damage", slug: "sun-damage" },
  { name: "Double Chin", slug: "double-chin" },
  { name: "Uneven Skin Tone", slug: "uneven-skin-tone" },
  { name: "Enlarged Pores", slug: "enlarged-pores" },
  { name: "Stretch Marks", slug: "stretch-marks" },
  { name: "Hair Thinning", slug: "hair-thinning" },
  { name: "Cellular Aging", slug: "cellular-aging" },
  { name: "Jawline Definition", slug: "jawline-definition" },
];

export function ConditionsWeTreat() {
  return (
    <section className="section-padding bg-[#3C281D]">
      <div className="container-custom">
        <SectionHeading
          title="Conditions We Treat"
          subtitle="Expertise"
          description="Advanced solutions for every aesthetic concern"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 mt-16">
          {conditions.map((condition, i) => (
            <motion.div
              key={condition.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
            >
              <Link
                href={`/treatments?condition=${condition.slug}`}
                className="group block glassmorphism rounded-2xl p-4 text-center hover:border-[rgba(213,185,138,0.3)] transition-all duration-300"
              >
                <p className="font-heading text-lg text-[#F5F0EA] group-hover:text-[#D5B98A] transition-colors">
                  {condition.name}
                </p>
                <ArrowRight className="w-3 h-3 text-[#7D6B5A] group-hover:text-[#D5B98A] mx-auto mt-2 transition-colors" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
