// 작은 구슬의 이동
const fs = require("fs");
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" "));

const [n, t] = input[0].map(Number); // t초
// r, c: 초기 구슬 위치, d: 초기 방향 (U, D, R, L)
const [r, c, d] = [Number(input[1][0]), Number(input[1][1]), input[1][2]]; 

const isInRange = (x, y, size) => {
  return 0 <= x && x < size && 0 <= y && y < size;
};

const changeDirection = (n, t, r, c, d) => {
  const direction = [
    [0, -1],
    [-1, 0],
    [0, 1],
    [1, 0],
  ]; // L, U, R, D
  const dirMap = {
    L: 0,
    U: 1,
    R: 2,
    D: 3,
  };

  let x = r - 1;
  let y = c - 1;

  let dir = dirMap[d];

  for (let i = 0; i < t; i++) {
    const [dx, dy] = direction[dir];
    const nx = x + dx;
    const ny = y + dy;

    // 구슬이 벽에 부딪히면 움직이는 방향 반대로 뒤집힘
    if (!isInRange(nx, ny, n)) {
      dir = (dir + 2) % 4;
    } else {
      x = nx;
      y = ny;
    }
  }

  return { x: x + 1, y: y + 1 };
};

const main = () => {
  const { x, y } = changeDirection(n, t, r, c, d);
  console.log(x, y);
};

main();
