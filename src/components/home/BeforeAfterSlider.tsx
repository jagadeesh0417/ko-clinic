"use client"

import { useState, useRef, useCallback } from "react"
import { motion } from "framer-motion"
import { SectionHeading } from "@/components/ui/section-heading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MoveHorizontal, ArrowRight } from "lucide-react"
import Link from "next/link"

interface ComparisonCardData {
  title: string
  category: string
  description: string
  beforeGradient: string
  afterGradient: string
}

const cards: ComparisonCardData[] = [
  {
    title: "Hair Transformation",
    category: "Hair",
    description: "Micro Bio-FUE Hair Transplant",
    beforeGradient: "linear-gradient(135deg, #2B1C15 0%, #1a0f0a 50%, #0d0805 100%)",
    afterGradient: "linear-gradient(135deg, #D6B787 0%, #C5A067 40%, #B78B5E 100%)",
  },
  {
    title: "Skin Rejuvenation",
    category: "Skin",
    description: "Laser & PRP Therapy",
    beforeGradient: "linear-gradient(135deg, #2B1C15 0%, #1a0f0a 50%, #0d0805 100%)",
    afterGradient: "linear-gradient(135deg, #F6F0EA 0%, #E8DDD1 40%, #D6B787 100%)",
  },
  {
    title: "Facial Harmony",
    category: "Botox",
    description: "Botox & Fillers",
    beforeGradient: "linear-gradient(135deg, #2B1C15 0%, #1a0f0a 50%, #0d0805 100%)",
    afterGradient: "linear-gradient(135deg, #D6B787 0%, #C5A067 40%, #B78B5E 100%)",
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
} as const

function ComparisonSlider({ data }: { data: ComparisonCardData }) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  const calculatePosition = useCallback((clientX: number) => {
    const container = containerRef.current
    if (!container) return
    const rect = container.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    setPosition((x / rect.width) * 100)
  }, [])

  const handleMouseDown = () => {
    isDragging.current = true
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return
    calculatePosition(e.clientX)
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    calculatePosition(e.touches[0].clientX)
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[420px] rounded-2xl overflow-hidden cursor-ew-resize select-none"
      style={{ background: "#2B1C15" }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
    >
      {/* Before panel (left, visible by default) */}
      <div className="absolute inset-0" style={{ background: data.beforeGradient }}>
        <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.4)" }} />
        <span
          className="absolute top-4 left-4 uppercase tracking-[0.2em] text-xs font-medium"
          style={{ color: "#8E7C6E" }}
        >
          Before
        </span>
      </div>

      {/* After panel (right, clipped) */}
      <div
        className="absolute inset-0"
        style={{
          background: data.afterGradient,
          clipPath: `inset(0 0 0 ${position}%)`,
        }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(214,183,135,0.08)" }} />
        <span
          className="absolute top-4 right-4 uppercase tracking-[0.2em] text-xs font-medium"
          style={{ color: "#D6B787" }}
        >
          After
        </span>
      </div>

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 z-10"
        style={{
          left: `${position}%`,
          background: "#D6B787",
          boxShadow: "0 0 12px rgba(214,183,135,0.5)",
        }}
      />

      {/* Drag handle */}
      <div
        className="absolute z-20 flex items-center justify-center"
        style={{
          left: `${position}%`,
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <div
          className="w-11 h-11 rounded-full flex items-center justify-center"
          style={{
            background: "#D6B787",
            boxShadow: "0 0 20px rgba(214,183,135,0.4), 0 4px 12px rgba(0,0,0,0.3)",
          }}
        >
          <MoveHorizontal size={18} style={{ color: "#241710" }} />
        </div>
      </div>
    </div>
  )
}

export function BeforeAfterSlider() {
  return (
    <section className="section-padding" style={{ background: "#3A281E" }}>
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Real Transformations"
          subtitle="Before & After"
          description="See the exceptional results achieved by our patients"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="rounded-2xl overflow-hidden"
              style={{ background: "#241710" }}
            >
              <ComparisonSlider data={card} />

              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-semibold" style={{ color: "#F6F0EA" }}>
                    {card.title}
                  </h3>
                  <Badge
                    style={{
                      background: "rgba(214,183,135,0.15)",
                      color: "#D6B787",
                      border: "1px solid rgba(214,183,135,0.25)",
                    }}
                  >
                    {card.category}
                  </Badge>
                </div>
                <p className="text-sm" style={{ color: "#8E7C6E" }}>
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* CTA card */}
          <motion.div
            variants={cardVariants}
            className="rounded-2xl flex flex-col items-center justify-center text-center p-8 min-h-[520px]"
            style={{ background: "#2B1C15", border: "1px solid rgba(214,183,135,0.25)" }}
          >
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mb-5"
              style={{ background: "rgba(214,183,135,0.15)" }}
            >
              <MoveHorizontal size={28} style={{ color: "#D6B787" }} />
            </div>
            <h3 className="text-xl font-semibold mb-2" style={{ color: "#F6F0EA" }}>
              See More Results
            </h3>
            <p className="text-sm mb-6 max-w-[220px]" style={{ color: "#8E7C6E" }}>
              Explore our complete gallery of patient transformations
            </p>
            <Link href="/before-after">
              <Button
                style={{
                  background: "#D6B787",
                  color: "#241710",
                  borderRadius: "9999px",
                  padding: "12px 28px",
                  fontWeight: 600,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  border: "none",
                  cursor: "pointer",
                }}
              >
                View Gallery
                <ArrowRight size={16} />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link href="/before-after">
            <Button
              style={{
                background: "transparent",
                color: "#D6B787",
                border: "2px solid rgba(214,183,135,0.4)",
                borderRadius: "9999px",
                padding: "14px 36px",
                fontWeight: 600,
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                cursor: "pointer",
              }}
            >
              View All Results
              <ArrowRight size={18} />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
