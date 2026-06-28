"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "How do I choose the right destination for my treatment?",
    a: "Our concierge team will guide you through a personalized assessment considering your medical needs, preferences, budget, and timeline. Each destination offers unique strengths — from Dubai's advanced aesthetic clinics to London's world-renowned surgical centers.",
  },
  {
    q: "What is included in the concierge service?",
    a: "Everything. From initial consultation and clinic selection to travel arrangements, accommodation, transfers, treatment coordination, aftercare, and follow-up. Your personal concierge manages every detail so you can focus entirely on your health.",
  },
  {
    q: "How are clinics vetted before joining the network?",
    a: "Each clinic undergoes a rigorous evaluation process covering clinical outcomes, safety protocols, patient satisfaction, facility standards, technology adoption, and luxury service capability. We maintain ongoing quality monitoring.",
  },
  {
    q: "Can I speak with a specialist before traveling?",
    a: "Absolutely. Virtual consultations are arranged with your chosen specialist before any travel commitments. This ensures complete confidence in your treatment plan and allows you to ask all questions in advance.",
  },
  {
    q: "Is my privacy protected throughout the process?",
    a: "Patient confidentiality is paramount. All medical records are encrypted, communications are private, and we offer discreet arrival and departure arrangements. Our service is designed for those who value their privacy.",
  },
  {
    q: "What happens if I need follow-up care after returning home?",
    a: "We coordinate remote follow-ups with your treating specialist and maintain relationships with local providers when possible. Your care continues long after you return home.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="section-luxury bg-warm-beige">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <span className="font-button text-[10px] uppercase tracking-[0.3em] text-champagne-dark mb-4 block">
            Have Questions?
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light text-deep-black leading-[1.1] text-balance">
            Frequently Asked
            <br />
            <span className="font-medium">Questions</span>
          </h2>
        </motion.div>

        <div className="max-w-2xl mx-auto space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04, duration: 0.4 }}
              className="bg-ivory luxury-border card-luxury overflow-hidden"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full flex items-center justify-between p-5 sm:p-6 text-left"
              >
                <span className="font-heading text-base sm:text-lg font-medium text-deep-black pr-4">
                  {faq.q}
                </span>
                <span className="shrink-0 w-6 h-6 rounded-full border border-champagne/30 flex items-center justify-center">
                  {openIndex === i ? (
                    <Minus className="w-3 h-3 text-champagne-dark" />
                  ) : (
                    <Plus className="w-3 h-3 text-champagne-dark" />
                  )}
                </span>
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 sm:px-6 pb-5 sm:pb-6 font-body text-sm text-mid-gray leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
