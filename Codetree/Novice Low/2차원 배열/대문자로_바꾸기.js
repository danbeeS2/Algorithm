const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let arr = [];
const n = input.length;

for (let i = 0; i < n; i++) {
  arr.push(input[i].split(" "));
}

for (let i = 0; i < n; i++) {
  let str = arr[i].map((s) => s.toUpperCase());
  console.log(str.join(" "));
}
