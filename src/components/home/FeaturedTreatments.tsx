"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Syringe, Sparkles, Activity, Eye, Droplets, Heart } from "lucide-react";

const treatments = [
  {
    icon: Activity, title: "Micro Bio-FUE Hair Transplant", description: "Permanent hair restoration with maximum density and accelerated growth.",
    targets: ["Norwood I-VII", "Maximum Density", "Permanent Results"], slug: "micro-bio-fue",
  },
  {
    icon: Syringe, title: "PRP & GFC Hair Therapy", description: "Regenerative hair restoration for thinning hair and active follicle stimulation.",
    targets: ["Hair Thinning", "Follicle Activation", "Non-Surgical"], slug: "prp-gfc-therapy",
  },
  {
    icon: Sparkles, title: "Morpheus MNRF", description: "Microneedling RF for acne scars, texture improvement, and skin tightening.",
    targets: ["Acne Scars", "Texture", "Tightening"], slug: "morpheus-mnrf",
  },
  {
    icon: Droplets, title: "Exosome Therapy", description: "Stem cell derived regenerative treatment for deep collagen stimulation.",
    targets: ["Collagen", "Pigmentation", "Cellular Repair"], slug: "exosome-therapy",
  },
  {
    icon: Eye, title: "Botox & Fillers", description: "Wrinkle reduction, volume restoration, and facial contouring with premium products.",
    targets: ["Wrinkles", "Volume Loss", "Contouring"], slug: "botox-fillers",
  },
  {
    icon: Activity, title: "PDO Thread Lift", description: "Instant lifting, jawline contouring and facial tightening without surgery.",
    targets: ["Instant Lift", "Jawline", "Tightening"], slug: "pdo-thread-lift",
  },
];

export function FeaturedTreatments() {
  return (
    <section className="section-padding bg-[#2A1A12]">
      <div className="container-custom">
        <SectionHeading
          title="Advanced Treatments Tailored For You"
          subtitle="Our Services"
          description="Hair Restoration · Skin Rejuvenation · Wellness · Anti-Aging"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {treatments.map((treatment, i) => (
            <motion.div
              key={treatment.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative overflow-hidden rounded-2xl border border-[rgba(213,185,138,0.1)] bg-[#22160F] hover:border-[rgba(213,185,138,0.25)] transition-all duration-500"
            >
              <div className="relative p-6 md:p-8">
                <div className="w-12 h-12 rounded-full bg-[rgba(213,185,138,0.08)] flex items-center justify-center mb-4">
                  <treatment.icon className="w-6 h-6 text-[#C8A96B]" />
                </div>
                <h3 className="font-heading text-xl text-[#F5F0EA] mb-2 group-hover:text-[#D5B98A] transition-all">
                  {treatment.title}
                </h3>
                <p className="text-[#7D6B5A] text-sm mb-4 font-body">{treatment.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {treatment.targets.map((target) => (
                    <Badge key={target} variant="secondary" className="text-xs">{target}</Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <Link href={`/treatments/${treatment.slug}`} className="text-[#D5B98A] text-sm font-button uppercase tracking-wider hover:text-[#C8A96B] transition-colors flex items-center gap-2">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </Link>
                  <Link href="/contact" className="text-[#7D6B5A] text-xs font-button uppercase tracking-wider hover:text-[#F5F0EA] transition-colors">
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
          <Button variant="outline" asChild>
            <Link href="/treatments">View All Treatments <ArrowRight className="w-4 h-4" /></Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
