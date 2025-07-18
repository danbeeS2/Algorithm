const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);

const asc = (num) => {
  if (!num) return;

  asc(num - 1);
  process.stdout.write(num + " ");
};

const desc = (num) => {
  if (!num) return;

  process.stdout.write(num + " ");
  desc(num - 1);
};

console.log(asc(n, 1));
console.log(desc(n));

// 다른 풀이
const asc1 = (n, cur, res = []) => {
  if (cur > n) return res.join(" ");
  res.push(cur);
  return asc(n, cur + 1, res);
};

const desc2 = (n, res = []) => {
  if (n === 0) return res.join(" ");
  res.push(n);
  return desc(n - 1, res);
};
