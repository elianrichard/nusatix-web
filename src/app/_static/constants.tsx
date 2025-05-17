import { InstagramLogo, TwitterLogo } from "@/assets/svgs/icons";
import { NavigationRoutes } from "@/static/constants/navigation";
import type { TNavigationLinks } from "./types";

export const NavLinks: TNavigationLinks = [
  {
    href: NavigationRoutes.HOME,
    label: "Home",
  },
  {
    href: NavigationRoutes.ACTIVE_TICKETS,
    label: "Active Tickets",
  },
  {
    href: NavigationRoutes.NFTS,
    label: "NFTs",
  },
];

export const FooterLinks: TNavigationLinks = [
  ...NavLinks,
  {
    href: NavigationRoutes.EMPTY,
    label: "Connect Wallet",
  },
  {
    href: NavigationRoutes.EMPTY,
    label: "Our Solutions",
  },
  {
    href: NavigationRoutes.EMPTY,
    label: "List of Events",
  },
];

export const SocialMediaLinks = [
  {
    name: "Twitter / X",
    href: "https://twitter.com/nusatixbynewtn",
    icon: <TwitterLogo className="h-full w-full" />,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/nusatix.bynewtn",
    icon: <InstagramLogo className="h-full w-full" />,
  },
];
