const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const str = input[0];

const isPailndrome = (str) => {
  const n = str.length;
  for (let i = 0; i < n / 2; i++) {
    if (str[i] !== str[n - 1 - i]) return false;
  }
  return true;
};

console.log(isPailndrome(str) ? "Yes" : "No");
