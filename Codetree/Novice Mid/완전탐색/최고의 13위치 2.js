// ₩
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const grid = input.slice(1, n + 1).map((row) => row.split(" ").map(Number));

const getMaxCoins = (n, coins) => {
  let maxCount = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 2; j++) {
      let one = coins[i][j] + coins[i][j + 1] + coins[i][j + 2];

      for (let k = 0; k < n; k++) {
        for (let l = 0; l < n - 2; l++) {
          let two = coins[k][l] + coins[k][l + 1] + coins[k][l + 2];

          if (k === i && j + 2 >= l) continue;
          const count = one + two;
          maxCount = Math.max(maxCount, count);
        }
      }
    }
  }
  return maxCount;
};

const main = () => {
  const result = getMaxCoins(n, grid);
  console.log(result);
};

main();
