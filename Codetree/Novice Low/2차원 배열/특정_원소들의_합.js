const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let arr = input.map((line) => line.split(" ").map(Number));
let n = arr.length;

let res = 0;
for (let i = 0; i < n; i++) {
  for (let j = 0; j <= i; j++) {
    res += arr[i][j];
  }
}
console.log(res);
