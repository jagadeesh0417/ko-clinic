"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowRight, Award, Globe, Star, Users } from "lucide-react";

const highlights = [
  { icon: Award, label: "20+ Years", desc: "Clinical Excellence" },
  { icon: Users, label: "3000+", desc: "Procedures" },
  { icon: Star, label: "CEO & Founder", desc: "Kosmedixx Clinics" },
  { icon: Globe, label: "10+", desc: "Global Locations" },
];

export function Introduction() {
  return (
    <section className="section-padding bg-[#2A1A12]">
      <div className="container-custom">
        <SectionHeading
          title="Where Science Meets Art"
          subtitle="About KO Clinic"
          description="A premium global aesthetics brand dedicated to enhancing natural beauty through science, precision and innovation."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="text-[#7D6B5A] text-base md:text-lg leading-relaxed font-body mb-8">
              KO Clinic is an internationally expanding chain of advanced hair, skin and regenerative aesthetic centers founded by Dr. Vikas Singh. The clinic combines cutting-edge technology, regenerative medicine, luxury patient care and artistic precision to deliver world-class aesthetic outcomes.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {highlights.map(({ icon: Icon, label, desc }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glassmorphism rounded-2xl p-4 flex items-center gap-3"
                >
                  <Icon className="w-5 h-5 text-[#C8A96B]" />
                  <div>
                    <p className="text-sm text-[#F5F0EA] font-heading">{label}</p>
                    <p className="text-xs text-[#7D6B5A] font-body">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="space-y-6">
              <div className="border-l-2 border-[#C8A96B] pl-6">
                <h4 className="font-heading text-xl text-[#D5B98A] mb-2">Our Mission</h4>
                <p className="text-[#7D6B5A] text-sm leading-relaxed font-body">
                  To redefine the future of aesthetic medicine through science-backed, innovative and safe cosmetic solutions that enhance natural beauty and restore confidence.
                </p>
              </div>
              <div className="border-l-2 border-[#C8A96B] pl-6">
                <h4 className="font-heading text-xl text-[#D5B98A] mb-2">Our Vision</h4>
                <p className="text-[#7D6B5A] text-sm leading-relaxed font-body">
                  To establish the Kosmedixx network as a leading global chain of luxury aesthetic clinics accessible across continents.
                </p>
              </div>
            </div>

            <Button variant="primary" className="mt-8" asChild>
              <Link href="/about">Learn More <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[rgba(213,185,138,0.12)] to-[rgba(60,40,29,0.8)] border border-[rgba(213,185,138,0.15)] flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <span className="font-heading text-6xl md:text-8xl champagne-text">KO</span>
                <p className="font-heading text-xl text-[#7D6B5A] italic mt-4">Where Science Meets Art</p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border border-[rgba(213,185,138,0.08)] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
