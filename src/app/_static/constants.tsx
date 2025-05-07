import { InstagramLogo, TwitterLogo } from "@/assets/svgs/icons";
import type { TNavigationLinks } from "./types";

export const NavigationRoutes = {
  HOME: "/",
  ACTIVE_TICKETS: "/my-ticket",
  NFTS: "/my-nft",
  EMPTY: "#",
} as const;

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
    href: "https://twitter.com/Nusatix",
    icon: <TwitterLogo className="h-full w-full" />,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/Nusatix",
    icon: <InstagramLogo className="h-full w-full" />,
  },
];
