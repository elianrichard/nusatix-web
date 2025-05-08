import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

import EventImage1 from "@/assets/images/EventImage1.webp";
import EventImage2 from "@/assets/images/EventImage2.webp";
import EventImage3 from "@/assets/images/EventImage3.webp";
import EventImage4 from "@/assets/images/EventImage4.webp";

import { CalendarIcon, MarkerIcon, QuarterIcon } from "@/assets/svgs/icons";

import Button from "@/components/Button";
import MainLayout from "@/components/MainLayout";

const EventsSection = () => {
  const events: EventCardProps[] = [
    {
      image: EventImage2,
      type: "Events",
      title: "Musical Concert Petualangan Sherina",
      address: "Taman Ismail Marzuki, Jakarta",
      date: "15-28 July 2025",
      time: "19.30 - 22.00",
      price: 0.3,
    },
    {
      image: EventImage1,
      type: "Local Tourism Place",
      title: "Tari Kecak",
      address: "Jl. Bali No. 20, Bali, Provinsi Bali 12345",
      date: "6-8 June 2025",
      time: "16.00 - 22.00",
      price: 0.1,
    },
    {
      image: EventImage3,
      type: "Events",
      title: "Raminten Cabaret",
      address: "Hamzah Batik Malioboro Lt. 3, Yogyakarta",
      date: "28 August 2025",
      time: "19.00 - 22.00",
      price: 0.2,
    },
    {
      image: EventImage4,
      type: "Local Tourism Place",
      title: "Tari Kecak",
      address: "Jl. Bali No. 20, Bali, Provinsi Bali 12345",
      date: "6-8 June 2025",
      time: "16.00 - 22.00",
      price: 0.1,
    },
  ];
  return (
    <MainLayout>
      <div className="flex flex-col items-center gap-6 md:gap-8">
        <h2 className="text-h1 text-center font-serif font-bold text-black">
          Experience Indonesia, <span className="text-primary">Locally</span>
        </h2>
        <div className="grid w-full grid-cols-1 gap-10 md:grid-cols-2">
          {events.map((event) => (
            <EventCard key={event.title} {...event} />
          ))}
        </div>
        <Button variant="secondary">Show All Events</Button>
      </div>
    </MainLayout>
  );
};
export default EventsSection;

type EventCardProps = {
  image: StaticImageData | string;
  type: string;
  title: string;
  address: string;
  date: string;
  time: string;
  price: number;
};

const EventCard = ({
  image,
  type,
  title,
  address,
  date,
  time,
  price,
}: EventCardProps) => (
  <Link
    href="#"
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
    <div className="flex flex-col gap-4 p-4 md:p-8">
      <div className="flex flex-col gap-1 md:gap-2">
        <p className="text-p text-primary font-bold">{type}</p>
        <p className="text-h2 font-bold">{title}</p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2 md:gap-4">
          <CalendarIcon className="text-primary w-5" />
          <p className="text-p flex-1 text-black/80">{address}</p>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <MarkerIcon className="text-primary w-5" />
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
  </Link>
);
