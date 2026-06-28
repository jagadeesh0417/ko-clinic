"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Lock,
  UserPlus,
  KeyRound,
  LayoutDashboard,
  Calendar,
  FileText,
  Clock,
  Bookmark,
  MessageSquare,
  CreditCard,
  Settings,
  Bell,
  ArrowRight,
  Shield,
} from "lucide-react";

const features = [
  { icon: Lock, title: "Secure Login", description: "Multi-factor authenticated access to your personal health portal." },
  { icon: UserPlus, title: "Register Account", description: "Create your secure patient profile in minutes." },
  { icon: KeyRound, title: "Forgot Password", description: "Quick and secure password recovery via email or SMS." },
  { icon: LayoutDashboard, title: "Dashboard", description: "Personalised overview of your healthcare journey at a glance." },
  { icon: Calendar, title: "Upcoming Consultations", description: "View, reschedule, or confirm your appointments." },
  { icon: FileText, title: "Medical Records", description: "Access your complete medical history and treatment plans." },
  { icon: Clock, title: "Treatment History", description: "Chronological record of every procedure and consultation." },
  { icon: Bookmark, title: "Saved Clinics", description: "Your shortlisted clinics and destinations across the globe." },
  { icon: MessageSquare, title: "Enquiries", description: "Track all your enquiries and clinic responses in one place." },
  { icon: Bell, title: "Messages", description: "Secure messaging with your concierge and healthcare providers." },
  { icon: CreditCard, title: "Billing & Payments", description: "Transparent invoices, estimates, and secure payment gateway." },
  { icon: Settings, title: "Profile Settings", description: "Manage your personal information, preferences, and privacy." },
];

export default function PatientPortalPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-deep-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(214,183,135,0.06),transparent_70%)]" />
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
              <Shield className="w-4 h-4 text-champagne" />
              <span className="font-button text-[10px] uppercase tracking-[0.3em] text-champagne">
                Secure Patient Portal
              </span>
            </motion.div>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-ivory leading-[1.05] mb-6">
              Your Health,
              <br />
              <span className="champagne-gradient font-medium">Your Command</span>
            </h1>
            <p className="font-body text-platinum text-base sm:text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed mb-10">
              A private, secure portal designed for the discerning patient.
              Manage every aspect of your healthcare journey — from first enquiry to lifelong wellness.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="#"
                className="group relative inline-flex items-center gap-2 bg-champagne text-deep-black px-8 py-3.5 text-xs font-button uppercase tracking-[0.2em] transition-all duration-500 hover:bg-ivory overflow-hidden"
              >
                <span className="relative z-10">Login to Your Account</span>
                <Lock className="relative z-10 w-3.5 h-3.5" />
                <span className="absolute inset-0 bg-ivory translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
              </Link>
              <Link
                href="#"
                className="group relative inline-flex items-center gap-2 border border-ivory/30 text-ivory px-8 py-3.5 text-xs font-button uppercase tracking-[0.2em] transition-all duration-500 hover:border-champagne hover:text-champagne"
              >
                <UserPlus className="relative z-10 w-3.5 h-3.5" />
                <span className="relative z-10">Register Now</span>
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
              Everything You Need
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-deep-black leading-[1.1] text-balance">
              Portal
              <br />
              <span className="font-medium">Features</span>
            </h2>
            <p className="font-body text-mid-gray text-sm sm:text-base max-w-xl mx-auto mt-4 leading-relaxed">
              Complete control over your healthcare journey — from first enquiry to lifelong wellness.
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
      <section className="section-luxury bg-deep-black relative overflow-hidden">
        <div className="absolute inset-0 noise-overlay opacity-20" />
        <div className="container-luxury relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-light text-ivory leading-[1.1] mb-4 text-balance">
              Ready to Take Control of
              <br />
              <span className="font-medium champagne-gradient">Your Healthcare Journey?</span>
            </h2>
            <p className="font-body text-platinum-dark text-sm sm:text-base max-w-lg mx-auto mb-8 leading-relaxed">
              Register in minutes. Your dedicated concierge will personally welcome you to the KO CLINICS experience.
            </p>
            <Link
              href="#"
              className="group relative inline-flex items-center gap-2 bg-champagne text-deep-black px-8 py-3.5 text-xs font-button uppercase tracking-[0.2em] transition-all duration-500 hover:bg-ivory overflow-hidden"
            >
              <span className="relative z-10">Create Your Account</span>
              <ArrowRight className="relative z-10 w-3.5 h-3.5" />
              <span className="absolute inset-0 bg-ivory translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
