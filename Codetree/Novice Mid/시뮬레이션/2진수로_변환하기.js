// 2진수로 변환하기
const fs = require("fs");
const n = Number(fs.readFileSync(0).toString().trim());

const getBinaryNumber = (num) => {
  let digits = [];
  let n = num;

  while (true) {
    if (n < 2) {
      digits.push(n);
      break;
    }
    digits.push(n % 2);
    n = Math.floor(n / 2);
  }
  return digits.reverse().join("");
};

const main = () => {
  const res = getBinaryNumber(n);
  console.log(res);
};

main();
