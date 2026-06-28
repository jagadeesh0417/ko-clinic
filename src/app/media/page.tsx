"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Play, Clock, ArrowRight } from "lucide-react"
import { images } from "@/lib/images"

const categories = [
  { id: "all", label: "All" },
  { id: "hair", label: "Hair Procedures" },
  { id: "skin", label: "Skin Treatments" },
  { id: "injectables", label: "Injectables" },
  { id: "stories", label: "Patient Stories" },
  { id: "tour", label: "Clinic Tour" },
]

const videos = [
  { id: 1, title: "Hair Transplant Overview", category: "hair", duration: "4:32", description: "A comprehensive look at the modern hair transplant procedure, from consultation to recovery.", featured: true, thumbnail: images.videos[0] },
  { id: 2, title: "PRP Therapy Explained", category: "skin", duration: "3:15", description: "Understanding Platelet-Rich Plasma therapy and its remarkable benefits for skin rejuvenation.", featured: false, thumbnail: images.videos[1] },
  { id: 3, title: "Botox Treatment Session", category: "injectables", duration: "5:20", description: "Follow along a complete Botox treatment session with detailed explanations of each step.", featured: false, thumbnail: images.videos[2] },
  { id: 4, title: "Patient Success Story", category: "stories", duration: "6:45", description: "A heartfelt journey of transformation as a patient shares their experience at KO Clinic.", featured: false, thumbnail: images.videos[3] },
  { id: 5, title: "Laser Rejuvenation", category: "skin", duration: "4:10", description: "Discover how advanced laser technology can restore youth and vitality to your skin.", featured: false, thumbnail: images.videos[4] },
  { id: 6, title: "Dr. Vikas Interview", category: "stories", duration: "8:30", description: "An exclusive interview with Dr. Vikas on the philosophy and vision behind KO Clinic.", featured: false, thumbnail: images.videos[5] },
]

const categoryLabels: Record<string, string> = {
  hair: "Hair Procedures",
  skin: "Skin Treatments",
  injectables: "Injectables",
  stories: "Patient Stories",
  tour: "Clinic Tour",
}

const categoryColors: Record<string, string> = {
  hair: "bg-amber-800/80 text-amber-100 border-amber-700",
  skin: "bg-rose-800/80 text-rose-100 border-rose-700",
  injectables: "bg-violet-800/80 text-violet-100 border-violet-700",
  stories: "bg-emerald-800/80 text-emerald-100 border-emerald-700",
  tour: "bg-sky-800/80 text-sky-100 border-sky-700",
}

export default function MediaPage() {
  const [activeCategory, setActiveCategory] = useState("all")

  const filteredVideos =
    activeCategory === "all"
      ? videos
      : videos.filter((v) => v.category === activeCategory)

  const featured = filteredVideos.find((v) => v.featured)
  const gridVideos = filteredVideos.filter((v) => !v.featured)

  return (
    <div className="min-h-screen bg-[#241710]">
      <section className="relative overflow-hidden px-4 pb-16 pt-24 sm:px-6 sm:pt-32 lg:px-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#D6B787_0%,_transparent_50%)] opacity-20" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#B78B5E_0%,_transparent_50%)] opacity-10" />
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center"
          >
            <Badge className="mb-4 border-[#D6B787]/30 bg-[#D6B787]/10 px-4 py-1.5 text-[#D6B787]">
              Video Library
            </Badge>
            <h1 className="font-serif text-4xl font-light tracking-wide text-[#F6F0EA] sm:text-5xl lg:text-6xl">
              Media Library
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-[#8E7C6E] sm:text-xl">
              Educational content and procedure insights
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative px-4 pb-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-[#D6B787] text-[#241710] shadow-lg shadow-[#D6B787]/20"
                    : "bg-[#3A281E] text-[#8E7C6E] hover:bg-[#2B1C15] hover:text-[#E8DDD1]"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="relative px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {featured && (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="group relative mb-10 overflow-hidden rounded-2xl"
                >
                  <div className="relative aspect-video w-full overflow-hidden rounded-2xl sm:aspect-[21/9]">
                    <Image
                      src={featured.thumbnail}
                      alt={featured.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#241710]/90 via-transparent to-transparent" />
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="absolute inset-0 flex cursor-pointer items-center justify-center"
                    >
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#D6B787]/90 text-[#241710] shadow-2xl shadow-[#D6B787]/30 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#C5A067] sm:h-24 sm:w-24">
                        <Play className="ml-1 h-8 w-8 sm:h-10 sm:w-10" fill="currentColor" />
                      </div>
                    </motion.div>
                    <div className="absolute left-6 right-6 bottom-6 sm:left-10 sm:bottom-10 z-10">
                      <Badge className={`mb-3 border px-3 py-1 text-xs font-medium ${categoryColors[featured.category]}`}>
                        {categoryLabels[featured.category]}
                      </Badge>
                      <h3 className="font-serif text-2xl font-light text-[#F6F0EA] sm:text-3xl lg:text-4xl">
                        {featured.title}
                      </h3>
                      <p className="mt-2 max-w-2xl text-sm text-[#E8DDD1]/70 sm:text-base">
                        {featured.description}
                      </p>
                      <div className="mt-3 flex items-center gap-2 text-sm text-[#8E7C6E]">
                        <Clock className="h-4 w-4" />
                        <span>{featured.duration}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {gridVideos.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {gridVideos.map((video, index) => (
                    <motion.div
                      key={video.id}
                      layout
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
                      className="group relative overflow-hidden rounded-xl"
                    >
                      <div className="relative aspect-video w-full overflow-hidden rounded-xl">
                        <Image
                          src={video.thumbnail}
                          alt={video.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#241710]/90 via-transparent to-transparent" />
                        <motion.div
                          whileHover={{ scale: 1.08 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="absolute inset-0 flex cursor-pointer items-center justify-center"
                        >
                          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#D6B787]/90 text-[#241710] shadow-lg shadow-[#D6B787]/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#C5A067]">
                            <Play className="ml-0.5 h-6 w-6" fill="currentColor" />
                          </div>
                        </motion.div>
                        <div className="absolute right-3 top-3 z-10">
                          <Badge className={`border px-2.5 py-0.5 text-[11px] font-medium ${categoryColors[video.category]}`}>
                            {categoryLabels[video.category]}
                          </Badge>
                        </div>
                      </div>
                      <div className="bg-[#2B1C15]/80 p-4 backdrop-blur-sm">
                        <h3 className="font-serif text-lg font-light text-[#F6F0EA] transition-colors duration-300 group-hover:text-[#D6B787]">
                          {video.title}
                        </h3>
                        <p className="mt-1.5 line-clamp-2 text-sm text-[#8E7C6E]">
                          {video.description}
                        </p>
                        <div className="mt-3 flex items-center gap-2 text-xs text-[#8E7C6E]">
                          <Clock className="h-3.5 w-3.5" />
                          <span>{video.duration}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <p className="text-lg text-[#8E7C6E]">No videos found in this category.</p>
                  <Button
                    variant="outline"
                    onClick={() => setActiveCategory("all")}
                    className="mt-4 border-[#D6B787]/30 text-[#D6B787] hover:bg-[#D6B787]/10"
                  >
                    View All Videos
                    <ArrowRight className="ml-2 h-4 h-4" />
                  </Button>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}
