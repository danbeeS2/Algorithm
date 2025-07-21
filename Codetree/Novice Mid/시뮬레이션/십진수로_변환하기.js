// 십진수로 변환하기
const fs = require("fs");
const binary = fs.readFileSync(0).toString().trim().split("").map(Number);

const binaryToDecimal = (binary) => {
  let num = 0;
  const len = binary.length;
  for (let i = 0; i < len; i++) {
    // num += 2 ** (len - 1 - i) * binary[i]
    num = num * 2 + binary[i]; // 누적 방식
  }
  return num;
};

const main = () => {
  const res = binaryToDecimal(binary);
  console.log(res);
};

main();
