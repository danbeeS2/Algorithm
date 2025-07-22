// 최대로 겹치는 구간
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input.slice(1).map((x) => x.trim().split(" ").map(Number));

const countOverlap = (arr) => {
  const OFFSET = 100;
  let lines = new Array(OFFSET * 2).fill(0);

  arr.forEach(([s, e]) => {
    for (let i = s; i < e; i++) {
      lines[OFFSET + i] += 1;
    }
  });

  return Math.max(...lines);
};

const main = () => {
  console.log(countOverlap(arr));
};

main();
