"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Syringe, Sparkles, Activity, Eye, Droplets } from "lucide-react";

const treatments = [
  {
    icon: Activity,
    title: "Micro Bio-FUE Hair Transplant",
    description: "Hair restoration with permanent results.",
    targets: ["Norwood Scale I-VII", "Maximum Density", "Accelerated Growth"],
    slug: "micro-bio-fue",
    gradient: "from-[rgba(201,168,106,0.2)] to-transparent",
  },
  {
    icon: Syringe,
    title: "PRP & GFC Hair Therapy",
    description: "Regenerative hair restoration for thinning hair.",
    targets: ["Hair thinning", "Follicle activation", "Non-surgical rejuvenation"],
    slug: "prp-gfc-therapy",
    gradient: "from-[rgba(201,168,106,0.15)] to-transparent",
  },
  {
    icon: Sparkles,
    title: "Morpheus MNRF",
    description: "Microneedling RF rejuvenation.",
    targets: ["Acne scars", "Texture improvement", "Skin tightening"],
    slug: "morpheus-mnrf",
    gradient: "from-[rgba(201,168,106,0.2)] to-transparent",
  },
  {
    icon: Droplets,
    title: "Exosome Therapy",
    description: "Stem cell derived regenerative treatment.",
    targets: ["Collagen stimulation", "Pigmentation reduction", "Cellular repair"],
    slug: "exosome-therapy",
    gradient: "from-[rgba(201,168,106,0.15)] to-transparent",
  },
  {
    icon: Eye,
    title: "Botox & Fillers",
    description: "Wrinkle reduction and volume restoration.",
    targets: ["Wrinkle reduction", "Volume restoration", "Facial contouring"],
    slug: "botox-fillers",
    gradient: "from-[rgba(201,168,106,0.2)] to-transparent",
  },
  {
    icon: Activity,
    title: "PDO Thread Lift",
    description: "Instant lifting and facial tightening.",
    targets: ["Instant lifting", "Jawline contouring", "Facial tightening"],
    slug: "pdo-thread-lift",
    gradient: "from-[rgba(201,168,106,0.15)] to-transparent",
  },
];

export function FeaturedTreatments() {
  return (
    <section className="section-padding bg-[#101010]">
      <div className="container-custom">
        <SectionHeading
          title="Advanced Treatments Tailored For Your Unique Needs"
          subtitle="Treatments"
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
              className="group relative overflow-hidden rounded-sm border border-[rgba(201,168,106,0.1)] bg-[#080808] hover:border-[rgba(201,168,106,0.3)] transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-6 md:p-8">
                <treatment.icon className="w-8 h-8 text-[#C9A86A] mb-4" />
                <h3 className="font-heading text-xl text-[#FAFAFA] mb-2 group-hover:text-gradient-gold transition-all">
                  {treatment.title}
                </h3>
                <p className="text-[#A1A1AA] text-sm mb-4 font-body">
                  {treatment.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {treatment.targets.map((target) => (
                    <Badge key={target} variant="secondary">
                      {target}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <Link
                    href={`/treatments/${treatment.slug}`}
                    className="text-[#C9A86A] text-sm font-button uppercase tracking-wider hover:text-[#D4AF37] transition-colors flex items-center gap-2"
                  >
                    Learn More <ArrowRight className="w-3 h-3" />
                  </Link>
                  <Link
                    href="/contact"
                    className="text-[#A1A1AA] text-xs font-button uppercase tracking-wider hover:text-[#FAFAFA] transition-colors"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" asChild>
            <Link href="/treatments">
              View All Treatments <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
