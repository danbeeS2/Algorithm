// 만나는 그 순간
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((line) => {
  const [dir, dist] = line.split(" ");
  return [dir, Number(dist)];
});

const arrA = arr.slice(0, n);
const arrB = arr.slice(n);

const OFFSET = 1000000;

const checkPosition = (arr) => {
  const timeTable = new Array(OFFSET).fill(0);
  let time = 1;
  for (const [dir, dist] of arr) {
    for (let i = 0; i < dist; i++) {
      timeTable[time] = timeTable[time - 1] + (dir === "R" ? 1 : -1);
      time++;
    }
  }
  return [timeTable, time];
};

const getMeetTime = (arr1, arr2, time) => {
  let minTime = Infinity;
  for (let t = 1; t < time; t++) {
    if (arr1[t] === arr2[t]) {
      minTime = t;
      break;
    }
  }
  return minTime !== Infinity ? minTime : -1;
};

const main = () => {
  const [timesA, t1] = checkPosition(arrA);
  const [timesB, t2] = checkPosition(arrB);

  console.log(getMeetTime(timesA, timesB, t1));
};

main();
