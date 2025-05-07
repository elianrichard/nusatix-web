// app/my-ticket/page.tsx
"use client";

import TicketCard from "@/components/ticketCard";
import type { TicketType } from "@/components/ticketCard";
import { useState } from "react";
import Modal from "@/components/Modal";
import Image from "next/image";

export default function MyTicket() {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedTicket, setTicketType] = useState<TicketType | null>(null);

    const handleCardClick = (ticket: TicketType) => {
        setTicketType(selectedTicket);
        setModalOpen(true);
    };

    const ticket: TicketType = {
        title: "Tari Kecak Bali",
        location: "Jl. Bali No. 20, Bali, Provinsi Bali 12345",
        date: "June 24, 2024 | 08.00 PM",
    };

    return (
        <div className="flex flex-col p-5 md:p-16">
            <h1 className="font-serif text-primary text-2xl md:text-6xl font-bold py-4 md:py-8">
                Active Tickets
            </h1>

            <TicketCard type={ticket} onClick={() => handleCardClick(ticket)} />

            <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)}>
                <h1 className="text-2xl md:text-3xl text-center text-primary">Your Ticket</h1>
                <Image src={"/mockup-QR.png"} alt="QR Code" width={371} height={371} className="w-full mx-auto pt-10" />
            </Modal>
        </div>
    );
}
