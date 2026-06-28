"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Lock } from "lucide-react";

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen bg-[#080808] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <Lock className="w-12 h-12 text-[#C9A86A] mx-auto mb-4" />
          <h1 className="font-heading text-3xl text-[#FAFAFA]">Admin Login</h1>
          <p className="text-[#A1A1AA] text-sm mt-2 font-body">KO Clinic Dashboard</p>
        </div>
        <div className="bg-[#101010] border border-[rgba(201,168,106,0.2)] p-8 rounded-sm">
          <form className="space-y-6">
            <div>
              <label className="block text-sm text-[#A1A1AA] mb-2 font-body">Email</label>
              <input
                type="email"
                className="w-full bg-[#080808] border border-[rgba(201,168,106,0.2)] px-4 py-3 text-[#FAFAFA] text-sm focus:border-[#C9A86A] focus:outline-none transition-colors"
                placeholder="admin@koclinic.co"
              />
            </div>
            <div>
              <label className="block text-sm text-[#A1A1AA] mb-2 font-body">Password</label>
              <input
                type="password"
                className="w-full bg-[#080808] border border-[rgba(201,168,106,0.2)] px-4 py-3 text-[#FAFAFA] text-sm focus:border-[#C9A86A] focus:outline-none transition-colors"
                placeholder="Enter password"
              />
            </div>
            <Button variant="primary" className="w-full">
              Sign In
            </Button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
