import Image from "next/image";
import Link from "next/link";

import type { EventItem } from "@/app/_static/types";
import { MarkerIcon, QuarterIcon, CalendarIcon } from "@/assets/svgs/icons";
import Button from "@/components/Button";
import { NavigationRoutes } from "@/static/constants/navigation";
import { convertNumberToIdr } from "@/utils/string";
import { cn } from "@/utils/ui";

type EventDetailProps = EventItem & {
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
  <div className="flex flex-col gap-6 md:gap-10">
    <div className="relative aspect-[3/2] w-full sm:aspect-[2/1]">
      <Image
        src={image}
        alt={title}
        fill
        className="h-full w-full rounded-2xl object-cover"
      />
    </div>
    <div className="flex flex-col justify-between gap-10 sm:flex-row sm:gap-0">
      <div className="flex flex-col gap-4 md:gap-8">
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
      <div
        className={cn(
          "flex flex-row flex-wrap gap-8 sm:flex-col sm:flex-nowrap sm:text-right",
          isPaymentPage && "flex-col gap-4 text-right",
        )}
      >
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
