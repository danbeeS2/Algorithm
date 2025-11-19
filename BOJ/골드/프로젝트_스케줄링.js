// 골드2 프로젝트 스케줄링 - 위상정렬 + dp

const fs = require("fs");
// const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const input = fs.readFileSync("input.txt", "utf8").trim().split("\n");

const n = input.length;

const task = {}; // 작업 이름 : 시간
const indegree = {}; // 진입 차수
const adj = {};

for (const line of input) {
  const [name, timeStr, depsStr] = line.split(" ");

  task[name] = Number(timeStr);
  adj[name] = adj[name] || [];
  indegree[name] = indegree[name] ?? 0;

  if (depsStr) {
    const deps = depsStr.split("");

    for (const dep of deps) {
      adj[dep] = adj[dep] || [];
      adj[dep].push(name);

      // 선행 작업 수
      indegree[name] = (indegree[name] || 0) + 1;
      indegree[dep] = indegree[dep] ?? 0;
    }
  }
}

// 1. indegree 인 애들 queue에 넣기
// 2. bfs + dp
  // 1) shif 해서 x => adj[x]에서 꺼내기 (next)
  // 2) dp[next] = max(dp[next], dp[cur] + task[next])

const dp = {}
const queue = []
const names = Object.keys(task)

for (const name of names){
  if (indegree[name] === 0){
    queue.push(name)
    dp[name] = task[name] // 자기 시간
  } else {
    dp[name] = 0
  }
}

while (queue.length > 0){
  const cur = queue.shift()

  for (const next of adj[cur]){
    // dp 계산
    dp[next] = Math.max(dp[next], dp[cur] + task[next])

    // 진입차수 줄이기
    indegree[next] -= 1
    if (indegree[next] === 0) queue.push(next)
  }
}

let res = 0
for(const name of names){
  if (dp[name] > res) res = dp[name]
}

console.log(res)