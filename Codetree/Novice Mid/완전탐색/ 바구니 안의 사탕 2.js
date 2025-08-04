// 바구니 안의 사탕 2
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);

const MAX_SIZE = 101;
const baskets = new Array(MAX_SIZE).fill(0);

input.slice(1, n + 1).forEach((row) => {
  const [candy, position] = row.split(" ").map(Number);
  baskets[position] += candy;
});

let maxCandy = 0;
for (let c = 0; c < MAX_SIZE; c++) {
  let sum = 0;
  for (let i = Math.max(0, c - k); i <= Math.min(MAX_SIZE - 1, c + k); i++) {
    sum += baskets[i];
  }
  maxCandy = Math.max(maxCandy, sum);
}

console.log(maxCandy);
