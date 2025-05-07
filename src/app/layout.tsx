import "@/styles/globals.css";

import { type Metadata } from "next";
import { Philosopher } from "next/font/google";
import { Inter } from "next/font/google";

export const metadata: Metadata = {
  title: "Nusatix",
  description: "Explore. Earn. Belong.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const philosopher = Philosopher({
  subsets: ["latin"],
  variable: "--font-philosopher-serif",
  weight: ["400", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-sans",
  style: ["normal", "italic"],
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${philosopher.variable} ${inter.variable} font-sans`}
    >
      <body>{children}</body>
    </html>
  );
}
