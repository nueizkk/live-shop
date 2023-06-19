interface ButtonProps {
  text: string;
  [key: string]: any;
}

export default function Button({ text, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      type="button"
      className="w-full px-4 py-2.5 mt-5 text-sm font-medium text-white bg-slate-900 border-transparent rounded-md shadow-sm hover:bg-slate-800 focus:ring-2 focus:ring-offset-2 focus:outline-none focus:ring-slate-800"
    >
      {text}
    </button>
  );
}
