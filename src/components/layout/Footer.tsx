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
    <footer
      style={{
        backgroundColor: "#2B1C15",
        color: "#F6F0EA",
        padding: "80px 0 0",
      }}
    >
      <div
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 48,
          }}
        >
          {/* Column 1 - Brand */}
          <motion.div
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <Link href="/" style={{ textDecoration: "none" }}>
              <h2
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  color: "#D6B787",
                  margin: "0 0 6px",
                }}
              >
                KO
                <span style={{ color: "#C5A067" }}> CLINIC</span>
              </h2>
            </Link>
            <p
              style={{
                color: "#8E7C6E",
                fontSize: 14,
                lineHeight: 1.7,
                margin: "0 0 24px",
              }}
            >
              Redefining luxury aesthetics with precision, artistry, and
              world-class care. Your journey to timeless beauty begins here.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
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
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 42,
                    height: 42,
                    borderRadius: "50%",
                    border: "1px solid rgba(214,183,135,0.25)",
                    color: "#D6B787",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#D6B787"
                    e.currentTarget.style.color = "#2B1C15"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent"
                    e.currentTarget.style.color = "#D6B787"
                  }}
                >
                  <Icon size={18} />
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
          >
            <h3
              style={{
                fontSize: 16,
                fontWeight: 600,
                letterSpacing: "0.1em",
                color: "#D6B787",
                margin: "0 0 24px",
                textTransform: "uppercase",
              }}
            >
              Quick Links
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {quickLinks.map((link) => (
                <li key={link.label} style={{ marginBottom: 14 }}>
                  <Link
                    href={link.href}
                    style={{
                      color: "#E8DDD1",
                      textDecoration: "none",
                      fontSize: 14,
                      transition: "color 0.3s ease",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: 6,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#D6B787"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#E8DDD1"
                    }}
                  >
                    <ArrowRight size={12} style={{ color: "#C5A067" }} />
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
          >
            <h3
              style={{
                fontSize: 16,
                fontWeight: 600,
                letterSpacing: "0.1em",
                color: "#D6B787",
                margin: "0 0 24px",
                textTransform: "uppercase",
              }}
            >
              Popular Procedures
            </h3>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {procedures.map((item) => (
                <li key={item.label} style={{ marginBottom: 14 }}>
                  <Link
                    href={item.href}
                    style={{
                      color: "#E8DDD1",
                      textDecoration: "none",
                      fontSize: 14,
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#D6B787"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "#E8DDD1"
                    }}
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
          >
            <h3
              style={{
                fontSize: 16,
                fontWeight: 600,
                letterSpacing: "0.1em",
                color: "#D6B787",
                margin: "0 0 24px",
                textTransform: "uppercase",
              }}
            >
              Contact
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <Phone size={16} style={{ color: "#C5A067", marginTop: 3, flexShrink: 0 }} />
                <div>
                  <p style={{ margin: 0, fontSize: 12, color: "#8E7C6E" }}>India</p>
                  <a
                    href="tel:+919148717036"
                    style={{
                      color: "#E8DDD1",
                      textDecoration: "none",
                      fontSize: 14,
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#D6B787" }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#E8DDD1" }}
                  >
                    +91 9148717036
                  </a>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <Phone size={16} style={{ color: "#C5A067", marginTop: 3, flexShrink: 0 }} />
                <div>
                  <p style={{ margin: 0, fontSize: 12, color: "#8E7C6E" }}>Hong Kong</p>
                  <a
                    href="tel:+85244608658"
                    style={{
                      color: "#E8DDD1",
                      textDecoration: "none",
                      fontSize: 14,
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#D6B787" }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#E8DDD1" }}
                  >
                    +852 44608658
                  </a>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <Phone size={16} style={{ color: "#C5A067", marginTop: 3, flexShrink: 0 }} />
                <div>
                  <p style={{ margin: 0, fontSize: 12, color: "#8E7C6E" }}>Philippines</p>
                  <a
                    href="tel:+639661688381"
                    style={{
                      color: "#E8DDD1",
                      textDecoration: "none",
                      fontSize: 14,
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#D6B787" }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "#E8DDD1" }}
                  >
                    +63 9661688381
                  </a>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <Mail size={16} style={{ color: "#C5A067", marginTop: 3, flexShrink: 0 }} />
                <a
                  href="mailto:drvikas090909@gmail.com"
                  style={{
                    color: "#E8DDD1",
                    textDecoration: "none",
                    fontSize: 14,
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.color = "#D6B787" }}
                  onMouseLeave={(e) => { e.currentTarget.style.color = "#E8DDD1" }}
                >
                  drvikas090909@gmail.com
                </a>
              </div>
              <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                <Clock size={16} style={{ color: "#C5A067", marginTop: 3, flexShrink: 0 }} />
                <div>
                  <p style={{ margin: 0, fontSize: 12, color: "#8E7C6E" }}>Hours</p>
                  <p style={{ margin: 0, color: "#E8DDD1", fontSize: 14 }}>
                    Mon-Sat 10AM - 7PM
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Luxury Divider */}
        <div
          style={{
            height: 1,
            background:
              "linear-gradient(90deg, transparent, rgba(214,183,135,0.25), transparent)",
            margin: "60px 0 0",
          }}
        />

        {/* Bottom Bar */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "24px 0",
            flexWrap: "wrap",
            gap: 8,
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 13,
              color: "#8E7C6E",
            }}
          >
            &copy; 2026 KO CLINIC by Kosmedixx. All Rights Reserved.
          </p>
          <p
            style={{
              margin: 0,
              fontSize: 13,
              color: "#8E7C6E",
            }}
          >
            Designed and Developed by{" "}
            <span style={{ color: "#D6B787", transition: "color 0.3s ease" }}>
              Crawlers Technologies
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}
