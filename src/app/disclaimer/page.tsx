"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";

export default function DisclaimerPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#080808]">
        <div className="container-custom px-6 relative z-10">
          <SectionHeading title="Disclaimer" subtitle="Legal" />
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
            <h3 className="font-heading text-2xl text-[#FAFAFA]">General Disclaimer</h3>
            <p>The information provided on the KO Clinic website is for general informational purposes only. All content, including text, graphics, images, and treatment descriptions, is provided on an &ldquo;as is&rdquo; basis.</p>

            <h3 className="font-heading text-2xl text-[#FAFAFA]">Medical Disclaimer</h3>
            <p>Results from any medical or aesthetic procedure vary from person to person. The before and after images shown on this website represent individual results and are not guarantees of specific outcomes. All treatments should be performed by qualified medical professionals after a thorough consultation.</p>

            <h3 className="font-heading text-2xl text-[#FAFAFA]">No Guarantees</h3>
            <p>While we strive for the highest standards of care, KO Clinic makes no guarantees regarding specific results from any treatment. The safety and efficacy of treatments depend on multiple factors including individual health conditions.</p>

            <h3 className="font-heading text-2xl text-[#FAFAFA]">External Links</h3>
            <p>Our website may contain links to external sites. We are not responsible for the content or privacy practices of these third-party websites.</p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
