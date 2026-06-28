"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeading } from "@/components/ui/section-heading";
import { Globe, Microscope, Shield, Sparkles, Heart, Gem, Activity, Network } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
  { icon: Globe, title: "International Expertise", description: "Globally trained specialists with world-class credentials" },
  { icon: Microscope, title: "Advanced Technology", description: "State-of-the-art equipment and cutting-edge techniques" },
  { icon: Shield, title: "FDA Approved Products", description: "Only the safest, clinically-proven products" },
  { icon: Sparkles, title: "Luxury Patient Journey", description: "Premium care from consultation through recovery" },
  { icon: Heart, title: "Natural Enhancement", description: "Artful results that enhance your natural beauty" },
  { icon: Gem, title: "Combination Techniques", description: "Synergistic treatments for optimal outcomes" },
  { icon: Activity, title: "Regenerative Medicine", description: "Harnessing your body's healing potential" },
  { icon: Network, title: "Global Network", description: "Consultations across India and international locations" },
];

export function WhyChooseUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      cardsRef.current.forEach((card) => {
        if (!card) return;
        gsap.fromTo(
          card,
          { y: 40, opacity: 0, scale: 0.95 },
          { y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "power2.out",
            scrollTrigger: { trigger: card, start: "top 85%", toggleActions: "play none none none" },
          }
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative section-padding bg-[#3A281E]">
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-[#D6B787] blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[#C5A067] blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <SectionHeading title="Why Choose KO CLINIC" subtitle="Where Science Meets Art" />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-12 sm:mt-16">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={i}
                ref={(el) => { cardsRef.current[i] = el; }}
                className="group relative overflow-hidden rounded-2xl p-4 sm:p-5 md:p-6 bg-[rgba(43,28,21,0.5)] border border-[rgba(214,183,135,0.06)] hover:border-[rgba(214,183,135,0.2)] transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(214,183,135,0.03)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[rgba(214,183,135,0.08)] flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-[rgba(214,183,135,0.15)] transition-all duration-300">
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-[#D6B787]" />
                  </div>
                  <h3 className="font-heading text-sm md:text-base text-[#F6F0EA] mb-1.5 sm:mb-2 leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-[#8E7C6E] text-xs md:text-sm leading-relaxed font-body">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
