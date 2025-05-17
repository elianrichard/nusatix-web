"use client";

import Image from "next/image";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

import { MarkerIcon, QuarterIcon, CalendarIcon } from "@/assets/svgs/icons";

import Button from "@/components/Button";

import { getSolanaIdrConversionRateQueryOption } from "@/server/tanstack/hooks/coins";
import { getEventByIdQueryOption } from "@/server/tanstack/hooks/events";
import { NavigationRoutes } from "@/static/constants/navigation";

import { convertDateToString, convertTimeToString } from "@/utils/datetime";
import { convertNumberToIdr, roundToDecimal } from "@/utils/string";
import { cn } from "@/utils/ui";

type EventDetailProps = {
  id: string;
  isPaymentPage?: boolean;
};

const EventBasicD = ({ id, isPaymentPage }: EventDetailProps) => {
  const { data: event, isPending: isEventPending } = useQuery(
    getEventByIdQueryOption(id),
  );
  const { data: conversionRate, isPending: isConversionRatePending } = useQuery(
    getSolanaIdrConversionRateQueryOption(),
  );
  if (!event || isEventPending || isConversionRatePending || !conversionRate)
    return null;
  const {
    event_id,
    event_name,
    event_image_url,
    venue_address,
    event_overall_start_date,
    event_overall_end_date,
    event_overall_start_time,
    event_overall_end_time,
    default_sol_price,
  } = event;
  return (
    <div className="flex flex-col gap-6 md:gap-10">
      <div className="relative aspect-[3/2] w-full sm:aspect-[2/1]">
        <Image
          src={
            event_image_url ??
            "https://nusatix.elianrichard.my.id/event-images/EventImage4.webp"
          }
          alt={event_name}
          fill
          className="h-full w-full rounded-2xl object-cover"
        />
      </div>
      <div className="flex flex-col justify-between gap-10 sm:flex-row sm:gap-0">
        <div className="flex flex-col gap-4 md:gap-8">
          <p className="text-h1 text-primary font-serif font-bold">
            {event_name}
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 md:gap-4">
              <MarkerIcon className="text-primary w-5" />
              <p className="text-p flex-1 text-black/80">{venue_address}</p>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <CalendarIcon className="text-primary w-5" />
              <p className="text-p flex-1 text-black/80">
                {convertDateToString(
                  event_overall_start_date,
                  event_overall_end_date,
                )}
              </p>
            </div>
            <div className="flex items-center gap-2 md:gap-4">
              <QuarterIcon className="text-primary w-5" />
              <p className="text-p flex-1 text-black/80">
                {convertTimeToString(
                  event_overall_start_time,
                  event_overall_end_time,
                )}
              </p>
            </div>
          </div>
        </div>
        <div
          className={cn(
            "flex flex-row flex-wrap gap-8 sm:flex-col sm:flex-nowrap sm:text-right",
            isPaymentPage && "flex-col gap-4 text-right",
          )}
        >
          {!isPaymentPage ? (
            <Link href={NavigationRoutes.PAYMENT(`${event_id}`)}>
              <Button>
                Buy {roundToDecimal(Number(default_sol_price))} SOL
              </Button>
            </Link>
          ) : (
            <p className="text-primary text-h2 leading-none font-bold">
              {roundToDecimal(Number(default_sol_price))} SOL
            </p>
          )}
          <div className="flex flex-col gap-1">
            <p className="text-p text-black/50">Realtime in IDR</p>
            <p className="text-p font-bold text-black">
              {convertNumberToIdr(
                roundToDecimal(Number(default_sol_price)) *
                  Number(conversionRate.solana.idr),
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventBasicD;
