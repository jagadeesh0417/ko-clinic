"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { images } from "@/lib/images";

const stories = images.successStories;

export function SuccessStories() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? stories.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === stories.length - 1 ? 0 : c + 1));

  return (
    <section className="section-luxury bg-deep-black relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay opacity-20" />
      <div className="container-luxury relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="font-button text-[10px] uppercase tracking-[0.3em] text-champagne mb-4 block">
            Real Results
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-ivory leading-[1.1] text-balance">
            Success
            <br />
            <span className="font-medium champagne-gradient">Stories</span>
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10"
              >
                {/* Before */}
                <div className="relative">
                  <div className="absolute top-3 left-3 z-10 bg-deep-black/80 text-ivory text-[10px] font-button uppercase tracking-[0.15em] px-3 py-1">
                    Before
                  </div>
                  <div className="h-[350px] sm:h-[420px] rounded-2xl overflow-hidden luxury-border">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${stories[current].before})` }}
                    />
                  </div>
                </div>

                {/* After */}
                <div className="relative">
                  <div className="absolute top-3 left-3 z-10 bg-champagne text-deep-black text-[10px] font-button uppercase tracking-[0.15em] px-3 py-1">
                    After
                  </div>
                  <div className="h-[350px] sm:h-[420px] rounded-2xl overflow-hidden luxury-border">
                    <div
                      className="w-full h-full bg-cover bg-center"
                      style={{ backgroundImage: `url(${stories[current].after})` }}
                    />
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button onClick={prev} className="w-10 h-10 rounded-full border border-champagne/30 flex items-center justify-center text-champagne hover:bg-champagne/10 transition-all">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="flex gap-2">
                {stories.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === current ? "bg-champagne w-6" : "bg-champagne/30"
                    }`}
                  />
                ))}
              </div>
              <button onClick={next} className="w-10 h-10 rounded-full border border-champagne/30 flex items-center justify-center text-champagne hover:bg-champagne/10 transition-all">
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <p className="text-center text-platinum-dark text-sm mt-4">
              {stories[current].procedure} &middot; {stories[current].destination}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
