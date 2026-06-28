"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

import "swiper/css";
import "swiper/css/effect-coverflow";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Bengaluru",
    content: "The thread lift was incredible. I look 10 years younger. Dr. Vikas and his team made me feel completely at ease throughout the procedure.",
    rating: 5,
    treatment: "Thread Lift",
  },
  {
    name: "Rahul Mehta",
    location: "Mumbai",
    content: "Dr Vikas transformed my confidence completely. The hair transplant results are beyond what I imagined. Truly world-class care.",
    rating: 5,
    treatment: "Hair Transplant",
  },
  {
    name: "Ananya Kapoor",
    location: "Dubai",
    content: "Professional, gentle and highly experienced. The PRP therapy sessions have made a remarkable difference to my skin health.",
    rating: 5,
    treatment: "PRP Therapy",
  },
  {
    name: "Vikram Reddy",
    location: "Hong Kong",
    content: "I travelled from Hong Kong specifically for this clinic. The international standards of care and the results were absolutely worth it.",
    rating: 5,
    treatment: "Exosome Therapy",
  },
  {
    name: "Neha Gupta",
    location: "Delhi",
    content: "The Morpheus MNRF completely transformed my skin texture. Minimal downtime, maximum results. Highly recommend.",
    rating: 5,
    treatment: "Morpheus MNRF",
  },
  {
    name: "Arjun Nair",
    location: "Kochi",
    content: "Outstanding international standards of medical care right here in India. The consultation was thorough and results exceeded expectations.",
    rating: 5,
    treatment: "Botox",
  },
];

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        headerRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-[#241710] overflow-hidden">
      <div className="container-custom">
        <div ref={headerRef}>
          <SectionHeading title="Patient Stories" subtitle="Testimonials" description="Hear from our patients about their transformation journey" />
        </div>

        <div className="mt-12 -mx-4 md:-mx-8">
          <Swiper
            modules={[Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor
            centeredSlides
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 120,
              modifier: 2,
              slideShadows: false,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            loop
            speed={800}
            className="pb-8"
            breakpoints={{
              320: { slidesPerView: 1.2, spaceBetween: 16 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 32 },
            }}
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i} className="!h-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="h-full p-6 md:p-8 rounded-2xl bg-[rgba(58,40,30,0.5)] border border-[rgba(214,183,135,0.06)] hover:border-[rgba(214,183,135,0.15)] transition-all duration-500 flex flex-col group"
                >
                  <div className="text-[#D6B787] text-5xl leading-none mb-4 font-serif opacity-60">&ldquo;</div>
                  <p className="text-[#8E7C6E] text-sm leading-relaxed mb-6 font-body flex-1">
                    {t.content}
                  </p>
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star
                        key={s}
                        className={`w-3.5 h-3.5 ${
                          s < t.rating
                            ? "fill-[#C5A067] text-[#C5A067]"
                            : "fill-none text-[rgba(214,183,135,0.2)]"
                        }`}
                      />
                    ))}
                  </div>
                  <div className="space-y-0.5">
                    <p className="text-[#F6F0EA] font-heading text-base">{t.name}</p>
                    <p className="text-[#8E7C6E] text-xs font-body">{t.location}</p>
                  </div>
                  <div className="mt-3">
                    <Badge variant="default" className="text-[10px]">{t.treatment}</Badge>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
