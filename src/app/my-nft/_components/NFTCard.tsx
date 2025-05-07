import Image from "next/image";
import type { NFTCardProps } from "../_static/types";

export default function NFTCard({
  title,
  description,
  date,
  nft,
}: NFTCardProps) {
  return (
    <div className="hover:border-primary flex h-full flex-col items-center gap-4 overflow-hidden rounded-2xl border border-white pb-4 transition duration-300 ease-in-out md:gap-8 md:pb-8">
      <div className="relative aspect-square w-full max-w-96">
        <Image src={nft} alt={title} fill />
      </div>
      <div className="flex flex-col gap-1 px-2">
        <h1 className="text-center text-base font-semibold text-black md:text-2xl">
          {title}
        </h1>
        <p className="text-center text-sm text-black opacity-60 md:text-lg">
          {description}
        </p>
        <p className="text-center text-sm font-light text-black opacity-60 md:text-lg">
          {date}
        </p>
      </div>
    </div>
  );
}
