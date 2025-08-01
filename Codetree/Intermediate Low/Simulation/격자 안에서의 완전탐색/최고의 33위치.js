// 최고의 33위치
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const grid = input.slice(1).map((line) => line.split(" ").map(Number));

const isInRange = (x, y) => x >= 0 && x < n && y >= 0 && y < n;

const getCoins = (a, b) => {
  let cnt = 0;
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      const x = a + i;
      const y = b + j;

      if (!isInRange(x, y)) continue;
      if (grid[x][y] === 1) cnt++;
    }
  }
  return cnt;
};

const getMaxCoins = () => {
  let result = 0;
  for (let i = 0; i <= n - 3; i++) {
    for (let j = 0; j <= n - 3; j++) {
      result = Math.max(getCoins(i, j), result);
    }
  }
  return result;
};

const main = () => {
  const result = getMaxCoins();
  console.log(result);
};

main();
