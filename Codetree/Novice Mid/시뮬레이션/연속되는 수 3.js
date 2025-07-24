// 연속되는 수 3
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const numbers = input.slice(1).map(Number);

const countSameSign = (numbers) => {
  let cnt = 1;
  let maxCnt = 1;
  for (let i = 1; i < numbers.length; i++) {
    // 같은 부호: 곱이 양수 (0 제외), 부호 일치
    cnt = numbers[i] * numbers[i - 1] > 0 ? cnt + 1 : 1;
    maxCnt = Math.max(maxCnt, cnt);
  }
  return maxCnt;
};

const main = () => {
  console.log(countSameSign(numbers));
};

main();
