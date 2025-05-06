import { cn } from "@/utils/ui";

const HamburgerIcon = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={cn(
        "group relative flex w-6 flex-col justify-between",
        isOpen ? "h-[20px]" : "h-4",
      )}
    >
      <div
        className={cn(
          "bg-primary h-[3px] w-full origin-left rounded-full transition-all duration-200 ease-out",
          isOpen && "rotate-45",
        )}
      />
      <div
        className={cn(
          "bg-primary h-[3px] w-full rounded-full transition-all duration-200 ease-out",
          isOpen ? "opacity-0" : "opacity-100",
        )}
      />
      <div
        className={cn(
          "bg-primary h-[3px] w-full origin-left rounded-full transition-all duration-200 ease-out",
          isOpen && "-rotate-45",
        )}
      />
    </div>
  );
};
export default HamburgerIcon;
