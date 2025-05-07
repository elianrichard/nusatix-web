import Image from "next/image";

export type TicketType = {
  title: string;
  location: string;
  date: string;
};

type Props = {
  type: TicketType;
  onClick?: () => void;
};

export default function TicketCard({ type, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer flex flex-col md:flex-row justify-between p-5 md:p-10 bg-primary rounded-2xl w-full my-4 md:my-8 border border-primary hover:bg-white transition duration-300 ease-in-out"
    >
      <div className="flex flex-col justify-center">
        <h1 className="text-white font-serif text-3xl font-bold md:text-5xl group-hover:text-primary transition-colors duration-300">
          {type.title}
        </h1>
        <h2 className="text-white opacity-70 font-sans font-light text-base md:text-2xl mt-2 group-hover:text-primary transition-colors duration-300">
          {type.location}
        </h2>
        <p className="text-white text-base md:text-2xl font-light mt-8 group-hover:text-primary transition-colors duration-300">
          {type.date}
        </p>
      </div>

      <Image
        src="/qr-code.svg"
        alt="QR Code"
        width={125}
        height={125}
        className="w-20 md:w-32 h-auto mt-16 md:mt-0"
      />
    </div>
  );
}
