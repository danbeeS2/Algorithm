// 정렬된 수 위치 알아내기
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

class Num {
  constructor(num, position) {
    this.number = num;
    this.position = position; // 초기 위치
    this.newPosition = 0; // 정렬 후 위치
  }
}

const arrayToObject = (arr) => arr.map((num, idx) => new Num(num, idx + 1));

const sortByNum = (arr) => {
  const sorted = [...arr].sort((a, b) => {
    return a.number !== b.number
      ? a.number - b.number
      : a.position - b.position;
  });

  // 정렬 후 위치 저장
  sorted.forEach((item, idx) => {
    item.newPosition = idx + 1;
  });
};

const main = () => {
  const numbers = arrayToObject(arr);
  sortByNum(numbers);
  console.log(numbers.map((num) => num.newPosition).join(" "));
};

main();
