// 마라톤 중간에 택시타기 2
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const checkPoints = input.slice(1).map((row) => row.split(" ").map(Number));

const getManhattanDist = ([x1, y1], [x2, y2]) => {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2);
};

const getMinDist = (checkPoints, n) => {
  let minDist = Number.MAX_SAFE_INTEGER;
  for (let i = 1; i < n - 1; i++) {
    let dist = 0;
    let prveIdx = 0;
    for (let j = 1; j < n; j++) {
      if (i === j) continue; // 생략할 체크포인트
      dist += getManhattanDist(checkPoints[prveIdx], checkPoints[j]);
      prveIdx = j;
    }
    minDist = Math.min(minDist, dist);
  }

  return minDist;
};

const main = () => {
  const result = getMinDist(checkPoints, n);
  console.log(result);
};

main();
