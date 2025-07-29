// 씨 오 더블유 2
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const str = input[1].split("");

const countCowPairs = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "C") continue;
    for (let j = i + 1; j < str.length; j++) {
      if (str[j] !== "O") continue;
      for (let k = j; k < str.length; k++) {
        if (str[k] === "W") count++;
      }
    }
  }

  return count;
};

const main = () => {
  const result = countCowPairs(str);
  console.log(result);
};

main();
