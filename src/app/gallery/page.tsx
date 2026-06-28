"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { X, Maximize2 } from "lucide-react"

const categories = ["All", "Clinic", "Treatments", "Results", "Team", "Events"]

const galleryItems = [
  { id: 1, category: "Clinic", title: "Reception Lounge", gradient: "from-[#241710] to-[#3A281E]" },
  { id: 2, category: "Treatments", title: "Laser Suite", gradient: "from-[#3A281E] to-[#2B1C15]" },
  { id: 3, category: "Results", title: "Skin Rejuvenation", gradient: "from-[#2B1C15] to-[#D6B787]" },
  { id: 4, category: "Team", title: "Dr. Sarah Mitchell", gradient: "from-[#D6B787] to-[#C5A067]" },
  { id: 5, category: "Events", title: "Grand Opening", gradient: "from-[#C5A067] to-[#B78B5E]" },
  { id: 6, category: "Clinic", title: "Treatment Room", gradient: "from-[#B78B5E] to-[#241710]" },
  { id: 7, category: "Treatments", title: "HydraFacial Station", gradient: "from-[#3A281E] to-[#D6B787]" },
  { id: 8, category: "Results", title: "Botox Transformation", gradient: "from-[#2B1C15] to-[#C5A067]" },
  { id: 9, category: "Team", title: "Consultation Team", gradient: "from-[#241710] to-[#B78B5E]" },
  { id: 10, category: "Events", title: "Media Launch", gradient: "from-[#D6B787] to-[#3A281E]" },
  { id: 11, category: "Clinic", title: "VIP Lounge", gradient: "from-[#C5A067] to-[#2B1C15]" },
  { id: 12, category: "Treatments", title: "IV Therapy Room", gradient: "from-[#B78B5E] to-[#241710]" },
  { id: 13, category: "Results", title: "Body Sculpting", gradient: "from-[#3A281E] to-[#C5A067]" },
  { id: 14, category: "Team", title: "Aesthetic Specialists", gradient: "from-[#2B1C15] to-[#D6B787]" },
  { id: 15, category: "Events", title: "Client Appreciation", gradient: "from-[#D6B787] to-[#241710]" },
]

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
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory)

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
                  <div
                    className={`relative aspect-[3/4] w-full bg-gradient-to-br ${item.gradient}`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                          <Maximize2 className="h-6 w-6 text-[#D6B787]" />
                        </div>
                        <p className="font-serif text-lg text-[#F6F0EA]">{item.title}</p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#241710]/90 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                    <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                      <Badge className="border-[#D6B787] bg-[#241710]/80 text-xs uppercase tracking-wider text-[#D6B787]">
                        {item.category}
                      </Badge>
                      <p className="mt-2 font-serif text-lg text-[#F6F0EA]">{item.title}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/0 transition-all duration-500 group-hover:ring-[#D6B787]/30" />
                  <div className="absolute inset-0 scale-105 opacity-0 transition-all duration-700 group-hover:scale-100 group-hover:opacity-100">
                    <div className="h-full w-full rounded-2xl bg-[#D6B787]/5" />
                  </div>
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
                const item = galleryItems.find((i) => i.id === selectedImage)
                if (!item) return null
                return (
                  <div
                    className={`flex aspect-[4/3] w-full items-center justify-center bg-gradient-to-br ${item.gradient} p-12`}
                  >
                    <div className="text-center">
                      <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm">
                        <Maximize2 className="h-10 w-10 text-[#D6B787]" />
                      </div>
                      <h3 className="font-serif text-3xl text-[#F6F0EA]">{item.title}</h3>
                      <Badge className="mt-4 border-[#D6B787] bg-transparent px-4 py-1.5 text-xs uppercase tracking-wider text-[#D6B787]">
                        {item.category}
                      </Badge>
                      <p className="mt-4 text-[#8E7C6E]">
                        Experience the KO CLINIC difference — luxury, precision, artistry.
                      </p>
                    </div>
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
