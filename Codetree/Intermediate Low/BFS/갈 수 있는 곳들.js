// 갈 수 있는 곳들
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const grid = input.slice(1, n + 1).map((line) => line.split(" ").map(Number));
const startPoints = input
  .slice(n + 1)
  .map((line) => line.split(" ").map(Number));

const directions = [
  [0, -1],
  [-1, 0],
  [0, 1],
  [1, 0],
];

const isInRange = (x, y) => x >= 0 && x < n && y >= 0 && y < n;

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

const bfs = (x, y) => {
  const queue = new Queue();

  queue.enqueue([x, y]);
  visited[x][y] = 1;

  let count = 1;

  while (!queue.isEmpty()) {
    const [cx, cy] = queue.dequeue();

    for (const [dx, dy] of directions) {
      const nx = cx + dx;
      const ny = cy + dy;

      if (isInRange(nx, ny) && !visited[nx][ny] && grid[nx][ny] === 0) {
        visited[nx][ny] = true;
        count++;
        queue.enqueue([nx, ny]);
      }
    }
  }
  return count;
};

let cnt = 0;
const visited = Array.from({ length: n }, () => Array(n).fill(false));
for ([x, y] of startPoints) {
  const sx = x - 1;
  const sy = y - 1;

  if (!visited[sx][sy] && grid[sx][sy] === 0) {
    cnt += bfs(sx, sy);
  }
}

console.log(cnt);
