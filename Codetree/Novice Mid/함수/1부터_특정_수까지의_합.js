const fs = require("fs");
const input = fs.readFileSync(0).toString();

const N = Number(input);

const sumToN = (n) => {
  let sumVal = 0;
  for (let i = 1; i <= n; i++) {
    sumVal += i;
  }
  return sumVal;
};

const printDividedBy10 = (n) => {
  console.log(Math.floor(n / 10));
};

printDividedBy10(sumToN(N));
