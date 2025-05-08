import FeaturesSection from "@/components/sections/FeaturesSection";
import { homeFeatures } from "@/static/constants/features";

import EventsSection from "./_components/sections/EventsSection";
import HeroSection from "./_components/sections/HeroSection";
import TopSection from "./_components/sections/TopSection";

export default function HomePage() {
  return (
    <>
      <TopSection />
      <HeroSection />
      <FeaturesSection features={homeFeatures} />
      <EventsSection />
    </>
  );
}
