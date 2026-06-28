"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Award, Globe, Star, Target, Eye, Quote } from "lucide-react";
import Link from "next/link";
const stats = [
  { value: "20+", label: "Years Experience", icon: Award },
  { value: "3000+", label: "Successful Procedures", icon: Star },
  { value: "15+", label: "Cities Worldwide", icon: Globe },
  { value: "10+", label: "Clinic Locations", icon: Target },
];

const milestones = [
  { year: "2005", event: "Began medical practice" },
  { year: "2010", event: "Founded Kosmedixx Clinics" },
  { year: "2015", event: "International expansion" },
  { year: "2020", event: "3,000+ successful procedures" },
  { year: "2024", event: "Pan-India clinic network" },
  { year: "2026", event: "KO CLINIC brand launch" },
];

const locations = [
  "Bengaluru", "Mumbai", "Delhi", "Hyderabad",
  "Chennai", "Kolkata", "Pune", "Ahmedabad",
  "Dubai", "Singapore", "London",
];

export default function AboutPage() {
  return (
    <>
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-[#241710]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(214,183,135,0.08),transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#241710]" />
        <div className="container-custom px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="font-button text-xs uppercase tracking-[6px] text-[#D6B787] mb-6 block">
              About
            </span>
            <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-light leading-tight text-[#F6F0EA] mb-6">
              Dr. Vikas Singh
            </h1>
            <p className="font-section text-lg md:text-xl text-[#8E7C6E] max-w-2xl mx-auto">
              Founder &amp; CEO, Kosmedixx Clinics
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-[#3A281E] pt-0">
        <div className="container-custom px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative"
            >
              <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-[rgba(214,183,135,0.12)] to-[#2B1C15] border border-[rgba(214,183,135,0.15)] flex items-center justify-center overflow-hidden">
                <span className="font-heading text-7xl md:text-8xl lg:text-9xl font-light champagne-text opacity-80">
                  VS
                </span>
              </div>
            </motion.div>
            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-[#8E7C6E] text-lg md:text-xl leading-relaxed font-body"
              >
                Dr. Vikas Singh is a globally recognized Celebrity Hair Transplant Surgeon and Cosmetic Dermatologist, and the visionary Founder &amp; CEO of Kosmedixx Clinics &mdash; a premier chain of advanced skin, hair and aesthetic wellness centers with international presence.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-[#8E7C6E] leading-relaxed font-body"
              >
                With over 20 years of clinical experience, Dr. Singh has performed thousands of successful procedures, earning the trust of celebrities, industrialists, and international clientele across the globe.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="text-[#8E7C6E] leading-relaxed font-body"
              >
                His philosophy blends medical precision with artistic sensibility &mdash; ensuring every procedure delivers natural, harmonious results that enhance each individual&rsquo;s unique features.
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#241710]">
        <div className="container-custom px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className="glassmorphism rounded-2xl p-6 md:p-8 text-center"
                >
                  <Icon className="w-8 h-8 text-[#D6B787] mx-auto mb-4" />
                  <p className="font-heading text-3xl md:text-4xl champagne-text mb-1">{stat.value}</p>
                  <p className="text-[#8E7C6E] text-sm font-body">{stat.label}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#2B1C15]">
        <div className="container-custom px-6">
          <SectionHeading
            title="Our Philosophy"
            subtitle="Mission &amp; Vision"
            description="Driven by a commitment to excellence, innovation, and compassionate care"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12 max-w-4xl mx-auto">
            <GlassCard>
              <Eye className="w-8 h-8 text-[#D6B787] mb-4" />
              <h3 className="font-heading text-2xl text-[#F6F0EA] mb-3">Our Vision</h3>
              <p className="text-[#8E7C6E] font-body text-sm leading-relaxed">
                To be the world&rsquo;s most trusted aesthetic brand &mdash; where advanced science meets timeless artistry &mdash; redefining beauty standards with integrity and innovation.
              </p>
            </GlassCard>
            <GlassCard>
              <Target className="w-8 h-8 text-[#D6B787] mb-4" />
              <h3 className="font-heading text-2xl text-[#F6F0EA] mb-3">Our Mission</h3>
              <p className="text-[#8E7C6E] font-body text-sm leading-relaxed">
                To deliver transformative aesthetic experiences through cutting-edge technology, personalized treatment plans, and an unwavering commitment to patient safety and satisfaction.
              </p>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#3A281E]">
        <div className="container-custom px-6">
          <SectionHeading
            title="Journey &amp; Milestones"
            subtitle="Timeline"
            description="A legacy of growth, innovation, and excellence"
          />
          <div className="relative mt-16 max-w-3xl mx-auto">
            <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-gradient-to-b from-[#D6B787] via-[rgba(214,183,135,0.3)] to-transparent" />
            {milestones.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative pl-20 pb-12 last:pb-0"
              >
                <div className="absolute left-[22px] top-1 w-[13px] h-[13px] rounded-full border-2 border-[#D6B787] bg-[#3A281E]" />
                <span className="font-heading text-2xl champagne-text">{item.year}</span>
                <p className="text-[#8E7C6E] font-body mt-1">{item.event}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-[#241710]">
        <div className="container-custom px-6">
          <SectionHeading
            title="International Presence"
            subtitle="Global Reach"
            description="Serving patients across the world with world-class care"
          />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mt-12"
          >
            <div className="glassmorphism rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
              <Globe className="w-12 h-12 text-[#D6B787] mx-auto mb-6" />
              <p className="font-heading text-2xl md:text-3xl text-[#F6F0EA] mb-6">
                Presence Across {locations.length} Cities
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {locations.map((city) => (
                  <span
                    key={city}
                    className="px-4 py-2 rounded-full text-sm text-[#8E7C6E] border border-[rgba(214,183,135,0.15)] bg-[rgba(58,40,30,0.4)] font-body"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-[#2B1C15]">
        <div className="container-custom px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Quote className="w-10 h-10 text-[#D6B787] mx-auto mb-6 opacity-50" />
            <h2 className="font-heading text-3xl md:text-5xl text-[#F6F0EA] mb-4">
              Begin Your Transformation
            </h2>
            <p className="text-[#8E7C6E] font-body text-lg max-w-xl mx-auto mb-8">
              Schedule a private consultation with Dr. Vikas Singh and discover a personalized approach to aesthetic excellence.
            </p>
            <Link href="/contact">
              <Button variant="primary" size="lg">
                Book a Consultation
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
