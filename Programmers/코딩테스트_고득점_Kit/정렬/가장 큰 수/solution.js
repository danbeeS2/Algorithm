function solution(numbers) {
  const strs = numbers.map(String);

  strs.sort((a, b) => (b + a > a + b ? 1 : -1));

  return strs[0] === "0" ? "0" : strs.join("");
}
