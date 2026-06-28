"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { images } from "@/lib/images";

gsap.registerPlugin(ScrollTrigger);

const treatments = [
  {
    title: "Micro Bio-FUE Hair Transplant",
    category: "Hair Restoration",
    description: "Advanced follicular unit extraction for permanent, natural-looking hair restoration with minimal downtime.",
    slug: "micro-bio-fue",
    image: images.treatments.microBioFue,
  },
  {
    title: "DHI Hair Transplant",
    category: "Hair Restoration",
    description: "Direct hair implantation technique providing maximum density and natural results with rapid recovery.",
    slug: "dhi-hair-transplant",
    image: images.treatments.dhi,
  },
  {
    title: "PRP Therapy",
    category: "Regenerative",
    description: "Platelet-rich plasma therapy to stimulate hair growth, collagen production, and cellular regeneration.",
    slug: "prp-therapy",
    image: images.treatments.prp,
  },
  {
    title: "Morpheus MNRF",
    category: "Skin",
    description: "Microneedling with radiofrequency for deep collagen remodeling, skin tightening, and scar revision.",
    slug: "morpheus-mnrf",
    image: images.treatments.morpheus,
  },
  {
    title: "Botox",
    category: "Injectables",
    description: "Premium neurotoxin treatments for wrinkle reduction, brow lifting, and facial rejuvenation.",
    slug: "botox",
    image: images.treatments.botox,
  },
  {
    title: "PDO Thread Lift",
    category: "Skin",
    description: "Non-surgical lifting and tightening using absorbable threads for immediate, natural-looking results.",
    slug: "pdo-thread-lift",
    image: images.treatments.pdoThread,
  },
];

export function FeaturedTreatments() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 40, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 0.7, ease: "power3.out",
            scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none none" },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#241710] section-padding">
      <div className="container-custom">
        <SectionHeading
          title="Featured Treatments"
          subtitle="Our Expertise"
          description="Hair Restoration · Skin Rejuvenation · Regenerative · Injectables"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-4 sm:gap-5 mt-12 sm:mt-16">
          {treatments.map((treatment, i) => (
            <div
              key={treatment.slug}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] sm:aspect-[4/3] lg:aspect-[4/3] cursor-pointer"
            >
              <Image
                src={treatment.image}
                alt={treatment.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(36,23,16,0.85)] via-[rgba(36,23,16,0.3)] to-[rgba(36,23,16,0.15)]" />
              <div className="absolute inset-0 bg-[rgba(214,183,135,0.08)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <Link href={`/treatments/${treatment.slug}`} className="relative h-full w-full flex flex-col justify-end p-4 sm:p-5 md:p-7">
                <Badge variant="gold" className="w-fit mb-2 sm:mb-3 text-[8px] sm:text-[9px] px-1.5 sm:px-2 py-0.5 uppercase tracking-[0.15em]">
                  {treatment.category}
                </Badge>
                <h3 className="font-heading text-sm sm:text-base md:text-lg lg:text-xl text-[#F6F0EA] mb-1 sm:mb-2 group-hover:text-[#D6B787] transition-colors leading-tight">
                  {treatment.title}
                </h3>
                <p className="text-[#8E7C6E] text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 font-body max-w-[95%] line-clamp-2">
                  {treatment.description}
                </p>
                <span className="inline-flex items-center gap-2 text-[#C5A067] text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                  Explore <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
              <div className="absolute top-3 right-3 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full border border-[rgba(214,183,135,0.15)] flex items-center justify-center overflow-hidden">
                <span className="font-heading text-sm sm:text-base md:text-lg text-[rgba(214,183,135,0.3)] font-bold">
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
          className="text-center mt-10 sm:mt-12"
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
