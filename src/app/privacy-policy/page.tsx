"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#080808]">
        <div className="container-custom px-6 relative z-10">
          <SectionHeading title="Privacy Policy" subtitle="Legal" />
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
            
            <h3 className="font-heading text-2xl text-[#FAFAFA]">1. Introduction</h3>
            <p>KO Clinic (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p>

            <h3 className="font-heading text-2xl text-[#FAFAFA]">2. Information We Collect</h3>
            <p>We collect information that you voluntarily provide to us when you fill out forms, book appointments, or communicate with us. This may include your name, email address, phone number, and medical history relevant to your treatment.</p>

            <h3 className="font-heading text-2xl text-[#FAFAFA]">3. How We Use Your Information</h3>
            <p>We use the information we collect to provide and improve our services, process appointments, communicate with you, and comply with legal obligations. Your medical information is kept strictly confidential.</p>

            <h3 className="font-heading text-2xl text-[#FAFAFA]">4. Data Security</h3>
            <p>We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>

            <h3 className="font-heading text-2xl text-[#FAFAFA]">5. Your Rights</h3>
            <p>You have the right to access, correct, or delete your personal information. You may also withdraw consent for marketing communications at any time.</p>

            <h3 className="font-heading text-2xl text-[#FAFAFA]">6. Contact</h3>
            <p>For any questions regarding this Privacy Policy, please contact us at drvikas090909@gmail.com.</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
