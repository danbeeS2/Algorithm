// 이동경로상에 있는 모든 숫자 더하기
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, t] = input[0].split(" ").map(Number);
const orders = input[1].split("");
const arr = input.slice(2).map((row) => row.split(" ").map(Number));

const isInRange = (x, y, n) => {
  return x >= 0 && x < n && y >= 0 && y < n;
};

const getStartPoint = (n) => {
  const start = (n - 1) / 2;
  return { x: start, y: start };
};

const moveByOrders = (n, orders, arr) => {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  // 초기화
  let d = 0;
  let { x, y } = getStartPoint(n);
  let res = arr[x][y];

  for (const order of orders) {
    if (order === "R") {
      d = (d + 1) % 4;
    } else if (order === "L") {
      d = (d - 1 + 4) % 4;
    } else if (order === "F") {
      let nx = x + dx[d];
      let ny = y + dy[d];

      // 격자 범위를 넘어가면 명령어 무시
      if (!isInRange(nx, ny, n)) continue;

      x = nx;
      y = ny;
      res += arr[x][y];
    }
  }
  return res;
};

const main = () => {
  const res = moveByOrders(n, orders, arr);
  console.log(res);
};

main();
