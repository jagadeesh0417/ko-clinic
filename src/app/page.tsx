import { Hero } from "@/components/home/Hero";
import { Introduction } from "@/components/home/Introduction";
import { AboutDoctor } from "@/components/home/AboutDoctor";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import ConditionsWeTreat from "@/components/home/ConditionsWeTreat";
import { FeaturedTreatments } from "@/components/home/FeaturedTreatments";
import { DoctorSection } from "@/components/home/DoctorSection";
import { BeforeAfterSlider } from "@/components/home/BeforeAfterSlider";
import MidPageCTA from "@/components/home/MidPageCTA";
import { Testimonials } from "@/components/home/Testimonials";
import { VideoLibrary } from "@/components/home/VideoLibrary";
import { InstagramSection } from "@/components/home/InstagramSection";
import { ClinicExperience } from "@/components/home/ClinicExperience";
import { GlobalLocations } from "@/components/home/GlobalLocations";
import { BlogSection } from "@/components/home/BlogSection";

export default function Home() {
  return (
    <>
      <Hero />
      <Introduction />
      <AboutDoctor />
      <WhyChooseUs />
      <ConditionsWeTreat />
      <FeaturedTreatments />
      <DoctorSection />
      <BeforeAfterSlider />
      <MidPageCTA />
      <Testimonials />
      <VideoLibrary />
      <InstagramSection />
      <ClinicExperience />
      <GlobalLocations />
      <BlogSection />
    </>
  );
}
