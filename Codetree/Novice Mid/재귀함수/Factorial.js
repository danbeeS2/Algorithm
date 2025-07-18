const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(input[0]);

const factorial = (n) => {
  if (n <= 1) return n;

  return factorial(n - 1) * n;
};

console.log(factorial(N));
