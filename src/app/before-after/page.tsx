"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

const categories = ["All", "Hair", "Skin", "Botox", "Fillers", "Laser", "Threads", "Body", "Anti Aging"];

const results = [
  { title: "Hair Transplant - Norwood V", category: "Hair", result: "Exceptional density restoration" },
  { title: "PRP Therapy - Hair Thinning", category: "Hair", result: "Significant follicle activation" },
  { title: "Morpheus MNRF - Acne Scars", category: "Skin", result: "80% improvement in texture" },
  { title: "Botox - Forehead Wrinkles", category: "Botox", result: "Smooth natural appearance" },
  { title: "Lip Fillers", category: "Fillers", result: "Enhanced volume and shape" },
  { title: "CO2 Laser - Pigmentation", category: "Laser", result: "Even skin tone achieved" },
  { title: "PDO Thread Lift", category: "Threads", result: "Visible lifting effect" },
  { title: "Body Contouring", category: "Body", result: "Reduced fat circumference" },
];

export default function BeforeAfterPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const filtered = activeCategory === "All" ? results : results.filter((r) => r.category === activeCategory);

  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#2A1A12]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(213,185,138,0.06),transparent_70%)]" />
        <div className="container-custom px-6 relative z-10">
          <SectionHeading title="Before & After" subtitle="Results" description="Real transformations. Real results." />
        </div>
      </section>

      <section className="section-padding bg-[#3C281D] pt-0">
        <div className="container-custom px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 text-xs font-button uppercase tracking-wider rounded-full transition-all ${
                  activeCategory === cat ? "bg-gradient-to-r from-[#C8A96B] to-[#B8905A] text-[#22160F]" : "border border-[rgba(213,185,138,0.25)] text-[#7D6B5A] hover:text-[#F5F0EA]"
                }`}>{cat}</button>
            ))}
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((item, i) => (
              <motion.div key={item.title} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} className="group cursor-pointer">
                <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-[rgba(213,185,138,0.08)] to-[rgba(34,22,15,0.8)] border border-[rgba(213,185,138,0.1)] hover:border-[rgba(213,185,138,0.3)] transition-all duration-500 flex flex-col items-center justify-center p-6 text-center">
                  <div className="flex gap-2 mb-4">
                    <span className="text-xs font-button uppercase tracking-wider px-3 py-1 rounded-full border border-[rgba(213,185,138,0.3)] text-[#D5B98A]">Before</span>
                    <span className="text-xs font-button uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-[#C8A96B] to-[#B8905A] text-[#22160F]">After</span>
                  </div>
                  <h3 className="font-heading text-lg text-[#F5F0EA] mb-2 group-hover:text-[#D5B98A] transition-all">{item.title}</h3>
                  <p className="text-[#7D6B5A] text-sm font-body">{item.result}</p>
                  <Badge variant="outline" className="mt-4 rounded-full">{item.category}</Badge>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
