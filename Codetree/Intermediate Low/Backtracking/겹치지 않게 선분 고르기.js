// 겹치지 않게 선분 고르기
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const segments = input
  .slice(1, 1 + n)
  .map((line) => line.split(" ").map(Number));

const isPossible = (selected) => {
  const sorted = [...selected].sort((a, b) => a[0] - b[0]);

  // 선분이 겹치는지 확인
  for (let i = 0; i < sorted.length - 1; i++) {
    if (sorted[i][1] >= sorted[i + 1][0]) return false;
  }
  return true;
};

let selected = [];
let res = 0;
const selectLines = (cnt, maxCnt, start) => {
  if (cnt === maxCnt) {
    if (isPossible(selected)) {
      res = Math.max(res, selected.length);
      return true;
    }
    return false;
  }

  for (let i = start; i < n; i++) {
    selected.push(segments[i]);
    selectLines(cnt + 1, maxCnt, i + 1);
    selected.pop();
  }
};

for (let i = n; i > 0; i--) {
  if (selectLines(0, i, 0)) break;
}

console.log(res);
