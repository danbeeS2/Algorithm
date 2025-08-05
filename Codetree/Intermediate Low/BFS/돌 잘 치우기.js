// 돌 잘 치우기
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, K, M] = input[0].split(" ").map(Number);
const grid = input.slice(1, 1 + N).map((line) => line.split(" ").map(Number));
const startPoints = input
  .slice(1 + N, 1 + N + K)
  .map((line) => line.split(" ").map(Number));

class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.tail = 0;
  }

  enqueue(item) {
    this.queue[this.tail++] = item;
  }

  dequeue() {
    return this.queue[this.head++];
  }

  isEmpty() {
    return this.head === this.tail;
  }
}

const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

const bfs = (removed) => {
  const board = grid.map((row) => [...row]);
  for (const [x, y] of removed) board[x][y] = 0; // 돌 제거

  let count = 0;

  const queue = new Queue();
  const visited = Array.from({ length: N }, () => Array(N).fill(false));

  for (const [sx, sy] of startPoints) {
    queue.enqueue([sx - 1, sy - 1]);
    visited[sx - 1][sy - 1] = 1;
    count++;
  }

  while (!queue.isEmpty()) {
    const [cx, cy] = queue.dequeue();

    for (const [dx, dy] of directions) {
      const nx = cx + dx;
      const ny = cy + dy;

      if (nx < 0 || nx >= N || ny < 0 || ny >= N) continue;
      if (visited[nx][ny]) continue;

      if (board[nx][ny] === 0) {
        visited[nx][ny] = true;
        queue.enqueue([nx, ny]);
        count++;
      }
    }
  }

  return count;
};

const getStonesPosition = () => {
  const stones = [];
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (grid[i][j] === 1) {
        stones.push([i, j]);
      }
    }
  }
  return stones;
};

const selectStone = (idx, picked, stones) => {
  // m개 고르면 BFS 결과 반환
  if (picked.length === M) {
    return bfs(picked);
  }
  // 돌 후보 소진되면, 유효한 조합이 아니므로 -1 반환
  if (idx === stones.length) return -1;

  // 조합
  // 1) 이 돌을 고른 경우
  picked.push(stones[idx]);
  const take = selectStone(idx + 1, picked, stones);
  picked.pop();

  // 2) 이 돌을 건너뛴 경우
  const skip = selectStone(idx + 1, picked, stones);

  return Math.max(take, skip);
};

const main = () => {
  const stones = getStonesPosition();
  const result = selectStone(0, [], stones);
  console.log(result);
};

main();
