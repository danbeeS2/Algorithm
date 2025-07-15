const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let arr = [];
let n = input.length;

for (let i = 0; i < n; i++) {
  arr.push(input[i].split(" ").map(Number));
}

for (let i = 0; i < n; i++) {
  let sumVal = arr[i].reduce((a, c) => a + c, 0);
  console.log(sumVal);
}
