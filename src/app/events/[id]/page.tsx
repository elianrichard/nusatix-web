import MainLayout from "@/components/MainLayout";
import FeaturesSection from "@/components/sections/FeaturesSection";

import { eventFeatures } from "@/static/constants/features";

import EventDetail from "./_components/EventDetail";

const EventDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  // const eventItem = events.find((event) => event.id.toString() === id);
  // if (!eventItem) redirect(NavigationRoutes.HOME);

  return (
    <>
      <MainLayout>
        <EventDetail id={id} />
      </MainLayout>
      <FeaturesSection
        title={
          <>
            What you&apos;ll get with{" "}
            <span className="text-primary">Nusatix</span>:
          </>
        }
        features={eventFeatures}
      />
    </>
  );
};
export default EventDetailPage;
