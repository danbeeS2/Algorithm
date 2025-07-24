// 잔해물을 덮기 위한 사각형의 최소 넓이
const fs = require("fs");
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const rect1 = input[0];
const rect2 = input[1];

const OFFSET = 1000;
const MAX_SIZE = OFFSET * 2;

const createBoard = (size) =>
  Array.from({ length: size }, () => Array(size).fill(0));

const markRectangleArea = (board, [x1, y1, x2, y2], num) => {
  for (let y = y1 + OFFSET; y < y2 + OFFSET; y++) {
    for (let x = x1 + OFFSET; x < x2 + OFFSET; x++) {
      board[y][x] = num;
    }
  }
  return board;
};

const getMinXY = (board) => {
  let minX = MAX_SIZE;
  let minY = MAX_SIZE;
  let maxX = -MAX_SIZE;
  let maxY = -MAX_SIZE;

  for (let y = 0; y < MAX_SIZE; y++) {
    for (let x = 0; x < MAX_SIZE; x++) {
      if (board[x][y] === 0) continue;
      if (minX > x) minX = x;
      if (maxX < x) maxX = x;
      if (minY > y) minY = y;
      if (maxY < y) maxY = y;
    }
  }
  return maxX < minX || maxY < minY ? null : [minX, minY, maxX, maxY];
};

const calculateArea = ([x1, y1, x2, y2]) => {
  return (x2 - x1 + 1) * (y2 - y1 + 1);
};

const main = () => {
  const board = createBoard(MAX_SIZE);

  markRectangleArea(board, rect1, 1);
  markRectangleArea(board, rect2, 0);

  const bounds = getMinXY(board);
  const res = bounds ? calculateArea(bounds) : 0;

  console.log(res);
};

main();
