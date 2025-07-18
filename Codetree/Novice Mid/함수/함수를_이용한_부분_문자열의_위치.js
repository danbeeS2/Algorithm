const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const text = input[0];
const pattern = input[1];

const findIndex = (text, pattern) => {
  const len = pattern.length;

  for (let i = 0; i < text.length - len + 1; i++) {
    if (text.slice(i, i + len) === pattern) return i;
  }
  return -1;
};

console.log(findIndex(text, pattern));
