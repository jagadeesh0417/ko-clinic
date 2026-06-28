"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Calendar, MessageCircle, Phone, ArrowRight } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "+1234567890";
  const message = "Hi! I'd like to schedule a consultation.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <Link href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <Button
        variant="outline"
        className="w-full border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-300 text-sm sm:text-base h-12 px-6"
      >
        <MessageCircle className="mr-2 h-4 w-4" />
        WhatsApp Support
      </Button>
    </Link>
  );
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

export default function MidPageCTA() {
  return (
    <section className="bg-[#2B1C15] section-padding relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mx-auto max-w-4xl rounded-2xl border p-8 sm:p-12 md:p-16 text-center backdrop-blur-md"
          style={{
            background: "rgba(36, 23, 16, 0.75)",
            borderColor: "rgba(214, 183, 135, 0.25)",
          }}
        >
          <motion.div
            variants={fadeUp}
            custom={0}
            className="mx-auto mb-6 h-0.5 w-16 rounded-full"
            style={{ background: "linear-gradient(90deg, #D6B787, #C5A067, #B78B5E)" }}
          />

          <motion.h2
            variants={fadeUp}
            custom={1}
            className="font-heading mb-4 text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight"
            style={{ color: "#F6F0EA" }}
          >
            Ready to{" "}
            <span style={{ color: "#D6B787" }}>Transform</span>?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            custom={2}
            className="mx-auto mb-10 max-w-2xl text-base sm:text-lg"
            style={{ color: "#E8DDD1" }}
          >
            Schedule Your Complimentary Consultation Today
          </motion.p>

          <motion.div
            variants={fadeUp}
            custom={3}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <Link href="/book-consultation">
              <Button
                className="group w-full sm:w-auto text-sm sm:text-base h-12 px-8 border-0 text-white transition-all duration-300 hover:brightness-110"
                style={{
                  background: "linear-gradient(135deg, #D6B787, #C5A067, #B78B5E)",
                }}
              >
                <Calendar className="mr-2 h-4 w-4" />
                Book Consultation
                <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>

            <WhatsAppButton />

            <Link href="tel:+1234567890">
              <Button
                variant="ghost"
                className="w-full sm:w-auto text-sm sm:text-base h-12 px-6 transition-all duration-300"
                style={{ color: "#D6B787" }}
              >
                <Phone className="mr-2 h-4 w-4" />
                Call Now
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
