"use client";

import { Button } from "@/components/ui/button";
import { CalendarCheck, Download } from "lucide-react";

const appointments = [
  { id: "#001", name: "Priya Sharma", treatment: "Hair Transplant", date: "2026-07-05", time: "10:00 AM", status: "Confirmed" },
  { id: "#002", name: "Rahul Verma", treatment: "Botox", date: "2026-07-06", time: "2:00 PM", status: "Pending" },
  { id: "#003", name: "Ananya Gupta", treatment: "PRP Therapy", date: "2026-07-07", time: "11:30 AM", status: "Confirmed" },
  { id: "#004", name: "Vikram Singh", treatment: "Thread Lift", date: "2026-07-08", time: "3:00 PM", status: "Completed" },
  { id: "#005", name: "Sneha Patel", treatment: "Skin Consultation", date: "2026-07-09", time: "9:30 AM", status: "Pending" },
];

export default function AppointmentsPage() {
  return (
    <div className="min-h-screen bg-[#080808] p-6 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-heading text-3xl text-[#FAFAFA]">Appointments</h1>
            <p className="text-[#A1A1AA] text-sm font-body">Manage patient appointments</p>
          </div>
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4" /> Export CSV
          </Button>
        </div>

        <div className="bg-[#101010] border border-[rgba(201,168,106,0.1)] rounded-sm overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[rgba(201,168,106,0.1)]">
                <th className="text-left p-4 text-xs text-[#A1A1AA] font-button uppercase tracking-wider">ID</th>
                <th className="text-left p-4 text-xs text-[#A1A1AA] font-button uppercase tracking-wider">Patient</th>
                <th className="text-left p-4 text-xs text-[#A1A1AA] font-button uppercase tracking-wider">Treatment</th>
                <th className="text-left p-4 text-xs text-[#A1A1AA] font-button uppercase tracking-wider">Date</th>
                <th className="text-left p-4 text-xs text-[#A1A1AA] font-button uppercase tracking-wider">Time</th>
                <th className="text-left p-4 text-xs text-[#A1A1AA] font-button uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((apt) => (
                <tr key={apt.id} className="border-b border-[rgba(255,255,255,0.05)] hover:bg-[rgba(255,255,255,0.02)] transition-colors">
                  <td className="p-4 text-sm text-[#A1A1AA] font-body">{apt.id}</td>
                  <td className="p-4 text-sm text-[#FAFAFA] font-body">{apt.name}</td>
                  <td className="p-4 text-sm text-[#A1A1AA] font-body">{apt.treatment}</td>
                  <td className="p-4 text-sm text-[#A1A1AA] font-body">{apt.date}</td>
                  <td className="p-4 text-sm text-[#A1A1AA] font-body">{apt.time}</td>
                  <td className="p-4">
                    <span className={`text-xs px-2 py-1 ${
                      apt.status === "Confirmed" ? "text-green-400 border border-green-400" :
                      apt.status === "Pending" ? "text-[#C9A86A] border border-[#C9A86A]" :
                      "text-blue-400 border border-blue-400"
                    }`}>
                      {apt.status}
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
