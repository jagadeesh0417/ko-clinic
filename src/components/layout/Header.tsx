"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Globe } from "lucide-react";
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
    label: "Destinations",
    href: "/destinations",
    mega: destinations,
  },
  { label: "Concierge", href: "/concierge" },
  { label: "About", href: "/about" },
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
              item.mega ? (
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
            <Link
              href="/patient-portal"
              className={`text-[9px] font-button uppercase tracking-[0.15em] transition-colors ${
                scrolled ? "text-mid-gray hover:text-champagne-dark" : "text-white/60 hover:text-champagne"
              }`}
            >
              Patient Portal
            </Link>
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
            <nav className="flex flex-col items-center justify-center flex-1 gap-4 sm:gap-5 px-6 overflow-y-auto py-24">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className="font-heading text-2xl text-deep-black hover:text-champagne-dark transition-all block text-center"
              >
                Home
              </Link>
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
              {["Concierge", "About", "Contact"].map((label, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
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
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="mt-4 w-full max-w-[280px] space-y-3"
              >
                <Button variant="primary" size="lg" asChild className="w-full">
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    Enquire Now
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="w-full">
                  <Link href="/patient-portal" onClick={() => setIsOpen(false)}>
                    Patient Portal
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
