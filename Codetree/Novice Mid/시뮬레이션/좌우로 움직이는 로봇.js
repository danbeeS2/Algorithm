// 좌우로 움직이는 로봇
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const orders = input.slice(1).map((line) => {
  const [time, dir] = line.split(" ");
  return [Number(time), dir];
});

const robotA = orders.slice(0, n);
const robotB = orders.slice(n, m + n);

const OFFSET = 1_000_000;

const turnOnTheRobot = (orders) => {
  const posAtTime = [OFFSET]; // 0초 위치
  let pos = OFFSET;

  for (const [t, d] of orders) {
    const dir = d === "R" ? 1 : -1;
    for (let i = 0; i < t; i++) {
      pos += dir;
      posAtTime.push(pos); // 시간별 위치
    }
  }
  return posAtTime;
};

const countMeetTime = (posA, posB) => {
  const maxTime = Math.max(posA.length, posB.length);
  let cnt = 0;

  for (let t = 1; t < maxTime; t++) {
    // 로봇이 움직임을 종료한 이후에는 같은 위치에 머물러 있음
    const prevA = posA[t - 1] ? posA[t - 1] : posA[posA.length - 1];
    const prevB = posB[t - 1] ? posB[t - 1] : posB[posB.length - 1];

    const curA = posA[t] ? posA[t] : posA[posA.length - 1];
    const curB = posB[t] ? posB[t] : posB[posB.length - 1];

    // 바로 직전에는 다른 위치에 있다가 그 다음 번에 같은 위치에 오는 경우
    if (prevA !== prevB && curA === curB) cnt++;
  }
  return cnt;
};

const main = () => {
  const posA = turnOnTheRobot(robotA);
  const posB = turnOnTheRobot(robotB);
  console.log(countMeetTime(posA, posB));
};

main();
