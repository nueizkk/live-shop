import { HTMLInputTypeAttribute } from "react";
import type { UseFormRegisterReturn } from "react-hook-form";

interface InputProps {
  label?: string;
  kind: "text" | "price" | "phone";
  type: HTMLInputTypeAttribute;
  register: UseFormRegisterReturn;
  [key: string]: any;
}
export default function Input({
  label,
  name,
  kind,
  type,
  register,
  ...rest
}: InputProps) {
  return (
    <div>
      {label ? (
        <label className="text-sm font-medium text-gray-700" htmlFor={name}>
          {label}
        </label>
      ) : null}
      <div className="mt-1">
        {kind === "text" ? (
          <input
            {...register}
            {...rest}
            type={type}
            className="h-[42px] w-full px-3 border-gray-300 rounded-md shadow-sm appearance-none placeholder:text-gray-400 focus:outline-none focus:ring-slate-900 focus:border-slate-900"
          />
        ) : null}
        {kind === "price" ? (
          <div className="relative flex items-center rounded-md">
            <div className="absolute text-sm text-gray-500 select-none left-3">
              <span>₩</span>
            </div>
            <input
              {...register}
              {...rest}
              type={type}
              placeholder="0"
              className="h-[42px] w-full py-2 pr-12 border-gray-300 rounded-md shadow-sm appearance-none pl-7 placeholder:text-gray-400 focus:outline-none focus:ring-slate-900 focus:border-slate-900"
            />
            <div className="absolute text-sm text-gray-500 select-none right-3">
              <span>KRW</span>
            </div>
          </div>
        ) : null}
        {kind === "phone" ? (
          <div className="flex rounded-md shadow-sm">
            <span className="flex items-center justify-center px-3 text-sm text-gray-500 border border-r-0 select-none rounded-l-md bg-gray-50">
              +82
            </span>
            <input
              {...register}
              {...rest}
              className="h-[42px] w-full px-3  border-gray-300 rounded-md rounded-l-none shadow-sm appearance-none placeholder:text-gray-400 focus:outline-none focus:ring-slate-900 focus:border-slate-900"
              type={type}
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
