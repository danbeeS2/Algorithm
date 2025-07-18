const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let n = Number(input[0]);

const makeOneCnt = (n, cnt = 0) => {
  if (n === 1) return cnt;
  n = n % 2 ? n * 3 + 1 : parseInt(n / 2);
  return makeOneCnt(n, cnt + 1);
};

console.log(makeOneCnt(n));
