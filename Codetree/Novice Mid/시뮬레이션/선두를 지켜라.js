// 선두를 지켜라
const fs = require("fs");
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const [n, m] = input[0];
const aArr = input.slice(1, n + 1);
const bArr = input.slice(n + 1);

const OFFSET = 1_000_000;

const recordTime = (records) => {
  const pos = new Array(OFFSET + 1).fill(0);
  let time = 1;
  for (const [speed, t] of records) {
    for (let i = 0; i < t; i++) {
      pos[time] = pos[time - 1] + speed;
      time++;
    }
  }

  return pos;
};

const getFastest = (a, b) => {
  const posA = recordTime(a);
  const posB = recordTime(b);

  let leader;
  let cnt = 0;
  for (let t = 1; t < OFFSET + 1; t++) {
    if (posA[t] > posB[t]) {
      if (leader === "A") cnt++;
      leader = "B";
    }
    if (posA[t] < posB[t]) {
      if (leader === "B") cnt++;
      leader = "A";
    }
  }
  return cnt;
};

const main = () => {
  const res = getFastest(aArr, bArr);
  console.log(res);
};

main();
