"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  LogIn,
  Stethoscope,
  CalendarCheck,
  Users,
  TrendingUp,
  FileSpreadsheet,
  CalendarDays,
  BarChart3,
  ArrowRight,
  Building2,
} from "lucide-react";

const features = [
  { icon: LogIn, title: "Partner Clinic Login", description: "Secure single sign-on for all your clinic management needs." },
  { icon: Stethoscope, title: "Doctor Management", description: "Manage specialist profiles, credentials, and availability." },
  { icon: CalendarCheck, title: "Appointment Management", description: "Oversee the full appointment lifecycle across your clinic." },
  { icon: Users, title: "Patient Requests", description: "Review and respond to incoming patient enquiries and referrals." },
  { icon: TrendingUp, title: "Lead Management", description: "Track, qualify, and convert leads with intelligent analytics." },
  { icon: FileSpreadsheet, title: "Revenue Reports", description: "Comprehensive financial reporting and revenue forecasting." },
  { icon: CalendarDays, title: "Treatment Packages", description: "Create and manage curated treatment packages for patients." },
  { icon: BarChart3, title: "Availability Calendar", description: "Real-time scheduling and resource allocation dashboard." },
];

export default function ClinicPortalPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[65vh] flex items-center justify-center overflow-hidden bg-deep-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(214,183,135,0.05),transparent_70%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-deep-black" />
        <div className="container-luxury px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <Building2 className="w-4 h-4 text-champagne" />
              <span className="font-button text-[10px] uppercase tracking-[0.3em] text-champagne">
                Partner Portal
              </span>
            </motion.div>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-ivory leading-[1.05] mb-6">
              Your Clinic,
              <br />
              <span className="champagne-gradient font-medium">Connected</span>
            </h1>
            <p className="font-body text-platinum text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-10">
              The partner portal for KO CLINICS&apos; curated network of elite clinics.
              Manage patients, appointments, and growth — all from one powerful dashboard.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#"
                className="group relative inline-flex items-center gap-2 bg-champagne text-deep-black px-8 py-3.5 text-xs font-button uppercase tracking-[0.2em] transition-all duration-500 hover:bg-ivory overflow-hidden"
              >
                <span className="relative z-10">Clinic Login</span>
                <ArrowRight className="relative z-10 w-3.5 h-3.5" />
                <span className="absolute inset-0 bg-ivory translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              </Link>
              <Link
                href="#"
                className="group relative inline-flex items-center gap-2 border border-ivory/30 text-ivory px-8 py-3.5 text-xs font-button uppercase tracking-[0.2em] transition-all duration-500 hover:border-champagne hover:text-champagne"
              >
                <span className="relative z-10">Become a Partner</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="section-luxury bg-ivory">
        <div className="container-luxury">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-16"
          >
            <span className="font-button text-[10px] uppercase tracking-[0.3em] text-champagne-dark mb-4 block">
              Clinic Dashboard
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-deep-black leading-[1.1] text-balance">
              Portal
              <br />
              <span className="font-medium">Capabilities</span>
            </h2>
            <p className="font-body text-mid-gray text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed">
              Everything your clinic needs to manage patient relationships and grow your practice within the KO CLINICS network.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="group p-5 sm:p-6 luxury-border card-luxury bg-warm-beige hover:bg-ivory transition-all duration-500"
                >
                  <div className="w-10 h-10 rounded-full bg-champagne/10 flex items-center justify-center mb-3 group-hover:bg-champagne/20 transition-all duration-500">
                    <Icon className="w-4 h-4 text-champagne-dark" />
                  </div>
                  <h3 className="font-heading text-base font-medium text-deep-black mb-1">{feature.title}</h3>
                  <p className="font-body text-xs text-mid-gray leading-relaxed">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-luxury bg-warm-beige">
        <div className="container-luxury text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light text-deep-black leading-[1.1] mb-4 text-balance">
              Interested in Joining
              <br />
              <span className="font-medium">Our Network?</span>
            </h2>
            <p className="font-body text-mid-gray text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
              KO CLINICS partners with the world&apos;s finest clinics. If your institution meets our standards, we want to hear from you.
            </p>
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-2 border-2 border-champagne text-champagne-dark px-8 py-3.5 text-xs font-button uppercase tracking-[0.2em] transition-all duration-500 hover:bg-champagne hover:text-deep-black"
            >
              <span className="relative z-10">Contact Our Partnerships Team</span>
              <ArrowRight className="relative z-10 w-3.5 h-3.5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
