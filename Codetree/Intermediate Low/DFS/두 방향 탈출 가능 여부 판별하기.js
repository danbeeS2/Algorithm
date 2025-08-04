// 두 방향 탈출 가능 여부 판별하기
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const grid = input.slice(1, n + 1).map((row) => row.split(" ").map(Number)); // 장애물 : 0, 길 : 1
const visited = Array.from({ length: n }, () => Array(m).fill(0));

const dfs = (x, y) => {
  visited[x][y] = 1; // 방문 체크
  
  if (x === n - 1 && y === m - 1) return;

  const dx = [0, 1];
  const dy = [1, 0];

  for (let i = 0; i < dx.length; i++) {
    const nx = x + dx[i];
    const ny = y + dy[i];

    if (
      nx >= 0 &&
      nx < n &&
      ny >= 0 &&
      ny < m &&
      visited[nx][ny] === 0 &&
      grid[nx][ny] === 1
    ) {
      dfs(nx, ny);
    }
  }
};

dfs(0, 0);

console.log(visited[n - 1][m - 1]);
