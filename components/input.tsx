interface InputProps {
  label?: string;
  name: string;
  type: "text" | "price" | "phone";
  [key: string]: any;
}
export default function Input({ label, name, type, ...rest }: InputProps) {
  return (
    <div>
      {label ? (
        <label className="text-sm font-medium text-gray-700 " htmlFor={name}>
          {label}
        </label>
      ) : null}
      <div className="mt-1">
        {type === "text" ? (
          <input
            {...rest}
            id={name}
            type="text"
            className="w-full px-3 py-2 border-gray-300 rounded-md shadow-sm appearance-none placeholder:text-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
          />
        ) : null}
        {type === "price" ? (
          <div className="relative flex items-center rounded-md">
            <div className="absolute text-sm text-gray-500 select-none left-3">
              <span>$</span>
            </div>
            <input
              {...rest}
              id="price"
              type="text"
              placeholder="0.00"
              className="w-full py-2 pr-12 border-gray-300 rounded-md shadow-sm appearance-none pl-7 placeholder:text-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
            />
            <div className="absolute text-sm text-gray-500 select-none right-3">
              <span>USD</span>
            </div>
          </div>
        ) : null}
        {type === "phone" ? (
          <div className="flex rounded-md shadow-sm">
            <span className="flex items-center justify-center px-3 text-sm text-gray-500 border border-r-0 select-none rounded-l-md bg-gray-50">
              +82
            </span>
            <input
              {...rest}
              id="phone"
              className="w-full px-3 py-2 border-gray-300 rounded-md rounded-l-none shadow-sm appearance-none placeholder:text-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500"
              type="number"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
}
