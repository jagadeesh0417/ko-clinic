"use client"

import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"
import { Image, ArrowRight } from "lucide-react"

const posts = [
  { label: "Luxury facial glow", type: "Photo" },
  { label: "BBL transformation", type: "Reel" },
  { label: "VIP treatment room", type: "Photo" },
  { label: "Client results", type: "Reel" },
  { label: "Laser rejuvenation", type: "Photo" },
  { label: "Behind the scenes", type: "Reel" },
  { label: "Clinic tour", type: "Photo" },
  { label: "Patient journey", type: "Reel" },
]

export function InstagramSection() {
  return (
    <section className="bg-[#241710] section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Follow Our Journey"
          subtitle="@koclinic"
          description="Daily inspiration, transformations and behind-the-scenes"
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4 mt-10 sm:mt-12">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
              style={{
                background: `linear-gradient(135deg, #2B1C15, #3A281E)`,
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-[#D6B787] gap-2 p-3">
                <Image className="w-6 h-6 sm:w-8 sm:h-8" />
                <span className="text-[10px] sm:text-xs font-medium text-[#E8DDD1] text-center leading-tight line-clamp-2">
                  {post.label}
                </span>
              </div>

              <div className="absolute top-2 right-2">
                <span
                  className={`text-[8px] sm:text-[10px] font-semibold px-1.5 sm:px-2 py-0.5 rounded-full ${
                    post.type === "Reel"
                      ? "bg-[#C5A067] text-[#241710]"
                      : "bg-[#D6B787]/20 text-[#D6B787]"
                  }`}
                >
                  {post.type}
                </span>
              </div>

              <div className="absolute inset-0 bg-[#D6B787]/0 group-hover:bg-[#D6B787]/10 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex justify-center mt-10"
        >
          <a
            href="https://instagram.com/koclinic"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="gap-2 px-6 sm:px-8 py-4 sm:py-6 text-xs sm:text-sm font-semibold rounded-full border-none text-white shadow-lg"
              style={{
                background: "linear-gradient(135deg, #f58529, #dd2a7b, #8134af)",
              }}
            >
              <Image className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              Follow @koclinic
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
