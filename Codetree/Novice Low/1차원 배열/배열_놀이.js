const fs = require("fs");
let input = fs.readFileSync(0).toString().trim().split("\n");

input = input.map((line) => line.split(" ").map(Number));

const [N, Q] = input[0];
const questions = input.slice(2);

// console.log(questions)

const solveQuestion = (question) => {
  const arr = input[1];

  const q = question[0];
  let res = 0;

  switch (q) {
    case 1:
      let i = question[1];
      res = arr[i - 1];
      break;
    case 2:
      let target = question[1];
      let idx = arr.findIndex((num) => num === target);
      res = idx === -1 ? 0 : idx + 1;
      break;
    case 3:
      let s = question[1] - 1;
      let e = question[2] - 1;
      res = arr.slice(s, e + 1).join(" ");
  }

  console.log(res);
};

questions.map((q) => solveQuestion(q));
