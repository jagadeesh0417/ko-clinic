"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Award, Globe, Users, Star, GraduationCap, Heart } from "lucide-react";

const credentials = [
  { icon: Award, label: "20+ Years Experience" },
  { icon: Users, label: "3000+ Sessions" },
  { icon: Star, label: "Celebrity Clientele" },
  { icon: Globe, label: "Global Presence" },
];

const expertise = [
  "Micro Bio-FUE Hair Transplant", "DHI Hair Transplant", "PRP Therapy",
  "Stem Cell Therapy", "Botox & Fillers", "Thread Lift", "Morpheus MNRF",
  "Exosome Therapy", "Laser Rejuvenation", "Vampire Facelift", "HIFU",
  "PDO Threads", "Body Contouring", "Regenerative Wellness",
];

export function AboutDoctor() {
  return (
    <section className="section-padding bg-[#3C281D]">
      <div className="container-custom">
        <SectionHeading
          title="Dr. Vikas Singh"
          subtitle="Doctor Transform"
          description="Founder & CEO of Kosmedixx Clinics"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-[rgba(213,185,138,0.12)] to-[#3C281D] border border-[rgba(213,185,138,0.15)] flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <span className="font-heading text-4xl champagne-text">Dr. Vikas Singh</span>
                <p className="text-[#7D6B5A] text-sm mt-2 font-body">Celebrity Hair Transplant Surgeon</p>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border border-[rgba(213,185,138,0.08)] -z-10" />
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#7D6B5A] text-base md:text-lg leading-relaxed font-body mb-6"
            >
              Dr. Vikas Singh is a globally recognized Celebrity Hair Transplant Surgeon and Cosmetic Dermatologist, and the visionary Founder & CEO of Kosmedixx Clinics – a premier chain of advanced skin, hair and aesthetic wellness centers.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#7D6B5A] leading-relaxed font-body mb-8"
            >
              Renowned for combining scientific expertise with artistic precision, he delivers transformational results to celebrities, industrialists, executives and international patients.
            </motion.p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {credentials.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glassmorphism rounded-2xl p-4 flex items-center gap-3"
                >
                  <Icon className="w-5 h-5 text-[#C8A96B]" />
                  <span className="text-sm text-[#F5F0EA] font-body">{label}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="font-heading text-xl text-[#D5B98A] mb-4">Clinical Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {expertise.map((item) => (
                  <Badge key={item} variant="default" className="text-xs rounded-full px-4 py-1.5">
                    {item}
                  </Badge>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
