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
      className="fixed p-4 text-white transition-colors bg-orange-400 rounded-full shadow-xl bottom-24 right-5 hover:bg-orange-500"
    >
      {children}
    </button>
  );
}
