"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, ArrowRight } from "lucide-react"
import Link from "next/link"

const videos = [
  {
    title: "Laser Skin Resurfacing: What to Expect",
    category: "Treatments",
    duration: "4:32",
    gradient: "from-[#D6B787] to-[#B78B5E]",
  },
  {
    title: "Our State-of-the-Art Facility Tour",
    category: "Clinic Tour",
    duration: "3:15",
    gradient: "from-[#C5A067] to-[#8E7C6E]",
  },
  {
    title: "Patient Journey: Before & After Results",
    category: "Testimonials",
    duration: "5:48",
    gradient: "from-[#D6B787] to-[#C5A067]",
  },
  {
    title: "Advanced Injectable Techniques Explained",
    category: "Procedures",
    duration: "6:10",
    gradient: "from-[#B78B5E] to-[#8E7C6E]",
  },
  {
    title: "Skincare Routine Tips from Our Experts",
    category: "Skincare",
    duration: "3:55",
    gradient: "from-[#C5A067] to-[#B78B5E]",
  },
  {
    title: "Meet the KO Clinic Medical Team",
    category: "About Us",
    duration: "4:05",
    gradient: "from-[#D6B787] to-[#8E7C6E]",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
}

export function VideoLibrary() {
  return (
    <section className="bg-[#3A281E] section-padding">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Video Library"
          subtitle="Watch our procedures, patient stories, and expert insights"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {videos.map((video, index) => (
            <motion.div
              key={index}
              className="group relative rounded-lg overflow-hidden cursor-pointer"
              variants={cardVariants}
            >
              <div
                className={`relative w-full aspect-video bg-gradient-to-br ${video.gradient} flex items-center justify-center`}
              >
                <div className="absolute inset-0 bg-[#241710]/40 group-hover:bg-[#241710]/60 transition-colors duration-300" />
                <div className="relative z-10 w-16 h-16 rounded-full bg-[#D6B787]/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-6 h-6 text-[#241710] ml-0.5" fill="#241710" />
                </div>
                <span className="absolute bottom-3 right-3 z-10 bg-[#241710]/80 text-[#F6F0EA] text-xs px-2 py-1 rounded font-mono">
                  {video.duration}
                </span>
              </div>
              <div className="p-4 bg-[#2B1C15]">
                <Badge
                  variant="outline"
                  className="border-[rgba(214,183,135,0.25)] text-[#D6B787] text-xs mb-2"
                >
                  {video.category}
                </Badge>
                <h3 className="text-[#F6F0EA] font-semibold text-sm leading-snug line-clamp-2">
                  {video.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Link href="/media">
            <Button
              variant="outline"
              className="border-[#D6B787] text-[#D6B787] hover:bg-[#D6B787] hover:text-[#241710] transition-colors duration-300"
            >
              View More Videos
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
