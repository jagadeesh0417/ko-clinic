"use client";

import { motion } from "framer-motion";
import { images } from "@/lib/images";

const doctors = [
  { name: "Dr. Alistair Finch", specialty: "Cardiothoracic Surgery", location: "London", image: images.doctors.cardiology },
  { name: "Dr. Mei-Lin Chen", specialty: "Orthopedic Surgery", location: "Singapore", image: images.doctors.orthopedics },
  { name: "Dr. Elena Vasquez", specialty: "Aesthetic Medicine", location: "Dubai", image: images.doctors.aesthetics },
  { name: "Dr. James Harrington", specialty: "Oncology", location: "New York", image: images.doctors.oncology },
  { name: "Dr. Sophie Laurent", specialty: "Neurology", location: "Paris", image: images.doctors.neurology },
  { name: "Dr. Raj Kapoor", specialty: "Integrative Wellness", location: "Sydney", image: images.doctors.wellness },
];

export function DoctorShowcase() {
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
            Leading Specialists
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-deep-black leading-[1.1] text-balance">
            World-Class
            <br />
            <span className="font-medium">Medical Minds</span>
          </h2>
          <p className="font-body text-mid-gray text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed">
            Pioneers in their fields, united by a shared commitment to excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doc, i) => (
            <motion.div
              key={doc.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-pointer"
            >
              <div className="relative h-[320px] overflow-hidden card-luxury luxury-border mb-4">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  style={{ backgroundImage: `url(${doc.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-champagne text-xs font-button uppercase tracking-[0.15em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    View Profile
                  </span>
                </div>
              </div>
              <h3 className="font-heading text-lg font-medium text-deep-black">{doc.name}</h3>
              <p className="font-body text-sm text-mid-gray">{doc.specialty}</p>
              <p className="font-body text-xs text-champagne-dark uppercase tracking-[0.1em] mt-0.5">{doc.location}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
