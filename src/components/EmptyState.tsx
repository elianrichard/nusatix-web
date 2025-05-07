import { NotFoundIcon } from "@/assets/svgs/icons";

const EmptyState = ({ text }: { text: string }) => {
  return (
    <div className="flex flex-col items-center gap-10 md:gap-20">
      <NotFoundIcon className="w-full max-w-40 md:max-w-72" />
      <p className="text-h3 font-bold">{text}</p>
    </div>
  );
};
export default EmptyState;
