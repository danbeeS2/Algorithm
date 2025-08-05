// K번 최댓값으로 이동하기
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const grid = input.slice(1, 1 + n).map((line) => line.split(" ").map(Number));
const [r, c] = input[1 + n].split(" ").map(Number);

const direction = [
  [-1, 0],
  [0, -1],
  [1, 0],
  [0, 1],
];

const bfs = (startX, startY) => {
  const queue = [[startX, startY]];
  const visited = Array.from({ length: n }, () => Array(n).fill(false));
  const adj = [];

  const startValue = grid[startX][startY];
  visited[startX][startY] = true;

  while (queue.length) {
    const [x, y] = queue.shift();

    for (const [dx, dy] of direction) {
      const nx = x + dx;
      const ny = y + dy;

      if (nx < 0 || nx >= n || ny < 0 || ny >= n) continue;

      if (grid[nx][ny] < startValue && !visited[nx][ny]) {
        queue.push([nx, ny]);
        adj.push([grid[nx][ny], nx, ny]);
        visited[nx][ny] = true;
      }
    }
  }
  return adj;
};

let cx = r - 1;
let cy = c - 1;

for (let _ = 0; _ < k; _++) {
  const adj = bfs(cx, cy);

  // 갈 수 있는 칸이 없으면 종료
  if (adj.length === 0) break;

  // 갈 수 있는 칸 중 최대값 (이동 우선순위: 값, -행, -열)
  let maxV = 0;
  for (const [value, x, y] of adj) {
    maxV = Math.max(value, maxV);
  }

  let nx = n;
  let ny = n;
  for (const [value, x, y] of adj) {
    if (value === maxV) {
      if (nx > x || (nx === x && ny > y)) {
        nx = x;
        ny = y;
      }
    }
  }
  cx = nx;
  cy = ny;
}

console.log(cx + 1, cy + 1);
