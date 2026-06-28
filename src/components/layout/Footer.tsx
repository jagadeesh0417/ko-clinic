"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Phone, Mail, Clock, Globe, MessageCircle, Video, ArrowRight } from "lucide-react"

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Treatments", href: "/treatments" },
  { label: "Gallery", href: "/gallery" },
  { label: "Media", href: "/media" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
]

const procedures = [
  { label: "Hair Transplant", href: "/treatments/hair-transplant" },
  { label: "PRP Therapy", href: "/treatments/prp-therapy" },
  { label: "Botox", href: "/treatments/botox" },
  { label: "Fillers", href: "/treatments/fillers" },
  { label: "Thread Lift", href: "/treatments/thread-lift" },
  { label: "Laser", href: "/treatments/laser" },
  { label: "Body Contouring", href: "/treatments/body-contouring" },
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
    <footer className="bg-[#2B1C15] text-[#F6F0EA] pt-12 sm:pt-16 md:pt-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12">
          {/* Column 1 - Brand */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center sm:text-left"
          >
            <Link href="/" className="inline-block">
              <h2 className="font-heading text-2xl sm:text-[28px] font-bold tracking-[0.15em] text-[#D6B787] mb-1.5">
                KO
                <span className="text-[#C5A067]"> CLINIC</span>
              </h2>
            </Link>
            <p className="text-[#8E7C6E] text-sm leading-relaxed mb-6 max-w-xs mx-auto sm:mx-0">
              Redefining luxury aesthetics with precision, artistry, and world-class care. Your journey to timeless beauty begins here.
            </p>
            <div className="flex gap-3 justify-center sm:justify-start">
              {[
                { icon: Globe, label: "Website" },
                { icon: MessageCircle, label: "WhatsApp" },
                { icon: Video, label: "Video" },
              ].map(({ icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                  className="flex items-center justify-center w-10 h-10 rounded-full border border-[rgba(214,183,135,0.25)] text-[#D6B787] hover:bg-[#D6B787] hover:text-[#2B1C15] transition-all duration-300"
                >
                  <Icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Column 2 - Quick Links */}
          <motion.div
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center sm:text-left"
          >
            <h3 className="font-heading text-base font-semibold tracking-[0.1em] text-[#D6B787] mb-6 uppercase">
              Quick Links
            </h3>
            <ul className="space-y-3.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#E8DDD1] text-sm hover:text-[#D6B787] transition-colors inline-flex items-center gap-1.5"
                  >
                    <ArrowRight size={11} className="text-[#C5A067]" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3 - Popular Procedures */}
          <motion.div
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center sm:text-left"
          >
            <h3 className="font-heading text-base font-semibold tracking-[0.1em] text-[#D6B787] mb-6 uppercase">
              Popular Procedures
            </h3>
            <ul className="space-y-3.5">
              {procedures.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-[#E8DDD1] text-sm hover:text-[#D6B787] transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4 - Contact */}
          <motion.div
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="text-center sm:text-left"
          >
            <h3 className="font-heading text-base font-semibold tracking-[0.1em] text-[#D6B787] mb-6 uppercase">
              Contact
            </h3>
            <div className="flex flex-col gap-4 items-center sm:items-start">
              <div className="flex items-start gap-3">
                <Phone size={15} className="text-[#C5A067] mt-0.5 shrink-0" />
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-[0.1em] text-[#8E7C6E] mb-0.5">India</p>
                  <a href="tel:+919148717036" className="text-[#E8DDD1] text-sm hover:text-[#D6B787] transition-colors">
                    +91 9148717036
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={15} className="text-[#C5A067] mt-0.5 shrink-0" />
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-[0.1em] text-[#8E7C6E] mb-0.5">Hong Kong</p>
                  <a href="tel:+85244608658" className="text-[#E8DDD1] text-sm hover:text-[#D6B787] transition-colors">
                    +852 44608658
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone size={15} className="text-[#C5A067] mt-0.5 shrink-0" />
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-[0.1em] text-[#8E7C6E] mb-0.5">Philippines</p>
                  <a href="tel:+639661688381" className="text-[#E8DDD1] text-sm hover:text-[#D6B787] transition-colors">
                    +63 9661688381
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={15} className="text-[#C5A067] mt-0.5 shrink-0" />
                <a href="mailto:drvikas090909@gmail.com" className="text-[#E8DDD1] text-sm hover:text-[#D6B787] transition-colors text-left">
                  drvikas090909@gmail.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={15} className="text-[#C5A067] mt-0.5 shrink-0" />
                <div className="text-left">
                  <p className="text-[10px] uppercase tracking-[0.1em] text-[#8E7C6E] mb-0.5">Hours</p>
                  <p className="text-[#E8DDD1] text-sm">Mon-Sat 10AM - 7PM</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="h-[1px] bg-gradient-to-r from-transparent via-[rgba(214,183,135,0.25)] to-transparent mt-12 sm:mt-16" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-6">
          <p className="text-xs sm:text-sm text-[#8E7C6E] text-center sm:text-left">
            &copy; 2026 KO CLINIC by Kosmedixx. All Rights Reserved.
          </p>
          <p className="text-xs sm:text-sm text-[#8E7C6E] text-center sm:text-right">
            Designed and Developed by{" "}
            <span className="text-[#D6B787] hover:text-[#C5A067] transition-colors">
              Crawlers Technologies
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
