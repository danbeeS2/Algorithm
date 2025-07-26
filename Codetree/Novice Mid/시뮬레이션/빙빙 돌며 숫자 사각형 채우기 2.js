// 빙빙 돌며 숫자 사각형 채우기 2
const fs = require("fs");
const [n, m] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const isInRange = (x, y, n, m) => {
  return x >= 0 && x < n && y >= 0 && y < m;
};

const createGrid = (n, m) => {
  return Array.from({ length: n }, () => Array(m).fill(0));
};

const snailNumbers = (n, m) => {
  const grid = createGrid(n, m);

  // 반시계 방향
  const dx = [0, 1, 0, -1];
  const dy = [-1, 0, 1, 0];

  // 초기화
  let x = 0,
    y = 0,
    d = 0;
  grid[x][y] = 1;

  for (let num = 2; num <= n * m; num++) {
    let nx = x + dx[d];
    let ny = y + dy[d];

    if (!isInRange(nx, ny, n, m) || grid[nx][ny] !== 0) {
      d = (d + 1) % 4;
      nx = x + dx[d];
      ny = y + dy[d];
    }
    x = nx;
    y = ny;
    grid[x][y] = num;
  }
  return grid;
};

const printGrid = (grid) => grid.forEach((row) => console.log(row.join(" ")));

const main = () => {
  const grid = snailNumbers(n, m);
  printGrid(grid);
};

main();
