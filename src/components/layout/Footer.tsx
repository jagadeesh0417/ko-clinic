"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Camera, Globe, Share2, Video } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Treatments", href: "/treatments" },
  { label: "Gallery", href: "/gallery" },
  { label: "Before & After", href: "/before-after" },
  { label: "Locations", href: "/locations" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const treatments = [
  { label: "Micro Bio-FUE", href: "/treatments/micro-bio-fue" },
  { label: "Morpheus MNRF", href: "/treatments/morpheus-mnrf" },
  { label: "Botox & Fillers", href: "/treatments/botox-fillers" },
  { label: "PRP Therapy", href: "/treatments/prp-gfc-therapy" },
  { label: "Exosome Therapy", href: "/treatments/exosome-therapy" },
  { label: "Thread Lift", href: "/treatments/pdo-thread-lift" },
];

export function Footer() {
  return (
    <footer className="bg-[#22160F] border-t border-[rgba(213,185,138,0.08)]">
      <div className="container-custom px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-3xl text-[#F5F0EA] mb-4">
              KO <span className="champagne-text">CLINIC</span>
            </h3>
            <p className="text-[#7D6B5A] text-sm leading-relaxed mb-6 font-body">
              A premium global aesthetics brand dedicated to enhancing natural beauty through science, precision and innovation.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Camera, href: "#" },
                { icon: Globe, href: "#" },
                { icon: Share2, href: "#" },
                { icon: Video, href: "#" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="w-10 h-10 rounded-full border border-[rgba(213,185,138,0.15)] flex items-center justify-center text-[#7D6B5A] hover:text-[#D5B98A] hover:border-[#D5B98A] transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-button text-xs uppercase tracking-[3px] text-[#D5B98A] mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#7D6B5A] hover:text-[#F5F0EA] text-sm transition-colors font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-button text-xs uppercase tracking-[3px] text-[#D5B98A] mb-6">
              Treatments
            </h4>
            <ul className="space-y-3">
              {treatments.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#7D6B5A] hover:text-[#F5F0EA] text-sm transition-colors font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-button text-xs uppercase tracking-[3px] text-[#D5B98A] mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="mailto:drvikas090909@gmail.com" className="flex items-center gap-3 text-[#7D6B5A] hover:text-[#F5F0EA] text-sm transition-colors">
                  <Mail className="w-4 h-4 text-[#C8A96B]" />
                  drvikas090909@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+919148717036" className="flex items-center gap-3 text-[#7D6B5A] hover:text-[#F5F0EA] text-sm transition-colors">
                  <Phone className="w-4 h-4 text-[#C8A96B]" />
                  +91 9148717036
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-[#7D6B5A] text-sm">
                  <MapPin className="w-4 h-4 text-[#C8A96B] mt-0.5" />
                  <span>Koramangala, Bengaluru</span>
                </div>
              </li>
            </ul>
            <div className="mt-6 space-y-2">
              {[
                { label: "Privacy Policy", href: "/privacy-policy" },
                { label: "Terms & Conditions", href: "/terms" },
                { label: "Disclaimer", href: "/disclaimer" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="block text-xs text-[#7D6B5A] hover:text-[#D5B98A] transition-colors font-body">
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        </div>

        <Separator className="my-8 bg-[rgba(213,185,138,0.1)]" />

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[#7D6B5A] text-xs font-body">
            &copy; {new Date().getFullYear()} KO Clinic by Kosmedixx. All Rights Reserved.
          </p>
          <p className="text-[#7D6B5A] text-xs font-body">
            Designed & Developed by <span className="text-[#C8A96B]">Crawlers Technologies</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
