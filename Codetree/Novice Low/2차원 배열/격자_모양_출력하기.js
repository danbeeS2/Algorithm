const fs = require("fs");
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const [N, M] = input[0];
const arr = input.slice(1);
let res = new Array(N).fill(0).map(() => new Array(N).fill(0));

for (let k = 0; k < M; k++) {
  let [i, j] = arr[k];
  res[i - 1][j - 1] = i * j;
}

for (let row of res) {
  console.log(row.join(" "));
}
