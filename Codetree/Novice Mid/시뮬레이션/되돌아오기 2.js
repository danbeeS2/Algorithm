// 되돌아오기 2
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const orders = input.split("");

const simulateMovement = (orders) => {
  const dir = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  let x = 0,
    y = 0;
  let d = 0;
  let time = 0;

  for (const order of orders) {
    if (order === "R") {
      d = (d + 1) % 4;
    } else if (order === "L") {
      d = (d - 1 + 4) % 4;
    } else if (order === "F") {
      const [dx, dy] = dir[d];
      x += dx;
      y += dy;
    }
    time++;

    if (x === 0 && y === 0) return time;
  }

  return -1;
};

const main = () => {
  const res = simulateMovement(orders);
  console.log(res);
};

main();
