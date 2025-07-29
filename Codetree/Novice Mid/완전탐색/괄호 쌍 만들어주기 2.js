// 괄호 쌍 만들어주기 2
const fs = require("fs");
const brackets = fs.readFileSync(0).toString().trim().split("");

const countDoubleBracketPairs = (brackets) => {
  const OPEN = "(";
  const CLOSE = ")";
  let count = 0;

  for (let i = 0; i < brackets.length - 1; i++) {
    if (brackets[i] !== OPEN || brackets[i + 1] !== OPEN) continue;

    for (let j = i + 1; j < brackets.length - 1; j++) {
      if (brackets[j] === CLOSE && brackets[j + 1] === CLOSE) count++;
    }
  }
  return count;
};

const main = () => {
  const result = countDoubleBracketPairs(brackets);
  console.log(result);
};

main();
