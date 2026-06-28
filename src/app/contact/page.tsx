"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/ui/glass-card"
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, ArrowRight } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "India",
    value: "+91 9148717036",
    href: "tel:+919148717036",
  },
  {
    icon: Phone,
    label: "India",
    value: "+91 7996191116",
    href: "tel:+917996191116",
  },
  {
    icon: Phone,
    label: "India",
    value: "+91 9535946916",
    href: "tel:+919535946916",
  },
  {
    icon: Phone,
    label: "Hong Kong",
    value: "+852 44608658",
    href: "tel:+85244608658",
  },
  {
    icon: Phone,
    label: "Philippines",
    value: "+63 9661688381",
    href: "tel:+639661688381",
  },
  {
    icon: Mail,
    label: "Email",
    value: "drvikas090909@gmail.com",
    href: "mailto:drvikas090909@gmail.com",
  },
]

const locations = [
  {
    icon: MapPin,
    label: "India Clinic",
    value: "Mumbai, Maharashtra",
  },
  {
    icon: MapPin,
    label: "Hong Kong Clinic",
    value: "Central, Hong Kong",
  },
  {
    icon: MapPin,
    label: "Philippines Clinic",
    value: "Makati, Manila",
  },
]

const hours = [
  { days: "Monday - Saturday", time: "10:00 AM – 7:00 PM" },
  { days: "Sunday", time: "By Appointment" },
]

const countries = ["India", "Hong Kong", "Philippines", "Singapore", "UAE", "United Kingdom", "United States", "Other"]
const clinics = ["India - Mumbai", "Hong Kong - Central", "Philippines - Makati"]
const treatments = [
  "Anti-Wrinkle Injections",
  "Dermal Fillers",
  "Skin Booster",
  "PRP Therapy",
  "Microneedling",
  "Laser Resurfacing",
  "Chemical Peel",
  "HydraFacial",
  "Body Contouring",
  "Hair Restoration",
  "IV Therapy",
  "Other",
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    country: "",
    preferredClinic: "",
    treatment: "",
    date: "",
    time: "",
    message: "",
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="relative min-h-screen bg-[#241710]">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 pointer-events-none" />

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-5xl md:text-7xl font-light text-[#F6F0EA] tracking-wide mb-4">
            Contact <span className="font-medium text-[#D6B787]">Us</span>
          </h1>
          <p className="text-lg md:text-xl text-[#E8DDD1]/70 max-w-xl mx-auto font-light">
            Start your transformation journey
          </p>
        </motion.div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 pb-32">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Left – Info */}
          <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-6">
            <motion.div variants={itemVariants}>
              <GlassCard className="p-6 space-y-5">
                <h2 className="text-xl font-medium text-[#D6B787] flex items-center gap-2">
                  <Phone className="w-5 h-5" /> Contact Numbers
                </h2>
                <div className="space-y-3">
                  {contactInfo.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-3 text-[#E8DDD1]/80 hover:text-[#D6B787] transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-full bg-[#D6B787]/10 flex items-center justify-center shrink-0 group-hover:bg-[#D6B787]/20 transition-colors">
                        <item.icon className="w-4 h-4 text-[#D6B787]" />
                      </div>
                      <div>
                        <p className="text-xs text-[#E8DDD1]/50">{item.label}</p>
                        <p className="text-sm">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </GlassCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <GlassCard className="p-6 space-y-5">
                <h2 className="text-xl font-medium text-[#D6B787] flex items-center gap-2">
                  <MapPin className="w-5 h-5" /> Locations
                </h2>
                <div className="space-y-3">
                  {locations.map((item) => (
                    <div key={item.label} className="flex items-center gap-3 text-[#E8DDD1]/80">
                      <div className="w-9 h-9 rounded-full bg-[#D6B787]/10 flex items-center justify-center shrink-0">
                        <item.icon className="w-4 h-4 text-[#D6B787]" />
                      </div>
                      <div>
                        <p className="text-xs text-[#E8DDD1]/50">{item.label}</p>
                        <p className="text-sm">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>

            <motion.div variants={itemVariants}>
              <GlassCard className="p-6 space-y-5">
                <h2 className="text-xl font-medium text-[#D6B787] flex items-center gap-2">
                  <Clock className="w-5 h-5" /> Clinic Hours
                </h2>
                <div className="space-y-2">
                  {hours.map((item) => (
                    <div key={item.days} className="flex justify-between text-sm text-[#E8DDD1]/80">
                      <span>{item.days}</span>
                      <span className="text-[#D6B787]/80">{item.time}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            </motion.div>
          </motion.div>

          {/* Right – Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <GlassCard className="p-6 md:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-16 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#D6B787]/20 flex items-center justify-center mx-auto">
                    <Send className="w-7 h-7 text-[#D6B787]" />
                  </div>
                  <h3 className="text-2xl font-medium text-[#F6F0EA]">Thank You</h3>
                  <p className="text-[#E8DDD1]/60 max-w-xs mx-auto">
                    Your consultation request has been received. We will reach out within 24 hours.
                  </p>
                  <Button
                    variant="outline"
                    className="mt-4 border-[#D6B787]/40 text-[#D6B787] hover:bg-[#D6B787]/10"
                    onClick={() => {
                      setSubmitted(false)
                      setForm({
                        name: "",
                        phone: "",
                        email: "",
                        country: "",
                        preferredClinic: "",
                        treatment: "",
                        date: "",
                        time: "",
                        message: "",
                      })
                    }}
                  >
                    Send Another Request
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <h2 className="text-2xl font-medium text-[#D6B787] mb-2">Book a Consultation</h2>
                  <p className="text-sm text-[#E8DDD1]/50 mb-6">
                    Fill in the form and our team will get back to you shortly.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <InputField
                      label="Name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                    />
                    <InputField
                      label="Phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      type="tel"
                      required
                    />
                  </div>

                  <InputField
                    label="Email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    type="email"
                  />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <SelectField
                      label="Country"
                      name="country"
                      value={form.country}
                      onChange={handleSelectChange}
                      options={countries}
                      placeholder="Select country"
                      required
                    />
                    <SelectField
                      label="Preferred Clinic"
                      name="preferredClinic"
                      value={form.preferredClinic}
                      onChange={handleSelectChange}
                      options={clinics}
                      placeholder="Select clinic"
                      required
                    />
                  </div>

                  <SelectField
                    label="Treatment"
                    name="treatment"
                    value={form.treatment}
                    onChange={handleSelectChange}
                    options={treatments}
                    placeholder="Select treatment"
                    required
                  />

                  <div className="grid sm:grid-cols-2 gap-4">
                    <InputField
                      label="Preferred Date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      type="date"
                      required
                    />
                    <InputField
                      label="Preferred Time"
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      type="time"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-[#E8DDD1]/60 mb-1.5">Message (Optional)</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                      placeholder="Any specific concerns or questions..."
                      rows={3}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#F6F0EA] placeholder:text-[#E8DDD1]/30 focus:outline-none focus:border-[#D6B787]/60 focus:ring-1 focus:ring-[#D6B787]/20 transition-all resize-none text-sm backdrop-blur-md"
                    />
                  </div>

                  <p className="text-xs text-[#E8DDD1]/40 leading-relaxed">
                    By submitting this form, you consent to KO CLINIC collecting your personal data for the purpose of
                    processing your consultation request. Your information will be handled in accordance with our
                    Privacy Policy.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button
                      type="submit"
                      className="flex-1 bg-[#D6B787] hover:bg-[#C5A067] text-[#241710] font-medium rounded-xl h-12 transition-all"
                    >
                      <Send className="w-4 h-4 mr-2" /> Book Consultation
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1 border-[#D6B787]/40 text-[#D6B787] hover:bg-[#D6B787]/10 rounded-xl h-12"
                      asChild
                    >
                      <a href="https://wa.me/919148717036" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp
                      </a>
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="flex-1 border-[#D6B787]/40 text-[#D6B787] hover:bg-[#D6B787]/10 rounded-xl h-12"
                      asChild
                    >
                      <a href="tel:+919148717036">
                        <Phone className="w-4 h-4 mr-2" /> Call Now
                      </a>
                    </Button>
                  </div>
                </form>
              )}
            </GlassCard>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

function InputField({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  placeholder?: string
  type?: string
  required?: boolean
}) {
  return (
    <div>
      <label className="block text-sm text-[#E8DDD1]/60 mb-1.5">
        {label} {required && <span className="text-[#D6B787]">*</span>}
      </label>
      <input
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={type}
        required={required}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#F6F0EA] placeholder:text-[#E8DDD1]/30 focus:outline-none focus:border-[#D6B787]/60 focus:ring-1 focus:ring-[#D6B787]/20 transition-all text-sm backdrop-blur-md"
      />
    </div>
  )
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  placeholder,
  required = false,
}: {
  label: string
  name: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void
  options: string[]
  placeholder?: string
  required?: boolean
}) {
  return (
    <div>
      <label className="block text-sm text-[#E8DDD1]/60 mb-1.5">
        {label} {required && <span className="text-[#D6B787]">*</span>}
      </label>
      <select
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-[#F6F0EA] focus:outline-none focus:border-[#D6B787]/60 focus:ring-1 focus:ring-[#D6B787]/20 transition-all text-sm backdrop-blur-md appearance-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='%23D6B787' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 12px center",
        }}
      >
        {placeholder && (
          <option value="" disabled className="bg-[#2B1C15] text-[#E8DDD1]/50">
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-[#2B1C15] text-[#F6F0EA]">
            {opt}
          </option>
        ))}
      </select>
    </div>
  )
}
