// 특정 조건에 맞게 K개 중에 1개를 N번 뽑기
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [k, n] = input[0].split(" ").map(Number);

let numbers = [];
const choose = (depth) => {
  if (depth === n) {
    console.log(numbers.join(" "));
    return;
  }

  for (let i = 1; i <= k; i++) {
    if (
      depth >= 2 &&
      i === numbers[numbers.length - 1] &&
      i === numbers[numbers.length - 2]
    ) {
      continue;
    } else {
      numbers.push(i);
      choose(depth + 1);
      numbers.pop();
    }
  }
};

choose(0);
