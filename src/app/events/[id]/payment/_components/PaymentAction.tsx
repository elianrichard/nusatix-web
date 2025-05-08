"use client";
import { useState } from "react";
import dayjs from "dayjs";
import type { EventItem } from "@/app/_static/types";
import Button from "@/components/Button";
import ShowsCard from "./ShowsCard";

const PaymentAction = ({ eventItem }: { eventItem: EventItem }) => {
  const [selectedShow, setSelectedShow] = useState<number>(1);

  const { startDate, endDate } = eventItem;
  const dateDistance = dayjs(endDate).diff(dayjs(startDate), "day");
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-col gap-6">
        <p className="text-primary text-h2 font-bold">Available Schedule</p>
        <div className="flex flex-col gap-4">
          {Array.from({ length: dateDistance > 0 ? dateDistance : 1 }).map(
            (_, index) => (
              <ShowsCard
                index={index}
                key={index}
                isSelected={selectedShow === index + 1}
                setSelectedShow={setSelectedShow}
                date={dayjs(startDate)
                  .add(index, "day")
                  .format("MMMM, DD YYYY")}
              />
            ),
          )}
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
        <div className="flex w-full flex-col gap-1 leading-none md:w-fit">
          <p className="text-h3 text-black/50">Balance from Connected Wallet</p>
          <p className="text-primary text-h1 font-bold">50.76 SOL</p>
        </div>
        <div className="flex w-full flex-wrap justify-between gap-10 sm:justify-end md:w-fit">
          <div className="flex flex-col items-center gap-1 leading-none">
            <p className="text-h3 text-black/50">Total Price</p>
            <p className="text-primary text-h1 font-bold">0.1 SOL</p>
          </div>
          <Button className="px-12 md:px-16">Pay</Button>
        </div>
      </div>
    </div>
  );
};
export default PaymentAction;
