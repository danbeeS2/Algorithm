// 방향에 맞춰 이동
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const orders = input.slice(1).map((x) => {
  const [dir, num] = x.split(" ");
  return [dir, Number(num)];
});

const moveByDirection = (orders) => {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const directionMap = {
    W: 0,
    N: 1,
    E: 2,
    S: 3,
  };

  let nx = 0;
  let ny = 0;
  for (let [dir, num] of orders) {
    const d = directionMap[dir];
    nx = nx + dx[d] * num;
    ny = ny + dy[d] * num;
  }
  return { x: nx, y: ny };
};

const main = () => {
  const { x, y } = moveByDirection(orders);
  console.log(x, y);
};

main();
