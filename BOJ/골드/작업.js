// 골드4 작업 - 위상정렬 + dp
const fs = require("fs");
// const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const input = fs.readFileSync("input.txt", "utf8").trim().split("\n");

const N = Number(input[0]);
const times = Array(N).fill(0); // 작업번호: 인덱스 - 1
const indegree = Array(N).fill(0); // 진입 차수

const adj = {};
for (let i = 0; i < N; i++) {
  adj[i] = [];
}

let num = 0;

// input 넣기
for (const line of input.slice(1)) {
  const parts = line.split(" ").map(Number);
  // 작업 시간
  times[num] = parts[0];

  const cnt = parts[1];
  indegree[num] = cnt;

  if (cnt > 0) {
    for (let i = 0; i < cnt; i++) {
      const dep = parts[i + 2] - 1;
      // indegree[num]++ (보통은 이렇게 해야함)
      adj[dep].push(num);
    }
  }
  num++;
}

const queue = [];
const dp = {};

// indegree가 0인 작업 큐에 넣기
for (let i = 0; i < N; i++) {
  if (indegree[i] === 0) {
    queue.push(i);
    dp[i] = times[i]; // 작업 시간도 자기 자신
  } else {
    dp[i] = 0;
  }
}

while (queue.length > 0) {
  const cur = queue.shift();

  for (let next of adj[cur]) {
    // dp 계산하고 진입차수 -1
    dp[next] = Math.max(dp[next], dp[cur] + times[next]);
    indegree[next] -= 1;
    if (indegree[next] === 0) queue.push(next);
  }
}

// console.log(adj);
// console.log(indegree, dp);

// 결과 출력
let res = 0;
for (let i = 0; i < N; i++) {
  if (dp[i] > res) res = dp[i];
}

console.log(res);

// adj
// {
//   '0': [ 1, 3 ],
//   '1': [ 2, 4, 5 ],
//   '2': [ 6 ],
//   '3': [ 4, 5 ],
//   '4': [ 6 ],
//   '5': [ 6 ],
//   '6': []
// }

// times = [5, 1, 3, 6, 1, 8, 4]

// 7
// 1: 5 0
// 2: 1 1 1
// 3: 3 1 2
// 4: 6 1 1
// 5: 1 2 2 4
// 6: 8 2 2 4
// 7: 4 3 3 5 6
