// Toast.tsx
import { useEffect } from "react";
import { X } from "lucide-react";

export interface ToastProps {
  message: string;
  type?: "success" | "error" | "warning" | "info";
  duration?: number;
  onClose?: () => void;
  closable?: boolean;
  open: boolean;
}

export default function Toast({
  message,
  type = "info",
  duration = 3000,
  onClose,
  closable = false,
  open,
}: ToastProps) {
  useEffect(() => {
    if (!open) return;
    const timer = setTimeout(() => onClose?.(), duration);
    return () => clearTimeout(timer);
  }, [open, duration, onClose]);

  return (
    <div
      className={`fixed bottom-6 right-6 px-4 py-3 rounded-xl shadow-lg text-white transition-all duration-300 transform
        ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
        ${type === "success" && "bg-green-500"}
        ${type === "error" && "bg-red-500"}
        ${type === "warning" && "bg-yellow-500 text-black"}
        ${type === "info" && "bg-blue-500"}
      `}
    >
      <div className="flex items-center gap-3">
        <span>{message}</span>

        {closable && (
          <button
            className="ml-2 p-1 hover:opacity-70"
            onClick={onClose}
          >
            <X size={16} />
          </button>
        )}
      </div>
    </div>
  );
}