"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, Calendar } from "lucide-react";

export function MidPageCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-[#2A1A12]">
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(213,185,138,0.04)] to-[rgba(34,22,15,0.8)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(213,185,138,0.08),transparent_70%)]" />
      <div className="relative z-10 container-custom px-6 text-center">
        <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          className="font-heading text-5xl md:text-7xl font-light text-[#F5F0EA] mb-4">
          Ready To <span className="champagne-text">Transform?</span>
        </motion.h2>
        <motion.p initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
          className="text-[#7D6B5A] text-lg md:text-xl font-body mb-8">
          Schedule your complimentary consultation today.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4">
          <Button variant="primary" size="lg" asChild><Link href="/contact"><Calendar className="w-4 h-4" /> Book Appointment</Link></Button>
          <Button variant="outline" size="lg" asChild><a href="https://wa.me/919148717036" target="_blank" rel="noopener noreferrer"><MessageCircle className="w-4 h-4" /> WhatsApp Support</a></Button>
          <Button variant="ghost" size="lg" asChild><a href="tel:+919148717036"><Phone className="w-4 h-4" /> Call Now</a></Button>
        </motion.div>
      </div>
    </section>
  );
}
