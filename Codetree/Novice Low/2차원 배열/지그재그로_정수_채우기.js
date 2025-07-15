const fs = require("fs");
const [N, M] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let num = 0;
let res = new Array(N).fill(0).map(() => new Array(M).fill(0));

for (let i = 0; i < M; i++) {
  for (let j = 0; j < N; j++) {
    if (i % 2 === 0) {
      res[j][i] = num;
    } else {
      res[N - 1 - j][i] = num;
    }
    num++;
  }
}

console.log(res.map((row) => row.join(" ")).join("\n"));
