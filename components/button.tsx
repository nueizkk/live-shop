import { ButtonHTMLAttributes, HTMLInputTypeAttribute } from "react";

interface ButtonProps {
  type?: "submit" | "reset" | "button";
  children: React.ReactNode;
  [key: string]: any;
}

export default function Button({ type, children, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      type="submit"
      className="w-full h-[42px] px-4 text-sm font-medium text-white bg-slate-900 border-transparent rounded-md shadow-sm hover:bg-slate-800 focus:ring-2 focus:ring-offset-2 focus:outline-none focus:ring-slate-800"
    >
      {children}
    </button>
  );
}
