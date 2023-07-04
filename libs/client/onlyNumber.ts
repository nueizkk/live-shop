export default function onlyNumber(
  e: React.ChangeEvent<HTMLInputElement>
): string {
  const value = e.target.value;
  return value.replace(/[^0-9]/g, "");
}
