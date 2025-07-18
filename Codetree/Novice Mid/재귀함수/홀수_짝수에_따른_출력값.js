const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);

const solve = (n) => {
  if (n <= 0) return 0;
  return solve(n - 2) + n;
};

console.log(solve(n));
