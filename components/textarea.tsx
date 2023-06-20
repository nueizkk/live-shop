import type { UseFormRegisterReturn } from "react-hook-form";

interface TextAreaProps {
  register: UseFormRegisterReturn;
  name: string;
  label?: string;
  [key: string]: any;
}
export default function TextArea({
  label,
  name,
  register,
  ...rest
}: TextAreaProps) {
  return (
    <div>
      {label ? (
        <label
          className="block mb-1 text-sm font-medium text-gray-700"
          htmlFor={name}
        >
          {label}
        </label>
      ) : null}
      <textarea
        {...register}
        {...rest}
        id={name}
        rows={4}
        className="w-full px-2 py-2 text-gray-900 border-gray-300 rounded-md shadow-sm resize-none focus:ring-slate-900 focus:border-slate-900"
      />
    </div>
  );
}
