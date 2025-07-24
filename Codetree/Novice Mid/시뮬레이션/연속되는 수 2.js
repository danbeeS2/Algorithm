// 연속되는 수 2
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

const countLongestRepeat = (numbers) => {
  let maxCnt = 0;
  let cnt = 0;
  for (let i = 1; i < numbers.length; i++) {
    cnt = numbers[i] === numbers[i - 1] ? cnt + 1 : 1;
    if (cnt > maxCnt) maxCnt = cnt;
  }
  return maxCnt;
};

const main = () => {
  const res = countLongestRepeat(input);
  console.log(res);
};

main();
