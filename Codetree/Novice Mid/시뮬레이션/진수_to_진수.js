// 진수 to 진수
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [a, b] = input[0].split(" ").map(Number);
const digits = input[1].split("").map(Number);

const decimalToBaseB = (n, b) => {
  if (n === 0) return "0";
  let digits = [];
  while (n > 0) {
    digits.push(n % b);
    n = Math.floor(n / b);
  }
  return digits.reverse().join("");
};

const isDecimal = (a) => (a === 10 ? true : false);

const baseAToDecimal = (digits, a) => {
  let num = 0;
  digits.forEach((digit) => (num = num * a + digit));
  return num;
};

const main = () => {
  const decimal = isDecimal(a)
    ? Number(digits.join(""))
    : baseAToDecimal(digits, a);
  const res = decimalToBaseB(decimal, b);
  console.log(res);
};

main();
