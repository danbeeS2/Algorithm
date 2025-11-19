// 골드2 1766 문제집 - 위상정렬 + 최소 힙

// 최소힙
class MinHeap {
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  // 최소값 보기
  peek() {
    return this.heap[0];
  }

  // 값을 leaf에 넣고 -> 부모와 비교해서 위치 정렬(부모보다 작으면 올리기)
  push(value) {
    this.heap.push(value);
    this._bubbleUp(this.heap.length - 1);
  }

  _bubbleUp(idx) {
    while (idx > 0) {
      const parent = Math.floor((idx - 1) / 2);
      if (this.heap[parent] <= this.heap[idx]) break;
      // swap
      [this.heap[parent], this.heap[idx]] = [this.heap[idx], this.heap[parent]];
      idx = parent;
    }
  }

  // 최소값 꺼내기 -> left를 root로 옮겨서 -> 다시 정렬 (부모보다 크면 내리기)
  pop() {
    if (this.isEmpty()) return undefined;
    if (this.heap.length === 1) return this.heap.pop();

    const min = this.heap[0];
    this.heap[0] = this.heap.pop(); // 마지막 leaf를 루트로 이동
    this._bubbleDown(0); // 최상단 시작해서 아래로 내리면서 정렬

    return min;
  }

  _bubbleDown(idx) {
    const length = this.heap.length;

    while (true) {
      const left = idx * 2 + 1;
      const right = idx * 2 + 2;
      let smallest = idx;

      if (left < length && this.heap[smallest] > this.heap[left]) {
        smallest = left;
      }

      if (right < length && this.heap[smallest] > this.heap[right]) {
        smallest = right;
      }

      if (smallest === idx) break;

      // swap
      [this.heap[smallest], this.heap[idx]] = [
        this.heap[idx],
        this.heap[smallest],
      ];
      idx = smallest;
    }
  }
}

const fs = require("fs");
// const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const input = fs.readFileSync("input.txt", "utf8").trim().split("\n");

const [N, M] = input[0].split(" ").map(Number);

const adj = {}; // 간선
const indegree = Array(N + 1).fill(0); // 진입차수(선행 작업 수)

// 초기화
for (let i = 1; i <= N; i++) {
  adj[i] = [];
}

for (let i = 1; i <= M; i++) {
  const [front, back] = input[i].split(" ").map(Number);
  adj[front].push(back);
  indegree[back]++;
}

const heap = new MinHeap();

for (let i = 1; i <= N; i++) {
  // 쉬운 순으로 들어감
  if (indegree[i] === 0) heap.push(i);
}

const res = [];
while (heap.size() > 0) {
  const cur = heap.pop();
  res.push(cur);

  for (const next of adj[cur]) {
    indegree[next]--;
    if (indegree[next] === 0) heap.push(next);
  }
}

console.log(res.join(" "));
