import Image from "next/image";
import Link from "next/link";

import type { EventItem } from "@/app/_static/types";

import { CalendarIcon, MarkerIcon, QuarterIcon } from "@/assets/svgs/icons";

import Button from "@/components/Button";
import MainLayout from "@/components/MainLayout";

import { events } from "@/static/constants/events";
import { NavigationRoutes } from "@/static/constants/navigation";

const EventsSection = () => {
  return (
    <MainLayout>
      <div className="flex flex-col items-center gap-6 md:gap-8">
        <h2 className="text-h1 text-center font-serif font-bold text-black">
          Experience Indonesia, <span className="text-primary">Locally</span>
        </h2>
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-10 [&>*:last-child]:block lg:[&>*:last-child]:hidden">
          {events.slice(0, 4).map((event, index) => (
            <EventCard key={`${event.title}-${index}`} {...event} />
          ))}
        </div>
        <Button variant="secondary">Show All Events</Button>
      </div>
    </MainLayout>
  );
};
export default EventsSection;

const EventCard = ({
  image,
  type,
  title,
  address,
  date,
  time,
  price,
  id,
}: EventItem) => (
  <Link
    href={`${NavigationRoutes.EVENTS}/${id}`}
    className="border-gray hover:bg-primary/10 flex w-full flex-col overflow-hidden rounded-2xl border bg-white transition-colors duration-200 ease-out"
  >
    <div className="relative aspect-[3/2] w-full md:aspect-video">
      <Image
        src={image}
        alt={"event"}
        fill
        className="h-full w-full object-cover"
      />
    </div>
    <div className="flex h-full flex-col gap-4 p-4 md:p-8">
      <div className="flex flex-col gap-1 md:gap-2">
        <p className="text-p text-primary font-bold">{type}</p>
        <p className="text-h2 font-bold">{title}</p>
      </div>
      <div className="flex flex-1 flex-col justify-between gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2 md:gap-4">
            <MarkerIcon className="text-primary w-5" />
            <p className="text-p flex-1 text-black/80">{address}</p>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <CalendarIcon className="text-primary w-5" />
            <p className="text-p flex-1 text-black/80">{date}</p>
          </div>
          <div className="flex items-center gap-2 md:gap-4">
            <QuarterIcon className="text-primary w-5" />
            <p className="text-p flex-1 text-black/80">{time}</p>
          </div>
        </div>
        <div className="flex items-end gap-2 self-end text-right">
          <p className="text-p leading-none text-black/80">Floor Price:</p>
          <p className="text-primary text-h2 leading-none font-bold">
            {price} SOL
          </p>
        </div>
      </div>
    </div>
  </Link>
);
