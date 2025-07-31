// 특정 구간의 원소 평균값
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

const getPrefixSum = (arr, n) => {
  const prefixSum = Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    prefixSum[i + 1] = prefixSum[i] + arr[i];
  }
  return prefixSum;
};

const countMatching = (arr, n) => {
  const prefixSum = getPrefixSum(arr, n);
  let count = 0;

  for (let i = 0; i < n; i++) {
    let numbers = new Set();
    for (let j = i; j < n; j++) {
      numbers.add(arr[j]);

      // [i, j] 구간의 합
      const sum = prefixSum[j + 1] - prefixSum[i];

      let avg = sum / (j - i + 1);
      if (numbers.has(avg)) count++;
    }
  }
  return count;
};

const main = () => {
  const result = countMatching(arr, n);
  console.log(result);
};

main();
