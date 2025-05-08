import type { StaticImageData } from "next/image";
import type { NavigationRoutes } from "./constants";

export type TNavigationLinks = {
  href: (typeof NavigationRoutes)[keyof typeof NavigationRoutes];
  label: string;
}[];

export type EventCardProps = {
  image: StaticImageData | string;
  type: string;
  title: string;
  address: string;
  date: string;
  time: string;
  price: number;
};
