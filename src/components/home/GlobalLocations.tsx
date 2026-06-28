"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, ArrowRight, Globe } from "lucide-react";

const countries = [
  { code: "IN", name: "India", color: "#D6B787" },
  { code: "HK", name: "Hong Kong", color: "#C5A067" },
  { code: "TH", name: "Thailand", color: "#B78B5E" },
  { code: "AE", name: "UAE", color: "#D6B787" },
  { code: "BH", name: "Bahrain", color: "#C5A067" },
  { code: "PH", name: "Philippines", color: "#B78B5E" },
];

const locations = [
  { name: "Koramangala HQ", city: "Bengaluru", country: "India", phone: "+91 9148717036" },
  { name: "Jayanagar", city: "Bengaluru", country: "India", phone: "+91 7996191116" },
  { name: "Frazer Town", city: "Bengaluru", country: "India", phone: "+91 9535946916" },
  { name: "Banashankari", city: "Bengaluru", country: "India", phone: "+91 9148717036" },
  { name: "Indiranagar", city: "Bengaluru", country: "India", phone: "+91 7996191116" },
  { name: "Mangalore", city: "Mangalore", country: "India", phone: "+91 9535946916" },
  { name: "Chennai", city: "Chennai", country: "India", phone: "+91 9148717036" },
  { name: "Mumbai", city: "Mumbai", country: "India", phone: "+91 7996191116" },
  { name: "Visakhapatnam", city: "Visakhapatnam", country: "India", phone: "+91 9535946916" },
  { name: "Central", city: "Hong Kong", country: "Hong Kong", phone: "+852 44608658" },
  { name: "Bangkok", city: "Bangkok", country: "Thailand", phone: "+852 44608658" },
  { name: "Manila", city: "Manila", country: "Philippines", phone: "+63 9661688381" },
];

export function GlobalLocations() {
  return (
    <section className="section-padding bg-[#241710]">
      <div className="container-custom">
        <SectionHeading
          title="Global Locations"
          subtitle="Worldwide Presence"
          description="Premium aesthetic care across India and international destinations"
        />

        <div className="mt-16">
          <div className="relative overflow-hidden rounded-2xl border border-[rgba(214,183,135,0.12)]">
            <div className="aspect-[21/9] bg-gradient-to-br from-[#2B1C15] via-[#3A281E] to-[#241710] relative flex items-center justify-center">
              <div className="absolute inset-0 opacity-[0.04]">
                <svg viewBox="0 0 1000 500" className="w-full h-full">
                  <circle cx="200" cy="150" r="80" fill="none" stroke="#D6B787" strokeWidth="0.5" />
                  <circle cx="500" cy="200" r="120" fill="none" stroke="#D6B787" strokeWidth="0.5" />
                  <circle cx="750" cy="180" r="90" fill="none" stroke="#D6B787" strokeWidth="0.5" />
                  <circle cx="350" cy="300" r="70" fill="none" stroke="#D6B787" strokeWidth="0.5" />
                  <circle cx="650" cy="280" r="100" fill="none" stroke="#D6B787" strokeWidth="0.5" />
                  <line x1="200" y1="150" x2="500" y2="200" stroke="#D6B787" strokeWidth="0.3" opacity="0.3" />
                  <line x1="500" y1="200" x2="750" y2="180" stroke="#D6B787" strokeWidth="0.3" opacity="0.3" />
                  <line x1="200" y1="150" x2="350" y2="300" stroke="#D6B787" strokeWidth="0.3" opacity="0.3" />
                  <line x1="750" y1="180" x2="650" y2="280" stroke="#D6B787" strokeWidth="0.3" opacity="0.3" />
                </svg>
              </div>

              <div className="relative z-10 flex flex-wrap gap-6 justify-center px-8">
                {countries.map((country, i) => (
                  <motion.div
                    key={country.code}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, type: "spring" }}
                    className="flex flex-col items-center"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                      className="w-16 h-16 rounded-full bg-[rgba(214,183,135,0.08)] border border-[rgba(214,183,135,0.2)] flex items-center justify-center mb-3"
                    >
                      <Globe className="w-6 h-6" style={{ color: country.color }} />
                    </motion.div>
                    <span className="text-xs font-button uppercase tracking-[0.15em] text-[#8E7C6E]">{country.code}</span>
                    <span className="text-[10px] text-[#D6B787] font-heading italic">{country.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {locations.map((loc, i) => (
              <motion.div
                key={`${loc.name}-${loc.city}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.03 }}
                className="group"
              >
                <div className="glassmorphism rounded-2xl p-5 hover:border-[rgba(214,183,135,0.25)] transition-all duration-500 h-full">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-heading text-lg text-[#F6F0EA] group-hover:text-[#D6B787] transition-colors">{loc.name}</h3>
                      <p className="text-sm text-[#8E7C6E] font-body flex items-center gap-1 mt-0.5">
                        <MapPin className="w-3 h-3" /> {loc.city}, {loc.country}
                      </p>
                    </div>
                    <span className="text-[10px] font-button uppercase tracking-[0.1em] text-[#C5A067] border border-[rgba(197,160,103,0.2)] px-2 py-1 rounded-full">
                      {loc.country === "India" ? "IN" : loc.country === "Hong Kong" ? "HK" : loc.country === "Thailand" ? "TH" : "PH"}
                    </span>
                  </div>
                  <a href={`tel:${loc.phone}`} className="text-sm text-[#D6B787] hover:text-[#C5A067] transition-colors font-body flex items-center gap-2 mt-3">
                    <Phone className="w-3.5 h-3.5" /> {loc.phone}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Button variant="outline" asChild>
            <Link href="/locations">View All Locations <ArrowRight className="w-4 h-4" /></Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
