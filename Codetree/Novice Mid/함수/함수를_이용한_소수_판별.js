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

const sumPrimesInRange = (a, b) => {
  let sumVal = 0;
  for (let i = a; i <= b; i++) {
    if (isPrime(i)) sumVal += i;
  }
  return sumVal;
};

console.log(sumPrimesInRange(A, B));
