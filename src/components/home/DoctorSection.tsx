"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { GlassCard } from "@/components/ui/glass-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, Star, GraduationCap } from "lucide-react"
import Link from "next/link"

const doctors = [
  {
    name: "Dr. Vikas Singh",
    initials: "VS",
    title: "Founder & CEO",
    tagline: "Pioneer in Hair Restoration",
    specializations: ["Hair Transplant", "Cosmetic Dermatology"],
    experience: "20+ Years",
    awards: ["Best Hair Transplant Surgeon 2023", "Gold Medal - ISHRS"],
  },
  {
    name: "Dr. Priya Sharma",
    initials: "PS",
    title: "Senior Dermatologist",
    tagline: "Skin Rejuvenation Expert",
    specializations: ["Skin Rejuvenation", "Laser Therapy"],
    experience: "15+ Years",
    awards: ["Dermoscopy Excellence Award", "Top Dermatologist - South Asia"],
  },
  {
    name: "Dr. Arjun Mehta",
    initials: "AM",
    title: "Hair Restoration Specialist",
    tagline: "Artistry in Hair Transplantation",
    specializations: ["FUE", "DHI", "PRP"],
    experience: "12+ Years",
    awards: ["FUE Pioneer Recognition", "Clinical Excellence Award"],
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
}

function getInitialsColor(initials: string) {
  const colors = [
    "from-[#D6B787] to-[#C5A067]",
    "from-[#C5A067] to-[#B78B5E]",
    "from-[#B78B5E] to-[#D6B787]",
  ]
  return colors[initials.length % colors.length]
}

export function DoctorSection() {
  return (
    <section className="relative overflow-hidden py-24" style={{ background: "#241710" }}>
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Meet Our Experts"
          subtitle="World-class specialists dedicated to your transformation"
        />

        <motion.div
          className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {doctors.map((doctor) => (
            <motion.div key={doctor.name} variants={itemVariants}>
              <GlassCard
                className="group h-full overflow-hidden rounded-2xl border p-0 text-center transition-all duration-500"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(58,40,30,0.9), rgba(43,28,21,0.95))",
                  borderColor: "rgba(214,183,135,0.25)",
                }}
              >
                <div
                  className="relative overflow-hidden"
                  style={{ background: "#2B1C15" }}
                >
                  <div
                    className="flex h-56 items-center justify-center"
                    style={{ background: "#3A281E" }}
                  >
                    <div
                      className={`flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br ${getInitialsColor(doctor.initials)} shadow-2xl ring-4 ring-[rgba(214,183,135,0.3)] transition-transform duration-500 group-hover:scale-110`}
                    >
                      <span
                        className="text-3xl font-bold tracking-wide"
                        style={{ color: "#241710" }}
                      >
                        {doctor.initials}
                      </span>
                    </div>
                  </div>

                  <div
                    className="absolute inset-x-0 bottom-0 h-20"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(43,28,21,1), transparent)",
                    }}
                  />
                </div>

                <div className="space-y-4 px-6 pb-8 pt-6">
                  <div
                    className="text-sm font-medium italic tracking-widest uppercase"
                    style={{ color: "#D6B787" }}
                  >
                    {doctor.tagline}
                  </div>

                  <h3
                    className="text-2xl font-bold tracking-tight"
                    style={{ color: "#F6F0EA" }}
                  >
                    {doctor.name}
                  </h3>

                  <p
                    className="text-sm font-medium"
                    style={{ color: "#D6B787" }}
                  >
                    {doctor.title}
                  </p>

                  <div
                    className="flex items-center justify-center gap-2 text-sm"
                    style={{ color: "#8E7C6E" }}
                  >
                    <GraduationCap className="h-4 w-4" />
                    <span>{doctor.experience}</span>
                  </div>

                  <div className="flex flex-wrap justify-center gap-2">
                    {doctor.specializations.map((spec) => (
                      <Badge
                        key={spec}
                        variant="outline"
                        className="border rounded-full px-3 py-1 text-xs font-medium"
                        style={{
                          borderColor: "rgba(214,183,135,0.25)",
                          color: "#E8DDD1",
                          background: "rgba(214,183,135,0.08)",
                        }}
                      >
                        {spec}
                      </Badge>
                    ))}
                  </div>

                  <div className="space-y-1.5 pt-2">
                    {doctor.awards.map((award) => (
                      <div
                        key={award}
                        className="flex items-center justify-center gap-2 text-xs"
                        style={{ color: "#8E7C6E" }}
                      >
                        <Award className="h-3.5 w-3.5" style={{ color: "#C5A067" }} />
                        <span>{award}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4">
                    <Link href={`/doctors/${doctor.name.toLowerCase().replace(/\s+/g, "-")}`}>
                      <Button
                        className="w-full rounded-xl py-5 text-sm font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(214,183,135,0.15)]"
                        style={{
                          background: "linear-gradient(135deg, #D6B787, #C5A067)",
                          color: "#241710",
                        }}
                      >
                        Book Consultation
                      </Button>
                    </Link>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
