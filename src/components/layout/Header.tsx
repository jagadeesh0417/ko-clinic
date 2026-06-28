"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Treatments", href: "/treatments" },
  { label: "Gallery", href: "/gallery" },
  { label: "Media", href: "/media" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[rgba(42,26,18,0.92)] backdrop-blur-xl border-b border-[rgba(213,185,138,0.08)]"
            : "bg-transparent"
        }`}
      >
        <div className="container-custom flex items-center justify-between h-20 md:h-24 px-6">
          <Link href="/" className="relative z-10">
            <span className="font-heading text-2xl md:text-3xl font-bold text-[#F5F0EA] tracking-wider">
              KO <span className="champagne-text">CLINIC</span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#7D6B5A] hover:text-[#D5B98A] transition-colors font-body tracking-wide uppercase text-xs"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+919148717036"
              className="flex items-center gap-2 text-[#D5B98A] hover:text-[#C8A96B] transition-colors text-sm"
            >
              <Phone className="w-4 h-4" />
              <span className="font-button text-xs tracking-wider uppercase">Call</span>
            </a>
            <Button variant="primary" size="sm" asChild>
              <Link href="/contact">Book Appointment</Link>
            </Button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden relative z-10 text-[#F5F0EA]"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-[#2A1A12] lg:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="font-heading text-3xl text-[#F5F0EA] hover:text-[#D5B98A] transition-all"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
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
