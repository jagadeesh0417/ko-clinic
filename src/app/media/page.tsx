"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import Link from "next/link";

const videos = [
  { title: "Hair Transplant Procedure Overview", category: "Hair Restoration", duration: "4:32" },
  { title: "PRP Therapy Explained", category: "Skin Rejuvenation", duration: "3:15" },
  { title: "Botox Treatment Session", category: "Injectable", duration: "5:20" },
  { title: "Patient Success Story: Hair Transformation", category: "Testimonial", duration: "6:45" },
  { title: "Laser Rejuvenation Procedure", category: "Skin Rejuvenation", duration: "4:10" },
  { title: "Dr. Vikas Singh Interview", category: "Doctor", duration: "8:30" },
  { title: "Clinic Tour - Koramangala", category: "Clinic", duration: "3:45" },
  { title: "Thread Lift Procedure", category: "Procedures", duration: "5:55" },
  { title: "Regenerative Medicine Insights", category: "Wellness", duration: "7:20" },
];

export default function MediaPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#080808]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,106,0.08),transparent_70%)]" />
        <div className="container-custom px-6 relative z-10">
          <SectionHeading
            title="Media & Videos"
            subtitle="Watch"
            description="Educational content and procedure insights"
          />
        </div>
      </section>

      <section className="section-padding bg-[#101010] pt-0">
        <div className="container-custom px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, i) => (
              <motion.div
                key={video.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group cursor-pointer"
              >
                <div className="aspect-video bg-gradient-to-br from-[rgba(201,168,106,0.1)] to-[#080808] border border-[rgba(201,168,106,0.15)] hover:border-[rgba(201,168,106,0.4)] transition-all duration-500 flex items-center justify-center relative overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="w-16 h-16 rounded-full border-2 border-[#C9A86A] flex items-center justify-center group-hover:bg-[#C9A86A] transition-all duration-300"
                  >
                    <Play className="w-6 h-6 text-[#C9A86A] group-hover:text-[#080808] transition-colors ml-0.5" />
                  </motion.div>
                  <span className="absolute bottom-3 right-3 text-xs text-[#A1A1AA] bg-[rgba(8,8,8,0.8)] px-2 py-1 font-body">
                    {video.duration}
                  </span>
                </div>
                <div className="mt-3">
                  <Badge variant="secondary" className="mb-2">{video.category}</Badge>
                  <h3 className="font-heading text-lg text-[#FAFAFA] group-hover:text-gradient-gold transition-all">
                    {video.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button variant="outline">
              View More Videos <ArrowRight className="w-4 h-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-[#080808]">
        <div className="container-custom px-6">
          <SectionHeading
            title="Press & Features"
            subtitle="In The Media"
            description="KO Clinic's presence in global media"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {["Forbes", "Vogue", "GQ", "Harper's Bazaar"].map((pub, i) => (
              <motion.div
                key={pub}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="aspect-[3/2] border border-[rgba(201,168,106,0.15)] flex items-center justify-center p-6 hover:border-[rgba(201,168,106,0.4)] transition-all"
              >
                <span className="font-heading text-2xl text-[#A1A1AA] text-center">{pub}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
