// 그래프 탐색
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);

const visited = Array(n + 1).fill(false);
const graph = Array.from({ length: n + 1 }, () => []);

input.slice(1, m + 1).map((row) => {
  const [v1, v2] = row.split(" ").map(Number);
  // 양방향 그래프
  graph[v1].push(v2);
  graph[v2].push(v1);
});

let cnt = 0;

const dfs = (node) => {
  graph[node].forEach((v) => {
    if (!visited[v]) {
      visited[v] = true;
      cnt++;
      dfs(v);
    }
  });
};

visited[1] = true;
dfs(1);

console.log(cnt);
