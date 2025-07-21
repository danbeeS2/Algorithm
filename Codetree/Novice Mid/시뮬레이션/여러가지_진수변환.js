// 여러가지 진수변환
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const [N, B] = input;

const convertToBaseB = (n, b) => {
  let digits = [];
  while (true) {
    if (n < b) {
      digits.push(n);
      break;
    }
    digits.push(n % b);
    n = parseInt(n / b);
  }
  return digits.reverse().join("");
};

const main = () => {
  const res = convertToBaseB(N, B);
  console.log(res);
};

main();
