import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import FeaturesSection from "@/components/sections/FeaturesSection";
import { getEventsQueryOption } from "@/server/tanstack/hooks/events";
import { getQueryClient } from "@/server/tanstack/utils/getQueryClient";
import { homeFeatures } from "@/static/constants/features";

import EventsSection from "./_components/sections/EventsSection";
import HeroSection from "./_components/sections/HeroSection";
import TopSection from "./_components/sections/TopSection";

export default async function HomePage() {
  const queryClient = getQueryClient();

  await queryClient.prefetchQuery(getEventsQueryOption());

  const dehydratedState = dehydrate(queryClient);
  return (
    <>
      <TopSection />
      <HeroSection />
      <FeaturesSection features={homeFeatures} />
      <HydrationBoundary state={dehydratedState}>
        <EventsSection />
      </HydrationBoundary>
    </>
  );
}
