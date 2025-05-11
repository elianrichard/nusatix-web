"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import type { events } from "@prisma/client";
import { useQuery } from "@tanstack/react-query";

import { CalendarIcon, MarkerIcon, QuarterIcon } from "@/assets/svgs/icons";

import Button from "@/components/Button";
import MainLayout from "@/components/MainLayout";

import { getEventsQueryOption } from "@/server/tanstack/hooks/events";

import { NavigationRoutes } from "@/static/constants/navigation";

import { convertDateToString, convertTimeToString } from "@/utils/datetime";
import { roundToDecimal } from "@/utils/string";
import { cn } from "@/utils/ui";

const EventsSection = () => {
  const [isShowMore, setIsShowMore] = useState(false);
  const { data: events, isPending: isEventsPending } = useQuery({
    ...getEventsQueryOption(),
  });

  const filteredEvents = useMemo(() => {
    if (!events) return [];
    if (isShowMore) return events.sort((a, b) => a.event_id - b.event_id);
    return events
      .sort((a, b) => a.event_id - b.event_id)
      .filter((_, index) => index < 3);
  }, [events, isShowMore]);

  if (isEventsPending || !events) return null;
  return (
    <MainLayout>
      <div className="flex flex-col items-center gap-6 md:gap-8">
        <h2 className="text-h1 text-center font-serif font-bold text-black">
          Experience Indonesia, <span className="text-primary">Locally</span>
        </h2>
        <div
          className={cn(
            "grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10",
          )}
        >
          {filteredEvents.map((event) => (
            <div key={event.event_id} className="h-full w-full">
              <EventCard {...event} />
            </div>
          ))}
        </div>
        {!isShowMore && (
          <Button variant="secondary" onClick={() => setIsShowMore(true)}>
            Show All Events
          </Button>
        )}
      </div>
    </MainLayout>
  );
};
export default EventsSection;

const EventCard = ({
  event_name,
  event_id,
  event_image_url,
  event_overall_end_date,
  event_overall_start_date,
  event_overall_end_time,
  event_overall_start_time,
  default_sol_price,
  venue_address,
}: events) => (
  <Link
    href={`${NavigationRoutes.EVENTS}/${event_id}`}
    className="border-gray hover:bg-primary/10 flex h-full w-full flex-col overflow-hidden rounded-2xl border bg-white transition-colors duration-200 ease-out"
  >
    <div className="relative aspect-[3/2] w-full md:aspect-video">
      <Image
        src={event_image_url ?? ""}
        alt={"event"}
        fill
        className="h-full w-full object-cover"
      />
    </div>
    <div className="flex h-full flex-col gap-4 p-4 md:p-8">
      <div className="flex flex-col gap-1 md:gap-2">
        <p className="text-p text-primary font-bold">{"Local Tourism"}</p>
        <p className="text-h2 font-bold">{event_name}</p>
      </div>
      <div className="flex flex-1 flex-col justify-between gap-4">
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
        <div className="flex items-end gap-2 self-end text-right">
          <p className="text-p leading-none text-black/80">Floor Price:</p>
          <p className="text-primary text-h2 leading-none font-bold">
            {roundToDecimal(Number(default_sol_price))} SOL
          </p>
        </div>
      </div>
    </div>
  </Link>
);
