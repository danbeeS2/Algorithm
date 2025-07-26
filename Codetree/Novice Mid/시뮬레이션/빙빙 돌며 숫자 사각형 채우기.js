// 빙빙 돌며 숫자 사각형 채우기
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const [n, m] = input;

const isInRange = (x, y, n, m) => {
  return x >= 0 && x < n && y >= 0 && y < m;
};

const createGrid = (rowN, colN) => {
  return Array.from({ length: rowN }, () => Array(colN).fill(0));
};

const snailNumber = (r, c) => {
  const gird = createGrid(r, c);

  // 시계 방향
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  let dir = 0;
  let x = 0;
  let y = 0;

  gird[x][y] = 1;

  for (let i = 2; i <= r * c; i++) {
    let nx = x + dx[dir];
    let ny = y + dy[dir];

    // 방향 전환
    if (!isInRange(nx, ny, r, c) || gird[nx][ny] !== 0) {
      dir = (dir + 1) % 4;
    }

    x += dx[dir];
    y += dy[dir];

    gird[x][y] = i;
  }
  return gird;
};

const main = () => {
  const numbers = snailNumber(n, m);

  for (const row of numbers) {
    console.log(row.join(" "));
  }
};

main();
