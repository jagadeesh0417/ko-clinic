"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Award, Globe, Users, Star } from "lucide-react";

const credentials = [
  { icon: Award, label: "20+ Years Experience" },
  { icon: Users, label: "3000+ Sessions" },
  { icon: Star, label: "Celebrity Clientele" },
  { icon: Globe, label: "Global Presence" },
];

const expertise = [
  "Micro Bio-FUE Hair Transplant",
  "DHI Hair Transplant",
  "PRP Therapy",
  "Stem Cell Therapy",
  "Botox & Fillers",
  "Thread Lift",
  "Morpheus MNRF",
  "Exosome Therapy",
  "Laser Rejuvenation",
  "Vampire Facelift",
  "HIFU",
  "PDO Threads",
  "Body Contouring",
  "Regenerative Wellness",
];

export function AboutDoctor() {
  return (
    <section className="section-padding bg-[#101010]">
      <div className="container-custom">
        <SectionHeading
          title="Dr Vikas Singh"
          subtitle="Doctor Transform"
          description="Founder & CEO of Kosmedixx Clinics"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[3/4] bg-gradient-to-br from-[rgba(201,168,106,0.15)] to-[#101010] border border-[rgba(201,168,106,0.2)] flex items-center justify-center">
              <div className="text-center p-8">
                <span className="font-heading text-4xl text-gradient-gold">Dr. Vikas Singh</span>
                <p className="text-[#A1A1AA] text-sm mt-2 font-body">Celebrity Hair Transplant Surgeon</p>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-full h-full border border-[rgba(201,168,106,0.1)] -z-10" />
          </motion.div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[#A1A1AA] text-base md:text-lg leading-relaxed font-body mb-8"
            >
              Dr. Vikas Singh is a globally recognized Celebrity Hair Transplant Surgeon and Cosmetic 
              Dermatologist, and the visionary Founder & CEO of Kosmedixx Clinics – a premier chain 
              of advanced skin, hair and aesthetic wellness centers.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[#A1A1AA] text-base leading-relaxed font-body mb-8"
            >
              Renowned for combining scientific expertise with artistic precision, he delivers 
              transformational results to celebrities, industrialists, executives and international 
              patients.
            </motion.p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {credentials.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="glassmorphism-light rounded-sm p-4 flex items-center gap-3"
                >
                  <Icon className="w-5 h-5 text-[#C9A86A]" />
                  <span className="text-sm text-[#FAFAFA] font-body">{label}</span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h4 className="font-heading text-xl text-[#FAFAFA] mb-4">Clinical Expertise</h4>
              <div className="flex flex-wrap gap-2">
                {expertise.map((item) => (
                  <Badge key={item} variant="default">
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
