// 뿌요뿌요
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map((row) => row.split(" ").map(Number));

const visited = Array.from({ length: n }, () => Array(n).fill(false));

const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

const dfs = (x, y, num) => {
  visited[x][y] = true;
  count = 1;

  for (const [dx, dy] of directions) {
    const nx = x + dx;
    const ny = y + dy;

    if (nx >= 0 && nx < n && ny >= 0 && ny < n) {
      if (!visited[nx][ny] && grid[nx][ny] === num) {
        count += dfs(nx, ny, num);
      }
    }
  }
  return count;
};

let maxBlock = 0;
let bomb = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (!visited[i][j]) {
      const blockSize = dfs(i, j, grid[i][j]);

      maxBlock = Math.max(maxBlock, blockSize);
      if (blockSize >= 4) bomb++;
    }
  }
}

console.log(bomb, maxBlock);
