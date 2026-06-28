"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
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

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function ConditionsWeTreat() {
  return (
    <section className="bg-[#3A281E] section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Conditions We Treat"
          subtitle="Advanced aesthetic solutions tailored to your unique concerns"
        />

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {conditions.map((condition) => (
            <motion.div key={condition.slug} variants={itemVariants}>
              <Link
                href={`/treatments?condition=${condition.slug}`}
                className="glassmorphism block rounded-xl px-4 py-5 text-center transition-all duration-300 hover:border-[rgba(214,183,135,0.5)] group"
                style={{ borderColor: "rgba(214,183,135,0.25)" }}
              >
                <span className="block text-[#D6B787] font-medium text-sm sm:text-base leading-snug group-hover:text-[#C5A067] transition-colors">
                  {condition.name}
                </span>
                <ArrowRight className="mx-auto mt-2 h-4 w-4 text-[#8E7C6E] group-hover:text-[#B78B5E] transition-colors" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
