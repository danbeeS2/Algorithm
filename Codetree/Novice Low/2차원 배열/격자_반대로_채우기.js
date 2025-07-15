const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const N = input[0];
let res = new Array(N).fill(0).map(() => new Array(N).fill(0));

let num = 1;
let flag = true;
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (flag) {
      res[N - 1 - j][N - 1 - i] = num;
    } else {
      res[j][N - 1 - i] = num;
    }
    num++;
  }
  flag = !flag;
}

console.log(res.map((row) => row.join(" ")).join("\n"));
