"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#080808]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,106,0.08),transparent_70%)]" />
        <div className="container-custom px-6 relative z-10">
          <SectionHeading
            title="Contact Us"
            subtitle="Get In Touch"
            description="Start your transformation journey today"
          />
        </div>
      </section>

      <section className="section-padding bg-[#101010] pt-0">
        <div className="container-custom px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl text-[#FAFAFA] mb-8">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-[#A1A1AA] mb-2 font-body">Name *</label>
                    <input
                      type="text"
                      className="w-full bg-[#080808] border border-[rgba(201,168,106,0.2)] px-4 py-3 text-[#FAFAFA] text-sm focus:border-[#C9A86A] focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#A1A1AA] mb-2 font-body">Phone *</label>
                    <input
                      type="tel"
                      className="w-full bg-[#080808] border border-[rgba(201,168,106,0.2)] px-4 py-3 text-[#FAFAFA] text-sm focus:border-[#C9A86A] focus:outline-none transition-colors"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-[#A1A1AA] mb-2 font-body">Email *</label>
                  <input
                    type="email"
                    className="w-full bg-[#080808] border border-[rgba(201,168,106,0.2)] px-4 py-3 text-[#FAFAFA] text-sm focus:border-[#C9A86A] focus:outline-none transition-colors"
                    placeholder="Your email"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-[#A1A1AA] mb-2 font-body">Country</label>
                    <input
                      type="text"
                      className="w-full bg-[#080808] border border-[rgba(201,168,106,0.2)] px-4 py-3 text-[#FAFAFA] text-sm focus:border-[#C9A86A] focus:outline-none transition-colors"
                      placeholder="Your country"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#A1A1AA] mb-2 font-body">Preferred Clinic</label>
                    <select className="w-full bg-[#080808] border border-[rgba(201,168,106,0.2)] px-4 py-3 text-[#A1A1AA] text-sm focus:border-[#C9A86A] focus:outline-none transition-colors">
                      <option value="">Select a clinic</option>
                      <option value="koramangala">Koramangala</option>
                      <option value="jayanagar">Jayanagar</option>
                      <option value="indiranagar">Indiranagar</option>
                      <option value="hong-kong">Hong Kong</option>
                      <option value="thailand">Thailand</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm text-[#A1A1AA] mb-2 font-body">Treatment</label>
                    <input
                      type="text"
                      className="w-full bg-[#080808] border border-[rgba(201,168,106,0.2)] px-4 py-3 text-[#FAFAFA] text-sm focus:border-[#C9A86A] focus:outline-none transition-colors"
                      placeholder="Treatment interested in"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#A1A1AA] mb-2 font-body">Preferred Date</label>
                    <input
                      type="date"
                      className="w-full bg-[#080808] border border-[rgba(201,168,106,0.2)] px-4 py-3 text-[#FAFAFA] text-sm focus:border-[#C9A86A] focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-[#A1A1AA] mb-2 font-body">Preferred Time</label>
                    <input
                      type="time"
                      className="w-full bg-[#080808] border border-[rgba(201,168,106,0.2)] px-4 py-3 text-[#FAFAFA] text-sm focus:border-[#C9A86A] focus:outline-none transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-[#A1A1AA] mb-2 font-body">Message</label>
                  <textarea
                    rows={4}
                    className="w-full bg-[#080808] border border-[rgba(201,168,106,0.2)] px-4 py-3 text-[#FAFAFA] text-sm focus:border-[#C9A86A] focus:outline-none transition-colors resize-none"
                    placeholder="Your message..."
                  />
                </div>
                <p className="text-xs text-[#A1A1AA] font-body">
                  Submitting this form does not confirm an appointment. Our team will contact you to schedule and provide further details.
                </p>
                <Button variant="primary" size="lg" className="w-full md:w-auto">
                  <Send className="w-4 h-4" /> Book Consultation
                </Button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div>
                <h2 className="font-heading text-3xl text-[#FAFAFA] mb-8">Contact Information</h2>
              </div>

              <div className="space-y-6">
                <GlassCard hover={false}>
                  <div className="flex items-start gap-4">
                    <Mail className="w-5 h-5 text-[#C9A86A] mt-1 shrink-0" />
                    <div>
                      <h4 className="font-heading text-lg text-[#FAFAFA] mb-1">Email</h4>
                      <a href="mailto:drvikas090909@gmail.com" className="text-[#A1A1AA] text-sm hover:text-[#C9A86A] transition-colors font-body">
                        drvikas090909@gmail.com
                      </a>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard hover={false}>
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-[#C9A86A] mt-1 shrink-0" />
                    <div>
                      <h4 className="font-heading text-lg text-[#FAFAFA] mb-1">India Helplines</h4>
                      <div className="space-y-1">
                        <a href="tel:+919148717036" className="block text-[#A1A1AA] text-sm hover:text-[#C9A86A] transition-colors font-body">+91 9148717036</a>
                        <a href="tel:+917996191116" className="block text-[#A1A1AA] text-sm hover:text-[#C9A86A] transition-colors font-body">+91 7996191116</a>
                        <a href="tel:+919535946916" className="block text-[#A1A1AA] text-sm hover:text-[#C9A86A] transition-colors font-body">+91 9535946916</a>
                      </div>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard hover={false}>
                  <div className="flex items-start gap-4">
                    <Phone className="w-5 h-5 text-[#C9A86A] mt-1 shrink-0" />
                    <div>
                      <h4 className="font-heading text-lg text-[#FAFAFA] mb-1">International</h4>
                      <div className="space-y-1">
                        <a href="tel:+85244608658" className="block text-[#A1A1AA] text-sm hover:text-[#C9A86A] transition-colors font-body">Hong Kong: +852 44608658</a>
                        <a href="tel:+639661688381" className="block text-[#A1A1AA] text-sm hover:text-[#C9A86A] transition-colors font-body">Philippines: +63 9661688381</a>
                      </div>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard hover={false}>
                  <div className="flex items-start gap-4">
                    <Clock className="w-5 h-5 text-[#C9A86A] mt-1 shrink-0" />
                    <div>
                      <h4 className="font-heading text-lg text-[#FAFAFA] mb-1">Hours</h4>
                      <p className="text-[#A1A1AA] text-sm font-body">Monday to Saturday</p>
                      <p className="text-[#A1A1AA] text-sm font-body">10:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </GlassCard>

                <GlassCard hover={false}>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-5 h-5 text-[#C9A86A] mt-1 shrink-0" />
                    <div>
                      <h4 className="font-heading text-lg text-[#FAFAFA] mb-1">Headquarters</h4>
                      <p className="text-[#A1A1AA] text-sm font-body">
                        1st floor, 52/A near Sony World Signal<br />
                        4th Block, Koramangala<br />
                        Bengaluru - 560034
                      </p>
                    </div>
                  </div>
                </GlassCard>
              </div>

              <div className="flex flex-wrap gap-4">
                <Button variant="primary" asChild>
                  <a href="https://wa.me/919148717036" target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="tel:+919148717036">
                    <Phone className="w-4 h-4" /> Call Now
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
