const fs = require("fs");
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n\n")
  .map((group) => group.split(`\n`).map((line) => line.split(" ").map(Number)));

const N = 3;

let arr1 = input[0];
const arr2 = input[1];

let res = arr1.map((row, i) => row.map((el, j) => el * arr2[i][j]));

console.log(res.map((line) => line.join(" ")).join(`\n`));
