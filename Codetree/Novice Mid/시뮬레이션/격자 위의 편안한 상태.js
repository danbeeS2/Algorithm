// 격자 위의 편안한 상태
const fs = require("fs");
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const [n, m] = input[0];
const orders = input.slice(1);

const createGrid = (size) => {
  return Array.from({ length: size }, () => Array(size).fill(false));
};

const isInRange = (x, y, n) => {
  return x >= 0 && x < n && y >= 0 && y < n;
};

const isComfortable = (r, c, grid) => {
  let count = 0;
  const directions = [
    [0, -1],
    [-1, 0],
    [0, 1],
    [1, 0],
  ];

  let x = r - 1;
  let y = c - 1;
  for (const [dx, dy] of directions) {
    let nx = x + dx;
    let ny = y + dy;
    if (isInRange(nx, ny, grid.length) && grid[nx][ny]) {
      count += 1;
    }
  }
  return count === 3 ? true : false;
};

const paintBlock = (n, orders) => {
  const grid = createGrid(n);
  let res = [];

  for (const [r, c] of orders) {
    grid[r - 1][c - 1] = true;
    res.push(isComfortable(r, c, grid) ? 1 : 0);
  }

  return res;
};

const main = () => {
  const res = paintBlock(n, orders);
  console.log(res.join("\n"));
};
main();
