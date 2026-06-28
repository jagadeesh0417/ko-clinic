import { Hero } from "@/components/home/Hero";
import { Introduction } from "@/components/home/Introduction";
import { AboutDoctor } from "@/components/home/AboutDoctor";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FeaturedTreatments } from "@/components/home/FeaturedTreatments";
import { Testimonials } from "@/components/home/Testimonials";
import { ClinicExperience } from "@/components/home/ClinicExperience";
import { GlobalLocations } from "@/components/home/GlobalLocations";
import { MidPageCTA } from "@/components/home/MidPageCTA";
import { BlogSection } from "@/components/home/BlogSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <AboutDoctor />
      <WhyChooseUs />
      <FeaturedTreatments />
      <MidPageCTA />
      <Testimonials />
      <ClinicExperience />
      <GlobalLocations />
      <BlogSection />
    </>
  );
}
