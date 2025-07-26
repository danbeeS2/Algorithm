// 되돌아오기
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const orders = input.slice(1).map((x) => {
  const [dir, num] = x.split(" ");
  return [dir, Number(num)];
});

const simulateMovement = (orders) => {
  const dirMap = { W: 0, N: 1, E: 2, S: 3 };
  const directions = [
    [0, -1],
    [-1, 0],
    [0, 1],
    [1, 0],
  ];

  let time = 0;
  let x = 0,
    y = 0;

  for (const [dir, num] of orders) {
    const d = dirMap[dir];

    const [dx, dy] = directions[d];
    for (let i = 0; i < num; i++) {
      x = x + dx;
      y = y + dy;
      time++;
      if (x === 0 && y === 0) return time;
    }
  }
  return -1;
};

const main = () => {
  const res = simulateMovement(orders);
  console.log(res);
};

main();
