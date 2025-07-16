const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const N = Number(input[0]);

const printRect = (n) => {
  let rect = Array(n)
    .fill(0)
    .map(() => new Array(n).fill(0));
  let num = 1;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      rect[i][j] = num;
      num === 9 ? (num = 1) : num++;
    }
  }
  for (let row of rect) {
    console.log(row.join(" "));
  }
};

printRect(N);
