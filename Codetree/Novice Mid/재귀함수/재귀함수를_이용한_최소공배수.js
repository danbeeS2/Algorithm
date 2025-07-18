const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const numbers = input[1].split(" ").map(Number);

// 유클리드 호제법
const gcd = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};

const getAllLcm = (curIdx, arr) => {
  if (curIdx === 0) return arr[0];

  return lcm(getAllLcm(curIdx - 1, arr), arr[curIdx]);
};

console.log(getAllLcm(n - 1, numbers));
