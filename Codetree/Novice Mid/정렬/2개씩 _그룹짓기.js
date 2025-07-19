const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const nums = input[1].trim().split(" ").map(Number);

// 원소의 합 중 최댓값이 최소가 되도록
const getMaxPairSum = (n, arr) => {
  arr.sort((a, b) => a - b);

  let maxSum = arr[0] + arr[1];
  for (let i = 0; i < n; i++) {
    const sumVal = arr[i] + arr[2 * n - 1 - i];
    if (sumVal > maxSum) maxSum = sumVal;
  }
  return maxSum;
};

const main = () => {
  const ans = getMaxPairSum(n, nums);
  console.log(ans);
};

main();
