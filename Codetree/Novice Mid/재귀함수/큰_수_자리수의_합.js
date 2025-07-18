const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let [a, b, c] = input[0].split(" ").map(Number);

const sumDigit = (n) => {
  if (n < 10) return n;

  return sumDigit(parseInt(n / 10)) + (n % 10);
};

console.log(sumDigit(a * b * c));
