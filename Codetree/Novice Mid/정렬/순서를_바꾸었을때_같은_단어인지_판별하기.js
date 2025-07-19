const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const str1 = input[0];
const str2 = input[1];

const isSameStr = (a, b) => {
  const sortedA = [...a].slice().sort().join("");
  const sortedB = [...b].slice().sort().join("");

  return sortedA === sortedB ? "Yes" : "No";
};

const main = () => {
  const ans = isSameStr(str1, str2);
  console.log(ans);
};

main();
