// 최대로 겹치는 지점
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input.slice(1).map((x) => x.trim().split(" ").map(Number));

const countOverlap = (arr) => {
  const MAX_SIZE = 100 + 1;
  let lines = new Array(MAX_SIZE).fill(0);

  arr.forEach(([s, e]) => {
    // 끝 점 포함
    for (let i = s; i <= e; i++) {
      lines[i] += 1;
    }
  });

  return Math.max(...lines);
};

const main = () => {
  console.log(countOverlap(arr));
};

main();
