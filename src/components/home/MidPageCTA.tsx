"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, Phone, ArrowRight } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

export default function MidPageCTA() {
  return (
    <section className="section-padding bg-[#2B1C15]">
      <div className="container-custom">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mx-auto max-w-4xl rounded-2xl border border-[rgba(214,183,135,0.25)] p-6 sm:p-10 md:p-16 text-center backdrop-blur-md"
          style={{ background: "rgba(36, 23, 16, 0.75)" }}
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="mx-auto mb-5 sm:mb-6 h-0.5 w-12 sm:w-16 rounded-full bg-gradient-to-r from-[#D6B787] via-[#C5A067] to-[#B78B5E]"
          />

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-heading mb-3 sm:mb-4 text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#F6F0EA]"
          >
            Ready to <span className="text-[#D6B787]">Transform</span>?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mx-auto mb-8 sm:mb-10 max-w-2xl text-sm sm:text-base md:text-lg text-[#E8DDD1]"
          >
            Schedule Your Complimentary Consultation Today
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <Link href="/book-consultation" className="w-full sm:w-auto">
              <Button
                className="group w-full sm:w-auto text-xs sm:text-sm h-11 sm:h-12 px-6 sm:px-8 border-0 text-white transition-all duration-300 hover:brightness-110"
                style={{ background: "linear-gradient(135deg, #D6B787, #C5A067, #B78B5E)" }}
              >
                <Calendar className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                Book Consultation
                <ArrowRight className="ml-2 h-3.5 w-3.5 sm:h-4 sm:w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>

            <a href="https://wa.me/919148717036" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <Button
                variant="outline"
                className="w-full sm:w-auto border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300 text-xs sm:text-sm h-11 sm:h-12 px-5 sm:px-6"
              >
                <MessageCircle className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                WhatsApp Support
              </Button>
            </a>

            <a href="tel:+919148717036" className="w-full sm:w-auto">
              <Button
                variant="ghost"
                className="w-full sm:w-auto text-xs sm:text-sm h-11 sm:h-12 px-5 sm:px-6 transition-all duration-300 text-[#D6B787]"
              >
                <Phone className="mr-2 h-3.5 w-3.5 sm:h-4 sm:w-4" />
                Call Now
              </Button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
