import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white/50 p-4"
      onClick={onClose}
    >
      <div
        className="border-primary relative flex w-full max-w-md flex-col gap-2 rounded-2xl border bg-white p-4 shadow-xl md:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="text-primary self-end transition-colors duration-200 ease-out hover:text-black"
        >
          <X className="aspect-square h-6 w-6 md:h-8 md:w-8" />
        </button>
        <div>{children}</div>
      </div>
    </div>
  );
}
