const fs = require("fs");
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const N = input[0];
const arr = input[1];

let cnt = 0;
for (let i = 0; i < N; i++) {
  if (arr[i] === 2) cnt++;
  if (cnt === 3) {
    console.log(i + 1);
    break;
  }
}
