// 체크판위에서 2
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [r, c] = input[0].split(" ").map(Number);
const grid = input.slice(1).map((row) => row.split(" "));

const countVaildMove = (r, c, grid) => {
  let count = 0;
  const color1 = grid[0][0];
  const color4 = grid[r - 1][c - 1];

  for (let i = 1; i < r - 2; i++) {
    for (let j = 1; j < c - 2; j++) {
      const color2 = grid[i][j];
      if (color1 === color2) continue;

      for (let k = i + 1; k < r - 1; k++) {
        for (let l = j + 1; l < c - 1; l++) {
          const color3 = grid[k][l];
          if (color2 !== color3 && color3 !== color4) count++;
        }
      }
    }
  }
  return count;
};

const main = () => {
  const result = countVaildMove(r, c, grid);
  console.log(result);
};

main();
