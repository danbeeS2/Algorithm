const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(input[0]);

const solve = (n, idx = 2, res = [2, 4]) => {
  // 첫번째 두번째 값
  if (n === 1) return 2;
  if (n === 2) return 4;

  // 종료 조건
  if (n === idx) return res[idx - 1];

  res.push((res[idx - 2] * res[idx - 1]) % 100);
  return solve(n, idx + 1, res);
};

console.log(solve(N));
