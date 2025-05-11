import MainLayout from "@/components/MainLayout";
import FeaturesSection from "@/components/sections/FeaturesSection";

import { eventFeatures } from "@/static/constants/features";

import PaymentAction from "./_components/PaymentAction";
import EventBasicDetail from "../_components/EventBasicDetail";

const PaymentPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <>
      <MainLayout>
        <div className="flex flex-col gap-10 md:gap-14">
          <EventBasicDetail id={id} isPaymentPage />
          <PaymentAction id={id} />
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
