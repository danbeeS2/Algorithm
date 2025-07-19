const fs = require("fs");
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((x) => x.trim().split(" ").map(Number));

const [n] = input[0];
const arr1 = input[1];
const arr2 = input[2];

arr1.sort((a, b) => a - b);
arr2.sort((a, b) => a - b);

const solve = (arr1, arr2) => {
  for (let i = 0; i < n; i++) {
    if (arr1[i] !== arr2[i]) return "No";
  }
  return "Yes";
};

console.log(solve(arr1, arr2));
