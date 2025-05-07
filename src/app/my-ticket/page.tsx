// app/my-ticket/page.tsx
"use client";

import { useState } from "react";
import Image from "next/image";

import MockQr from "@/assets/images/MockQR.png";

import MainLayout from "@/components/MainLayout";
import Modal from "@/components/Modal";

import TicketCard, { type TicketType } from "./_components/TicketCard";

export default function MyTicket() {
  const [modalOpen, setModalOpen] = useState(false);

  const handleCardClick = () => {
    setModalOpen(true);
  };

  const ticket: TicketType = {
    title: "Tari Kecak Bali",
    location: "Jl. Bali No. 20, Bali, Provinsi Bali 12345",
    date: "June 24, 2024 | 08.00 PM",
  };

  return (
    <MainLayout isAddTopPadding>
      <div className="flex flex-col gap-12 md:gap-24">
        <h1 className="text-primary font-serif text-4xl font-bold md:text-6xl">
          Active Tickets
        </h1>

        <div className="flex flex-col gap-4">
          {Array.from({ length: 4 }).map((_, index) => (
            <TicketCard
              key={index}
              type={ticket}
              onClick={() => handleCardClick()}
            />
          ))}
        </div>

        <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
          <h1 className="text-h2 text-center font-bold text-black">
            Your Ticket
          </h1>
          <div className="relative aspect-square w-full">
            <Image src={MockQr} alt="QR Code" fill className="h-full w-full" />
          </div>
        </Modal>
      </div>
    </MainLayout>
  );
}
