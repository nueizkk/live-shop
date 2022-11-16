import { cls } from "../libs/utils";

interface MessageProps {
  text: string;
  reversed?: boolean;
  avatarUrl?: string;
  key: number;
}
export default function Message({
  text,
  reversed = false,
  avatarUrl,
  key,
}: MessageProps) {
  return (
    <div
      key={key}
      className={cls(
        "flex items-start gap-x-2",
        reversed ? "flex-row-reverse" : "flex-row"
      )}
    >
      <div className="flex-none w-8 rounded-full aspect-square bg-slate-300" />
      <div className="p-2 text-sm text-gray-700 border rounded-md max-w-[70%] w-fit">
        가나다라마바사아자차카타파하하하하하하하하
      </div>
    </div>
  );
}
