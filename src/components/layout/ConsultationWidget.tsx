"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ConsultationWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <motion.button
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ delay: 1.5, type: "spring" }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 bg-gradient-to-r from-[#C8A96B] to-[#B8905A] text-[#22160F] px-5 py-3 rounded-full text-xs font-button uppercase tracking-wider font-semibold shadow-lg hover:shadow-[rgba(200,169,107,0.2)] transition-all hover:translate-y-[-2px] flex items-center gap-2"
      >
        <Calendar className="w-4 h-4" />
        Book Consultation
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
            onClick={(e) => e.target === e.currentTarget && setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#3C281D] border border-[rgba(213,185,138,0.15)] p-8 max-w-md w-full rounded-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-heading text-2xl text-[#F5F0EA]">
                  Book Consultation
                </h3>
                <button onClick={() => setIsOpen(false)} className="text-[#7D6B5A] hover:text-[#F5F0EA]">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <p className="text-[#7D6B5A] text-sm mb-6 font-body">
                Schedule your complimentary consultation today.
              </p>
              <div className="space-y-3">
                <Button variant="primary" className="w-full" asChild>
                  <Link href="/contact" onClick={() => setIsOpen(false)}>Book Appointment</Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://wa.me/919148717036" target="_blank" rel="noopener noreferrer">WhatsApp Consultation</a>
                </Button>
                <Button variant="ghost" className="w-full" asChild>
                  <a href="tel:+919148717036">Call Now</a>
                </Button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
