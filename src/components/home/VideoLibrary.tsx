"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, ArrowRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const videos = [
  {
    title: "Laser Skin Resurfacing: What to Expect",
    category: "Treatments",
    duration: "4:32",
    gradient: "from-[#D6B787] to-[#B78B5E]",
  },
  {
    title: "Our State-of-the-Art Facility Tour",
    category: "Clinic Tour",
    duration: "3:15",
    gradient: "from-[#C5A067] to-[#8E7C6E]",
  },
  {
    title: "Patient Journey: Before & After Results",
    category: "Testimonials",
    duration: "5:48",
    gradient: "from-[#D6B787] to-[#C5A067]",
  },
  {
    title: "Advanced Injectable Techniques Explained",
    category: "Procedures",
    duration: "6:10",
    gradient: "from-[#B78B5E] to-[#8E7C6E]",
  },
  {
    title: "Skincare Routine Tips from Our Experts",
    category: "Skincare",
    duration: "3:55",
    gradient: "from-[#C5A067] to-[#B78B5E]",
  },
  {
    title: "Meet the KO Clinic Medical Team",
    category: "About Us",
    duration: "4:05",
    gradient: "from-[#D6B787] to-[#8E7C6E]",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function VideoLibrary() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".video-card",
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".video-grid",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#3A281E] section-padding overflow-hidden">
      <div className="container-custom">
        <SectionHeading
          title="Video Library"
          subtitle="Watch our procedures, patient stories, and expert insights"
        />

        <div className="video-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {videos.map((video, index) => (
            <div key={index} className="video-card group relative rounded-xl overflow-hidden cursor-pointer">
              <div className="relative w-full aspect-video bg-[#2B1C15] flex items-center justify-center overflow-hidden">
                <ReactPlayer
                  src={`https://www.youtube.com/watch?v=dQw4w9WgXcQ`}
                  light
                  width="100%"
                  height="100%"
                  playIcon={
                    <div className="w-16 h-16 rounded-full bg-[rgba(214,183,135,0.9)] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      <Play className="w-6 h-6 text-[#241710] ml-0.5" fill="#241710" />
                    </div>
                  }
                />
                <span className="absolute bottom-3 right-3 z-10 bg-[rgba(36,23,16,0.8)] backdrop-blur-sm text-[#F6F0EA] text-[10px] px-2 py-1 rounded-full font-mono">
                  {video.duration}
                </span>
              </div>
              <div className="p-4 bg-[#2B1C15] border-t border-[rgba(214,183,135,0.05)]">
                <Badge variant="outline" className="border-[rgba(214,183,135,0.2)] text-[#D6B787] text-[10px] mb-2">
                  {video.category}
                </Badge>
                <h3 className="text-[#F6F0EA] font-heading text-sm leading-snug line-clamp-2">
                  {video.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Link href="/media">
            <Button variant="outline">
              View More Videos
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
