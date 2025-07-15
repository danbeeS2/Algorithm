const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();

const N = Number(input);

let triangle = [];

for (let i = 0; i < N; i++) {
  let row = Array(i + 1).fill(1);

  for (let j = 1; j < i; j++) {
    row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
  }
  triangle.push(row);
}

for (let row of triangle) {
  console.log(row.join(" "));
}
