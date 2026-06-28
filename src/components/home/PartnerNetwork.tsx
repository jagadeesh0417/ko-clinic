"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const partners = [
  { name: "Dubai Medical City", location: "Dubai", specialty: "Multi-Specialty", tier: "Premier" },
  { name: "Harley Street Clinic", location: "London", specialty: "Cardiology & Oncology", tier: "Premier" },
  { name: "Raffles Hospital", location: "Singapore", specialty: "Multi-Specialty", tier: "Premier" },
  { name: "Clinique des Champs-Élysées", location: "Paris", specialty: "Aesthetic Medicine", tier: "Signature" },
  { name: "Presbyterian Hospital", location: "New York", specialty: "Surgical Excellence", tier: "Premier" },
  { name: "HK Sanatorium", location: "Hong Kong", specialty: "Comprehensive Care", tier: "Premier" },
];

export function PartnerNetwork() {
  return (
    <section className="section-luxury bg-warm-beige">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="font-button text-[10px] uppercase tracking-[0.3em] text-champagne-dark mb-4 block">
            Our Network
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-deep-black leading-[1.1] text-balance">
            Curated Partner
            <br />
            <span className="font-medium">Clinics</span>
          </h2>
          <p className="font-body text-mid-gray text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed">
            Every institution in our network is personally vetted — evaluated for clinical excellence, patient experience, and luxury standards.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group p-6 sm:p-8 bg-ivory luxury-border card-luxury hover:shadow-lg transition-all duration-500"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-[10px] font-button uppercase tracking-[0.15em] text-champagne-dark bg-champagne/10 px-3 py-1 rounded-full">
                    {partner.tier}
                  </span>
                </div>
                <span className="font-body text-xs text-mid-gray">{partner.location}</span>
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-medium text-deep-black mb-1">
                {partner.name}
              </h3>
              <p className="font-body text-sm text-mid-gray mb-4">{partner.specialty}</p>
              <div className="flex items-center gap-1 text-champagne-dark text-[10px] font-button uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>Learn More</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-center mt-12"
        >
          <Link
            href="/partner-portal"
            className="group inline-flex items-center gap-2 text-xs font-button uppercase tracking-[0.2em] text-deep-black hover:text-champagne-dark transition-colors"
          >
            <span>Partner Portal for Clinics</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
