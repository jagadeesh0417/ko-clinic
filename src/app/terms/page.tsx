"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

export default function TermsPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#080808]">
        <div className="container-custom px-6 relative z-10">
          <SectionHeading title="Terms & Conditions" subtitle="Legal" />
        </div>
      </section>

      <section className="section-padding bg-[#101010] pt-0">
        <div className="container-custom px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8 text-[#A1A1AA] font-body text-base leading-relaxed"
          >
            <p>Last updated: January 2026</p>
            
            <h3 className="font-heading text-2xl text-[#FAFAFA]">1. Acceptance of Terms</h3>
            <p>By accessing or using the KO Clinic website and services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.</p>

            <h3 className="font-heading text-2xl text-[#FAFAFA]">2. Medical Disclaimer</h3>
            <p>The information provided on this website is for educational and informational purposes only. It does not constitute medical advice. Individual results may vary, and all procedures carry inherent risks. Consult with Dr. Vikas Singh for personalized medical advice.</p>

            <h3 className="font-heading text-2xl text-[#FAFAFA]">3. Appointment Policy</h3>
            <p>Appointment requests submitted through our website do not constitute confirmed bookings. Our team will contact you to confirm availability and provide further details.</p>

            <h3 className="font-heading text-2xl text-[#FAFAFA]">4. Intellectual Property</h3>
            <p>All content on this website, including text, images, and logos, is the property of KO Clinic and Kosmedixx Clinics. Unauthorized use is prohibited.</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
