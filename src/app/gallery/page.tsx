"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, Maximize2 } from "lucide-react"
import { images } from "@/lib/images"

const categories = ["All", "Clinic", "Treatments", "Results", "Team", "Events"]

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5, ease: "easeOut" as const },
  }),
}

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const filtered = activeCategory === "All"
    ? images.gallery
    : images.gallery.filter((item) => item.category === activeCategory)

  const openLightbox = (id: number) => setSelectedImage(id)
  const closeLightbox = () => setSelectedImage(null)

  return (
    <main>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden bg-[#241710]">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mx-auto max-w-3xl text-center"
          >
            <Badge className="mb-6 border-[#D6B787] bg-transparent px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-[#D6B787]">
              Our Gallery
            </Badge>
            <h1 className="font-serif text-4xl font-light leading-tight text-[#F6F0EA] md:text-5xl lg:text-6xl">
              A visual journey through{" "}
              <span className="text-[#D6B787]">KO CLINIC</span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-[#8E7C6E]">
              Explore our world of luxury aesthetics — where science meets artistry
              in every detail.
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#241710]" />
      </section>

      {/* Filters */}
      <section className="section-padding bg-[#241710] pt-0">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glassmorphism mx-auto flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-[#3A281E] bg-[#2B1C15]/60 px-6 py-4 backdrop-blur-xl"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-5 py-2 text-sm font-medium tracking-wide transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#D6B787] text-[#241710] shadow-lg shadow-[#D6B787]/20"
                    : "bg-transparent text-[#8E7C6E] hover:text-[#F6F0EA]"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Grid */}
      <section className="section-padding bg-[#241710] pt-0">
        <div className="container-custom">
          <motion.div
            layout
            className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  custom={index}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.3 } }}
                  className="group relative mb-5 cursor-pointer overflow-hidden rounded-2xl"
                  onClick={() => openLightbox(item.id)}
                >
                  <div className="relative aspect-[3/4] w-full bg-[#2B1C15]">
                    <Image
                      src={item.url}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#241710]/90 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <Badge className="border-[#D6B787] bg-[#241710]/80 text-xs uppercase tracking-wider text-[#D6B787]">
                        {item.category}
                      </Badge>
                      <p className="mt-2 font-serif text-lg text-[#F6F0EA]">{item.title}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 transition-all duration-500 group-hover:ring-[#D6B787]/30" />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#241710]/95 backdrop-blur-xl"
            onClick={closeLightbox}
          >
            <motion.div
              key={selectedImage}
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="relative max-h-[85vh] max-w-4xl overflow-hidden rounded-3xl shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const item = images.gallery.find((i) => i.id === selectedImage)
                if (!item) return null
                return (
                  <div className="relative aspect-[4/3] w-full bg-[#2B1C15]">
                    <Image
                      src={item.url}
                      alt={item.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1200px) 100vw, 1200px"
                    />
                  </div>
                )
              })()}
              <button
                onClick={closeLightbox}
                className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-[#F6F0EA] backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <X className="h-5 w-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
