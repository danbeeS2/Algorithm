// 마을 구분하기
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map((line) => line.split(" ").map(Number));
const visited = Array.from({ length: n }, () => Array(n).fill(false));

const direction = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

const dfs = (x, y) => {
  visited[x][y] = true;
  count = 1;

  for (const [dx, dy] of direction) {
    const nx = x + dx;
    const ny = y + dy;

    if (
      nx >= 0 &&
      nx < n &&
      ny >= 0 &&
      ny < n &&
      !visited[nx][ny] &&
      grid[nx][ny] === 1
    ) {
      count += dfs(nx, ny);
    }
  }
  return count;
};

let result = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (grid[i][j] === 1 && visited[i][j] === false) {
      result.push(dfs(i, j));
    }
  }
}

result.sort((a, b) => a - b);
console.log(result.length);
result.forEach((num) => console.log(num));
