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

const markRectangleArea = (rect, board, num) => {
  const [x1, y1, x2, y2] = rect;
  for (let y = y1 + OFFSET; y < y2 + OFFSET; y++) {
    for (let x = x1 + OFFSET; x < x2 + OFFSET; x++) {
      board[y][x] = num;
    }
  }
  return board;
};

const getMinXY = (board) => {
  let x1 = MAX_SIZE,
    y1 = MAX_SIZE;
  let x2 = -MAX_SIZE,
    y2 = -MAX_SIZE;

  for (let i = 0; i < MAX_SIZE; i++) {
    for (let j = 0; j < MAX_SIZE; j++) {
      if (board[i][j] === 0) continue;

      if (x1 > i) x1 = i;
      if (x2 < i) x2 = i;
      if (y1 > j) y1 = j;
      if (y2 < j) y2 = j;
    }
  }
  return x2 < x1 || y2 < y1 ? null : [x1, y1, x2, y2];
};

const calculateArea = (x1, y1, x2, y2) => {
  return (x2 - x1 + 1) * (y2 - y1 + 1);
};

const main = () => {
  const board = createBoard(MAX_SIZE);

  markRectangleArea(rect1, board, 1);
  markRectangleArea(rect2, board, 0);

  const bounds = getMinXY(board);
  if (!bounds) {
    console.log(0);
    return;
  }
  const [x1, y1, x2, y2] = bounds;

  const res = calculateArea(x1, y1, x2, y2);

  console.log(res);
};

main();
