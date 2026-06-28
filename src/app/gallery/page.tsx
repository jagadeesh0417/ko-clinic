"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { X } from "lucide-react";

const categories = ["All", "Clinic", "Procedures", "Team", "Facilities", "International"];

const images = [
  { title: "Reception Area", category: "Clinic" },
  { title: "VIP Lounge", category: "Clinic" },
  { title: "Consultation Room", category: "Clinic" },
  { title: "Hair Transplant Theatre", category: "Procedures" },
  { title: "Laser Treatment Session", category: "Procedures" },
  { title: "PRP Therapy Session", category: "Procedures" },
  { title: "Medical Team", category: "Team" },
  { title: "Dr. Vikas with Patient", category: "Team" },
  { title: "International Conference", category: "Team" },
  { title: "Patient Suite", category: "Facilities" },
  { title: "Technology Equipment", category: "Facilities" },
  { title: "Hong Kong Location", category: "International" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const filtered = activeCategory === "All" ? images : images.filter((img) => img.category === activeCategory);

  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#2A1A12]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(213,185,138,0.06),transparent_70%)]" />
        <div className="container-custom px-6 relative z-10">
          <SectionHeading title="Gallery" subtitle="Moments" description="A glimpse into the KO Clinic experience" />
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

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((image, i) => (
              <motion.div key={`${image.title}-${i}`} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }} layout
                onClick={() => setSelectedImage(i)}
                className="aspect-square rounded-2xl bg-gradient-to-br from-[rgba(213,185,138,0.06)] to-[rgba(34,22,15,0.6)] border border-[rgba(213,185,138,0.1)] hover:border-[rgba(213,185,138,0.3)] transition-all duration-500 flex items-center justify-center cursor-pointer group overflow-hidden">
                <div className="text-center p-4">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-full border border-[rgba(213,185,138,0.15)] flex items-center justify-center group-hover:bg-[rgba(213,185,138,0.08)] transition-colors">
                    <span className="text-[#C8A96B] font-heading text-xl">+</span>
                  </div>
                  <p className="text-[#F5F0EA] font-heading text-lg">{image.title}</p>
                  <span className="text-xs text-[#D5B98A] uppercase tracking-wider font-button mt-1 block">{image.category}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage !== null && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <button onClick={() => setSelectedImage(null)} className="absolute top-6 right-6 text-[#F5F0EA] hover:text-[#D5B98A] transition-colors"><X className="w-8 h-8" /></button>
          <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="max-w-4xl w-full">
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-[rgba(213,185,138,0.12)] to-[rgba(34,22,15,0.8)] border border-[rgba(213,185,138,0.15)] flex items-center justify-center">
              <div className="text-center">
                <p className="font-heading text-3xl text-[#F5F0EA]">{filtered[selectedImage]?.title}</p>
                <span className="text-[#D5B98A] text-sm uppercase tracking-wider font-button mt-2 block">{filtered[selectedImage]?.category}</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
