// 최고의 13위치
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input.slice(1).map((row) => row.split(" ").map(Number));

const getMaxCoin = (coins, n) => {
  let maxCount = 0;

  for (let r = 0; r < n; r++) {
    for (let c = 0; c < n - 2; c++) {
      let count = coins[r][c] + coins[r][c + 1] + coins[r][c + 2];
      maxCount = Math.max(count, maxCount);
    }
  }
  return maxCount;
};

const main = () => {
  const result = getMaxCoin(arr, n);
  console.log(result);
};

main();
