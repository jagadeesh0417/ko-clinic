"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"
import { Camera, ArrowRight } from "lucide-react"
import Link from "next/link"

const images = [
  {
    src: "/images/clinic/clinic-1.jpg",
    alt: "Luxury treatment room",
    label: "Treatment Suites",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/images/clinic/clinic-2.jpg",
    alt: "Reception area",
    label: "Reception Lounge",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/clinic/clinic-3.jpg",
    alt: "Procedure room with advanced equipment",
    label: "Advanced Technology",
    aspect: "aspect-[4/3]",
  },
  {
    src: "/images/clinic/clinic-4.jpg",
    alt: "Relaxation space",
    label: "Relaxation Suite",
    aspect: "aspect-[3/4]",
  },
  {
    src: "/images/clinic/clinic-5.jpg",
    alt: "Consultation room",
    label: "Private Consultation",
    aspect: "aspect-[4/5]",
  },
  {
    src: "/images/clinic/clinic-6.jpg",
    alt: "Clinic hallway",
    label: "Elegant Corridors",
    aspect: "aspect-[16/9]",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
}

export function ClinicExperience() {
  return (
    <section className="bg-[#3A281E] section-padding">
      <div className="container-custom">
        <SectionHeading
          title="The KO Clinic Experience"
          subtitle="Step into a world where medical excellence meets uncompromising luxury. Every detail is designed for your comfort and transformation."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 mt-12"
        >
          {images.map((image, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="break-inside-avoid overflow-hidden rounded-lg relative group cursor-pointer"
            >
              <div
                className={`${image.aspect} bg-[#2B1C15] relative overflow-hidden`}
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${image.src})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#241710]/90 via-[#241710]/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-[rgba(214,183,135,0.25)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex items-end p-4 md:p-6">
                  <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-2 mb-1">
                      <Camera className="w-4 h-4 text-[#D6B787]" />
                      <span className="text-[#D6B787] text-sm font-medium tracking-wide uppercase">
                        {image.label}
                      </span>
                    </div>
                    <div className="w-0 h-[1px] bg-[#C5A067] group-hover:w-full transition-all duration-500 delay-100" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center mt-12"
        >
          <Link href="/gallery">
            <Button variant="primary" size="lg" className="group">
              <span>Explore Our Clinic</span>
              <ArrowRight className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
