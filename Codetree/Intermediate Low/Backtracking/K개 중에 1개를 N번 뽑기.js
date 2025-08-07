// K개 중에 1개를 N번 뽑기
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [k, n] = input[0].split(" ").map(Number);

let numbers = [];
const choose = (cnt) => {
  if (cnt === n) {
    console.log(numbers.join(" "));
    return;
  }

  for (let i = 1; i <= k; i++) {
    numbers.push(i);
    choose(cnt + 1);
    numbers.pop();
  }
};

choose(0);
