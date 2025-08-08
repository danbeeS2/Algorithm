// 강력한 폭발
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const grid = input.slice(1, 1 + n).map((line) => line.split(" ").map(Number));
const bombed = Array.from({ length: n }, () => Array(n).fill(false));

// 폭탄 위치 저장
let bombPositions = [];
for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    if (grid[i][j] === 1) bombPositions.push([i, j]);
  }
}

const bombCount = bombPositions.length;
const bombShapes = [
  [
    [-2, 0],
    [-1, 0],
    [0, 0],
    [1, 0],
    [2, 0],
  ],
  [
    [-1, 0],
    [0, -1],
    [0, 0],
    [0, 1],
    [1, 0],
  ],
  [
    [-1, -1],
    [-1, 1],
    [0, 0],
    [1, -1],
    [1, 1],
  ],
];

// 현재 조합의 폭발 영향 칸 수 계산
const bomb = (x, y, type) => {
  for (const [dx, dy] of bombShapes[type]) {
    const nx = x + dx;
    const ny = y + dy;

    if (nx < 0 || ny < 0 || nx >= n || ny >= n) continue;

    bombed[nx][ny] = true;
  }
};

const getBombedArea = (type) => {
  // bombed 배열 초기화
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      bombed[i][j] = false;
    }
  }

  for (let i = 0; i < bombCount; i++) {
    const [x, y] = bombPositions[i];
    bomb(x, y, type[i]);
  }

  // 폭탄이 터진 칸(true) 세기
  return bombed.flat().reduce((acc, cur) => acc + cur, 0);
};

let currentTypes = [];
let maxCount = 0;

const generateSequences = (depth) => {
  if (depth === bombCount) {
    const count = getBombedArea(currentTypes);
    maxCount = Math.max(maxCount, count);
    return;
  }

  for (let i = 0; i < 3; i++) {
    currentTypes.push(i);
    generateSequences(depth + 1);
    currentTypes.pop();
  }
};

generateSequences(0);
console.log(maxCount);
