import { useState } from "react";
import { X, Eye, EyeOff } from "lucide-react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  clearable?: boolean;
}

export default function Input({
  type = "text",
  clearable = false,
  placeholder = "",
  ...props
}: InputProps) {
  const [value, setValue] = useState("");
  const [show, setShow] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword && show ? "text" : type;

  return (
    <div className="relative w-full max-w-sm">
      <input
        type={inputType}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        className="w-full border rounded-xl px-4 py-2 pr-10 focus:outline-none shadow-sm"
        {...props}
      />

      {clearable && value && (
        <button
          onClick={() => setValue("")}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:opacity-70"
        >
          <X size={16} />
        </button>
      )}

      {isPassword && (
        <button
          onClick={() => setShow(!show)}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:opacity-70"
          type="button"
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      )}
    </div>
  );
}
