export const NavigationRoutes = {
  HOME: "/",
  ACTIVE_TICKETS: "/my-ticket",
  NFTS: "/my-nft",
  EVENTS: "/events",
  PAYMENT: (id: string) => `/events/${id}/payment`,
  EMPTY: "#",
} as const;
