// 연속되는 수 3
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const numbers = input.slice(1);

const countSameSign = (numbers) => {
  let minusCnt = 1;
  let plusCnt = 1;
  let maxCnt = 1;
  for (let i = 1; i < numbers.length; i++) {
    minusCnt = numbers[i] < 0 && numbers[i - 1] < 0 ? minusCnt + 1 : 1;
    plusCnt = numbers[i] >= 0 && numbers[i - 1] >= 0 ? plusCnt + 1 : 1;

    if (maxCnt < minusCnt) maxCnt = minusCnt;
    if (maxCnt < plusCnt) maxCnt = plusCnt;
  }
  return maxCnt;
};

const main = () => {
  console.log(countSameSign(numbers));
};

main();
