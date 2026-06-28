"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import Link from "next/link";

const videos = [
  { title: "Hair Transplant Overview", category: "Hair Restoration", duration: "4:32" },
  { title: "PRP Therapy Explained", category: "Skin", duration: "3:15" },
  { title: "Botox Treatment Session", category: "Injectable", duration: "5:20" },
  { title: "Patient Success Story", category: "Transformations", duration: "6:45" },
  { title: "Laser Rejuvenation", category: "Skin", duration: "4:10" },
  { title: "Dr. Vikas Interview", category: "Stories", duration: "8:30" },
];

export function VideoLibrary() {
  return (
    <section className="section-padding bg-[#3C281D]">
      <div className="container-custom">
        <SectionHeading
          title="Video Library"
          subtitle="Watch"
          description="Educational content and procedure insights"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {videos.map((video, i) => (
            <motion.div
              key={video.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group cursor-pointer"
            >
              <div className="aspect-video rounded-2xl bg-gradient-to-br from-[rgba(213,185,138,0.08)] to-[rgba(34,22,15,0.8)] border border-[rgba(213,185,138,0.1)] hover:border-[rgba(213,185,138,0.3)] transition-all duration-500 flex items-center justify-center relative overflow-hidden">
                <motion.div whileHover={{ scale: 1.1 }} className="w-16 h-16 rounded-full border-2 border-[#C8A96B] flex items-center justify-center group-hover:bg-[#C8A96B] transition-all duration-300">
                  <Play className="w-6 h-6 text-[#C8A96B] group-hover:text-[#22160F] transition-colors ml-0.5" />
                </motion.div>
                <span className="absolute bottom-3 right-3 text-xs text-[#7D6B5A] bg-[rgba(34,22,15,0.8)] px-2 py-1 rounded-full font-body">{video.duration}</span>
              </div>
              <div className="mt-3">
                <Badge variant="secondary" className="mb-2">{video.category}</Badge>
                <h3 className="font-heading text-lg text-[#F5F0EA] group-hover:text-[#D5B98A] transition-all">{video.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
          <Button variant="outline" asChild>
            <Link href="/media">View More Videos <ArrowRight className="w-4 h-4" /></Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
