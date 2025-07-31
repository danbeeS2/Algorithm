// 특정 수와 근접한 합
const fs = require("fs");
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map(Number));

const [n, s] = input[0];
const arr = input[1];

const getMinDiff = (n, s, arr) => {
  let total = arr.reduce((acc, cur) => acc + cur, 0);
  let minDiff = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const currSum = total - arr[i] - arr[j];
      diff = Math.abs(currSum - s);
      minDiff = Math.min(minDiff, diff);
    }
  }
  return minDiff;
};

const main = () => {
  const result = getMinDiff(n, s, arr);
  console.log(result);
};

main();
