"use client";

import { useState, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MoveHorizontal, Maximize2, X } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { images } from "@/lib/images";

const categories = ["All", "Hair", "Skin", "Botox", "Fillers", "Threads", "Laser", "Body"];

const treatments = [
  { id: 1, title: "Hair Transformation", category: "Hair", patient: "Male, 34 yrs", date: "Dec 2024", description: "Advanced FUE hair transplant restoring full density", img: images.beforeAfterPage[0] },
  { id: 2, title: "Skin Glow", category: "Skin", patient: "Female, 28 yrs", date: "Jan 2025", description: "Morpheus MNRF resurfacing for radiant complexion", img: images.beforeAfterPage[1] },
  { id: 3, title: "Wrinkle Reduction", category: "Botox", patient: "Female, 42 yrs", date: "Feb 2025", description: "Precision Botox for forehead & crow's feet", img: images.beforeAfterPage[2] },
  { id: 4, title: "Volume Restoration", category: "Fillers", patient: "Female, 36 yrs", date: "Mar 2025", description: "Dermal filler volumisation for midface & lips", img: images.beforeAfterPage[3] },
  { id: 5, title: "Body Sculpting", category: "Body", patient: "Male, 29 yrs", date: "Nov 2024", description: "CoolSculpting fat reduction for abdomen & flanks", img: images.beforeAfterPage[4] },
  { id: 6, title: "Laser Rejuvenation", category: "Laser", patient: "Female, 45 yrs", date: "Oct 2024", description: "CO\u2082 fractional laser for pigmentation & texture", img: images.beforeAfterPage[5] },
  { id: 7, title: "Thread Lift", category: "Threads", patient: "Female, 39 yrs", date: "Jan 2025", description: "PDO thread lift for jowls & brow elevation", img: images.beforeAfterPage[6] },
  { id: 8, title: "Lip Enhancement", category: "Fillers", patient: "Female, 31 yrs", date: "Feb 2025", description: "Hyaluronic acid lip fillers for natural volume", img: images.beforeAfterPage[7] },
];

function ComparisonSlider({ before, after }: { before: string; after: string }) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    dragging.current = true;
    updatePosition(e.clientX);
    const onMove = (e: MouseEvent) => {
      if (!dragging.current) return;
      updatePosition(e.clientX);
    };
    const onUp = () => {
      dragging.current = false;
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseup", onUp);
    };
    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseup", onUp);
  }, [updatePosition]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    dragging.current = true;
    updatePosition(e.touches[0].clientX);
  }, [updatePosition]);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!dragging.current) return;
    updatePosition(e.touches[0].clientX);
  }, [updatePosition]);

  const handleTouchEnd = useCallback(() => {
    dragging.current = false;
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden select-none"
      onMouseDown={handleMouseDown}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <Image src={before} alt="Before" fill className="object-cover pointer-events-none" sizes="(max-width: 768px) 100vw, 50vw" />
      <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <Image src={after} alt="After" fill className="object-cover pointer-events-none" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
      <div className="absolute top-3 left-3 z-10">
        <span className="text-[10px] font-button uppercase tracking-wider px-2 py-1 rounded-full bg-black/50 text-white/80">Before</span>
      </div>
      <div className="absolute top-3 right-3 z-10">
        <span className="text-[10px] font-button uppercase tracking-wider px-2 py-1 rounded-full bg-black/50 text-white/80">After</span>
      </div>
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white/80 z-20 pointer-events-none"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white shadow-lg flex items-center justify-center">
          <MoveHorizontal className="w-4 h-4 text-[#241710]" />
        </div>
      </div>
    </div>
  );
}

export default function BeforeAfterPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = activeCategory === "All"
    ? treatments
    : treatments.filter((t) => t.category === activeCategory);

  const activeItem = lightbox !== null ? treatments.find((t) => t.id === lightbox) : null;

  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#241710]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(214,183,135,0.06),transparent_70%)]" />
        <div className="container-custom px-6 relative z-10">
          <SectionHeading
            title="Before & After"
            subtitle="Real Transformations"
            description="Real transformations. Real results. Drag to compare."
          />
        </div>
      </section>

      <section className="section-padding bg-[#2B1C15] pt-0">
        <div className="container-custom px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap gap-3 justify-center mb-12"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-xs font-button uppercase tracking-wider rounded-full transition-all ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-[#D6B787] to-[#C5A067] text-[#241710]"
                    : "border border-[rgba(214,183,135,0.25)] text-[#8E7C6E] hover:text-[#F6F0EA]"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <div className="group cursor-pointer rounded-2xl border border-[rgba(214,183,135,0.1)] hover:border-[rgba(214,183,135,0.3)] transition-all duration-500 overflow-hidden bg-[#241710]">
                  <div
                    className="relative aspect-[4/5] w-full"
                    onClick={() => setLightbox(item.id)}
                  >
                    <ComparisonSlider before={item.img.before} after={item.img.after} />
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-30">
                      <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Maximize2 className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className="font-heading text-base text-[#F6F0EA]">{item.title}</h3>
                      <Badge variant="outline" className="text-[10px] rounded-full border-[rgba(214,183,135,0.3)] text-[#D6B787]">
                        {item.category}
                      </Badge>
                    </div>
                    <p className="text-[#8E7C6E] text-xs font-body">{item.patient} &middot; {item.date}</p>
                    <p className="text-[#8E7C6E] text-sm font-body mt-2 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-[#8E7C6E] font-body">No results found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {activeItem && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-4xl max-h-[90vh] rounded-2xl overflow-hidden bg-[#241710] border border-[rgba(214,183,135,0.2)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 z-40 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-all"
            >
              <X className="w-5 h-5 text-white" />
            </button>
            <div className="aspect-[4/3] w-full">
              <ComparisonSlider before={activeItem.img.before} after={activeItem.img.after} />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-heading text-2xl text-[#F6F0EA]">{activeItem.title}</h3>
                <Badge variant="outline" className="rounded-full border-[rgba(214,183,135,0.3)] text-[#D6B787]">
                  {activeItem.category}
                </Badge>
              </div>
              <p className="text-[#8E7C6E] text-sm font-body">{activeItem.patient} &middot; {activeItem.date}</p>
              <p className="text-[#E8DDD1] font-body mt-3 leading-relaxed">{activeItem.description}</p>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
