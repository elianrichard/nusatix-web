interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-5 md:p-0"
      onClick={onClose}
    >
      <div
        className="bg-white p-9 rounded-2xl max-w-md w-full relative shadow-xl border border-primary"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-primary hover:text-black text-3xl transition-colors" 
        >
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
