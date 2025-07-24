// 연속되는 수 4 (증가하는 연속 부분 수열의 최대 길이)
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const numbers = input.slice(1).map(Number);

const getMaxIncLen = (numbers) => {
  let cnt = 1;
  let maxCnt = 1;

  for (let i = 1; i < numbers.length; i++) {
    cnt = numbers[i] > numbers[i - 1] ? cnt + 1 : 1;
    maxCnt = Math.max(cnt, maxCnt);
  }
  return maxCnt;
};

const main = () => {
  console.log(getMaxIncLen(numbers));
};

main();
