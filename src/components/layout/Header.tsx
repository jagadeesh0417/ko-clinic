"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Dr Vikas", href: "/about" },
  {
    label: "Treatments",
    href: "/treatments",
    mega: [
      { label: "Hair Restoration", href: "/treatments?category=hair" },
      { label: "Skin Rejuvenation", href: "/treatments?category=skin" },
      { label: "Injectables", href: "/treatments?category=injectables" },
      { label: "Body Contouring", href: "/treatments?category=body" },
      { label: "Regenerative Medicine", href: "/treatments?category=regenerative" },
      { label: "Sexual Wellness", href: "/treatments?category=wellness" },
      { label: "IV Therapy", href: "/treatments?category=iv" },
      { label: "Cosmetic Surgery", href: "/treatments?category=surgery" },
    ],
  },
  { label: "Doctors", href: "/doctors" },
  { label: "Conditions", href: "/conditions" },
  { label: "Before & After", href: "/before-after" },
  { label: "Gallery", href: "/gallery" },
  { label: "Locations", href: "/locations" },
  { label: "Media", href: "/media" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[rgba(36,23,16,0.95)] backdrop-blur-2xl border-b border-[rgba(214,183,135,0.06)] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            : "bg-gradient-to-b from-[rgba(36,23,16,0.6)] to-transparent"
        }`}
      >
        <div className="container-custom flex items-center justify-between h-20 md:h-24 px-6">
          <Link href="/" className="relative z-10 group">
            <span className="font-heading text-2xl md:text-3xl font-bold text-[#F6F0EA] tracking-[0.15em]">
              KO <span className="champagne-text group-hover:opacity-80 transition-opacity">CLINIC</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.mega ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <Link
                    href={item.href}
                    className="px-3 py-2 text-[11px] text-[#8E7C6E] hover:text-[#D6B787] transition-colors font-button uppercase tracking-[0.2em] flex items-center gap-1"
                  >
                    {item.label}
                    <ChevronDown className="w-3 h-3" />
                  </Link>
                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                      >
                        <div className="glassmorphism rounded-2xl p-6 min-w-[600px] grid grid-cols-2 gap-2 shadow-2xl">
                          {item.mega.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="px-4 py-3 rounded-xl text-sm text-[#8E7C6E] hover:text-[#D6B787] hover:bg-[rgba(214,183,135,0.04)] transition-all font-body"
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-[11px] text-[#8E7C6E] hover:text-[#D6B787] transition-colors font-button uppercase tracking-[0.2em]"
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919148717036"
              className="flex items-center gap-2 text-[#D6B787] hover:text-[#C5A067] transition-colors text-sm group"
            >
              <span className="w-8 h-8 rounded-full border border-[rgba(214,183,135,0.25)] flex items-center justify-center group-hover:bg-[rgba(214,183,135,0.1)] transition-all">
                <Phone className="w-3.5 h-3.5" />
              </span>
              <span className="font-button text-[10px] tracking-[0.15em] uppercase">Call</span>
            </a>
            <Button variant="primary" size="sm" asChild>
              <Link href="/contact">Book Appointment</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-10 text-[#F6F0EA]"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-[rgba(36,23,16,0.98)] backdrop-blur-2xl lg:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-6 px-8">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="font-heading text-2xl text-[#F6F0EA] hover:text-[#D6B787] transition-all"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="mt-4"
              >
                <Button variant="primary" size="lg" asChild>
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Book Appointment
                  </Link>
                </Button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
