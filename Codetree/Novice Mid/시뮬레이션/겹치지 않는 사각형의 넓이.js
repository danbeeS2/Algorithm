// 겹치지 않는 사각형의 넓이
const fs = require("fs");
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const rects = input.slice(0, 2);
const [lastRect] = input.slice(2);

const OFFSET = 1000;

const createBoard = (size) =>
  Array.from({ length: size }, () => Array(size).fill(0));

const markRectangleArea = (rects) => {
  const board = createBoard(OFFSET * 2);

  for (const [x1, y1, x2, y2] of rects) {
    for (let x = x1 + OFFSET; x < x2 + OFFSET; x++) {
      for (let y = y1 + OFFSET; y < y2 + OFFSET; y++) {
        board[x][y] = 1;
      }
    }
  }

  return board;
};

const removeRectangleArea = (rect, board) => {
  const [x1, y1, x2, y2] = rect;
  for (let x = x1 + OFFSET; x < x2 + OFFSET; x++) {
    for (let y = y1 + OFFSET; y < y2 + OFFSET; y++) {
      board[x][y] = 0;
    }
  }
  return board;
};

const countFilledArea = (board) => {
  return board.reduce(
    (totalSum, row) => totalSum + row.reduce((acc, cur) => acc + cur),
    0
  );
};

const main = () => {
  const board = markRectangleArea(rects);
  const removed = removeRectangleArea(lastRect, board);
  const totalArea = countFilledArea(removed);

  console.log(totalArea);
};

main();
