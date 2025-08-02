// 아름다운 수열 2
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr1 = input[1].split(" ").map(Number);
const arr2 = input[2].split(" ").map(Number);

const isSameArray = (a, b) => {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
};

const countSubarray = (n, m, arr1, arr2) => {
  let count = 0;
  const target = [...arr2].sort((a, b) => a - b);

  for (let i = 0; i <= n - m; i++) {
    const sub = arr1.slice(i, i + m).sort((a, b) => a - b);
    if (isSameArray(target, sub)) count++;
  }

  return count;
};

const main = () => {
  result = countSubarray(n, m, arr1, arr2);
  console.log(result);
};
main();
