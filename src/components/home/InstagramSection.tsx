"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { SectionHeading } from "@/components/ui/section-heading"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { images } from "@/lib/images"

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
          {images.instagram.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={post.url}
                alt={post.label}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-[rgba(36,23,16,0.3)] group-hover:bg-[rgba(36,23,16,0.15)] transition-colors duration-300" />

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
              Follow @koclinic
              <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
