// app/my-ticket/page.tsx
"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";

import MockQr from "@/assets/images/MockQR.png";

import EmptyState from "@/components/EmptyState";
import MainLayout from "@/components/MainLayout";
import Modal from "@/components/Modal";

import { getTicketsQueryOptions } from "@/server/tanstack/hooks/tickets";
import useWeb3Store from "@/store/useWeb3Store";
import TicketCard, { type TicketType } from "./_components/TicketCard";

export default function MyTicket() {
  const [modalOpen, setModalOpen] = useState(false);
  const userAddress = useWeb3Store((state) => state.account);
  const { data: tickets } = useQuery(
    getTicketsQueryOptions(userAddress?.address ?? ""),
  );

  console.log(userAddress);
  const handleCardClick = () => {
    setModalOpen(true);
  };

  const userTickets: TicketType[] = useMemo(() => {
    return (
      tickets?.map((ticket) => ({
        id: ticket.ticket_id.toString(),
        title: ticket.event_name,
        location: ticket.show_name,
        date: dayjs(ticket.show_date).toISOString() ?? "",
      })) ?? []
    );
  }, [tickets]);

  console.log({ tickets, userTickets });

  return (
    <MainLayout isAddTopPadding>
      <div className="flex flex-col gap-12 md:gap-24">
        <h1 className="text-primary font-serif text-4xl font-bold md:text-6xl">
          Active Tickets
        </h1>

        <div className="flex flex-col gap-4">
          {userTickets.map((ticket) => (
            <TicketCard
              key={ticket.id}
              type={ticket}
              onClick={() => handleCardClick()}
            />
          ))}
        </div>

        {userTickets.length === 0 && (
          <div className="mt-10">
            <EmptyState text="No Tickets Found" />
          </div>
        )}

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
