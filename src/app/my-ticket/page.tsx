import TicketCard from "@/components/ticketCard";


export default function MyTicket() {
    return (
        <div className="flex flex-col p-16">
            <h1 className="font-serif text-primary text-6xl font-bold py-8">Active Tickets</h1>
            <TicketCard/>
        </div>
    ) 
}