"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowRight } from "lucide-react";

export function Introduction() {
  return (
    <section className="section-padding bg-[#080808]">
      <div className="container-custom">
        <SectionHeading
          title="What is KO Clinic?"
          subtitle="Introduction"
          description=""
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[#A1A1AA] text-base md:text-lg leading-relaxed font-body mb-8">
              KO Clinic is an internationally expanding chain of advanced hair, skin and regenerative 
              aesthetic centers founded by Dr. Vikas Singh. The clinic combines cutting-edge technology, 
              regenerative medicine, luxury patient care and artistic precision to deliver world-class 
              aesthetic outcomes.
            </p>

            <div className="space-y-8">
              <div className="border-l-2 border-[#C9A86A] pl-6">
                <h4 className="font-heading text-xl text-[#FAFAFA] mb-2">Our Mission</h4>
                <p className="text-[#A1A1AA] text-sm leading-relaxed font-body">
                  To redefine the future of aesthetic medicine through science-backed, innovative and safe 
                  cosmetic solutions that enhance natural beauty and restore confidence.
                </p>
              </div>
              <div className="border-l-2 border-[#C9A86A] pl-6">
                <h4 className="font-heading text-xl text-[#FAFAFA] mb-2">Our Vision</h4>
                <p className="text-[#A1A1AA] text-sm leading-relaxed font-body">
                  To establish the Kosmedixx network as a leading global chain of luxury aesthetic clinics 
                  accessible across continents.
                </p>
              </div>
            </div>

            <Button variant="primary" className="mt-8" asChild>
              <Link href="/about">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-[rgba(201,168,106,0.1)] to-[rgba(16,16,16,0.8)] border border-[rgba(201,168,106,0.2)] flex items-center justify-center">
              <div className="text-center p-8">
                <span className="font-heading text-6xl md:text-8xl text-gradient-gold">KO</span>
                <p className="font-heading text-xl text-[#A1A1AA] italic mt-4">
                  Where Science Meets Art
                </p>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full border border-[rgba(201,168,106,0.1)] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
