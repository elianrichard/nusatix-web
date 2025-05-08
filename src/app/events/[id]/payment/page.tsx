import { redirect } from "next/navigation";

import Button from "@/components/Button";
import MainLayout from "@/components/MainLayout";
import FeaturesSection from "@/components/sections/FeaturesSection";

import { events } from "@/static/constants/events";
import { eventFeatures } from "@/static/constants/features";
import { NavigationRoutes } from "@/static/constants/navigation";

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
          <div className="flex flex-col gap-6">
            <p className="text-primary text-h2 font-bold">Available Schedule</p>
            <div className="flex flex-col gap-4">
              <ShowsCard />
              <ShowsCard />
              <ShowsCard />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex flex-col gap-1 leading-none">
              <p className="text-h3 text-black/50">
                Balance from Connected Wallet
              </p>
              <p className="text-primary text-h1 font-bold">50.76 SOL</p>
            </div>
            <div className="flex gap-10">
              <div className="flex flex-col items-center gap-1 leading-none">
                <p className="text-h3 text-black/50">Total Price</p>
                <p className="text-primary text-h1 font-bold">0.1 SOL</p>
              </div>
              <Button className="md:px-16">Pay</Button>
            </div>
          </div>
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

function ShowsCard() {
  return (
    <button className="border-primary/20 hover:bg-primary/20 flex w-full cursor-pointer items-center justify-between rounded-2xl border p-4 transition-colors duration-200 ease-out">
      <div className="flex gap-4">
        <div className="border-primary bg-primary/20 h-7 w-7 rounded-full border p-1">
          <div className="bg-primary h-full w-full rounded-full" />
        </div>
        <p className="text-h3 font-bold">Show 1</p>
      </div>
      <p className="text-p">June, 6 2025</p>
    </button>
  );
}
