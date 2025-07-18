const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

const findMax = (arr, cur = 0, maxN = 0) => {
  if (cur === arr.length) return maxN;

  if (maxN < arr[cur]) maxN = arr[cur];
  return findMax(arr, cur + 1, maxN);
};

console.log(findMax(arr));
