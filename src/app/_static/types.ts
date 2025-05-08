import type { StaticImageData } from "next/image";

export type TNavigationLinks = {
  href: string;
  label: string;
}[];

export type EventItem = {
  image: StaticImageData | string;
  type: string;
  title: string;
  address: string;
  date: string;
  startDate: string;
  endDate: string;
  time: string;
  price: number;
  id: number;
  idrPrice: number;
  description: string;
};
