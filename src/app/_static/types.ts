import type { NavigationRoutes } from "./constants";

export type TNavigationLinks = {
  href: (typeof NavigationRoutes)[keyof typeof NavigationRoutes];
  label: string;
}[];
