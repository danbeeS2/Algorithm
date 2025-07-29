// 오목
const fs = require("fs");
const grid = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((row) => row.split(" ").map(Number));
const n = 19;

const isRowFive = (grid, n) => {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 4; j++) {
      const curr = grid[i][j];
      if (
        curr !== 0 &&
        curr === grid[i][j + 1] &&
        curr === grid[i][j + 2] &&
        curr === grid[i][j + 3] &&
        curr === grid[i][j + 4]
      )
        return { winner: curr, x: i, y: j + 2 };
    }
  }
  return false;
};

const isColFive = (grid, n) => {
  for (let i = 0; i < n - 4; i++) {
    for (let j = 0; j < n; j++) {
      const curr = grid[i][j];
      if (
        curr !== 0 &&
        curr === grid[i + 1][j] &&
        curr === grid[i + 2][j] &&
        curr === grid[i + 3][j] &&
        curr === grid[i + 4][j]
      )
        return { winner: curr, x: i + 2, y: j };
    }
  }
  return false;
};

const isRightDownFive = (grid, n) => {
  for (let i = 0; i < n - 4; i++) {
    for (let j = 0; j < n - 4; j++) {
      const curr = grid[i][j];
      if (
        curr !== 0 &&
        curr === grid[i + 1][j + 1] &&
        curr === grid[i + 2][j + 2] &&
        curr === grid[i + 3][j + 3] &&
        curr === grid[i + 4][j + 4]
      )
        return { winner: curr, x: i + 2, y: j + 2 };
    }
  }
  return false;
};

const isLeftUpFive = (grid, n) => {
  for (let i = 0; i < n - 4; i++) {
    for (let j = 0; j < n; j++) {
      const curr = grid[i][j];
      if (
        curr !== 0 &&
        curr === grid[i + 1][j - 1] &&
        curr === grid[i + 2][j - 2] &&
        curr === grid[i + 3][j - 3] &&
        curr === grid[i + 4][j - 4]
      )
        return { winner: curr, x: i + 2, y: j - 2 };
    }
  }
  return false;
};

const getWinner = (grid, n) => {
  return (
    isRowFive(grid, n) ||
    isColFive(grid, n) ||
    isRightDownFive(grid, n) ||
    isLeftUpFive(grid, n)
  );
};

const main = () => {
  const result = getWinner(grid, n);
  if (result) {
    console.log(result.winner);
    console.log(result.x + 1, result.y + 1); // 1-indexed로 출력
  } else {
    console.log(0);
  }
};

main();
