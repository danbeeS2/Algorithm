// 문자에 따른 명령 2
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("");

const moveByOrder = (orders) => {
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  let dirNum = 0;
  let nx = 0;
  let ny = 0;

  for (const order of orders) {
    if (order === "L") {
      // 반시계 방향 90도 회전
      dirNum = (dirNum - 1 + 4) % 4;
    }
    if (order === "R") {
      // 시계 방향 90도 회전
      dirNum = (dirNum + 1) % 4;
    }
    if (order === "F") {
      // 시계 방향 90도 회전
      nx += dx[dirNum];
      ny += dy[dirNum];
    }
  }

  return { x: nx, y: ny };
};

const main = () => {
  const { x, y } = moveByOrder(input);
  console.log(x, y);
};

main();
