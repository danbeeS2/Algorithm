// T를 초과하는 연속 부분 수열
const fs = require("fs");
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const [n, t] = input[0];
const arr = input[1];

const getMaxSubarray = (numbers) => {
  let cnt = 1;
  let maxCnt = 1;

  for (let i = 1; i < numbers.length; i++) {
    cnt = numbers[i] > t && numbers[i - 1] > t ? cnt + 1 : 1;
    maxCnt = Math.max(cnt, maxCnt);
  }

  return maxCnt;
};

const main = () => {
  console.log(getMaxSubarray(arr));
};

main();
