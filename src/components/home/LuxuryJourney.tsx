"use client";

import { motion } from "framer-motion";
import { Search, MessageCircle, Plane, Building, Heart, Star } from "lucide-react";

const steps = [
  { icon: Search, title: "Choose Your Destination", description: "Browse our curated cities and discover world-class clinics." },
  { icon: MessageCircle, title: "Virtual Consultation", description: "Meet your specialist remotely. Discuss your needs privately." },
  { icon: Plane, title: "Arrive & Settle", description: "We handle every detail — from flights to five-star accommodation." },
  { icon: Building, title: "Receive Treatment", description: "Experience care at the finest clinics with your personal concierge." },
  { icon: Heart, title: "Recover in Luxury", description: "Post-treatment wellness in premium surroundings." },
  { icon: Star, title: "Continued Support", description: "Remote follow-ups and lifelong access to your care team." },
];

export function LuxuryJourney() {
  return (
    <section className="section-luxury bg-deep-black relative overflow-hidden">
      <div className="absolute inset-0 noise-overlay opacity-30" />
      <div className="container-luxury relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="font-button text-[10px] uppercase tracking-[0.3em] text-champagne mb-4 block">
            Your Journey
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-ivory leading-[1.1] text-balance">
            The Luxury Patient
            <br />
            <span className="font-medium champagne-gradient">Journey</span>
          </h2>
          <p className="font-body text-platinum-dark text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed">
            From first inquiry to lifelong wellness — every step is curated, private, and exceptional.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative group"
              >
                <div className="p-6 sm:p-8 bg-charcoal/50 luxury-border card-luxury hover:bg-charcoal/80 transition-all duration-500">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="font-heading text-3xl font-light text-champagne/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-champagne/10 flex items-center justify-center group-hover:bg-champagne/20 transition-all duration-500">
                      <Icon className="w-4 h-4 text-champagne" />
                    </div>
                  </div>
                  <h3 className="font-heading text-lg sm:text-xl font-medium text-ivory mb-2">
                    {step.title}
                  </h3>
                  <p className="font-body text-sm text-platinum-dark leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Connector line (hidden on mobile) */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[1px] bg-champagne/20" />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
