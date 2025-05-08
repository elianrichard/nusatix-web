import FeatureIcon1 from "@/assets/svgs/icons/features/FeatureIcon1";
import FeatureIcon2 from "@/assets/svgs/icons/features/FeatureIcon2";
import FeatureIcon3 from "@/assets/svgs/icons/features/FeatureIcon3";

import type { FeatureCardProps } from "./types";

export const homeFeatures: FeatureCardProps[] = [
  {
    icon: <FeatureIcon1 />,
    title: "Prevent Fraud",
    description: "Prevent fraud with Soulbound Ticket Tokens.",
  },
  {
    icon: <FeatureIcon2 />,
    title: "Indonesian NFTs",
    description: "Get unique NFT based on local place you visit in Indonesia",
  },
  {
    icon: <FeatureIcon3 />,
    title: "Make it Really Better",
    description: "Give organizers and places insightful, real attendance data",
  },
];

export const eventFeatures: FeatureCardProps[] = [
  {
    icon: <FeatureIcon1 />,
    title: "Soulbound Ticket",
    description: "Verified access, no scalping.",
  },
  {
    icon: <FeatureIcon2 />,
    title: "NFT Drop",
    description:
      "Collect an exclusive Uluwatu Kecak NFT, only mintable if you attend.",
  },
  {
    icon: <FeatureIcon3 />,
    title: "Proof of Presence",
    description: "Become part of a cultural legacy on-chain.",
  },
];
