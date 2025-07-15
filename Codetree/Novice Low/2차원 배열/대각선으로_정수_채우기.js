const fs = require("fs");
const [N, M] = fs.readFileSync(0).toString().trim().split(" ").map(Number);

let res = new Array(N).fill(0).map(() => new Array(M).fill(0));

let num = 1;
let cnt = 0;

while (cnt < N + M - 1) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (i + j === cnt) {
        res[i][j] = num;
        num++;
      }
    }
  }
  cnt++;
}

console.log(res.map((row) => row.join(" ")).join("\n"));
