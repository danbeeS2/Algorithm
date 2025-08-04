// 안전 지대
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const grid = input
  .slice(1, 1 + Number(n))
  .map((line) => line.split(" ").map(Number));

const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const dfs = (x, y, num, visited) => {
  visited[x][y] = true;

  for (const [dx, dy] of directions) {
    const nx = x + dx;
    const ny = y + dy;

    if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
      if (grid[nx][ny] > num && !visited[nx][ny]) {
        dfs(nx, ny, num, visited);
      }
    }
  }
};

let result = [];
const maxH = grid.reduce((max, row) => Math.max(max, ...row), 0);
for (let rain = 1; rain <= maxH; rain++) {
  const visited = Array.from({ length: n }, () => Array(m).fill(false));
  let cnt = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (grid[i][j] > rain && visited[i][j] === false) {
        cnt++;
        dfs(i, j, rain, visited);
      }
    }
  }
  result.push([rain, cnt]);
}

result.sort((a, b) => b[1] - a[1]);
console.log(result[0].join(" "));
