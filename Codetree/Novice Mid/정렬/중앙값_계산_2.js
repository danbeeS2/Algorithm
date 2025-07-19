const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

const getMedian = (arr, endIdx) => {
  const subArr = arr.slice(0, endIdx + 1);
  subArr.sort((a, b) => a - b);
  return subArr[Math.floor(endIdx / 2)];
};

const solve = (arr, n) => {
  let res = [];
  for (let i = 0; i < n; i++) {
    if (i % 2 === 0) {
      res.push(getMedian(arr, i));
    }
  }
  return res;
};

const main = () => {
  const ans = solve(arr, n);
  console.log(ans.join(" "));
};

main();
