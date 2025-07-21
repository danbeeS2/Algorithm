// 십진수와 이진수 2
const fs = require("fs");
const binary = fs.readFileSync(0).toString().trim().split("").map(Number);

const binaryToDecimal = (binary) => {
  let num = 0;
  binary.forEach((bin) => (num = num * 2 + bin));
  return num;
};

const decimalToBinary = (num) => {
  if (num === 0) return "0";
  let binary = [];
  while (num > 0) {
    binary.push(num % 2);
    num = Math.floor(num / 2);
  }
  return binary.reverse().join("");
};

const multiply17 = (num) => num * 17;

const main = () => {
  const decimal = binaryToDecimal(binary);
  const multiplied = multiply17(decimal);
  const res = decimalToBinary(multiplied);

  console.log(res);
};

main();
