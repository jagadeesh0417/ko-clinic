"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { 
  LayoutDashboard, CalendarCheck, Users, FileText, 
  Image, MessageSquare, Settings, LogOut, 
  TrendingUp, Activity, Star, Eye 
} from "lucide-react";

const stats = [
  { label: "Total Leads", value: "156", change: "+12%", icon: Users, color: "#C9A86A" },
  { label: "Appointments", value: "89", change: "+8%", icon: CalendarCheck, color: "#D4AF37" },
  { label: "Blog Posts", value: "24", change: "+3", icon: FileText, color: "#C9A86A" },
  { label: "Page Views", value: "12.4K", change: "+22%", icon: Eye, color: "#D4AF37" },
];

const navItems = [
  { label: "Appointments", href: "/admin/appointments", icon: CalendarCheck },
  { label: "Leads", href: "/admin/leads", icon: Users },
  { label: "Blog", href: "/admin/blog", icon: FileText },
  { label: "Treatments", href: "/admin/treatments", icon: Activity },
  { label: "Gallery", href: "/admin/gallery", icon: Image },
  { label: "Testimonials", href: "/admin/testimonials", icon: Star },
  { label: "Settings", href: "#", icon: Settings },
];

const recentLeads = [
  { name: "Priya Sharma", treatment: "Hair Transplant", date: "2026-06-27", status: "New" },
  { name: "Rahul Verma", treatment: "Botox", date: "2026-06-26", status: "Contacted" },
  { name: "Ananya Gupta", treatment: "PRP Therapy", date: "2026-06-25", status: "New" },
  { name: "Vikram Singh", treatment: "Thread Lift", date: "2026-06-24", status: "Converted" },
];

export default function AdminDashboard() {
  return (
    <div className="min-h-screen bg-[#080808]">
      <div className="flex">
        <aside className="w-64 min-h-screen bg-[#101010] border-r border-[rgba(201,168,106,0.1)] p-6 hidden lg:block">
          <div className="mb-8">
            <h2 className="font-heading text-2xl text-[#FAFAFA]">
              KO <span className="text-gradient-gold">Admin</span>
            </h2>
          </div>
          <nav className="space-y-2">
            <Link
              href="/admin"
              className="flex items-center gap-3 px-4 py-3 text-sm text-[#C9A86A] bg-[rgba(201,168,106,0.1)] border-l-2 border-[#C9A86A]"
            >
              <LayoutDashboard className="w-4 h-4" /> Dashboard
            </Link>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 px-4 py-3 text-sm text-[#A1A1AA] hover:text-[#FAFAFA] hover:bg-[rgba(255,255,255,0.03)] transition-all"
              >
                <item.icon className="w-4 h-4" /> {item.label}
              </Link>
            ))}
          </nav>
          <div className="absolute bottom-6">
            <button className="flex items-center gap-3 px-4 py-3 text-sm text-[#A1A1AA] hover:text-[#FAFAFA] transition-all">
              <LogOut className="w-4 h-4" /> Sign Out
            </button>
          </div>
        </aside>

        <main className="flex-1 p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="font-heading text-3xl text-[#FAFAFA] mb-2">Dashboard</h1>
              <p className="text-[#A1A1AA] text-sm font-body mb-8">Welcome back to KO Clinic admin panel</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#101010] border border-[rgba(201,168,106,0.1)] p-6 rounded-sm"
                >
                  <div className="flex items-center justify-between mb-4">
                    <stat.icon className="w-5 h-5" style={{ color: stat.color }} />
                    <span className="text-xs text-green-500 font-body">{stat.change}</span>
                  </div>
                  <p className="font-heading text-3xl text-[#FAFAFA]">{stat.value}</p>
                  <p className="text-[#A1A1AA] text-sm font-body mt-1">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="bg-[#101010] border border-[rgba(201,168,106,0.1)] p-6 rounded-sm"
              >
                <h2 className="font-heading text-xl text-[#FAFAFA] mb-4">Recent Leads</h2>
                <div className="space-y-4">
                  {recentLeads.map((lead) => (
                    <div key={lead.name} className="flex items-center justify-between py-2 border-b border-[rgba(255,255,255,0.05)] last:border-0">
                      <div>
                        <p className="text-sm text-[#FAFAFA] font-body">{lead.name}</p>
                        <p className="text-xs text-[#A1A1AA] font-body">{lead.treatment}</p>
                      </div>
                      <div className="text-right">
                        <span className={`text-xs px-2 py-1 ${
                          lead.status === "New" ? "text-[#C9A86A] border border-[#C9A86A]" :
                          lead.status === "Contacted" ? "text-blue-400 border border-blue-400" :
                          "text-green-400 border border-green-400"
                        }`}>
                          {lead.status}
                        </span>
                        <p className="text-xs text-[#A1A1AA] mt-1 font-body">{lead.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-[#101010] border border-[rgba(201,168,106,0.1)] p-6 rounded-sm"
              >
                <h2 className="font-heading text-xl text-[#FAFAFA] mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "New Blog Post", href: "/admin/blog", icon: FileText },
                    { label: "View Leads", href: "/admin/leads", icon: Users },
                    { label: "Appointments", href: "/admin/appointments", icon: CalendarCheck },
                    { label: "Add Treatment", href: "/admin/treatments", icon: Activity },
                  ].map((action) => (
                    <Link
                      key={action.label}
                      href={action.href}
                      className="flex flex-col items-center gap-2 p-4 border border-[rgba(201,168,106,0.1)] hover:border-[rgba(201,168,106,0.3)] transition-all text-center group"
                    >
                      <action.icon className="w-6 h-6 text-[#A1A1AA] group-hover:text-[#C9A86A] transition-colors" />
                      <span className="text-xs text-[#A1A1AA] group-hover:text-[#FAFAFA] transition-colors font-button uppercase tracking-wider">
                        {action.label}
                      </span>
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
