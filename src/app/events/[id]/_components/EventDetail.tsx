"use client";

import { useQuery } from "@tanstack/react-query";
import { getEventByIdQueryOption } from "@/server/tanstack/hooks/events";
import EventBasicDetail from "./EventBasicDetail";

const EventDetail = ({ id }: { id: string }) => {
  const { data: event, isPending: isEventPending } = useQuery(
    getEventByIdQueryOption(id),
  );
  if (!event || isEventPending) return null;
  return (
    <div className="flex flex-col gap-10 md:gap-14">
      <EventBasicDetail id={id} />
      <p className="text-p leading-loose whitespace-pre-line">
        {event?.event_description}
      </p>
    </div>
  );
};
export default EventDetail;
