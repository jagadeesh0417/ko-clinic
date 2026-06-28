"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Shield, FlaskConical, Leaf, Award, Star, Globe } from "lucide-react";

const reasons = [
  { icon: Award, title: "International Expertise", description: "Globally recognized with 20+ years of clinical excellence across continents." },
  { icon: FlaskConical, title: "Advanced Technology", description: "Cutting-edge equipment and signature combination techniques for superior outcomes." },
  { icon: Leaf, title: "Natural Philosophy", description: "We enhance, not change. Every result honors your unique natural beauty." },
  { icon: Shield, title: "US FDA Products", description: "Only approved products meeting rigorous international safety standards." },
  { icon: Star, title: "Luxury Experience", description: "VIP treatment, private suites and concierge-level patient care." },
  { icon: Globe, title: "Global Network", description: "International consultation network spanning 5+ countries worldwide." },
];

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-[#2A1A12]">
      <div className="container-custom">
        <SectionHeading
          title="Why Choose KO Clinic"
          subtitle="Excellence"
          description="Where science meets art — a perfect blend of innovation and luxury"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {reasons.map(({ icon: Icon, title, description }, i) => (
            <GlassCard key={title} delay={i * 0.1}>
              <div className="w-12 h-12 rounded-full bg-[rgba(213,185,138,0.1)] flex items-center justify-center mb-4">
                <Icon className="w-6 h-6 text-[#C8A96B]" />
              </div>
              <h3 className="font-heading text-xl text-[#F5F0EA] mb-2">{title}</h3>
              <p className="text-[#7D6B5A] text-sm leading-relaxed font-body">{description}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
