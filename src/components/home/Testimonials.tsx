"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma", location: "Bengaluru",
    content: "The thread lift was incredible. I look 10 years younger. Dr. Vikas and his team made me feel completely at ease throughout the procedure.",
    rating: 5, treatment: "Thread Lift",
  },
  {
    name: "Rahul Mehta", location: "Mumbai",
    content: "Dr Vikas transformed my confidence completely. The hair transplant results are beyond what I imagined. Truly world-class care.",
    rating: 5, treatment: "Hair Transplant",
  },
  {
    name: "Ananya Kapoor", location: "Dubai",
    content: "Professional, gentle and highly experienced. The PRP therapy sessions have made a remarkable difference to my skin health.",
    rating: 5, treatment: "PRP Therapy",
  },
  {
    name: "Vikram Reddy", location: "Hong Kong",
    content: "I travelled from Hong Kong specifically for this clinic. The international standards of care and the results were absolutely worth it.",
    rating: 5, treatment: "Exosome Therapy",
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-[#3C281D]">
      <div className="container-custom">
        <SectionHeading
          title="What Our Patients Say"
          subtitle="Testimonials"
          description="Real stories from our global clientele"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
          {testimonials.map((testimonial, i) => (
            <GlassCard key={i} delay={i * 0.1}>
              <Quote className="w-8 h-8 text-[#D5B98A] mb-4 opacity-40" />
              <p className="text-[#7D6B5A] text-sm leading-relaxed mb-6 font-body italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#C8A96B] text-[#C8A96B]" />
                ))}
              </div>
              <div>
                <p className="text-[#F5F0EA] font-heading text-lg">{testimonial.name}</p>
                <p className="text-[#7D6B5A] text-xs font-body">{testimonial.location} · {testimonial.treatment}</p>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
