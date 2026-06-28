"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { images } from "@/lib/images";

const testimonials = [
  {
    quote: "KO CLINICS transformed what could have been an overwhelming medical journey into an absolute pleasure. From the consultation to recovery, every detail was handled with precision and care. I felt like the only patient in the world.",
    author: images.testimonials[0],
    name: "Alexander Petrov",
    location: "Moscow → Dubai",
    rating: 5,
  },
  {
    quote: "The level of discretion and professionalism exceeded every expectation. My personal concierge anticipated needs I didn't even know I had. This is how healthcare should be — seamless, private, and truly world-class.",
    author: images.testimonials[1],
    name: "Sarah Al Maktoum",
    location: "Abu Dhabi → London",
    rating: 5,
  },
  {
    quote: "I've experienced medical care on four continents, and nothing compares to the KO CLINICS standard. The coordination between my London specialist and the Singapore facility was flawless. Absolutely worth every moment.",
    author: images.testimonials[2],
    name: "James Mitchell",
    location: "New York → Singapore",
    rating: 5,
  },
  {
    quote: "As someone who values privacy above all, KO CLINICS provided a level of confidentiality I didn't think possible. The entire journey was handled with elegance, from the virtual consultation to the final follow-up.",
    author: images.testimonials[3],
    name: "Priya Sharma",
    location: "Mumbai → Paris",
    rating: 5,
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  return (
    <section className="section-luxury bg-ivory">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="font-button text-[10px] uppercase tracking-[0.3em] text-champagne-dark mb-4 block">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light text-deep-black leading-[1.1] text-balance">
            What Our Patients
            <br />
            <span className="font-medium">Say About Us</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <Quote className="w-10 h-10 text-champagne/30 mx-auto mb-6" />
              <blockquote className="font-heading text-xl sm:text-2xl md:text-3xl font-light text-deep-black leading-relaxed mb-8 text-balance">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>
              <div className="flex items-center justify-center gap-1 mb-4">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-champagne text-champagne" />
                ))}
              </div>
              <div className="flex items-center justify-center gap-3">
                <div
                  className="w-10 h-10 rounded-full bg-cover bg-center"
                  style={{ backgroundImage: `url(${testimonials[current].author})` }}
                />
                <div className="text-left">
                  <div className="font-heading text-base font-medium text-deep-black">{testimonials[current].name}</div>
                  <div className="font-body text-xs text-mid-gray">{testimonials[current].location}</div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-10">
            <button onClick={prev} className="w-10 h-10 rounded-full border border-champagne/20 flex items-center justify-center text-champagne-dark hover:bg-champagne/10 transition-all">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current ? "bg-champagne-dark w-6" : "bg-champagne/30"
                  }`}
                />
              ))}
            </div>
            <button onClick={next} className="w-10 h-10 rounded-full border border-champagne/20 flex items-center justify-center text-champagne-dark hover:bg-champagne/10 transition-all">
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
