// 괄호 쌍 만들어주기 3
const fs = require("fs");
const brackets = fs.readFileSync(0).toString().trim().split("");

const countBracketPairs = (brackets) => {
  const OPEN = "(";
  const CLOSE = ")";
  let count = 0;

  for (let i = 0; i < brackets.length; i++) {
    if (brackets[i] !== OPEN) continue;

    for (let j = i + 1; j < brackets.length; j++) {
      if (brackets[j] === CLOSE) {
        count++;
      }
    }
  }
  return count;
};

const main = () => {
  const result = countBracketPairs(brackets);
  console.log(result);
};

main();
