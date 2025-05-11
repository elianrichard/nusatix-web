import { cn } from "@/utils/ui";

export default function ShowsCard({
  index,
  showId,
  isSelected,
  setSelectedShow,
  date,
}: {
  index: number;
  showId: number;
  isSelected: boolean;
  setSelectedShow: (index: number) => void;
  date: string;
}) {
  return (
    <button
      className="border-primary/20 hover:bg-primary/20 flex w-full cursor-pointer items-center justify-between rounded-2xl border p-4 transition-colors duration-200 ease-out"
      onClick={() => setSelectedShow(showId)}
    >
      <div className="flex items-center gap-4">
        <div className="border-primary bg-primary/20 h-7 w-7 rounded-full border p-1">
          <div
            className={cn(
              "bg-primary h-full w-full rounded-full opacity-0 transition-opacity duration-200 ease-out",
              isSelected && "opacity-100",
            )}
          />
        </div>
        <p className="text-h3 font-bold">Show {index + 1}</p>
      </div>
      <p className="text-p">{date}</p>
    </button>
  );
}
