"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const treatments = [
  {
    title: "Micro Bio-FUE Hair Transplant",
    category: "Hair Restoration",
    description: "Advanced follicular unit extraction for permanent, natural-looking hair restoration with minimal downtime.",
    slug: "micro-bio-fue",
    gradient: "from-[#C5A067] via-[#D6B787] to-[#B78B5E]",
    aspect: "aspect-[4/5]",
    span: "md:row-span-2",
  },
  {
    title: "DHI Hair Transplant",
    category: "Hair Restoration",
    description: "Direct hair implantation technique providing maximum density and natural results with rapid recovery.",
    slug: "dhi-hair-transplant",
    gradient: "from-[#3A281E] to-[#2B1C15]",
    aspect: "aspect-[4/3]",
    span: "",
  },
  {
    title: "PRP Therapy",
    category: "Regenerative",
    description: "Platelet-rich plasma therapy to stimulate hair growth, collagen production, and cellular regeneration.",
    slug: "prp-therapy",
    gradient: "from-[#B78B5E] via-[#C5A067] to-[#D6B787]",
    aspect: "aspect-[4/3]",
    span: "",
  },
  {
    title: "Morpheus MNRF",
    category: "Skin",
    description: "Microneedling with radiofrequency for deep collagen remodeling, skin tightening, and scar revision.",
    slug: "morpheus-mnrf",
    gradient: "from-[#2B1C15] to-[#3A281E]",
    aspect: "aspect-[4/3]",
    span: "",
  },
  {
    title: "Botox",
    category: "Injectables",
    description: "Premium neurotoxin treatments for wrinkle reduction, brow lifting, and facial rejuvenation.",
    slug: "botox",
    gradient: "from-[#D6B787] via-[#C5A067] to-[#B78B5E]",
    aspect: "aspect-[4/3]",
    span: "",
  },
  {
    title: "PDO Thread Lift",
    category: "Skin",
    description: "Non-surgical lifting and tightening using absorbable threads for immediate, natural-looking results.",
    slug: "pdo-thread-lift",
    gradient: "from-[#3A281E] to-[#1a0f0a]",
    aspect: "aspect-[4/5]",
    span: "md:row-span-2",
  },
];

export function FeaturedTreatments() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#241710] section-padding overflow-hidden">
      <div className="container-custom">
        <SectionHeading
          title="Featured Treatments"
          subtitle="Our Expertise"
          description="Hair Restoration · Skin Rejuvenation · Regenerative · Injectables"
        />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 auto-rows-auto">
          {treatments.map((treatment, i) => (
            <div
              key={treatment.slug}
              ref={(el) => { cardsRef.current[i] = el; }}
              className={`group relative overflow-hidden rounded-2xl ${treatment.aspect} ${treatment.span} cursor-pointer`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${treatment.gradient} opacity-90`} />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(36,23,16,0.6)] via-transparent to-[rgba(36,23,16,0.2)]" />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[rgba(214,183,135,0.04)]" />
              <Link href={`/treatments/${treatment.slug}`} className="relative h-full w-full flex flex-col justify-end p-5 md:p-7">
                <Badge variant="gold" className="w-fit mb-3 text-[9px] px-2 py-0.5 uppercase tracking-[0.15em]">
                  {treatment.category}
                </Badge>
                <h3 className="font-heading text-base md:text-xl text-[#F6F0EA] mb-2 group-hover:text-[#D6B787] transition-colors leading-tight">
                  {treatment.title}
                </h3>
                <p className="text-[#8E7C6E] text-xs md:text-sm leading-relaxed mb-4 font-body max-w-[90%] line-clamp-2">
                  {treatment.description}
                </p>
                <span className="inline-flex items-center gap-2 text-[#C5A067] text-[10px] uppercase tracking-[0.2em] font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  Explore <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
              <div className="absolute top-4 right-4 w-16 h-16 rounded-full border border-[rgba(214,183,135,0.15)] flex items-center justify-center overflow-hidden">
                <span className="font-heading text-lg text-[rgba(214,183,135,0.3)] font-bold">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
            </div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <Button variant="outline" asChild>
            <Link href="/treatments">
              View All Treatments <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
