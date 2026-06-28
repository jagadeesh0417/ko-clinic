"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Calendar, MessageCircle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function ConsultationWidget() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-50 flex items-center gap-2 rounded-full bg-gradient-to-r from-[#C5A067] to-[#B78B5E] px-6 py-3 font-button uppercase tracking-wider text-[#2B1C15] shadow-lg"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Calendar className="h-5 w-5" />
        Book Consultation
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="relative mx-4 w-full max-w-md rounded-2xl border border-white/20 bg-white/90 p-8 shadow-2xl backdrop-blur-xl"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-4 top-4 rounded-full p-1 text-gray-500 hover:text-gray-800"
              >
                <X className="h-5 w-5" />
              </button>

              <h3 className="mb-2 text-2xl font-semibold text-[#2B1C15]">
                Book Consultation
              </h3>
              <p className="mb-6 text-sm text-gray-600">
                Choose your preferred way to connect with us. We&apos;re here to help you take the first step toward better health.
              </p>

              <div className="flex flex-col gap-3">
                <Link href="/contact">
                  <Button className="w-full rounded-full bg-gradient-to-r from-[#C5A067] to-[#B78B5E] py-6 font-button uppercase tracking-wider text-[#2B1C15] hover:opacity-90">
                    <Calendar className="mr-2 h-4 w-4" />
                    Book Appointment
                  </Button>
                </Link>

                <a
                  href="https://wa.me/919148717036"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-[#25D366] py-6 font-button uppercase tracking-wider text-[#25D366] hover:bg-[#25D366] hover:text-white"
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp Consultation
                  </Button>
                </a>

                <a href="tel:+919148717036">
                  <Button
                    variant="outline"
                    className="w-full rounded-full border-[#2B1C15] py-6 font-button uppercase tracking-wider text-[#2B1C15] hover:bg-[#2B1C15] hover:text-white"
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
