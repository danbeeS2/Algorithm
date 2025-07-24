// 계속 중첩되는 사각형
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const rects = input.slice(1).map((line) => line.split(" ").map(Number));

const OFFSET = 100;
const MAX_SIZE = OFFSET * 2;

const createBoard = (size) =>
  Array.from({ length: size }, () => Array(size).fill(0));

const paintRedAndBlue = (rects) => {
  const board = createBoard(MAX_SIZE);

  const RED = 0;
  const BLUE = 1;

  for (let i = 0; i < rects.length; i++) {
    const [x1, y1, x2, y2] = rects[i];
    for (let y = y1 + OFFSET; y < y2 + OFFSET; y++) {
      for (let x = x1 + OFFSET; x < x2 + OFFSET; x++) {
        board[x][y] = i % 2 ? BLUE : RED;
      }
    }
  }
  return board;
};

const getBlueRect = (board) => {
  return board.reduce(
    (totalSum, row) => totalSum + row.reduce((acc, cur) => acc + cur, 0),
    0
  );
};

const main = () => {
  const painted = paintRedAndBlue(rects);
  const res = getBlueRect(painted);

  console.log(res);
};

main();
