"use client"

import { SectionHeading } from "@/components/ui/section-heading"
import { GlassCard } from "@/components/ui/glass-card"
import { Globe, Microscope, Shield, Sparkles, Heart, Gem, Activity, Network } from "lucide-react"

const features = [
  {
    icon: Globe,
    title: "International Expertise",
    description: "Globally trained specialists with world-class credentials",
  },
  {
    icon: Microscope,
    title: "Advanced Technology",
    description: "State-of-the-art equipment and cutting-edge techniques",
  },
  {
    icon: Shield,
    title: "FDA Approved Products",
    description: "Only the safest, clinically-proven products",
  },
  {
    icon: Sparkles,
    title: "Luxury Patient Journey",
    description: "Premium care from consultation through recovery",
  },
  {
    icon: Heart,
    title: "Natural Enhancement",
    description: "Artful results that enhance your natural beauty",
  },
  {
    icon: Gem,
    title: "Combination Techniques",
    description: "Synergistic treatments for optimal outcomes",
  },
  {
    icon: Activity,
    title: "Regenerative Medicine",
    description: "Harnessing your body's healing potential",
  },
  {
    icon: Network,
    title: "Global Network",
    description: "Consultations across India and international locations",
  },
]

export function WhyChooseUs() {
  return (
    <section className="relative py-24 bg-[#3A281E]">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Why Choose KO CLINIC"
          subtitle="Where Science Meets Art"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <GlassCard key={index} delay={index * 0.1} className="flex flex-col items-start text-left">
                <Icon className="w-10 h-10 text-[#D6B787] mb-4" />
                <h3 className="text-lg font-semibold text-[#F6F0EA] mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-[#8E7C6E] leading-relaxed">
                  {feature.description}
                </p>
              </GlassCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}
