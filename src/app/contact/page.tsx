"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/section-heading";
import { GlassCard } from "@/components/ui/glass-card";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-[#2A1A12]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(213,185,138,0.06),transparent_70%)]" />
        <div className="container-custom px-6 relative z-10">
          <SectionHeading title="Contact Us" subtitle="Get In Touch" description="Start your transformation journey today" />
        </div>
      </section>

      <section className="section-padding bg-[#3C281D] pt-0">
        <div className="container-custom px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="font-heading text-3xl text-[#F5F0EA] mb-8">Send Us a Message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-[#7D6B5A] mb-2 font-body">Name *</label>
                    <input type="text" className="w-full bg-[#22160F] border border-[rgba(213,185,138,0.15)] rounded-xl px-4 py-3 text-[#F5F0EA] text-sm focus:border-[#C8A96B] focus:outline-none transition-colors" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="block text-sm text-[#7D6B5A] mb-2 font-body">Phone *</label>
                    <input type="tel" className="w-full bg-[#22160F] border border-[rgba(213,185,138,0.15)] rounded-xl px-4 py-3 text-[#F5F0EA] text-sm focus:border-[#C8A96B] focus:outline-none transition-colors" placeholder="Your phone" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-[#7D6B5A] mb-2 font-body">Email *</label>
                  <input type="email" className="w-full bg-[#22160F] border border-[rgba(213,185,138,0.15)] rounded-xl px-4 py-3 text-[#F5F0EA] text-sm focus:border-[#C8A96B] focus:outline-none transition-colors" placeholder="Your email" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm text-[#7D6B5A] mb-2 font-body">Country</label>
                    <input type="text" className="w-full bg-[#22160F] border border-[rgba(213,185,138,0.15)] rounded-xl px-4 py-3 text-[#F5F0EA] text-sm focus:border-[#C8A96B] focus:outline-none transition-colors" placeholder="Your country" />
                  </div>
                  <div>
                    <label className="block text-sm text-[#7D6B5A] mb-2 font-body">Preferred Clinic</label>
                    <select className="w-full bg-[#22160F] border border-[rgba(213,185,138,0.15)] rounded-xl px-4 py-3 text-[#7D6B5A] text-sm focus:border-[#C8A96B] focus:outline-none transition-colors">
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
                    <label className="block text-sm text-[#7D6B5A] mb-2 font-body">Treatment</label>
                    <input type="text" className="w-full bg-[#22160F] border border-[rgba(213,185,138,0.15)] rounded-xl px-4 py-3 text-[#F5F0EA] text-sm focus:border-[#C8A96B] focus:outline-none transition-colors" placeholder="Treatment" />
                  </div>
                  <div>
                    <label className="block text-sm text-[#7D6B5A] mb-2 font-body">Preferred Date</label>
                    <input type="date" className="w-full bg-[#22160F] border border-[rgba(213,185,138,0.15)] rounded-xl px-4 py-3 text-[#F5F0EA] text-sm focus:border-[#C8A96B] focus:outline-none transition-colors" />
                  </div>
                  <div>
                    <label className="block text-sm text-[#7D6B5A] mb-2 font-body">Time</label>
                    <input type="time" className="w-full bg-[#22160F] border border-[rgba(213,185,138,0.15)] rounded-xl px-4 py-3 text-[#F5F0EA] text-sm focus:border-[#C8A96B] focus:outline-none transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-[#7D6B5A] mb-2 font-body">Message</label>
                  <textarea rows={4} className="w-full bg-[#22160F] border border-[rgba(213,185,138,0.15)] rounded-xl px-4 py-3 text-[#F5F0EA] text-sm focus:border-[#C8A96B] focus:outline-none transition-colors resize-none" placeholder="Your message..." />
                </div>
                <p className="text-xs text-[#7D6B5A] font-body">Submitting this form does not confirm an appointment. Our team will contact you to schedule and provide further details.</p>
                <Button variant="primary" size="lg" className="w-full md:w-auto"><Send className="w-4 h-4" /> Book Consultation</Button>
              </form>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="space-y-8">
              <h2 className="font-heading text-3xl text-[#F5F0EA] mb-8">Contact Information</h2>
              <div className="space-y-6">
                {[
                  { icon: Mail, title: "Email", content: "drvikas090909@gmail.com", href: "mailto:drvikas090909@gmail.com" },
                  { icon: Phone, title: "India Helplines", content: ["+91 9148717036", "+91 7996191116", "+91 9535946916"] },
                  { icon: Phone, title: "International", content: ["Hong Kong: +852 44608658", "Philippines: +63 9661688381"] },
                  { icon: Clock, title: "Hours", content: "Monday - Saturday, 10:00 AM - 7:00 PM" },
                  { icon: MapPin, title: "Headquarters", content: "1st floor, 52/A near Sony World Signal, 4th Block, Koramangala, Bengaluru - 560034" },
                ].map((item, i) => (
                  <GlassCard key={item.title} hover={false} delay={i * 0.05}>
                    <div className="flex items-start gap-4">
                      <item.icon className="w-5 h-5 text-[#C8A96B] mt-1 shrink-0" />
                      <div>
                        <h4 className="font-heading text-lg text-[#F5F0EA] mb-1">{item.title}</h4>
                        {Array.isArray(item.content) ? item.content.map((c, j) => (
                          <p key={j} className="text-[#7D6B5A] text-sm font-body">{c}</p>
                        )) : (
                          <a href={item.href} className="text-[#7D6B5A] text-sm hover:text-[#D5B98A] transition-colors font-body">{item.content}</a>
                        )}
                      </div>
                    </div>
                  </GlassCard>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <Button variant="primary" asChild><a href="https://wa.me/919148717036" target="_blank" rel="noopener noreferrer"><MessageCircle className="w-4 h-4" /> WhatsApp</a></Button>
                <Button variant="outline" asChild><a href="tel:+919148717036"><Phone className="w-4 h-4" /> Call Now</a></Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
