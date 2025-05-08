import { redirect } from "next/navigation";

import { NavigationRoutes } from "@/app/_static/constants";
import MainLayout from "@/components/MainLayout";
import { eventFeatures } from "@/components/sections/_static/constants";
import FeaturesSection from "@/components/sections/FeaturesSection";

import { events } from "@/static/constants/events";
import EventDetail from "./_components/EventDetail";

const EventDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  const eventItem = events.find((event) => event.id.toString() === id);
  if (!eventItem) redirect(NavigationRoutes.HOME);

  return (
    <MainLayout>
      <div className="flex flex-col gap-10 md:gap-14">
        <EventDetail {...eventItem} />
        <p className="text-p leading-loose whitespace-pre-line">
          {eventItem.description}
        </p>
        <FeaturesSection
          title={
            <>
              What you&apos;ll get with{" "}
              <span className="text-primary">Nusatix</span>:
            </>
          }
          features={eventFeatures}
        />
      </div>
    </MainLayout>
  );
};
export default EventDetailPage;
