"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Award, Globe, Users, Star, GraduationCap, Calendar } from "lucide-react";

const milestones = [
  { year: "2005", event: "Began medical practice" },
  { year: "2010", event: "Founded Kosmedixx Clinics" },
  { year: "2015", event: "Expanded to international markets" },
  { year: "2020", event: "3000+ successful procedures" },
  { year: "2025", event: "Global network of 10+ locations" },
  { year: "2026", event: "Launch of KO Clinic brand" },
];

const certifications = [
  "International Society of Hair Restoration Surgery (ISHRS)",
  "American Academy of Cosmetic Surgery",
  "International Association of Physicians in Aesthetic Medicine",
  "European Society of Hair Restoration Surgery",
  "Indian Association of Dermatologists",
  "Certified in Advanced Aesthetic Medicine",
];

export default function AboutPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#2A1A12]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(213,185,138,0.06),transparent_70%)]" />
        <div className="container-custom px-6 relative z-10">
          <SectionHeading title="About Dr. Vikas Singh" subtitle="Doctor Transform" description="Over two decades of transforming lives through precision aesthetic medicine" />
        </div>
      </section>

      <section className="section-padding bg-[#3C281D] pt-0">
        <div className="container-custom px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-[rgba(213,185,138,0.1)] to-[#3C281D] border border-[rgba(213,185,138,0.15)] flex items-center justify-center">
                <div className="text-center p-8">
                  <span className="font-heading text-5xl champagne-text">Dr. Vikas Singh</span>
                  <p className="text-[#7D6B5A] text-sm mt-2 font-body">Celebrity Hair Transplant Surgeon</p>
                </div>
              </div>
            </motion.div>
            <div>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-[#7D6B5A] text-lg leading-relaxed font-body mb-6">
                Dr. Vikas Singh is a globally recognized Celebrity Hair Transplant Surgeon and Cosmetic Dermatologist, and the visionary Founder & CEO of Kosmedixx Clinics — a premier chain of advanced skin, hair and aesthetic wellness centers with international presence.
              </motion.p>
              <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="text-[#7D6B5A] leading-relaxed font-body mb-8">
                With over 20 years of clinical experience, Dr. Singh has performed 3000+ successful procedures, earning the trust of celebrities, industrialists, and international clientele.
              </motion.p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Award, label: "20+ Years", desc: "Experience" },
                  { icon: Users, label: "3000+", desc: "Procedures" },
                  { icon: Star, label: "Celebrity", desc: "Clientele" },
                  { icon: Globe, label: "10+", desc: "Locations" },
                ].map(({ icon: Icon, label, desc }, i) => (
                  <motion.div key={label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                    className="glassmorphism rounded-2xl p-4">
                    <Icon className="w-6 h-6 text-[#C8A96B] mb-2" />
                    <p className="font-heading text-xl text-[#F5F0EA]">{label}</p>
                    <p className="text-xs text-[#7D6B5A] font-body">{desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#2A1A12]">
        <div className="container-custom px-6">
          <SectionHeading title="Clinical Expertise" subtitle="Specializations" />
          <div className="flex flex-wrap gap-3 justify-center mt-12 max-w-3xl mx-auto">
            {["Micro Bio-FUE", "DHI Hair Transplant", "PRP Therapy", "Stem Cell Therapy", "Botox", "Dermal Fillers", "Thread Lift", "Morpheus MNRF", "Exosome Therapy", "Laser Rejuvenation", "Vampire Facelift", "HIFU", "PDO Threads", "Body Contouring", "Regenerative Wellness", "IV Therapy"].map((item) => (
              <Badge key={item} variant="default" className="text-sm py-2 px-4 rounded-full">{item}</Badge>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#3C281D]">
        <div className="container-custom px-6">
          <SectionHeading title="Journey & Milestones" subtitle="Timeline" />
          <div className="relative mt-16 max-w-3xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#C8A96B] to-transparent" />
            {milestones.map((item, i) => (
              <motion.div key={item.year} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative pl-20 pb-12 last:pb-0">
                <div className="absolute left-[22px] top-1 w-[13px] h-[13px] rounded-full border-2 border-[#C8A96B] bg-[#3C281D]" />
                <span className="font-heading text-2xl champagne-text">{item.year}</span>
                <p className="text-[#7D6B5A] font-body mt-1">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#2A1A12]">
        <div className="container-custom px-6">
          <SectionHeading title="International Certifications" subtitle="Credentials" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 max-w-4xl mx-auto">
            {certifications.map((cert, i) => (
              <motion.div key={cert} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-2xl border border-[rgba(213,185,138,0.1)]">
                <GraduationCap className="w-5 h-5 text-[#C8A96B] mt-0.5 shrink-0" />
                <span className="text-sm text-[#7D6B5A] font-body">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
