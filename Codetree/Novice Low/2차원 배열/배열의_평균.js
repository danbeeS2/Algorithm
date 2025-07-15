const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

let arr = input.map((line) => line.split(" ").map(Number));

let row = arr.length;
let col = arr[0].length;

const getRowAvgs = (arr) => {
  return arr.map((row) => row.reduce((a, c) => a + c, 0) / col);
};
const getColAvgs = (arr) => {
  let colAvgs = [];
  for (let i = 0; i < col; i++) {
    let sum = 0;
    for (let j = 0; j < row; j++) {
      sum += arr[j][i];
    }
    colAvgs.push(sum / row);
  }
  return colAvgs;
};

const getTotalAvg = (arr) => {
  let total = 0;
  arr.forEach((row) =>
    row.forEach((n) => {
      total += n;
    })
  );
  return total / (row * col);
};

let res = [getRowAvgs(arr), getColAvgs(arr), [getTotalAvg(arr)]];

res.forEach((line) => console.log(line.map((x) => x.toFixed(1)).join(" ")));
