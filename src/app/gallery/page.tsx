"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
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

  const filtered = activeCategory === "All"
    ? images
    : images.filter((img) => img.category === activeCategory);

  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#080808]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,106,0.08),transparent_70%)]" />
        <div className="container-custom px-6 relative z-10">
          <SectionHeading
            title="Gallery"
            subtitle="Moments"
            description="A glimpse into the KO Clinic experience"
          />
        </div>
      </section>

      <section className="section-padding bg-[#101010] pt-0">
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
                className={`px-4 py-2 text-xs font-button uppercase tracking-wider transition-all ${
                  activeCategory === cat
                    ? "bg-[#C9A86A] text-[#080808]"
                    : "border border-[rgba(201,168,106,0.3)] text-[#A1A1AA] hover:text-[#FAFAFA]"
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((image, i) => (
              <motion.div
                key={`${image.title}-${i}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                layout
                onClick={() => setSelectedImage(i)}
                className="aspect-square bg-gradient-to-br from-[rgba(201,168,106,0.08)] to-[#101010] border border-[rgba(201,168,106,0.15)] hover:border-[rgba(201,168,106,0.4)] transition-all duration-500 flex items-center justify-center cursor-pointer group overflow-hidden"
              >
                <div className="text-center p-4">
                  <div className="w-16 h-16 mx-auto mb-3 rounded-sm border border-[rgba(201,168,106,0.2)] flex items-center justify-center group-hover:bg-[rgba(201,168,106,0.1)] transition-colors">
                    <span className="text-[#C9A86A] font-heading text-xl">+</span>
                  </div>
                  <p className="text-[#FAFAFA] font-heading text-lg">{image.title}</p>
                  <span className="text-xs text-[#C9A86A] uppercase tracking-wider font-button mt-1 block">
                    {image.category}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-[#FAFAFA] hover:text-[#C9A86A] transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="max-w-4xl w-full"
          >
            <div className="aspect-video bg-gradient-to-br from-[rgba(201,168,106,0.15)] to-[#101010] border border-[rgba(201,168,106,0.2)] flex items-center justify-center">
              <div className="text-center">
                <p className="font-heading text-3xl text-[#FAFAFA]">
                  {filtered[selectedImage]?.title}
                </p>
                <span className="text-[#C9A86A] text-sm uppercase tracking-wider font-button mt-2 block">
                  {filtered[selectedImage]?.category}
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
