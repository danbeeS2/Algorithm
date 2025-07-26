// 빙빙 돌며 사각형 채우기
const fs = require("fs");
const [n, m] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const isInRange = (x, y, n, m) => {
  return x >= 0 && x < n && y >= 0 && y < m;
};

const createGrid = (n, m) => {
  return Array.from({ length: n }, () => Array(m).fill(0));
};

const getNextLetter = (num) => {
  // 아스키 코드 A: 65 ~ Z: 90
  const A = 65;
  const ALPHABET_COUNT = 26;

  const asci = A + (num % ALPHABET_COUNT);
  return String.fromCharCode(asci);
};

const snailAlphabet = (n, m) => {
  const grid = createGrid(n, m);

  // 시계 방향
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  let x = 0,
    y = 0,
    d = 0;

  for (let i = 0; i < n * m; i++) {
    grid[x][y] = getNextLetter(i);

    let nx = x + dx[d];
    let ny = y + dy[d];

    if (!isInRange(nx, ny, n, m) || grid[nx][ny] !== 0) {
      d = (d + 1) % 4;
      nx = x + dx[d];
      ny = y + dy[d];
    }

    x = nx;
    y = ny;
  }
  return grid;
};

const pritGrid = (grid) => {
  grid.forEach((row) => console.log(row.join(" ")));
};

const main = () => {
  const grid = snailAlphabet(n, m);
  pritGrid(grid);
};

main();
