"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/section-heading";
import { Button } from "@/components/ui/button";
import { ArrowRight, Syringe, Sparkles, Activity, Eye, Heart, Plus, Droplets } from "lucide-react";

const treatmentCategories = [
  {
    title: "Hair Restoration",
    icon: Activity,
    treatments: [
      { name: "Micro Bio-FUE Hair Transplant", slug: "micro-bio-fue", description: "Permanent hair restoration with maximum density and accelerated growth." },
      { name: "DHI Hair Transplant", slug: "dhi-hair-transplant", description: "Patented Choi Implanter Pen technology. 3000+ sessions, 98% graft survival." },
      { name: "PRP & GFC Hair Therapy", slug: "prp-gfc-therapy", description: "Regenerative hair restoration for thinning hair and follicle activation." },
    ],
  },
  {
    title: "Skin Rejuvenation",
    icon: Sparkles,
    treatments: [
      { name: "Morpheus MNRF", slug: "morpheus-mnrf", description: "Microneedling RF for acne scars, texture improvement, and skin tightening." },
      { name: "Exosome Therapy", slug: "exosome-therapy", description: "Stem cell derived regenerative treatment for collagen stimulation." },
      { name: "Laser Rejuvenation", slug: "laser-rejuvenation", description: "Fractional CO2, Q Switched Laser, Carbon Peel, Erbium Glass." },
    ],
  },
  {
    title: "Injectable Aesthetics",
    icon: Syringe,
    treatments: [
      { name: "Botox", slug: "botox-fillers", description: "Wrinkle reduction and prevention with premium neurotoxins." },
      { name: "Dermal Fillers", slug: "dermal-fillers", description: "Volume restoration, facial contouring, and lip enhancement." },
      { name: "PDO Thread Lift", slug: "pdo-thread-lift", description: "Instant lifting, jawline contouring, and facial tightening." },
    ],
  },
  {
    title: "Body & Wellness",
    icon: Heart,
    treatments: [
      { name: "Body Contouring", slug: "body-contouring", description: "Cryolipolysis, fat reduction, and double chin treatment." },
      { name: "IV Vitamin Therapy", slug: "iv-vitamin-therapy", description: "Detoxification, hydration, and antioxidant infusion." },
      { name: "Sexual Wellness", slug: "sexual-wellness", description: "ED1000, EMSELLA, pelvic strengthening, vitality restoration." },
    ],
  },
  {
    title: "Advanced Therapies",
    icon: Plus,
    treatments: [
      { name: "EECP ECMR", slug: "eecp-ecmr", description: "Circulation enhancement, cardiac wellness, microcirculation support." },
      { name: "Chelation Therapy", slug: "chelation-therapy", description: "Heavy metal detoxification and cellular rejuvenation." },
      { name: "Cosmetic Surgery", slug: "cosmetic-surgery", description: "Advanced aesthetic surgery procedures." },
    ],
  },
];

export default function TreatmentsPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#2A1A12]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(213,185,138,0.06),transparent_70%)]" />
        <div className="container-custom px-6 relative z-10">
          <SectionHeading title="Advanced Treatments" subtitle="Our Services" description="Hair Restoration · Skin Rejuvenation · Wellness · Anti-Aging" />
        </div>
      </section>

      {treatmentCategories.map((category, catIndex) => (
        <section key={category.title} className={`section-padding ${catIndex % 2 === 0 ? "bg-[#3C281D]" : "bg-[#2A1A12]"}`}>
          <div className="container-custom px-6">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-4 mb-10">
              <div className="w-12 h-12 rounded-full bg-[rgba(213,185,138,0.1)] flex items-center justify-center">
                <category.icon className="w-6 h-6 text-[#C8A96B]" />
              </div>
              <h2 className="font-heading text-3xl text-[#F5F0EA]">{category.title}</h2>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {category.treatments.map((treatment, i) => (
                <motion.div key={treatment.slug} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -5 }} className="group p-6 rounded-2xl border border-[rgba(213,185,138,0.1)] hover:border-[rgba(213,185,138,0.25)] bg-[#22160F] transition-all duration-500">
                  <h3 className="font-heading text-xl text-[#F5F0EA] mb-3 group-hover:text-[#D5B98A] transition-all">{treatment.name}</h3>
                  <p className="text-[#7D6B5A] text-sm mb-4 font-body">{treatment.description}</p>
                  <Link href={`/treatments/${treatment.slug}`} className="text-[#D5B98A] text-xs font-button uppercase tracking-wider hover:text-[#C8A96B] transition-colors flex items-center gap-2">
                    Learn More <ArrowRight className="w-3 h-3" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="py-20 bg-[#22160F] text-center">
        <div className="container-custom px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-4xl text-[#F5F0EA] mb-4">Not Sure Which Treatment Is Right For You?</h2>
            <p className="text-[#7D6B5A] mb-8 font-body">Schedule a complimentary consultation with Dr. Vikas Singh.</p>
            <Button variant="primary" size="lg" asChild><Link href="/contact">Book Consultation</Link></Button>
          </motion.div>
        </div>
      </section>
    </>
  );
}
