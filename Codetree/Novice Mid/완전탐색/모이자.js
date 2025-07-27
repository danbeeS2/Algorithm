// 모이자
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = input[0];
const people = input[1].split(" ").map(Number);

const INT_MAX = Number.MAX_SAFE_INTEGER;

const calculateMinTotalDistance = (n, people) => {
  let minTotal = INT_MAX;
  for (let target = 0; target < n; target++) {
    let total = 0;
    for (let i = 0; i < n; i++) {
      total += Math.abs(i - target) * people[i];
    }
    if (minTotal > total) minTotal = total;
  }
  return minTotal;
};

const main = () => {
  const res = calculateMinTotalDistance(n, people);
  console.log(res);
};

main();
