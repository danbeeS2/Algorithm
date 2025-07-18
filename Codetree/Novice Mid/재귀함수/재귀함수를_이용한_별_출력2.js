const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let n = Number(input[0]);

const printStars = (n) => {
  if (n === 0) return;

  console.log("* ".repeat(n));
  printStars(n - 1);
  console.log("* ".repeat(n));
};

printStars(n);
