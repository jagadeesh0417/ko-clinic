"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GlassCard } from "@/components/ui/glass-card";
import { ArrowLeft, Calendar, CheckCircle } from "lucide-react";

const treatments: Record<string, { title: string; description: string; benefits: string[]; category: string }> = {
  "micro-bio-fue": {
    title: "Micro Bio-FUE Hair Transplant",
    description: "Micro Bio-FUE is the most advanced hair transplantation technique that uses micro-motorized extraction of individual follicular units. This minimally invasive procedure delivers permanent, natural-looking results with maximum density and accelerated growth. Ideal for Norwood Scale I-VII hair loss patterns.",
    benefits: ["Permanent natural results", "Maximum density coverage", "Accelerated growth timeline", "Minimally invasive", "No linear scarring", "Quick recovery"],
    category: "Hair Restoration",
  },
  "botox-fillers": {
    title: "Botox & Dermal Fillers",
    description: "Premium neurotoxins and dermal fillers for wrinkle reduction, volume restoration, and facial contouring. Using only US-FDA approved products, our expert administration ensures natural-looking results that enhance your features without appearing overdone.",
    benefits: ["Wrinkle reduction", "Volume restoration", "Facial contouring", "Lip enhancement", "Natural results", "Minimal downtime"],
    category: "Injectable Aesthetics",
  },
};

export default function TreatmentDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const treatment = treatments[slug];

  if (!treatment) {
    return (
      <div className="pt-40 pb-20 text-center">
        <h1 className="font-heading text-4xl text-[#FAFAFA] mb-4">Treatment Not Found</h1>
        <Button variant="outline" asChild>
          <Link href="/treatments">View All Treatments</Link>
        </Button>
      </div>
    );
  }

  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#080808]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,106,0.08),transparent_70%)]" />
        <div className="container-custom px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link
              href="/treatments"
              className="inline-flex items-center gap-2 text-[#A1A1AA] hover:text-[#FAFAFA] text-sm font-body mb-8 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Treatments
            </Link>
            <Badge variant="default" className="mb-4">{treatment.category}</Badge>
            <h1 className="font-heading text-5xl md:text-6xl text-[#FAFAFA] mb-6">
              {treatment.title}
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-[#101010] pt-0">
        <div className="container-custom px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[#A1A1AA] text-lg leading-relaxed font-body"
              >
                {treatment.description}
              </motion.p>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <GlassCard>
                <h3 className="font-heading text-xl text-[#FAFAFA] mb-4">Book a Consultation</h3>
                <p className="text-[#A1A1AA] text-sm mb-4 font-body">
                  Schedule your consultation with Dr. Vikas Singh.
                </p>
                <Button variant="primary" className="w-full mb-3" asChild>
                  <Link href="/contact">
                    <Calendar className="w-4 h-4" /> Book Appointment
                  </Link>
                </Button>
                <Button variant="outline" className="w-full" asChild>
                  <a href="https://wa.me/919148717036" target="_blank" rel="noopener noreferrer">
                    WhatsApp Consultation
                  </a>
                </Button>
              </GlassCard>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <h2 className="font-heading text-3xl text-[#FAFAFA] mb-6">Benefits</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {treatment.benefits.map((benefit, i) => (
                <div key={benefit} className="flex items-start gap-3 p-4 border border-[rgba(201,168,106,0.1)] rounded-sm">
                  <CheckCircle className="w-5 h-5 text-[#C9A86A] mt-0.5 shrink-0" />
                  <span className="text-[#A1A1AA] font-body text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
