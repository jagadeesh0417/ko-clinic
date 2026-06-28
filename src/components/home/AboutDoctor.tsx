"use client"

import { motion } from "framer-motion"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { Award, Globe, Star, Users } from "lucide-react"
import Link from "next/link"

const achievements = [
  { icon: Star, value: "20+", label: "Years Experience" },
  { icon: Users, value: "3000+", label: "Procedures Done" },
  { icon: Globe, value: "10+", label: "Locations" },
  { icon: Award, value: "Global", label: "Recognition" },
]

export function AboutDoctor() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32" style={{ backgroundColor: "#241710" }}>
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Portrait Area */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative mx-auto aspect-[3/4] w-full max-w-lg"
          >
            <div
              className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-2xl"
              style={{
                background: "linear-gradient(135deg, #2B1C15 0%, #3A281E 50%, #1A0F0A 100%)",
                border: "2px solid rgba(214,183,135,0.25)",
                boxShadow: "0 0 60px rgba(214,183,135,0.08), inset 0 0 80px rgba(214,183,135,0.03)",
              }}
            >
              <div
                className="absolute inset-0 rounded-2xl opacity-30"
                style={{
                  background:
                    "radial-gradient(circle at 30% 40%, rgba(214,183,135,0.15) 0%, transparent 60%), radial-gradient(circle at 70% 80%, rgba(197,160,103,0.1) 0%, transparent 50%)",
                }}
              />
              <div
                className="absolute -inset-1 rounded-2xl opacity-40"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(214,183,135,0.3) 0%, transparent 40%, rgba(197,160,103,0.15) 70%, rgba(183,139,94,0.3) 100%)",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "exclude",
                  WebkitMaskComposite: "xor",
                  padding: "2px",
                }}
              />
              <span
                className="select-none font-light tracking-[0.3em]"
                style={{
                  fontSize: "clamp(4rem, 12vw, 7rem)",
                  color: "#D6B787",
                  opacity: 0.6,
                }}
              >
                VS
              </span>
            </div>
          </motion.div>

          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <div className="space-y-2">
              <span
                className="inline-block text-sm font-medium uppercase tracking-[0.2em]"
                style={{ color: "#C5A067" }}
              >
                Founder &amp; CEO
              </span>
              <h2
                className="font-serif text-4xl leading-tight font-light tracking-wide sm:text-5xl lg:text-6xl"
                style={{ color: "#F6F0EA" }}
              >
                Dr. Vikas Singh
              </h2>
              <p className="text-lg" style={{ color: "#D6B787" }}>
                Kosmedixx Clinics
              </p>
            </div>

            <div className="space-y-4" style={{ color: "#E8DDD1" }}>
              <p className="leading-relaxed" style={{ color: "#8E7C6E" }}>
                With over two decades of transformative expertise, Dr. Vikas Singh stands at the forefront
                of luxury aesthetics and regenerative medicine. His precision-driven approach and artistic
                vision have earned him the trust of discerning clientele, including royalty, international
                celebrities, and industry leaders from across the globe.
              </p>
              <p className="leading-relaxed" style={{ color: "#8E7C6E" }}>
                Recognised as a pioneer in non-invasive facial architecture and bespoke wellness protocols,
                Dr. Singh has been featured in leading luxury publications and lectures at prestigious
                medical symposiums worldwide. His philosophy blends cutting-edge science with an
                uncompromising commitment to natural, timeless beauty.
              </p>
            </div>

            <Link href="/about">
              <Button
                className="group relative overflow-hidden rounded-full px-8 py-6 text-sm font-medium uppercase tracking-[0.15em] transition-all duration-500"
                style={{
                  backgroundColor: "#D6B787",
                  color: "#241710",
                }}
              >
                <span className="relative z-10">Meet Dr. Vikas Singh</span>
                <span
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{ backgroundColor: "#C5A067" }}
                />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Achievement Cards */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:mt-24"
        >
          {achievements.map((item, index) => (
            <GlassCard
              key={item.label}
              className="group border px-6 py-8 text-center transition-all duration-500 hover:-translate-y-1"
              style={{
                backgroundColor: "rgba(43,28,21,0.6)",
                borderColor: "rgba(214,183,135,0.25)",
                backdropFilter: "blur(16px)",
              }}
            >
              <item.icon
                className="mx-auto mb-3 h-6 w-6 transition-colors duration-500"
                style={{ color: "#D6B787" }}
              />
              <div
                className="text-3xl font-light tracking-wide sm:text-4xl"
                style={{ color: "#F6F0EA" }}
              >
                {item.value}
              </div>
              <div
                className="mt-1 text-sm font-medium uppercase tracking-[0.1em]"
                style={{ color: "#B78B5E" }}
              >
                {item.label}
              </div>
            </GlassCard>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
