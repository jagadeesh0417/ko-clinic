"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Phone, Mail, Globe, MessageCircle, Video, ArrowRight } from "lucide-react"

const destinations = [
  { label: "Dubai", href: "/destinations/dubai" },
  { label: "London", href: "/destinations/london" },
  { label: "Singapore", href: "/destinations/singapore" },
  { label: "Paris", href: "/destinations/paris" },
  { label: "New York", href: "/destinations/new-york" },
  { label: "Hong Kong", href: "/destinations/hong-kong" },
  { label: "Sydney", href: "/destinations/sydney" },
  { label: "Bahrain", href: "/destinations/bahrain" },
  { label: "Abu Dhabi", href: "/destinations/abu-dhabi" },
]

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Patient Portal", href: "/patient-portal" },
  { label: "Concierge", href: "/concierge" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
]

const portals = [
  { label: "Patient Portal", href: "/patient-portal" },
  { label: "Clinic Portal", href: "/clinic-portal" },
]

const stagger = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: "easeOut" as const },
  }),
}

export function Footer() {
  return (
    <footer className="bg-deep-black text-ivory pt-12 sm:pt-16 md:pt-20">
      <div className="container-luxury">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
          {/* Column 1 - Brand */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center sm:text-left lg:col-span-1"
          >
            <Link href="/" className="inline-block">
              <h2 className="font-heading text-2xl sm:text-[28px] font-bold tracking-[0.15em] mb-1.5">
                KO <span className="champagne-gradient">CLINICS</span>
              </h2>
            </Link>
            <p className="text-platinum-dark text-sm leading-relaxed mb-6 max-w-xs mx-auto sm:mx-0">
              Global luxury healthcare concierge. Connecting you with the world&apos;s finest clinics across 9 exclusive destinations.
            </p>
            <div className="flex gap-3 justify-center sm:justify-start">
              {[
                { icon: Globe, label: "Website" },
                { icon: MessageCircle, label: "WhatsApp" },
                { icon: Video, label: "Video Call" },
              ].map(({ icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-luxury text-champagne hover:bg-champagne hover:text-deep-black transition-all duration-300"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2 - Destinations */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center sm:text-left"
          >
            <h3 className="font-heading text-sm font-semibold tracking-[0.1em] text-champagne mb-5 uppercase">
              Destinations
            </h3>
            <ul className="space-y-2.5">
              {destinations.map((d) => (
                <li key={d.label}>
                  <Link
                    href={d.href}
                    className="text-platinum text-xs hover:text-champagne transition-colors"
                  >
                    {d.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Quick Links */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center sm:text-left"
          >
            <h3 className="font-heading text-sm font-semibold tracking-[0.1em] text-champagne mb-5 uppercase">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-platinum text-xs hover:text-champagne transition-colors inline-flex items-center gap-1.5"
                  >
                    <ArrowRight size={10} className="text-champagne" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Portals */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center sm:text-left"
          >
            <h3 className="font-heading text-sm font-semibold tracking-[0.1em] text-champagne mb-5 uppercase">
              Portals
            </h3>
            <ul className="space-y-2.5">
              {portals.map((p) => (
                <li key={p.label}>
                  <Link
                    href={p.href}
                    className="text-platinum text-xs hover:text-champagne transition-colors"
                  >
                    {p.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 5 - Contact */}
          <motion.div
            custom={4}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center sm:text-left"
          >
            <h3 className="font-heading text-sm font-semibold tracking-[0.1em] text-champagne mb-5 uppercase">
              Contact
            </h3>
            <div className="flex flex-col gap-3 items-center sm:items-start">
              <div className="flex items-center gap-2.5">
                <Globe size={13} className="text-champagne shrink-0" />
                <a href="mailto:concierge@koclinics.com" className="text-platinum text-xs hover:text-champagne transition-colors">
                  concierge@koclinics.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={13} className="text-champagne shrink-0" />
                <a href="tel:+971501234567" className="text-platinum text-xs hover:text-champagne transition-colors">
                  +971 50 123 4567
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={13} className="text-champagne shrink-0" />
                <a href="tel:+442071234567" className="text-platinum text-xs hover:text-champagne transition-colors">
                  +44 20 7123 4567
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Mail size={13} className="text-champagne shrink-0 mt-0.5" />
                <div className="text-left">
                  <p className="text-platinum text-xs">24/7 Concierge Hotline</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="divider-dark mt-12 sm:mt-16" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-6">
          <p className="text-xs text-mid-gray text-center sm:text-left">
            &copy; 2026 KO CLINICS. All Rights Reserved.
          </p>
          <p className="text-xs text-mid-gray text-center sm:text-right">
            Crafted with care by{" "}
            <span className="text-champagne hover:text-champagne-dark transition-colors">
              KO CLINICS
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
