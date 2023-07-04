export default function addHyphenToPhoneNumber(value: string) {
  if (!value) return "";
  let result = [];
  let restNumber = "";
  if (value.startsWith("02")) {
    // 지역번호 02
    result.push(value.substring(0, 2));
    restNumber = value.substring(2);
  } else if (value.startsWith("1")) {
    // 지역 번호가 없는 경우 (1xxx-yyyy)
    restNumber = value;
  } else {
    // 나머지 3자리 지역번호 (0xx-yyyy-zzzz)
    result.push(value.substring(0, 3));
    restNumber = value.substring(3);
  }
  if (restNumber.length === 7) {
    // 7자리만 남았을 경우 (xxx-yyyy)
    result.push(restNumber.substring(0, 3));
    result.push(restNumber.substring(3));
  } else {
    result.push(restNumber.substring(0, 4));
    result.push(restNumber.substring(4));
  }
  return result.filter((v) => v).join("-");
}
