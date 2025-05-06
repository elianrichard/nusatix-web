import Image from "next/image";


export default function TicketCard() {
    return (
        <div className="flex flex-row justify-between p-10 bg-primary rounded-2xl w-full my-8">
            <div className="flex flex-col justify-center">
                <h1 className="text-white font-serif text-5xl">Tari Kecak Bali</h1>
                <h2 className="text-white opacity-70 font-sans text-2xl mt-2">Jl. Bali No. 20, Bali, Provinsi Bali 12345</h2>
                <p className="text-white text-2xl mt-8">June 24, 2024 | 08.00 PM</p>
            </div>
            
            <Image src={"/qr-code.svg"} alt="test" width={125} height={125} />
        </div>
    )
}