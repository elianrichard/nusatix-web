import { redirect } from "next/navigation";

import MainLayout from "@/components/MainLayout";
import FeaturesSection from "@/components/sections/FeaturesSection";

import { events } from "@/static/constants/events";
import { eventFeatures } from "@/static/constants/features";
import { NavigationRoutes } from "@/static/constants/navigation";

import PaymentAction from "./_components/PaymentAction";
import EventDetail from "../_components/EventDetail";

const PaymentPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  const eventItem = events.find((event) => event.id.toString() === id);
  if (!eventItem) redirect(NavigationRoutes.HOME);

  return (
    <>
      <MainLayout>
        <div className="flex flex-col gap-10 md:gap-14">
          <EventDetail {...eventItem} isPaymentPage />
          <PaymentAction eventItem={eventItem} />
        </div>
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
export default PaymentPage;
