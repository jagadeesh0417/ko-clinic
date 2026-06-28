"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Image } from "lucide-react";

const posts = [
  { label: "Latest Treatment", type: "Photo" },
  { label: "Patient Result", type: "Photo" },
  { label: "Clinic Tour", type: "Reel" },
  { label: "Skin Transformation", type: "Photo" },
  { label: "Doctor Interview", type: "Reel" },
  { label: "Before & After", type: "Photo" },
];

export function InstagramSection() {
  return (
    <section className="section-padding bg-[#2A1A12]">
      <div className="container-custom">
        <SectionHeading
          title="Follow Our Journey"
          subtitle="@koclinic"
          description="Daily inspiration, transformations and behind-the-scenes"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-16">
          {posts.map((post, i) => (
            <motion.div
              key={post.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="aspect-square rounded-2xl bg-gradient-to-br from-[rgba(213,185,138,0.08)] to-[rgba(60,40,29,0.6)] border border-[rgba(213,185,138,0.1)] hover:border-[rgba(213,185,138,0.3)] transition-all duration-500 flex items-center justify-center cursor-pointer group"
            >
              <div className="text-center p-4">
                <Image className="w-6 h-6 text-[#7D6B5A] group-hover:text-[#D5B98A] mx-auto mb-2 transition-colors" />
                <p className="text-[#7D6B5A] text-xs font-body">{post.label}</p>
                <span className="text-[10px] text-[#C8A96B] uppercase tracking-wider font-button mt-1 block">{post.type}</span>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
          <Button variant="outline" asChild>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Image className="w-4 h-4" /> Follow @koclinic <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
