import { QrIcon } from "@/assets/svgs/icons";

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
      className="group bg-primary border-primary flex w-full cursor-pointer flex-col justify-between gap-16 rounded-2xl border p-4 transition duration-200 ease-out hover:bg-white md:flex-row md:gap-0 md:p-10"
    >
      <div className="flex flex-col justify-center gap-6">
        <div className="flex flex-col gap-2 md:gap-3">
          <h1 className="group-hover:text-primary font-serif text-3xl font-bold text-white transition-colors duration-200 ease-out md:text-5xl">
            {type.title}
          </h1>
          <h2 className="group-hover:text-primary text-h3 text-white opacity-70 transition-colors duration-200 ease-out">
            {type.location}
          </h2>
        </div>
        <p className="group-hover:text-primary text-h3 text-white transition-colors duration-200 ease-out">
          {type.date}
        </p>
      </div>

      <QrIcon className="group-hover:text-primary w-24 text-white transition-colors duration-200 ease-out" />
    </div>
  );
}
