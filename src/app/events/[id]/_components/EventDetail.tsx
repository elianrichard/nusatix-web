import Image from "next/image";
import Link from "next/link";

import type { EventCardProps } from "@/app/_static/types";
import { MarkerIcon, QuarterIcon, CalendarIcon } from "@/assets/svgs/icons";
import Button from "@/components/Button";
import { NavigationRoutes } from "@/static/constants/navigation";
import { convertNumberToIdr } from "@/utils/string";

type EventDetailProps = EventCardProps & {
  isPaymentPage?: boolean;
};

const EventDetail = ({
  id,
  image,
  title,
  address,
  date,
  time,
  price,
  idrPrice,
  isPaymentPage,
}: EventDetailProps) => (
  <div className="flex flex-col gap-10">
    <div className="relative aspect-[2/1] w-full">
      <Image
        src={image}
        alt={title}
        fill
        className="h-full w-full rounded-2xl object-cover"
      />
    </div>
    <div className="flex justify-between">
      <div className="flex flex-col gap-8">
        <p className="text-h1 text-primary font-serif font-bold">{title}</p>
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
      </div>
      <div className="flex flex-col gap-8 text-right">
        {!isPaymentPage ? (
          <Link href={NavigationRoutes.PAYMENT(`${id}`)}>
            <Button>Buy {price} SOL</Button>
          </Link>
        ) : (
          <p className="text-primary text-h2 leading-none font-bold">
            {price} SOL
          </p>
        )}
        <div className="flex flex-col gap-1">
          <p className="text-p text-black/50">Realtime in IDR</p>
          <p className="text-p font-bold text-black">
            {convertNumberToIdr(idrPrice)}
          </p>
        </div>
      </div>
    </div>
  </div>
);
export default EventDetail;
