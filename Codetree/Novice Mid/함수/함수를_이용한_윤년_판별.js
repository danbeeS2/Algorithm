const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const y = Number(input[0]);

// 윤년 조건
// 1) 4로 나누어 떨어짐
// 2) 100의 배수는 윤년 아님
// 3) 단, 400의 배수는 윤년
const isLeapYear = (year) => {
  if (year % 4 !== 0) return false;
  if (year % 100 === 0 && year % 400 !== 0) return false;
  return true;
};

console.log(isLeapYear(y));
