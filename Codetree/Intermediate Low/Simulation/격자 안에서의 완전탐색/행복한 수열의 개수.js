// 행복한 수열의 개수
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const grid = input.slice(1, 1 + n).map((line) => line.split(" ").map(Number));

const isHappySequence = (arr, m) => {
  if (arr.length === 1 && m === 1) return true;

  let cnt = 1;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] === arr[i + 1]) cnt++;
    else cnt = 1;

    if (cnt >= m) return true;
  }
  return false;
};

const getHappySequence = (grid, n, m) => {
  let cnt = 0;

  // 행 기준
  for (let i = 0; i < n; i++) {
    if (isHappySequence(grid[i], m)) cnt++;
  }

  // 열 기준
  for (let col = 0; col < n; col++) {
    const column = grid.map((row) => row[col]);
    if (isHappySequence(column, m)) cnt++;
  }

  return cnt;
};

const main = () => {
  const result = getHappySequence(grid, n, m);
  console.log(result);
};

main();
