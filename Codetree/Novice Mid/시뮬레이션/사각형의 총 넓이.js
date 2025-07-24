// 사각형의 총 넓이
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const rects = input.slice(1).map((line) => line.split(" ").map(Number));

const OFFSET = 100;

const creatBoard = (size) =>
  Array.from({ length: size }, () => Array(size).fill(0));

const markRectangleArea = (rects) => {
  const board = creatBoard(OFFSET * 2);

  for (const [x1, y1] of rects) {
    for (let x = x1 + OFFSET; x < x1 + 8 + OFFSET; x++) {
      for (let y = y1 + OFFSET; y < y1 + 8 + OFFSET; y++) {
        board[x][y] = 1;
      }
    }
  }

  return board;
};

const countFilledArea = (board) => {
  return board.reduce(
    (totalSum, row) => totalSum + row.reduce((acc, cur) => acc + cur, 0),
    0
  );
};

const main = () => {
  const board = markRectangleArea(rects);
  const totalArea = countFilledArea(board);
  console.log(totalArea);
};

main();
