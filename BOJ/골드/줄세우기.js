// 골드3 줄세우기 - 위상 정렬
const fs = require("fs");
// const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const input = fs.readFileSync("input.txt", "utf8").trim().split("\n");

// N명 M번 비교 해봄
// M번 비교해본 결과 - a b (a가 b보다 앞에 와야 함)

const [N, M] = input[0].split(" ").map(Number);

const adj = {};
const indegree = Array(N + 1).fill(0); // 진입 차수(선행 작업수)

for (let i = 1; i <= N; i++) {
  adj[i] = [];
}

for (let i = 1; i <= M; i++) {
  const [front, back] = input[i].split(" ").map(Number);

  adj[front].push(back);
  indegree[back]++;
}

const queue = [];

for (let i = 1; i <= N; i++) {
  if (indegree[i] === 0) {
    queue.push(i);
  }
}

const res = [];
while (queue.length) {
  const cur = queue.shift();
  res.push(cur);

  for (const next of adj[cur]) {
    indegree[next]--;
    if (indegree[next] === 0) queue.push(next);
  }
}

console.log(res.join(' '));
