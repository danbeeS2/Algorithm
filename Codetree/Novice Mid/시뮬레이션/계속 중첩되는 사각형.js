// 계속 중첩되는 사각형
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const rects = input.slice(1).map((line) => line.split(" ").map(Number));

const OFFSET = 100;
const MAX_SIZE = OFFSET * 2;
const RED = 0;
const BLUE = 1;

const createBoard = (size) =>
  Array.from({ length: size }, () => Array(size).fill(0));

const paintRedAndBlue = (rects) => {
  const board = createBoard(MAX_SIZE);

  rects.forEach(([x1, y1, x2, y2], i) => {
    const color = i % 2 === 0 ? RED : BLUE;
    for (let y = y1 + OFFSET; y < y2 + OFFSET; y++) {
      for (let x = x1 + OFFSET; x < x2 + OFFSET; x++) {
        board[x][y] = color;
      }
    }
  });
  return board;
};

const countBlueArea = (board) => {
  return board.reduce((sum, row) => sum + row.reduce((a, b) => a + b, 0), 0);
};

const main = () => {
  const board = paintRedAndBlue(rects);
  console.log(countBlueArea(board));
};

main();
