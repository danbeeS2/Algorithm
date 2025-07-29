// 오목
const fs = require("fs");
const grid = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map(Number));
const n = 19;

const isInRange = (x, y) => 0 <= x && x < n && 0 <= y && y < n;

const getWinner = (grid, n) => {
  // →, ↓, ↘, ↙
  const dx = [0, 1, 1, 1];
  const dy = [1, 0, 1, -1];

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < n; y++) {
      const color = grid[x][y];
      if (color === 0) continue;

      for (let dir = 0; dir < 4; dir++) {
        const nx = x - dx[dir];
        const ny = y - dy[dir];

        // 중복 탐색 방지
        if (isInRange(nx, ny) && grid[nx][ny] === grid[x][y]) continue;

        let count = 1;
        let cx = x;
        let cy = y;

        while (true) {
          const nx = cx + dx[dir];
          const ny = cy + dy[dir];
          if (!isInRange(nx, ny)) break;
          if (grid[nx][ny] !== color) break;

          count++;
          cx = nx;
          cy = ny;
        }

        if (count === 5) {
          const midX = x + dx[dir] * 2;
          const midY = y + dy[dir] * 2;
          return { winner: color, x: midX, y: midY };
        }
      }
    }
  }
  return false;
};

const main = () => {
  const result = getWinner(grid, n);
  if (result) {
    console.log(result.winner);
    console.log(result.x + 1, result.y + 1); // 1-indexed로 출력
  } else {
    console.log(0);
  }
};

main();
