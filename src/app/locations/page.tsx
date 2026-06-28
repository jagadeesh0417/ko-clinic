"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { GlassCard } from "@/components/ui/glass-card";
import { MapPin, Phone, Mail, Navigation, Globe, ArrowRight } from "lucide-react";

interface Location {
  name: string;
  address: string;
  phone: string;
  email: string;
  directions: string;
}

interface CountrySection {
  country: string;
  code: string;
  flag: string;
  color: string;
  locations: Location[];
}

const sections: CountrySection[] = [
  {
    country: "India",
    code: "IN",
    flag: "🇮🇳",
    color: "#D6B787",
    locations: [
      { name: "Koramangala HQ", address: "1st Floor, 52/A, Near Sony World Signal, 4th Block, Koramangala, Bengaluru, Karnataka 560034", phone: "+91 9148717036", email: "koramangala@koclinic.com", directions: "https://maps.google.com/?q=Koramangala+Bengaluru" },
      { name: "Jayanagar", address: "No.37, First Floor, Ashoka Pillar Road, 2nd Block, Jayanagar, Bengaluru, Karnataka 560011", phone: "+91 7996191116", email: "jayanagar@koclinic.com", directions: "https://maps.google.com/?q=Jayanagar+Bengaluru" },
      { name: "Frazer Town", address: "Frazer Town, Bengaluru, Karnataka 560005", phone: "+91 9535946916", email: "frazertown@koclinic.com", directions: "https://maps.google.com/?q=Frazer+Town+Bengaluru" },
      { name: "Banashankari", address: "Banashankari, Bengaluru, Karnataka 560050", phone: "+91 9148717036", email: "banashankari@koclinic.com", directions: "https://maps.google.com/?q=Banashankari+Bengaluru" },
      { name: "Indiranagar", address: "Indiranagar, Bengaluru, Karnataka 560038", phone: "+91 7996191116", email: "indiranagar@koclinic.com", directions: "https://maps.google.com/?q=Indiranagar+Bengaluru" },
      { name: "OMBR Layout", address: "OMBR Layout, Bengaluru, Karnataka 560043", phone: "+91 9535946916", email: "ombrlayout@koclinic.com", directions: "https://maps.google.com/?q=OMBR+Layout+Bengaluru" },
      { name: "Mangalore", address: "Mangalore, Karnataka 575001", phone: "+91 9535946916", email: "mangalore@koclinic.com", directions: "https://maps.google.com/?q=Mangalore" },
      { name: "Chennai", address: "Chennai, Tamil Nadu 600001", phone: "+91 9148717036", email: "chennai@koclinic.com", directions: "https://maps.google.com/?q=Chennai" },
      { name: "Visakhapatnam", address: "Visakhapatnam, Andhra Pradesh 530001", phone: "+91 9535946916", email: "visakhapatnam@koclinic.com", directions: "https://maps.google.com/?q=Visakhapatnam" },
      { name: "Mumbai", address: "Mumbai, Maharashtra 400001", phone: "+91 7996191116", email: "mumbai@koclinic.com", directions: "https://maps.google.com/?q=Mumbai" },
    ],
  },
  {
    country: "Hong Kong",
    code: "HK",
    flag: "🇭🇰",
    color: "#C5A067",
    locations: [
      { name: "Central", address: "Central, Hong Kong Island, Hong Kong", phone: "+852 44608658", email: "hongkong@koclinic.com", directions: "https://maps.google.com/?q=Central+Hong+Kong" },
    ],
  },
  {
    country: "Thailand",
    code: "TH",
    flag: "🇹🇭",
    color: "#B78B5E",
    locations: [
      { name: "Bangkok", address: "Sukhumvit Road, Bangkok, Thailand", phone: "+852 44608658", email: "bangkok@koclinic.com", directions: "https://maps.google.com/?q=Bangkok+Thailand" },
    ],
  },
  {
    country: "UAE",
    code: "AE",
    flag: "🇦🇪",
    color: "#D6B787",
    locations: [
      { name: "Dubai", address: "Dubai, United Arab Emirates", phone: "+971 800 12345", email: "dubai@koclinic.com", directions: "https://maps.google.com/?q=Dubai+UAE" },
    ],
  },
  {
    country: "Bahrain",
    code: "BH",
    flag: "🇧🇭",
    color: "#C5A067",
    locations: [
      { name: "Manama", address: "Manama, Bahrain", phone: "+973 17123456", email: "bahrain@koclinic.com", directions: "https://maps.google.com/?q=Manama+Bahrain" },
    ],
  },
  {
    country: "Philippines",
    code: "PH",
    flag: "🇵🇭",
    color: "#B78B5E",
    locations: [
      { name: "Manila", address: "Makati, Manila, Philippines", phone: "+63 9661688381", email: "manila@koclinic.com", directions: "https://maps.google.com/?q=Manila+Philippines" },
    ],
  },
];

const cities = sections.flatMap((s) => s.locations.map((l) => ({ ...l, country: s.country, code: s.code, color: s.color })));

const mapNodes = [
  { cx: 780, cy: 180, label: "HK", color: "#C5A067" },
  { cx: 710, cy: 210, label: "TH", color: "#B78B5E" },
  { cx: 730, cy: 245, label: "PH", color: "#B78B5E" },
  { cx: 740, cy: 140, label: "BH", color: "#C5A067" },
  { cx: 695, cy: 120, label: "AE", color: "#D6B787" },
  { cx: 530, cy: 200, label: "IN", color: "#D6B787" },
];

const connections = [
  { x1: 530, y1: 200, x2: 780, y2: 180 },
  { x1: 530, y1: 200, x2: 710, y2: 210 },
  { x1: 530, y1: 200, x2: 730, y2: 245 },
  { x1: 530, y1: 200, x2: 740, y2: 140 },
  { x1: 530, y1: 200, x2: 695, y2: 120 },
  { x1: 695, y1: 120, x2: 740, y2: 140 },
  { x1: 780, y1: 180, x2: 710, y2: 210 },
  { x1: 710, y1: 210, x2: 730, y2: 245 },
];

const globeCircles = [
  { cx: 460, cy: 200, r: 340 },
  { cx: 460, cy: 200, r: 270 },
  { cx: 460, cy: 200, r: 200 },
  { cx: 460, cy: 200, r: 130 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export default function LocationsPage() {
  return (
    <main className="relative min-h-screen bg-[#241710] overflow-hidden">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 pointer-events-none" />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 text-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(214,183,135,0.06),transparent_70%)]" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10"
        >
          <span className="font-button text-xs uppercase tracking-[5px] text-[#D6B787] mb-4 block">Global Network</span>
          <h1 className="text-5xl md:text-7xl font-light text-[#F6F0EA] tracking-wide mb-4">
            Our <span className="font-medium text-[#D6B787]">Locations</span>
          </h1>
          <p className="text-lg md:text-xl text-[#E8DDD1]/70 max-w-2xl mx-auto font-light">
            Premium aesthetic care across the globe
          </p>
        </motion.div>
      </section>

      {/* World Map */}
      <section className="px-4 pb-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
            className="relative overflow-hidden rounded-2xl border border-[rgba(214,183,135,0.12)] bg-gradient-to-br from-[#2B1C15] via-[#3A281E] to-[#241710]"
          >
            <div className="aspect-[21/9] relative flex items-center justify-center p-4">
              <svg viewBox="0 0 920 400" className="w-full h-full">
                {globeCircles.map((c, i) => (
                  <motion.circle
                    key={c.r}
                    cx={c.cx}
                    cy={c.cy}
                    r={c.r}
                    fill="none"
                    stroke="#D6B787"
                    strokeWidth={0.3 + (i === 0 ? 0.4 : 0)}
                    opacity={0.15 - i * 0.025}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.15 - i * 0.025 }}
                    transition={{ duration: 1.2, delay: 0.5 + i * 0.15, ease: "easeOut" }}
                  />
                ))}
                {connections.map((conn, i) => (
                  <motion.line
                    key={`conn-${i}`}
                    x1={conn.x1}
                    y1={conn.y1}
                    x2={conn.x2}
                    y2={conn.y2}
                    stroke="#D6B787"
                    strokeWidth={0.4}
                    opacity={0.2}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.2 }}
                    transition={{ duration: 1.5, delay: 1.2 + i * 0.1, ease: "easeInOut" }}
                  />
                ))}
                {mapNodes.map((node, i) => (
                  <motion.g key={node.label}>
                    <motion.circle
                      cx={node.cx}
                      cy={node.cy}
                      r={16}
                      fill="rgba(214,183,135,0.08)"
                      stroke={node.color}
                      strokeWidth={0.8}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.6, delay: 1.0 + i * 0.15, type: "spring" }}
                    />
                    <motion.circle
                      cx={node.cx}
                      cy={node.cy}
                      r={5}
                      fill={node.color}
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: [1, 1.3, 1], opacity: 1 }}
                      transition={{ duration: 2, delay: 1.5 + i * 0.15, repeat: Infinity, ease: "easeInOut" }}
                    />
                    <motion.text
                      x={node.cx}
                      y={node.cy + 30}
                      textAnchor="middle"
                      fill={node.color}
                      fontSize="10"
                      fontFamily="Montserrat, sans-serif"
                      fontWeight={600}
                      letterSpacing="2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 1.3 + i * 0.15 }}
                    >
                      {node.label}
                    </motion.text>
                  </motion.g>
                ))}
              </svg>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Country tabs */}
      <section className="px-4 pb-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {sections.map((s) => (
              <a
                key={s.code}
                href={`#${s.code}`}
                className="glassmorphism rounded-full px-5 py-2.5 flex items-center gap-2 text-sm text-[#E8DDD1]/80 hover:text-[#D6B787] hover:border-[rgba(214,183,135,0.3)] transition-all duration-300"
              >
                <span>{s.flag}</span>
                <span className="font-button text-xs uppercase tracking-[0.1em]">{s.country}</span>
                <span className="text-[10px] text-[#8E7C6E]">({s.locations.length})</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Country sections with location cards */}
      <section className="px-4 pb-20">
        <div className="max-w-7xl mx-auto space-y-24">
          {sections.map((section, si) => (
            <motion.div
              key={section.code}
              id={section.code}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
            >
              <motion.div variants={itemVariants} className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-full bg-[rgba(214,183,135,0.06)] border border-[rgba(214,183,135,0.12)] flex items-center justify-center text-2xl shrink-0">
                  {section.flag}
                </div>
                <div>
                  <h2 className="font-heading text-3xl md:text-4xl font-light text-[#F6F0EA]">
                    {section.country}
                  </h2>
                  <p className="text-sm text-[#8E7C6E] font-body">
                    {section.locations.length} location{section.locations.length > 1 ? "s" : ""}
                  </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {section.locations.map((loc, li) => (
                  <motion.div key={loc.name} variants={itemVariants}>
                    <GlassCard className="p-5 md:p-6 h-full flex flex-col" hover={false}>
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1 min-w-0">
                          <h3 className="font-heading text-lg text-[#F6F0EA] mb-1 truncate">{loc.name}</h3>
                          <div className="flex items-start gap-1.5 mt-2">
                            <MapPin className="w-3.5 h-3.5 text-[#D6B787] mt-0.5 shrink-0" />
                            <p className="text-sm text-[#8E7C6E] font-body leading-relaxed">{loc.address}</p>
                          </div>
                        </div>
                        <span className="text-[10px] font-button uppercase tracking-[0.1em] text-[#C5A067] border border-[rgba(197,160,103,0.2)] px-2 py-1 rounded-full shrink-0 ml-3">
                          {section.code}
                        </span>
                      </div>

                      <div className="space-y-2 mt-auto pt-4 border-t border-[rgba(214,183,135,0.06)]">
                        <a
                          href={`tel:${loc.phone}`}
                          className="flex items-center gap-2 text-sm text-[#E8DDD1]/70 hover:text-[#D6B787] transition-colors group"
                        >
                          <Phone className="w-3.5 h-3.5 text-[#D6B787]/60 group-hover:text-[#D6B787] transition-colors" />
                          <span>{loc.phone}</span>
                        </a>
                        <a
                          href={`mailto:${loc.email}`}
                          className="flex items-center gap-2 text-sm text-[#E8DDD1]/70 hover:text-[#D6B787] transition-colors group"
                        >
                          <Mail className="w-3.5 h-3.5 text-[#D6B787]/60 group-hover:text-[#D6B787] transition-colors" />
                          <span className="truncate">{loc.email}</span>
                        </a>
                        <a
                          href={loc.directions}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-button uppercase tracking-[0.1em] text-[#C5A067] hover:text-[#D6B787] transition-colors mt-1"
                        >
                          <Navigation className="w-3 h-3" /> Get Directions
                        </a>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-4xl mx-auto glassmorphism rounded-3xl p-10 md:p-16 text-center border-[rgba(214,183,135,0.12)]"
        >
          <Globe className="w-10 h-10 text-[#D6B787] mx-auto mb-6" />
          <h2 className="font-heading text-3xl md:text-5xl font-light text-[#F6F0EA] mb-4">
            Book at Your Nearest <span className="font-medium text-[#D6B787]">Clinic</span>
          </h2>
          <p className="text-[#E8DDD1]/60 max-w-lg mx-auto mb-8 font-body leading-relaxed">
            Find the KO CLINIC location closest to you and schedule a consultation with our expert team today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" asChild>
              <Link href="/contact">
                Book a Consultation <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="tel:+919148717036">
                <Phone className="w-4 h-4 mr-2" /> Call Us
              </a>
            </Button>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
