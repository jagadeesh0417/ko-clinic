"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const treatments = [
  {
    title: "Micro Bio-FUE Hair Transplant",
    category: "Hair Restoration",
    description: "Advanced follicular unit extraction for permanent, natural-looking hair restoration with minimal downtime.",
    initials: "MB",
    slug: "micro-bio-fue",
  },
  {
    title: "DHI Hair Transplant",
    category: "Hair Restoration",
    description: "Direct hair implantation technique providing maximum density and natural results with rapid recovery.",
    initials: "DH",
    slug: "dhi-hair-transplant",
  },
  {
    title: "PRP Therapy",
    category: "Regenerative",
    description: "Platelet-rich plasma therapy to stimulate hair growth, collagen production, and cellular regeneration.",
    initials: "PR",
    slug: "prp-therapy",
  },
  {
    title: "Morpheus MNRF",
    category: "Skin",
    description: "Microneedling with radiofrequency for deep collagen remodeling, skin tightening, and scar revision.",
    initials: "MM",
    slug: "morpheus-mnrf",
  },
  {
    title: "Botox",
    category: "Injectables",
    description: "Premium neurotoxin treatments for wrinkle reduction, brow lifting, and facial rejuvenation.",
    initials: "BX",
    slug: "botox",
  },
  {
    title: "PDO Thread Lift",
    category: "Skin",
    description: "Non-surgical lifting and tightening using absorbable threads for immediate, natural-looking results.",
    initials: "PT",
    slug: "pdo-thread-lift",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
};

export function FeaturedTreatments() {
  return (
    <section className="bg-[#241710] section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Featured Treatments"
          subtitle="Our Expertise"
          description="Hair Restoration · Skin Rejuvenation · Regenerative · Injectables"
        />
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {treatments.map((treatment) => (
            <motion.div
              key={treatment.slug}
              variants={cardVariants}
              className="group glassmorphism rounded-2xl overflow-hidden transition-all duration-500 hover:border-[rgba(214,183,135,0.25)]"
            >
              <div className="relative h-40 bg-gradient-to-br from-[#C5A067] via-[#D6B787] to-[#B78B5E] flex items-center justify-center overflow-hidden">
                <span className="text-[#2B1C15] text-4xl md:text-5xl font-bold tracking-tight opacity-30 select-none">
                  {treatment.initials}
                </span>
                <Sparkles className="absolute top-3 right-3 w-5 h-5 text-[#F6F0EA]/40" />
              </div>
              <div className="p-5 md:p-6 bg-[#3A281E]/80 backdrop-blur-sm">
                <Badge variant="gold" className="mb-3 text-[10px] px-2.5 py-0.5">
                  {treatment.category}
                </Badge>
                <h3 className="font-heading text-base md:text-lg text-[#F6F0EA] mb-2 group-hover:text-[#D6B787] transition-colors leading-snug">
                  {treatment.title}
                </h3>
                <p className="text-[#8E7C6E] text-sm leading-relaxed mb-4 font-body">
                  {treatment.description}
                </p>
                <Link
                  href={`/treatments/${treatment.slug}`}
                  className="inline-flex items-center gap-2 text-[#C5A067] text-xs uppercase tracking-[0.15em] font-medium hover:text-[#D6B787] transition-colors"
                >
                  Learn More <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="outline" asChild>
            <Link href="/treatments">
              View All Treatments <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
