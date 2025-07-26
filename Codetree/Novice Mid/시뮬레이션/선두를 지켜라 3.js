// 선두를 지켜라 3
const fs = require("fs");
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const [n, m] = input[0];
const aRecords = input.slice(1, n + 1);
const bRecords = input.slice(n + 1);

const recoredRace = (records) => {
  const race = new Array(1000 + 1).fill(0);

  let time = 1;
  for (const [v, t] of records) {
    for (let i = 0; i < t; i++) {
      race[time] = race[time - 1] + v;
      time++;
    }
  }

  return race;
};

const countChangeLeader = (timesA, timesB) => {
  const leaders = [];

  for (let t = 1; t < timesA.length; t++) {
    if (timesA[t] === 0 && timesB[t] === 0) break;

    if (timesA[t] === timesB[t]) {
      if (leaders.at(-1) !== "(A, B)") leaders.push("(A, B)");
    } else if (timesA[t] > timesB[t]) {
      if (leaders.at(-1) !== "A") leaders.push("A");
    } else if (timesA[t] < timesB[t]) {
      if (leaders.at(-1) !== "B") leaders.push("B");
    }
  }

  return leaders.length;
};

const main = () => {
  const timeTableA = recoredRace(aRecords);
  const timeTableB = recoredRace(bRecords);

  const res = countChangeLeader(timeTableA, timeTableB);
  console.log(res);
};

main();
