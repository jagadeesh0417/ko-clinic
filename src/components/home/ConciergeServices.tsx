"use client";

import { motion } from "framer-motion";
import { Plane, Hotel, Shield, Heart, Car, UserCheck, Clock, MessageCircle } from "lucide-react";

const services = [
  { icon: Plane, title: "Travel Arrangements", description: "First-class flights, private transfers, and visa assistance for a seamless journey." },
  { icon: Hotel, title: "Luxury Accommodation", description: "Curated 5-star hotels and private residences near your chosen clinic." },
  { icon: UserCheck, title: "Personal Concierge", description: "A dedicated point of contact for every step of your medical journey." },
  { icon: Shield, title: "Treatment Coordination", description: "End-to-end scheduling, medical records, and multi-lingual support." },
  { icon: Heart, title: "Wellness Recovery", description: "Post-treatment recovery programs, nutrition planning, and aftercare." },
  { icon: Car, title: "Private Transport", description: "Chauffeur-driven cars and medical transport for all appointments." },
  { icon: Clock, title: "24/7 Support", description: "Round-the-clock assistance from our global concierge team." },
  { icon: MessageCircle, title: "Virtual Consultations", description: "Pre-travel video consultations with your chosen specialist." },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.06 } as any,
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } as any,
  },
};

export function ConciergeServices() {
  return (
    <section className="section-luxury bg-ivory">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="font-button text-[10px] uppercase tracking-[0.3em] text-champagne-dark mb-4 block">
            White-Glove Service
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-deep-black leading-[1.1] text-balance">
            Medical Concierge
            <br />
            <span className="font-medium">Services</span>
          </h2>
          <p className="font-body text-mid-gray text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed">
            Beyond treatment — a complete ecosystem of care designed for your comfort, privacy, and peace of mind.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={itemVariants}
                className="group p-6 sm:p-8 luxury-border card-luxury bg-warm-beige hover:bg-ivory transition-all duration-500"
              >
                <div className="w-10 h-10 rounded-full bg-champagne/10 flex items-center justify-center mb-4 group-hover:bg-champagne/20 transition-all duration-500">
                  <Icon className="w-4 h-4 text-champagne-dark" />
                </div>
                <h3 className="font-heading text-lg sm:text-xl font-medium text-deep-black mb-2">
                  {service.title}
                </h3>
                <p className="font-body text-sm text-mid-gray leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
