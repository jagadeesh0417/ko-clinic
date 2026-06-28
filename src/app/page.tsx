import { Hero } from "@/components/home/Hero";
import { GlobalPresence } from "@/components/home/GlobalPresence";
import { FeaturedDestinations } from "@/components/home/FeaturedDestinations";
import { ConciergeServices } from "@/components/home/ConciergeServices";
import { LuxuryJourney } from "@/components/home/LuxuryJourney";
import { WhyKO } from "@/components/home/WhyKO";
import { PartnerNetwork } from "@/components/home/PartnerNetwork";
import { DoctorShowcase } from "@/components/home/DoctorShowcase";
import { SuccessStories } from "@/components/home/SuccessStories";
import { Testimonials } from "@/components/home/Testimonials";
import { Awards } from "@/components/home/Awards";
import { GlobalStats } from "@/components/home/GlobalStats";
import { InteractiveGlobe } from "@/components/home/InteractiveGlobe";
import { Insights } from "@/components/home/Insights";
import { FAQ } from "@/components/home/FAQ";

export default function Home() {
  return (
    <>
      <Hero />
      <GlobalPresence />
      <FeaturedDestinations />
      <ConciergeServices />
      <LuxuryJourney />
      <WhyKO />
      <PartnerNetwork />
      <DoctorShowcase />
      <SuccessStories />
      <Testimonials />
      <Awards />
      <GlobalStats />
      <InteractiveGlobe />
      <Insights />
      <FAQ />
    </>
  );
}
