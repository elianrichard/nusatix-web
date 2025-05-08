import type { EventCardProps } from "@/app/_static/types";

import EventImage1 from "@/assets/images/EventImage1.webp";
import EventImage2 from "@/assets/images/EventImage2.webp";
import EventImage3 from "@/assets/images/EventImage3.webp";
import EventImage4 from "@/assets/images/EventImage4.webp";

export const events: EventCardProps[] = [
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
