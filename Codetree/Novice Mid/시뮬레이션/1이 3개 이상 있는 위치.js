// 1이 3개 이상 있는 위치
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input.slice(1).map((row) => row.split(" ").map(Number));

const isInRange = (x, y, size) => {
  return 0 <= x && x < size && 0 <= y && y < size;
};

const countAdjacentOnes = (grid, x, y, size) => {
  const direction = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];
  let cnt = 0;
  for (const [dx, dy] of direction) {
    const nx = x + dx;
    const ny = y + dy;
    if (isInRange(nx, ny, size) && grid[nx][ny] === 1) {
      cnt++;
    }
  }
  return cnt;
};

const countThreeOver = (grid, n) => {
  let total = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (countAdjacentOnes(grid, i, j, n) >= 3) {
        total++;
      }
    }
  }
  return total;
};

const main = () => {
  const count = countThreeOver(arr, n);
  console.log(count);
};

main();
