// 숨은 단어 찾기 2
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const grid = input.slice(1, n + 1).map((row) => row.split(""));

const isInRange = (x, y, n, m) => {
  return x >= 0 && x < n && y >= 0 && y < m;
};

const countLEE = (n, m, grid) => {
  const dx = [1, 1, 1, -1, -1, -1, 0, 0];
  const dy = [-1, 0, 1, -1, 0, 1, -1, 1];

  let count = 0;

  for (let x = 0; x < n; x++) {
    for (let y = 0; y < m; y++) {
      if (grid[x][y] !== "L") continue;

      for (let d = 0; d < dx.length; d++) {
        let str = "L";
        let nx = x;
        let ny = y;
        for (let i = 0; i < 2; i++) {
          nx += dx[d];
          ny += dy[d];

          if (!isInRange(nx, ny, n, m)) break;
          if (grid[nx][ny] !== "E") break;
          str += "E";
        }
        if (str === "LEE") count++;
      }
    }
  }
  return count;
};

const main = () => {
  const result = countLEE(n, m, grid);
  console.log(result);
};
main();
