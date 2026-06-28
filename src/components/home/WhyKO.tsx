"use client";

import { motion } from "framer-motion";
import { Shield, Sparkles, Globe, UserCheck, Award, HeartHandshake } from "lucide-react";

const reasons = [
  { icon: Shield, title: "Rigorous Vetting", description: "Every clinic meets our exacting standards for quality, safety, and luxury." },
  { icon: Sparkles, title: "Exclusive Access", description: "Priority appointments at the world's most sought-after medical institutions." },
  { icon: Globe, title: "Global Network", description: "9 premier destinations across 3 continents, with a single point of contact." },
  { icon: UserCheck, title: "Personal Concierge", description: "A dedicated professional managing every aspect of your journey." },
  { icon: Award, title: "World-Class Specialists", description: "Access to leading physicians, surgeons, and wellness experts." },
  { icon: HeartHandshake, title: "Complete Privacy", description: "Discreet, confidential service for high-profile and discerning patients." },
];

export function WhyKO() {
  return (
    <section className="section-luxury bg-ivory">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-button text-[10px] uppercase tracking-[0.3em] text-champagne-dark mb-4 block">
              Why KO CLINICS
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light text-deep-black leading-[1.1] mb-6 text-balance">
              Redefining the Standard of
              <br />
              <span className="font-medium">Healthcare Excellence</span>
            </h2>
            <p className="font-body text-mid-gray text-sm sm:text-base leading-relaxed mb-8">
              We believe that world-class healthcare should be accompanied by world-class service. 
              KO CLINICS was founded to bridge the gap between medical excellence and uncompromising luxury.
            </p>
            <div className="divider-luxury mb-8" />
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="font-heading text-2xl sm:text-3xl font-bold text-deep-black">9</div>
                <div className="font-body text-xs text-mid-gray uppercase tracking-[0.1em]">Destinations</div>
              </div>
              <div>
                <div className="font-heading text-2xl sm:text-3xl font-bold text-deep-black">50+</div>
                <div className="font-body text-xs text-mid-gray uppercase tracking-[0.1em]">Partner Clinics</div>
              </div>
              <div>
                <div className="font-heading text-2xl sm:text-3xl font-bold text-deep-black">15+</div>
                <div className="font-body text-xs text-mid-gray uppercase tracking-[0.1em]">Specialties</div>
              </div>
              <div>
                <div className="font-heading text-2xl sm:text-3xl font-bold text-deep-black">99%</div>
                <div className="font-body text-xs text-mid-gray uppercase tracking-[0.1em]">Satisfaction</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Grid of reasons */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {reasons.map((reason) => {
              const Icon = reason.icon;
              return (
                <div
                  key={reason.title}
                  className="p-5 luxury-border card-luxury bg-warm-beige hover:bg-ivory transition-all duration-500"
                >
                  <Icon className="w-4 h-4 text-champagne-dark mb-3" />
                  <h3 className="font-heading text-base font-medium text-deep-black mb-1">{reason.title}</h3>
                  <p className="font-body text-xs text-mid-gray leading-relaxed">{reason.description}</p>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
