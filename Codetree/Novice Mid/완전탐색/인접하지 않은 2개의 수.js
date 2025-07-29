// 인접하지 않은 2개의 수
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

const getMaxSum = (arr) => {
  let maxSum = Number.MIN_SAFE_INTEGER;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 2; j < n; j++) {
      let sum = arr[i] + arr[j];
      maxSum = Math.max(sum, maxSum);
    }
  }
  return maxSum;
};

const main = () => {
  const result = getMaxSum(arr);
  console.log(result);
};

main();
