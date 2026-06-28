"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ReactCompareSlider, ReactCompareSliderImage } from "react-compare-slider";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

const comparisons = [
  {
    title: "Hair Transformation",
    category: "Hair",
    description: "Micro Bio-FUE Hair Transplant — 12 months post-op",
    beforeColor: "#2B1C15",
    afterColor: "#D6B787",
  },
  {
    title: "Skin Rejuvenation",
    category: "Skin",
    description: "Laser & PRP Therapy — 6 months post-op",
    beforeColor: "#2B1C15",
    afterColor: "#F6F0EA",
  },
  {
    title: "Facial Harmony",
    category: "Botox",
    description: "Botox & Fillers — 4 months post-op",
    beforeColor: "#2B1C15",
    afterColor: "#D6B787",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const },
  },
} as const;

export function BeforeAfterSlider() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".ba-stat",
        { scale: 0.8, opacity: 0 },
        {
          scale: 1, opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".ba-stats-row",
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-[#3A281E] overflow-hidden">
      <div className="container-custom">
        <SectionHeading
          title="Real Transformations"
          subtitle="Before & After"
          description="See the exceptional results achieved by our patients"
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {comparisons.map((item, i) => (
            <motion.div key={i} variants={cardVariants} className="rounded-2xl overflow-hidden bg-[#241710] group">
              <div className="relative h-[400px] overflow-hidden">
                <ReactCompareSlider
                  itemOne={
                    <ReactCompareSliderImage
                      src={`https://placehold.co/800x600/${item.beforeColor.replace("#", "")}/8E7C6E?text=Before&font=montserrat`}
                      alt="Before"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  }
                  itemTwo={
                    <ReactCompareSliderImage
                      src={`https://placehold.co/800x600/${item.afterColor.replace("#", "")}/241710?text=After&font=montserrat`}
                      alt="After"
                      style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  }
                  defaultPosition={50}
                  style={{ height: "100%", width: "100%" }}
                  className="[&>div]:!cursor-ew-resize"
                />
                <div className="absolute top-3 left-3 z-10">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#8E7C6E] bg-[rgba(36,23,16,0.7)] backdrop-blur-sm px-2.5 py-1 rounded-full">
                    Before
                  </span>
                </div>
                <div className="absolute top-3 right-3 z-10">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#D6B787] bg-[rgba(36,23,16,0.7)] backdrop-blur-sm px-2.5 py-1 rounded-full">
                    After
                  </span>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-heading text-lg text-[#F6F0EA]">{item.title}</h3>
                  <Badge variant="outline" className="border-[rgba(214,183,135,0.25)] text-[#D6B787] text-[10px]">
                    {item.category}
                  </Badge>
                </div>
                <p className="text-[#8E7C6E] text-sm font-body">{item.description}</p>
              </div>
            </motion.div>
          ))}

          <motion.div
            variants={cardVariants}
            className="rounded-2xl flex flex-col items-center justify-center text-center p-8 min-h-[520px] bg-[#2B1C15] border border-[rgba(214,183,135,0.15)] hover:border-[rgba(214,183,135,0.3)] transition-colors duration-500"
          >
            <div className="w-16 h-16 rounded-full bg-[rgba(214,183,135,0.1)] flex items-center justify-center mb-5">
              <ArrowRight className="w-6 h-6 text-[#D6B787]" />
            </div>
            <h3 className="font-heading text-xl text-[#F6F0EA] mb-2">See More Results</h3>
            <p className="text-[#8E7C6E] text-sm mb-6 max-w-[220px] font-body">
              Explore our complete gallery of patient transformations
            </p>
            <Link href="/before-after">
              <Button variant="primary" size="lg">
                View Gallery <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <div className="ba-stats-row grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[
            { value: "5,000+", label: "Happy Patients" },
            { value: "15+", label: "Years Experience" },
            { value: "50+", label: "Treatments" },
            { value: "98%", label: "Satisfaction Rate" },
          ].map((stat, i) => (
            <div key={i} className="ba-stat text-center">
              <p className="font-heading text-3xl md:text-4xl text-[#D6B787] mb-1">{stat.value}</p>
              <p className="text-[#8E7C6E] text-sm uppercase tracking-[0.15em] font-body">{stat.label}</p>
            </div>
          ))}
        </div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Link href="/before-after">
            <Button variant="outline">
              View All Results <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
