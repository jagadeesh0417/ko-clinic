"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Star, GraduationCap, Quote, Mail, ChevronLeft, ChevronRight, Sparkles } from "lucide-react"
import Link from "next/link"

const doctors = [
  {
    name: "Dr. Vikas Singh",
    initials: "VS",
    title: "Founder & CEO — Kosmedixx Clinics",
    tagline: "Pioneer in Hair Restoration & Cosmetic Dermatology",
    experience: "20+ Years",
    specializations: ["Hair Transplant", "Cosmetic Dermatology", "Regenerative Medicine", "Anti-Aging"],
    awards: [
      "Best Hair Transplant Surgeon 2023",
      "Gold Medal — ISHRS",
      "International Fellowship in Aesthetic Medicine",
      "Celebrity Hair Transplant Surgeon",
    ],
    bio: "A globally recognized Celebrity Hair Transplant Surgeon and Cosmetic Dermatologist, Dr. Vikas Singh has performed thousands of successful procedures for celebrities, executives and international patients. His philosophy blends medical precision with artistic sensibility, ensuring every procedure delivers natural, harmonious results.",
    education: "MBBS, MD — Dermatology, International Fellowship in Hair Restoration",
  },
  {
    name: "Dr. Priya Sharma",
    initials: "PS",
    title: "Senior Dermatologist & Skin Specialist",
    tagline: "Skin Rejuvenation & Laser Therapy Expert",
    experience: "15+ Years",
    specializations: ["Skin Rejuvenation", "Laser Therapy", "PRP", "Chemical Peels"],
    awards: [
      "Dermoscopy Excellence Award",
      "Top Dermatologist — South Asia",
      "Advanced Laser Certification — USA",
    ],
    bio: "Dr. Priya Sharma is a highly skilled dermatologist with expertise in advanced laser therapies, skin rejuvenation, and PRP treatments. She is known for her meticulous approach and ability to deliver natural, radiant results.",
    education: "MBBS, MD — Dermatology, Fellowship in Cosmetic Dermatology",
  },
  {
    name: "Dr. Arjun Mehta",
    initials: "AM",
    title: "Hair Restoration Specialist",
    tagline: "Artistry in Hair Transplantation",
    experience: "12+ Years",
    specializations: ["FUE", "DHI", "PRP", "GFC Therapy"],
    awards: [
      "FUE Pioneer Recognition",
      "Clinical Excellence Award",
      "International Society of Hair Restoration Surgery",
    ],
    bio: "Dr. Arjun Mehta specializes in advanced hair restoration techniques including FUE, DHI and PRP therapy. His artistic approach to hairline design and natural density distribution has made him one of the most sought-after hair transplant specialists.",
    education: "MBBS, MS — Plastic Surgery, Fellowship in Hair Restoration",
  },
]

export default function DoctorsPage() {
  const [activeIndex, setActiveIndex] = useState(0)
  const doctor = doctors[activeIndex]

  const next = () => setActiveIndex((prev) => (prev + 1) % doctors.length)
  const prev = () => setActiveIndex((prev) => (prev - 1 + doctors.length) % doctors.length)

  return (
    <main className="relative min-h-screen bg-[#241710]">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 pointer-events-none" />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(214,183,135,0.06),transparent_70%)]" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <span className="font-button text-xs uppercase tracking-[5px] text-[#D6B787] mb-4 block">
            Our Experts
          </span>
          <h1 className="text-5xl md:text-7xl font-light text-[#F6F0EA] tracking-wide mb-4">
            Meet Our <span className="font-medium text-[#D6B787]">Doctors</span>
          </h1>
          <p className="text-lg md:text-xl text-[#E8DDD1]/70 max-w-2xl mx-auto font-light">
            World-class specialists dedicated to your transformation
          </p>
        </motion.div>
      </section>

      {/* Doctor Spotlight */}
      <section className="px-4 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                {/* Portrait */}
                <div className="relative">
                  <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[rgba(214,183,135,0.12)] to-[#2B1C15] border border-[rgba(214,183,135,0.15)] flex items-center justify-center overflow-hidden">
                    <div className="text-center">
                      <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-[#D6B787] to-[#C5A067] flex items-center justify-center shadow-2xl ring-4 ring-[rgba(214,183,135,0.3)]">
                        <span className="text-6xl font-bold text-[#241710] font-heading">{doctor.initials}</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 border border-[rgba(214,183,135,0.2)] rounded-2xl flex items-center justify-center bg-[rgba(36,23,16,0.9)] backdrop-blur-xl">
                    <div className="text-center">
                      <p className="text-2xl font-heading champagne-text">{doctor.experience}</p>
                      <p className="text-[8px] text-[#8E7C6E] font-button uppercase tracking-[0.1em]">Experience</p>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-6">
                  <div>
                    <span className="font-button text-[10px] uppercase tracking-[4px] text-[#D6B787]">
                      {doctor.title}
                    </span>
                    <h2 className="font-heading text-4xl md:text-5xl font-light text-[#F6F0EA] mt-2 mb-2">
                      {doctor.name}
                    </h2>
                    <p className="font-section text-lg text-[#D6B787] italic">{doctor.tagline}</p>
                  </div>

                  <p className="text-[#8E7C6E] leading-relaxed font-body">{doctor.bio}</p>

                  <div className="flex flex-wrap gap-2">
                    {doctor.specializations.map((spec) => (
                      <Badge
                        key={spec}
                        variant="outline"
                        className="rounded-full px-3 py-1 text-xs border-[rgba(214,183,135,0.25)] text-[#E8DDD1] bg-[rgba(214,183,135,0.08)]"
                      >
                        {spec}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-2">
                    {doctor.awards.map((award) => (
                      <div key={award} className="flex items-center gap-2 text-sm text-[#8E7C6E]">
                        <Award className="w-4 h-4 text-[#C5A067] shrink-0" />
                        <span>{award}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-sm text-[#8E7C6E] pt-2 border-t border-[rgba(214,183,135,0.06)]">
                    <GraduationCap className="w-4 h-4 text-[#D6B787]" />
                    <span>{doctor.education}</span>
                  </div>

                  <div className="flex gap-4 pt-2">
                    <Button variant="primary" asChild>
                      <Link href="/contact">Book Consultation</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href={`mailto:drvikas090909@gmail.com`}>
                        <Mail className="w-4 h-4" /> Email
                      </Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-12">
              <button
                onClick={prev}
                className="w-12 h-12 rounded-full border border-[rgba(214,183,135,0.25)] flex items-center justify-center text-[#D6B787] hover:bg-[rgba(214,183,135,0.08)] transition-all"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <div className="flex items-center gap-2">
                {doctors.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === activeIndex ? "bg-[#D6B787] w-6" : "bg-[rgba(214,183,135,0.25)]"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="w-12 h-12 rounded-full border border-[rgba(214,183,135,0.25)] flex items-center justify-center text-[#D6B787] hover:bg-[rgba(214,183,135,0.08)] transition-all"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* All Doctors Grid */}
      <section className="px-4 pb-32 bg-[#3A281E]">
        <div className="max-w-7xl mx-auto">
          <SectionHeading
            title="Our Team"
            subtitle="Excellence in Every Specialty"
            description="A world-class team of aesthetic medicine pioneers"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {doctors.map((d, i) => (
              <motion.div
                key={d.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <GlassCard className="text-center p-8 h-full">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[#D6B787] to-[#C5A067] flex items-center justify-center mb-6 ring-4 ring-[rgba(214,183,135,0.2)]">
                    <span className="text-3xl font-bold text-[#241710] font-heading">{d.initials}</span>
                  </div>
                  <h3 className="font-heading text-2xl text-[#F6F0EA] mb-1">{d.name}</h3>
                  <p className="text-[#D6B787] font-section text-sm italic mb-4">{d.title}</p>
                  <div className="flex flex-wrap justify-center gap-2 mb-4">
                    {d.specializations.slice(0, 3).map((spec) => (
                      <Badge key={spec} variant="secondary" className="text-[10px]">
                        {spec}
                      </Badge>
                    ))}
                  </div>
                  <p className="text-[#8E7C6E] text-sm font-body leading-relaxed mb-6">{d.bio}</p>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setActiveIndex(i)}
                    className="scroll-mt-20"
                  >
                    <Sparkles className="w-3.5 h-3.5 mr-2" /> View Profile
                  </Button>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-4xl mx-auto glassmorphism rounded-3xl p-10 md:p-16 text-center border-[rgba(214,183,135,0.12)]"
        >
          <Quote className="w-10 h-10 text-[#D6B787] mx-auto mb-6 opacity-50" />
          <h2 className="font-heading text-3xl md:text-5xl font-light text-[#F6F0EA] mb-4">
            Consult with Our <span className="font-medium text-[#D6B787]">Experts</span>
          </h2>
          <p className="text-[#E8DDD1]/60 max-w-lg mx-auto mb-8 font-body leading-relaxed">
            Book a private consultation with our specialist team and discover a personalized approach to aesthetic excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" asChild>
              <Link href="/contact">Book a Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="https://wa.me/919148717036" target="_blank" rel="noopener noreferrer">
                WhatsApp Us
              </a>
            </Button>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
