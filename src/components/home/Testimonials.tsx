"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Bengaluru",
    content:
      "The thread lift was incredible. I look 10 years younger. Dr. Vikas and his team made me feel completely at ease throughout the procedure.",
    rating: 5,
    treatment: "Thread Lift",
  },
  {
    name: "Rahul Mehta",
    location: "Mumbai",
    content:
      "Dr Vikas transformed my confidence completely. The hair transplant results are beyond what I imagined. Truly world-class care.",
    rating: 5,
    treatment: "Hair Transplant",
  },
  {
    name: "Ananya Kapoor",
    location: "Dubai",
    content:
      "Professional, gentle and highly experienced. The PRP therapy sessions have made a remarkable difference to my skin health.",
    rating: 5,
    treatment: "PRP Therapy",
  },
  {
    name: "Vikram Reddy",
    location: "Hong Kong",
    content:
      "I travelled from Hong Kong specifically for this clinic. The international standards of care and the results were absolutely worth it.",
    rating: 5,
    treatment: "Exosome Therapy",
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-[#241710]">
      <div className="container-custom">
        <SectionHeading
          title="Patient Stories"
          subtitle="Testimonials"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
            >
              <GlassCard className="flex flex-col h-full border border-transparent hover:border-[rgba(214,183,135,0.25)]">
                <div className="text-[#D6B787] text-6xl leading-none mb-4 font-serif">
                  &ldquo;
                </div>
                <p className="text-[#8E7C6E] text-sm leading-relaxed mb-6 font-body flex-1">
                  {testimonial.content}
                </p>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      className={`w-4 h-4 ${
                        s < testimonial.rating
                          ? "fill-[#C5A067] text-[#C5A067]"
                          : "fill-none text-[rgba(214,183,135,0.25)]"
                      }`}
                    />
                  ))}
                </div>
                <div className="space-y-1">
                  <p className="text-[#F6F0EA] font-heading text-lg">
                    {testimonial.name}
                  </p>
                  <p className="text-[#8E7C6E] text-xs font-body">
                    {testimonial.location}
                  </p>
                </div>
                <div className="mt-3">
                  <Badge variant="default">{testimonial.treatment}</Badge>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
