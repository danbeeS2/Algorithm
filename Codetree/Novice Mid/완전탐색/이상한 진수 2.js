// 이상한 진수 2
const fs = require("fs");
const binary = fs.readFileSync(0).toString().trim().split("").map(Number);

const binaryToDigits = (binary) => {
  let val = 0;
  const n = binary.length - 1;
  for (let i = 0; i <= n; i++) {
    val += binary[n - i] * 2 ** i;
  }
  return val;
};

const getMaxNumber = (arr) => {
  let binary = [...arr];

  let maxNum = -1;
  for (let i = 0; i < binary.length; i++) {
    binary[i] = 1 - binary[i];

    let num = binaryToDigits(binary);
    maxNum = Math.max(num, maxNum);

    binary[i] = 1 - binary[i];
  }
  return maxNum;
};

const main = () => {
  const result = getMaxNumber(binary);
  console.log(result);
};

main();
