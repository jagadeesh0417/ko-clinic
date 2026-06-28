"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles } from "lucide-react"

const treatments = [
  { title: "Micro Bio-FUE Hair Transplant", category: "Hair", desc: "Advanced follicular unit extraction with microscopic precision for natural, permanent hair restoration.", benefits: ["Minimally invasive", "Natural hairline", "No linear scarring", "Quick recovery"] },
  { title: "DHI Hair Transplant", category: "Hair", desc: "Direct Hair Implantation using Choi pens for maximum graft survival and density.", benefits: ["No shaving required", "Higher density", "Faster healing", "Painless procedure"] },
  { title: "PRP Therapy", category: "Regenerative", desc: "Platelet-Rich Plasma therapy harnesses your body&apos;s own growth factors to stimulate tissue repair and regeneration.", benefits: ["Natural healing", "Minimal downtime", "Stimulates collagen", "Non-surgical"] },
  { title: "GFC Therapy", category: "Regenerative", desc: "Growth Factor Concentrate therapy delivers concentrated bioactive proteins for advanced cellular regeneration.", benefits: ["Higher potency than PRP", "Targeted treatment", "Rapid results", "Bio-identical"] },
  { title: "Stem Cell Therapy", category: "Regenerative", desc: "Cutting-edge regenerative treatment using mesenchymal stem cells for tissue repair and anti-aging.", benefits: ["Tissue regeneration", "Anti-aging effects", "Long-lasting results", "Systemic benefits"] },
  { title: "Morpheus MNRF", category: "Skin", desc: "Microneedling with radiofrequency energy to remodel collagen and tighten skin from within.", benefits: ["Skin tightening", "Scar reduction", "Pore refinement", "All skin types"] },
  { title: "Exosome Therapy", category: "Regenerative", desc: "Nanoscale extracellular vesicles deliver growth factors and signaling molecules for deep cellular repair.", benefits: ["Deep cellular repair", "Anti-inflammatory", "Hair regrowth", "Skin rejuvenation"] },
  { title: "Laser Rejuvenation", category: "Skin", desc: "Fractional laser technology resurfaces skin, reduces pigmentation, and stimulates collagen production.", benefits: ["Even skin tone", "Reduced pigmentation", "Collagen stimulation", "Smooth texture"] },
  { title: "Botox", category: "Injectables", desc: "Premium neuromodulator treatments to soften dynamic wrinkles and prevent facial aging.", benefits: ["Wrinkle reduction", "Preventative aging", "Quick procedure", "Natural results"] },
  { title: "Dermal Fillers", category: "Injectables", desc: "Hyaluronic acid fillers restore volume, contour facial features, and rejuvenate appearance.", benefits: ["Volume restoration", "Facial contouring", "Immediate results", "Reversible"] },
  { title: "PDO Thread Lift", category: "Skin", desc: "Dissolvable PDO threads lift and tighten sagging skin while stimulating collagen production.", benefits: ["Instant lift", "Collagen stimulation", "Natural-looking", "Minimal downtime"] },
  { title: "HIFU", category: "Skin", desc: "High-Intensity Focused Ultrasound lifts and tightens skin at the deep SMAS layer without incisions.", benefits: ["Non-invasive lift", "SMAS layer targeting", "Long-lasting", "No downtime"] },
  { title: "Body Contouring", category: "Body", desc: "Non-surgical fat reduction and body sculpting using advanced energy-based technologies.", benefits: ["Fat reduction", "Skin tightening", "Body sculpting", "No surgery"] },
  { title: "Double Chin Reduction", category: "Body", desc: "Targeted fat dissolution treatments for submental fat and jawline definition.", benefits: ["Jawline definition", "Permanent results", "Non-surgical", "Quick session"] },
  { title: "Breast Lift", category: "Surgery", desc: "Surgical mastopexy to elevate and reshape sagging breasts for a more youthful contour.", benefits: ["Youthful contour", "Long-lasting", "Improved symmetry", "Enhanced confidence"] },
  { title: "Laser Hair Reduction", category: "Skin", desc: "Permanent hair reduction using advanced diode and Nd:YAG laser systems for all skin types.", benefits: ["Permanent reduction", "All skin types", "Large areas", "Comfortable"] },
  { title: "Sexual Wellness", category: "Wellness", desc: "Comprehensive treatments to enhance sexual health, vitality, and overall well-being.", benefits: ["Enhanced vitality", "Improved function", "Confidence boost", "Holistic approach"] },
  { title: "IV Therapy", category: "Wellness", desc: "Intravenous nutrient infusions deliver vitamins, minerals, and antioxidants directly into the bloodstream.", benefits: ["Immediate absorption", "Customizable formulas", "Energy boost", "Immune support"] },
  { title: "EECP", category: "Wellness", desc: "Enhanced External Counterpulsation improves circulation and cardiovascular health non-invasively.", benefits: ["Heart health", "Improved circulation", "Non-invasive", "No medication"] },
  { title: "Chelation Therapy", category: "Wellness", desc: "Intravenous chelation removes heavy metals and toxins from the bloodstream for optimal health.", benefits: ["Detoxification", "Vascular health", "Mental clarity", "Anti-aging"] },
  { title: "Ozone Therapy", category: "Wellness", desc: "Medical ozone therapy activates the immune system and improves oxygen utilization at cellular level.", benefits: ["Immune modulation", "Oxygenation", "Anti-microbial", "Cellular health"] },
  { title: "Cosmetic Surgery", category: "Surgery", desc: "Comprehensive cosmetic surgical procedures performed by board-certified specialists in accredited facilities.", benefits: ["Transformative results", "Expert surgeons", "Safe environment", "Customized care"] },
]

const categories = ["All", "Hair", "Skin", "Injectables", "Body", "Regenerative", "Wellness", "Surgery"]

const categoryGradients: Record<string, string> = {
  Hair: "from-[#3A281E] to-[#241710]",
  Skin: "from-[#2B1C15] to-[#3A281E]",
  Injectables: "from-[#B78B5E] to-[#8E7C6E]",
  Body: "from-[#3A281E] to-[#2B1C15]",
  Regenerative: "from-[#D6B787] to-[#B78B5E]",
  Wellness: "from-[#8E7C6E] to-[#3A281E]",
  Surgery: "from-[#2B1C15] to-[#241710]",
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
}

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
}

export default function TreatmentsPage() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered =
    activeCategory === "All"
      ? treatments
      : treatments.filter((t) => t.category === activeCategory)

  return (
    <div className="min-h-screen bg-[#241710]">
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#3A281E]/60 to-[#241710]" />
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=1080&width=1920')] bg-cover bg-center opacity-30" />
        <div className="relative z-10 text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Badge className="mb-4 bg-[#D6B787]/10 text-[#D6B787] border border-[#D6B787]/20 px-4 py-1.5 text-sm uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 mr-2" />
              Premium Aesthetics
            </Badge>
            <h1 className="text-5xl md:text-7xl font-light text-[#F6F0EA] mb-4 tracking-tight">
              Our <span className="text-[#D6B787] font-normal">Treatments</span>
            </h1>
            <p className="text-lg md:text-xl text-[#E8DDD1]/80 max-w-xl mx-auto font-light">
              Advanced aesthetic solutions tailored to you
            </p>
          </motion.div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#241710] to-transparent" />
      </section>

      <section className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-2 sm:gap-3 justify-center mb-16"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-[#D6B787] text-[#241710] shadow-lg shadow-[#D6B787]/20"
                  : "bg-[#3A281E]/60 text-[#E8DDD1]/70 border border-[#D6B787]/10 hover:bg-[#3A281E] hover:text-[#D6B787]"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, transition: { duration: 0.2 } }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filtered.map((treatment, i) => (
              <motion.div
                key={treatment.title}
                variants={cardVariants}
                layout
                className="group relative rounded-2xl overflow-hidden border border-[rgba(214,183,135,0.25)] bg-[#3A281E]/40 backdrop-blur-sm hover:bg-[#3A281E]/60 transition-all duration-500"
              >
                <div
                  className={`h-48 bg-gradient-to-br ${categoryGradients[treatment.category] || "from-[#3A281E] to-[#241710]"} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=600')] bg-cover bg-center opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3A281E]/80 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-[#D6B787]/15 text-[#D6B787] border border-[#D6B787]/20 px-3 py-1 text-xs uppercase tracking-wider">
                      {treatment.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-medium text-[#F6F0EA]">{treatment.title}</h3>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-[#E8DDD1]/70 text-sm leading-relaxed">{treatment.desc}</p>
                  <ul className="space-y-2">
                    {treatment.benefits.map((b) => (
                      <li key={b} className="flex items-center text-[#C5A067]/80 text-xs">
                        <span className="w-1 h-1 rounded-full bg-[#D6B787] mr-2.5 flex-shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="#"
                    className="inline-flex items-center gap-2 text-[#D6B787] text-sm font-medium group/link pt-2"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-[#E8DDD1]/50 text-lg">No treatments found in this category.</p>
          </motion.div>
        )}
      </section>
    </div>
  )
}
