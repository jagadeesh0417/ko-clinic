"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
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
  { label: "Results", href: "/before-after" },
  { label: "Gallery", href: "/gallery" },
  { label: "Media", href: "/media" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (headerRef.current) {
        headerRef.current.style.transform = `translateY(${Math.min(0, -window.scrollY * 0.03)}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <header
        ref={headerRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
          scrolled
            ? "bg-[rgba(36,23,16,0.92)] backdrop-blur-2xl border-b border-[rgba(214,183,135,0.06)] shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
            : "bg-gradient-to-b from-[rgba(36,23,16,0.5)] to-transparent"
        }`}
      >
        <div className="container-custom flex items-center justify-between h-16 md:h-20 lg:h-24">
          <Link href="/" className="relative z-10 group shrink-0">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className={`font-heading font-bold text-[#F6F0EA] tracking-[0.15em] block ${
                scrolled ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"
              } transition-all duration-500`}
            >
              KO{" "}
              <span className="champagne-text group-hover:opacity-80 transition-opacity">CLINIC</span>
            </motion.span>
          </Link>

          <nav className="hidden xl:flex items-center gap-0.5">
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
                    className="relative px-2.5 py-2 text-[10px] text-[#8E7C6E] hover:text-[#D6B787] transition-colors font-button uppercase tracking-[0.2em] flex items-center gap-1 group/link whitespace-nowrap"
                  >
                    {item.label}
                    <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover/link:rotate-180" />
                    <span className="absolute bottom-0 left-2 right-2 h-[1px] bg-[#D6B787] scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                  <AnimatePresence>
                    {megaOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.98 }}
                        transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4 z-50"
                      >
                        <div className="glassmorphism rounded-2xl p-5 min-w-[520px] grid grid-cols-2 gap-1.5 shadow-2xl border-[rgba(214,183,135,0.15)]">
                          {item.mega.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="relative px-3 py-2.5 rounded-xl text-sm text-[#8E7C6E] hover:text-[#D6B787] hover:bg-[rgba(214,183,135,0.04)] transition-all font-body group/sub overflow-hidden"
                            >
                              <span className="relative z-10">{sub.label}</span>
                              <span className="absolute inset-0 bg-gradient-to-r from-[rgba(214,183,135,0.06)] to-transparent opacity-0 group-hover/sub:opacity-100 transition-opacity duration-300" />
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
                  className="relative px-2.5 py-2 text-[10px] text-[#8E7C6E] hover:text-[#D6B787] transition-colors font-button uppercase tracking-[0.2em] group whitespace-nowrap"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-2 right-2 h-[1px] bg-[#D6B787] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <motion.a
              href="tel:+919148717036"
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-2 text-[#D6B787] hover:text-[#C5A067] transition-colors group"
            >
              <span className="w-7 h-7 rounded-full border border-[rgba(214,183,135,0.25)] flex items-center justify-center group-hover:bg-[rgba(214,183,135,0.1)] transition-all">
                <Phone className="w-3 h-3" />
              </span>
              <span className="font-button text-[9px] tracking-[0.15em] uppercase hidden xl:inline">Call</span>
            </motion.a>
            <motion.div whileHover={{ scale: 1.02 }}>
              <Button variant="primary" size="sm" asChild className="text-[10px] px-5">
                <Link href="/contact">Book Now</Link>
              </Button>
            </motion.div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden relative z-10 text-[#F6F0EA] p-2"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            <motion.div
              animate={isOpen ? { rotate: 90 } : { rotate: 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <Menu className="w-5 h-5 sm:w-6 sm:h-6" />}
            </motion.div>
          </button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[rgba(36,23,16,0.98)] backdrop-blur-2xl xl:hidden flex flex-col"
          >
            <nav className="flex flex-col items-center justify-center flex-1 gap-4 sm:gap-5 px-6 overflow-y-auto py-24">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  {item.mega ? (
                    <div className="space-y-3">
                      <Link
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className="font-heading text-xl sm:text-2xl text-[#F6F0EA] hover:text-[#D6B787] transition-all block text-center"
                      >
                        {item.label}
                      </Link>
                      <div className="grid grid-cols-2 gap-2 px-4">
                        {item.mega.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setIsOpen(false)}
                            className="text-xs sm:text-sm text-[#8E7C6E] hover:text-[#D6B787] transition-all text-center py-1"
                          >
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="font-heading text-xl sm:text-2xl text-[#F6F0EA] hover:text-[#D6B787] transition-all block text-center"
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="mt-4 w-full max-w-[280px]"
              >
                <Button variant="primary" size="lg" asChild className="w-full">
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
