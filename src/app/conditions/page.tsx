"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { SectionHeading } from "@/components/ui/section-heading"
import { GlassCard } from "@/components/ui/glass-card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Search, Sparkles } from "lucide-react"
import { useState } from "react"

const conditions = [
  { name: "Hair Loss", slug: "hair-loss", category: "Hair", description: "Advanced hair restoration solutions for thinning and balding" },
  { name: "Hair Thinning", slug: "hair-thinning", category: "Hair", description: "Treatments to restore density and volume" },
  { name: "Pigmentation", slug: "pigmentation", category: "Skin", description: "Reduce dark spots and achieve even skin tone" },
  { name: "Acne Scars", slug: "acne-scars", category: "Skin", description: "Smooth and resurface scarred skin" },
  { name: "Wrinkles", slug: "wrinkles", category: "Anti-Aging", description: "Softening fine lines and deep wrinkles" },
  { name: "Fine Lines", slug: "fine-lines", category: "Anti-Aging", description: "Prevent and treat early signs of aging" },
  { name: "Volume Loss", slug: "volume-loss", category: "Anti-Aging", description: "Restore facial volume and contour" },
  { name: "Dark Circles", slug: "dark-circles", category: "Skin", description: "Brighten under-eye area for a refreshed look" },
  { name: "Sun Damage", slug: "sun-damage", category: "Skin", description: "Repair UV damage and photoaging" },
  { name: "Sagging Skin", slug: "sagging-skin", category: "Anti-Aging", description: "Non-surgical skin tightening and lifting" },
  { name: "Double Chin", slug: "double-chin", category: "Body", description: "Reduce submental fat and define jawline" },
  { name: "Uneven Skin Tone", slug: "uneven-skin-tone", category: "Skin", description: "Achieve a radiant, uniform complexion" },
  { name: "Enlarged Pores", slug: "enlarged-pores", category: "Skin", description: "Minimize pore size for smoother skin" },
  { name: "Stretch Marks", slug: "stretch-marks", category: "Skin", description: "Reduce appearance of stretch marks" },
  { name: "Cellular Aging", slug: "cellular-aging", category: "Regenerative", description: "Regenerative therapies for age-related concerns" },
  { name: "Jawline Definition", slug: "jawline-definition", category: "Body", description: "Sculpt and define the jawline" },
]

const categories = ["All", "Hair", "Skin", "Anti-Aging", "Body", "Regenerative"]

export default function ConditionsPage() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")

  const filtered = conditions.filter((c) => {
    const matchCategory = activeCategory === "All" || c.category === activeCategory
    const matchSearch = c.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchSearch
  })

  return (
    <main className="relative min-h-screen bg-[#241710]">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 pointer-events-none" />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(214,183,135,0.06),transparent_70%)]" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <span className="font-button text-xs uppercase tracking-[5px] text-[#D6B787] mb-4 block">
            Aesthetic Concerns
          </span>
          <h1 className="text-5xl md:text-7xl font-light text-[#F6F0EA] tracking-wide mb-4">
            Conditions We <span className="font-medium text-[#D6B787]">Treat</span>
          </h1>
          <p className="text-lg md:text-xl text-[#E8DDD1]/70 max-w-2xl mx-auto font-light">
            Advanced aesthetic solutions tailored to your unique concerns
          </p>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-10">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-sm font-button uppercase tracking-[0.1em] transition-all duration-300 ${
                    activeCategory === cat
                      ? "bg-[#D6B787] text-[#241710]"
                      : "border border-[rgba(214,183,135,0.2)] text-[#8E7C6E] hover:text-[#D6B787] hover:border-[rgba(214,183,135,0.3)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="relative w-full md:w-64">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8E7C6E]" />
              <input
                type="text"
                placeholder="Search conditions..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-[rgba(214,183,135,0.06)] border border-[rgba(214,183,135,0.15)] rounded-full pl-10 pr-4 py-2.5 text-sm text-[#F6F0EA] placeholder:text-[#8E7C6E] focus:outline-none focus:border-[#D6B787]/40 transition-all"
              />
            </div>
          </div>

          <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {filtered.map((condition, i) => (
              <motion.div
                key={condition.slug}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.03 }}
              >
                <Link
                  href={`/treatments?condition=${condition.slug}`}
                  className="glassmorphism block rounded-xl px-4 py-5 text-center transition-all duration-300 hover:border-[rgba(214,183,135,0.5)] group h-full"
                  style={{ borderColor: "rgba(214,183,135,0.25)" }}
                >
                  <span className="block text-[#D6B787] font-heading text-lg leading-snug group-hover:text-[#C5A067] transition-colors mb-1">
                    {condition.name}
                  </span>
                  <span className="text-[10px] text-[#8E7C6E] font-button uppercase tracking-[0.1em]">
                    {condition.category}
                  </span>
                  <p className="text-xs text-[#8E7C6E]/70 mt-2 font-body leading-relaxed">{condition.description}</p>
                  <ArrowRight className="mx-auto mt-3 h-3.5 w-3.5 text-[#8E7C6E] group-hover:text-[#B78B5E] transition-colors" />
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-[#8E7C6E] font-body">No conditions found for &ldquo;{searchQuery}&rdquo;</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-4xl mx-auto glassmorphism rounded-3xl p-10 md:p-16 text-center border-[rgba(214,183,135,0.12)]"
        >
          <Sparkles className="w-10 h-10 text-[#D6B787] mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-5xl font-light text-[#F6F0EA] mb-4">
            Not Sure Which <span className="font-medium text-[#D6B787]">Treatment</span> You Need?
          </h2>
          <p className="text-[#E8DDD1]/60 max-w-lg mx-auto mb-8 font-body leading-relaxed">
            Schedule a complimentary consultation with our experts and discover the best treatment plan for your concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" asChild>
              <Link href="/contact">Book a Consultation</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/treatments">View All Treatments <ArrowRight className="w-4 h-4 ml-2" /></Link>
            </Button>
          </div>
        </motion.div>
      </section>
    </main>
  )
}
