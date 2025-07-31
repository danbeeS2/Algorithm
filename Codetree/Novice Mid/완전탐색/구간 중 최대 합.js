// 구간 중 최대 합
const fs = require("fs");
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map(Number));

const [n, k] = input[0];
const arr = input[1];

const getMaxSumRange = (n, k, arr) => {
  let maxSum = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < n - k + 1; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum;
};

const main = () => {
  const result = getMaxSumRange(n, k, arr);
  console.log(result);
};
main();
