// 네 방향 탈출 가능 여부 판별하기
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const grid = input.slice(1, n + 1).map((line) => line.split(" ").map(Number));

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
  [0, -1],
  [-1, 0],
  [0, 1],
  [1, 0],
];
const visited = Array.from({ length: n }, () => Array(m).fill(0));

const bfs = (x, y) => {
  const queue = new Queue();

  queue.enqueue([x, y]);
  visited[x][y] = 1;

  while (!queue.isEmpty()) {
    const [cx, cy] = queue.dequeue();

    if (cx === n - 1 && cy === m - 1) return;

    for (const [dx, dy] of directions) {
      const nx = cx + dx;
      const ny = cy + dy;

      if (nx >= 0 && nx < n && ny >= 0 && ny < m) {
        if (!visited[nx][ny] && grid[nx][ny] === 1) {
          visited[nx][ny] = 1;
          queue.enqueue([nx, ny]);
        }
      }
    }
  }
};

bfs(0, 0);
console.log(visited[n - 1][m - 1]);
