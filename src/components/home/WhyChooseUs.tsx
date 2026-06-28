"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import {
  Shield,
  FlaskConical,
  Leaf,
  Award,
  Star,
  Globe,
} from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Expert Credentials",
    description: "Internationally certified with 20+ years of clinical excellence.",
  },
  {
    icon: FlaskConical,
    title: "Advanced Technologies",
    description: "Cutting-edge equipment and signature combination techniques.",
  },
  {
    icon: Leaf,
    title: "Natural Philosophy",
    description: "We enhance, not change. Natural results are our hallmark.",
  },
  {
    icon: Shield,
    title: "Premium Standards",
    description: "US-FDA approved products and world-class safety protocols.",
  },
  {
    icon: Star,
    title: "Luxury Experience",
    description: "VIP treatment, private suites and concierge patient care.",
  },
  {
    icon: Globe,
    title: "Global Network",
    description: "International consultation network across 5+ countries.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-[#080808]">
      <div className="container-custom">
        <SectionHeading
          title="Why Choose KO Clinic"
          subtitle=" Excellence"
          description="A perfect blend of science, innovation and luxury"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {reasons.map(({ icon: Icon, title, description }, i) => (
            <GlassCard key={title} delay={i * 0.1}>
              <Icon className="w-8 h-8 text-[#C9A86A] mb-4" />
              <h3 className="font-heading text-xl text-[#FAFAFA] mb-2">{title}</h3>
              <p className="text-[#A1A1AA] text-sm leading-relaxed font-body">
                {description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
