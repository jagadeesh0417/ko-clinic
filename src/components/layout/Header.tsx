"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe, User, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

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
];

const navItems = [
  {
    label: "Patient Portal",
    href: "/patient-portal",
    isPrimary: true,
  },
  {
    label: "Destinations",
    href: "/destinations",
    mega: destinations,
  },
  { label: "Concierge", href: "/concierge" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  {
    label: "Clinic Portal",
    href: "/clinic-portal",
    isSecondary: true,
  },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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
            ? "glass-light shadow-[0_4px_30px_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        }`}
      >
        <div className="container-luxury flex items-center justify-between h-16 md:h-20 lg:h-24">
          <Link href="/" className="relative z-10 group shrink-0">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className={`font-heading font-bold tracking-[0.15em] block transition-all duration-500 ${
                scrolled ? "text-lg md:text-xl" : "text-xl md:text-2xl"
              } ${scrolled ? "text-deep-black" : "text-ivory"}`}
            >
              KO{" "}
              <span className="champagne-gradient group-hover:opacity-80 transition-opacity">CLINICS</span>
            </motion.span>
          </Link>

          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) =>
              item.isPrimary ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative inline-flex items-center gap-1.5 px-4 py-2 text-[10px] font-button uppercase tracking-[0.2em] rounded-full transition-all duration-500 overflow-hidden group/portal ${
                    scrolled
                      ? "bg-gradient-to-r from-champagne to-champagne-dark text-deep-black shadow-md hover:shadow-lg hover:shadow-champagne/20"
                      : "bg-gradient-to-r from-champagne to-champagne-dark text-deep-black shadow-md hover:shadow-lg hover:shadow-champagne/20"
                  }`}
                >
                  <User className="w-3 h-3 relative z-10" />
                  <span className="relative z-10">{item.label}</span>
                  <span className="absolute inset-0 bg-ivory translate-y-full group-hover/portal:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
                  <span className="absolute inset-0 bg-ivory/20 opacity-0 group-hover/portal:opacity-100 transition-opacity duration-300" />
                </Link>
              ) : item.isSecondary ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative inline-flex items-center gap-1.5 px-3 py-1.5 text-[9px] font-button uppercase tracking-[0.15em] rounded-full border transition-all duration-300 ${
                    scrolled
                      ? "border-champagne/40 text-mid-gray hover:border-champagne hover:text-champagne-dark"
                      : "border-ivory/25 text-white/60 hover:border-champagne hover:text-champagne"
                  }`}
                >
                  <Building2 className="w-2.5 h-2.5" />
                  <span>{item.label}</span>
                </Link>
              ) : item.mega ? (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={`relative px-3 py-2 text-[10px] transition-colors font-button uppercase tracking-[0.2em] flex items-center gap-1 group/link whitespace-nowrap ${
                      scrolled
                        ? "text-mid-gray hover:text-champagne-dark"
                        : "text-white/70 hover:text-champagne"
                    }`}
                  >
                    <Globe className="w-3 h-3" />
                    {item.label}
                    <ChevronDown className="w-3 h-3 transition-transform duration-300 group-hover/link:rotate-180" />
                    <span className={`absolute bottom-0 left-2 right-2 h-[1px] scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left ${
                      scrolled ? "bg-champagne-dark" : "bg-champagne"
                    }`} />
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
                        <div className="glass-light rounded-2xl p-4 min-w-[520px] grid grid-cols-3 gap-1 shadow-2xl border-luxury">
                          {item.mega.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="relative px-3 py-2.5 rounded-xl text-sm text-mid-gray hover:text-champagne-dark hover:bg-warm-beige transition-all font-body group/sub overflow-hidden"
                            >
                              <span className="relative z-10">{sub.label}</span>
                              <span className="absolute inset-0 bg-gradient-to-r from-champagne/6 to-transparent opacity-0 group-hover/sub:opacity-100 transition-opacity duration-300" />
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
                  className={`relative px-3 py-2 text-[10px] transition-colors font-button uppercase tracking-[0.2em] group whitespace-nowrap ${
                    scrolled
                      ? "text-mid-gray hover:text-champagne-dark"
                      : "text-white/70 hover:text-champagne"
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-2 right-2 h-[1px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                    scrolled ? "bg-champagne-dark" : "bg-champagne"
                  }`} />
                </Link>
              )
            )}
          </nav>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <motion.div whileHover={{ scale: 1.02 }}>
              <Button
                variant="primary"
                size="sm"
                asChild
                className="text-[10px] px-5"
              >
                <Link href="/contact">Enquire Now</Link>
              </Button>
            </motion.div>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`xl:hidden relative z-10 p-2 ${
              scrolled ? "text-deep-black" : "text-ivory"
            }`}
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
            className="fixed inset-0 z-40 bg-ivory/98 backdrop-blur-2xl xl:hidden flex flex-col"
          >
            <nav className="flex flex-col items-center justify-center flex-1 gap-5 px-6 overflow-y-auto py-24">
              {/* Patient Portal - Primary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0, duration: 0.4 }}
              >
                <Link
                  href="/patient-portal"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-champagne to-champagne-dark text-deep-black px-6 py-3 rounded-full text-xs font-button uppercase tracking-[0.2em] shadow-md"
                >
                  <User className="w-3.5 h-3.5" />
                  Patient Portal
                </Link>
              </motion.div>

              {/* Destinations */}
              <div className="space-y-3 w-full max-w-xs">
                <p className="text-center font-button text-[9px] uppercase tracking-[0.2em] text-mid-gray">
                  Destinations
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {destinations.map((d) => (
                    <Link
                      key={d.href}
                      href={d.href}
                      onClick={() => setIsOpen(false)}
                      className="text-xs text-mid-gray hover:text-champagne-dark transition-all text-center py-1"
                    >
                      {d.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Concierge, About, Contact */}
              {["Concierge", "About", "Contact"].map((label, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.4 }}
                >
                  <Link
                    href={`/${label.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="font-heading text-xl sm:text-2xl text-deep-black hover:text-champagne-dark transition-all block text-center"
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}

              {/* Clinic Portal - Secondary */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.4 }}
              >
                <Link
                  href="/clinic-portal"
                  onClick={() => setIsOpen(false)}
                  className="inline-flex items-center gap-2 border border-champagne/40 text-mid-gray px-5 py-2 rounded-full text-[10px] font-button uppercase tracking-[0.15em] hover:border-champagne hover:text-champagne-dark transition-all"
                >
                  <Building2 className="w-3 h-3" />
                  Clinic Portal
                </Link>
              </motion.div>

              {/* Enquire Now */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="mt-2 w-full max-w-[280px]"
              >
                <Button variant="primary" size="lg" asChild className="w-full">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Enquire Now
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
