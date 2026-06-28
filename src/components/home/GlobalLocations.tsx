"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { MapPin, ArrowRight } from "lucide-react";

const locations = [
  {
    country: "India",
    cities: [
      { name: "Koramangala (HQ)", address: "1st floor, 52/A near Sony World Signal, 4th Block, Koramangala, Bengaluru - 560034" },
      { name: "Jayanagar", address: "No.37, First Floor, Ashoka Pillar Road, 2nd Block, Jayanagar" },
      { name: "Indiranagar", address: "Indiranagar, Bengaluru" },
      { name: "Mumbai", address: "Mumbai" },
    ],
  },
  {
    country: "International",
    cities: [
      { name: "Hong Kong", address: "55-65 Lung Mun Rd, Tuen Mun, Hong Kong" },
      { name: "Thailand", address: "JLK Tower, 129 Sukhumvit Road, Bangkok" },
      { name: "UAE", address: "United Arab Emirates" },
      { name: "Philippines", address: "Philippines" },
    ],
  },
];

export function GlobalLocations() {
  return (
    <section className="section-padding bg-[#3C281D]">
      <div className="container-custom">
        <SectionHeading title="Our Global Network" subtitle="Locations" description="Spanning across continents, bringing premium aesthetics to the world" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
          {locations.map((region, regionIndex) => (
            <motion.div key={region.country} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: regionIndex * 0.2 }}>
              <h3 className="font-heading text-2xl text-[#D5B98A] mb-6">{region.country}</h3>
              <div className="space-y-4">
                {region.cities.map((city) => (
                  <GlassCard key={city.name} hover={false}>
                    <div className="flex items-start gap-4">
                      <MapPin className="w-5 h-5 text-[#C8A96B] mt-1 shrink-0" />
                      <div>
                        <h4 className="font-heading text-lg text-[#F5F0EA]">{city.name}</h4>
                        <p className="text-[#7D6B5A] text-sm font-body mt-1">{city.address}</p>
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mt-12">
          <Button variant="primary" asChild><Link href="/locations">View All Locations <ArrowRight className="w-4 h-4" /></Link></Button>
        </motion.div>
      </div>
    </section>
  );
}
