const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [A, B] = input[0].split(" ").map(Number);

const isPrime = (n) => {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
};

const isSumOfDigitsEven = (n) => {
  const sum = n
    .toString()
    .split("")
    .map(Number)
    .reduce((acc, cur) => acc + cur, 0);
  return sum % 2 ? false : true;
};

const countMagicNumber = (a, b) => {
  let cnt = 0;
  for (let i = a; i <= b; i++) {
    if (isPrime(i) && isSumOfDigitsEven(i)) cnt++;
  }

  return cnt;
};

console.log(countMagicNumber(A, B));
