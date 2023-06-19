import { useRouter } from "next/router";

interface FloatingButtonProps {
  children: React.ReactNode;
  path: string;
}

export default function FloatingButton({
  children,
  path,
}: FloatingButtonProps) {
  const { push } = useRouter();
  return (
    <button
      type="button"
      onClick={() => push(path)}
      className="absolute p-4 text-white transition-colors rounded-full shadow-xl bg-slate-900 bottom-24 right-5 hover:bg-slate-800 w-56px h-56px aspect-square"
    >
      {children}
    </button>
  );
}
