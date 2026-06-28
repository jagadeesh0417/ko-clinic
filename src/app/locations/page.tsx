"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { MapPin, Phone } from "lucide-react";
import Link from "next/link";

const locations = [
  {
    country: "India",
    cities: [
      { name: "Koramangala (HQ)", address: "1st floor, 52/A near Sony World Signal, 4th Block, Koramangala, Bengaluru - 560034", phone: "+91 9148717036" },
      { name: "Jayanagar", address: "No.37, First Floor, Ashoka Pillar Road, 2nd Block, Jayanagar" },
      { name: "Indiranagar", address: "Indiranagar, Bengaluru" },
      { name: "Banashankari", address: "Banashankari, Bengaluru" },
      { name: "Mangalore", address: "Mangalore" },
      { name: "Chennai", address: "Chennai" },
      { name: "Mumbai", address: "Mumbai" },
    ],
  },
  {
    country: "International",
    cities: [
      { name: "Hong Kong", address: "55-65 Lung Mun Rd, Tuen Mun, Hong Kong", phone: "+852 44608658" },
      { name: "Thailand", address: "JLK Tower, 129 Sukhumvit Road, Bangkok" },
      { name: "UAE", address: "United Arab Emirates" },
      { name: "Philippines", address: "Philippines", phone: "+63 9661688381" },
    ],
  },
];

export default function LocationsPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#2A1A12]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(213,185,138,0.06),transparent_70%)]" />
        <div className="container-custom px-6 relative z-10">
          <SectionHeading title="Our Global Network" subtitle="Locations" description="Spanning across continents, bringing premium aesthetics to the world" />
        </div>
      </section>

      <section className="section-padding bg-[#3C281D] pt-0">
        <div className="container-custom px-6">
          {locations.map((region, regionIndex) => (
            <div key={region.country} className="mb-16 last:mb-0">
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="font-heading text-3xl md:text-4xl text-[#D5B98A] mb-8">{region.country}</motion.h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {region.cities.map((city, i) => (
                  <motion.div key={city.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                    className="p-5 rounded-2xl border border-[rgba(213,185,138,0.1)] hover:border-[rgba(213,185,138,0.25)] bg-[#22160F] transition-all duration-500">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-[#C8A96B] mt-0.5 shrink-0" />
                      <div>
                        <h3 className="font-heading text-lg text-[#F5F0EA] mb-1">{city.name}</h3>
                        <p className="text-[#7D6B5A] text-sm font-body">{city.address}</p>
                        {city.phone && (
                          <a href={`tel:${city.phone}`} className="flex items-center gap-2 text-[#D5B98A] text-xs mt-2 hover:text-[#C8A96B] transition-colors">
                            <Phone className="w-3 h-3" /> {city.phone}
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
