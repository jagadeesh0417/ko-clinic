"use client";

import { Button } from "@/components/ui/button";
import { Download, Users } from "lucide-react";

const leads = [
  { name: "Priya Sharma", email: "priya@email.com", phone: "+91 9876543210", treatment: "Hair Transplant", date: "2026-06-27", status: "New" },
  { name: "Rahul Verma", email: "rahul@email.com", phone: "+91 8765432109", treatment: "Botox", date: "2026-06-26", status: "Contacted" },
  { name: "Ananya Gupta", email: "ananya@email.com", phone: "+91 7654321098", treatment: "PRP Therapy", date: "2026-06-25", status: "New" },
  { name: "Vikram Singh", email: "vikram@email.com", phone: "+91 6543210987", treatment: "Thread Lift", date: "2026-06-24", status: "Converted" },
  { name: "Sneha Patel", email: "sneha@email.com", phone: "+91 5432109876", treatment: "Skin Consultation", date: "2026-06-23", status: "Closed" },
];

export default function LeadsPage() {
  return (
    <div className="min-h-screen bg-[#080808] p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-heading text-3xl text-[#FAFAFA]">Leads</h1>
            <p className="text-[#A1A1AA] text-sm font-body">Manage incoming patient inquiries</p>
          </div>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4" /> Export CSV
          </Button>
        </div>

        <div className="bg-[#101010] border border-[rgba(201,168,106,0.1)] rounded-sm overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[rgba(201,168,106,0.1)]">
                <th className="text-left p-4 text-xs text-[#A1A1AA] font-button uppercase tracking-wider">Name</th>
                <th className="text-left p-4 text-xs text-[#A1A1AA] font-button uppercase tracking-wider">Contact</th>
                <th className="text-left p-4 text-xs text-[#A1A1AA] font-button uppercase tracking-wider">Treatment</th>
                <th className="text-left p-4 text-xs text-[#A1A1AA] font-button uppercase tracking-wider">Date</th>
                <th className="text-left p-4 text-xs text-[#A1A1AA] font-button uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.email} className="border-b border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                  <td className="p-4">
                    <p className="text-sm text-[#FAFAFA] font-body">{lead.name}</p>
                  </td>
                  <td className="p-4">
                    <p className="text-sm text-[#A1A1AA] font-body">{lead.email}</p>
                    <p className="text-xs text-[#A1A1AA] font-body">{lead.phone}</p>
                  </td>
                  <td className="p-4 text-sm text-[#A1A1AA] font-body">{lead.treatment}</td>
                  <td className="p-4 text-sm text-[#A1A1AA] font-body">{lead.date}</td>
                  <td className="p-4">
                    <span className={`text-xs px-2 py-1 ${
                      lead.status === "New" ? "text-[#C9A86A] border border-[#C9A86A]" :
                      lead.status === "Contacted" ? "text-blue-400 border border-blue-400" :
                      lead.status === "Converted" ? "text-green-400 border border-green-400" :
                      "text-[#A1A1AA] border border-[#A1A1AA]"
                    }`}>
                      {lead.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
