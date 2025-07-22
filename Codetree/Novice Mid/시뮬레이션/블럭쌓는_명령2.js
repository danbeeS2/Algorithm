// 블럭쌓는 명령2
const fs = require("fs");
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const [n, m] = input[0];
const numbers = input.slice(1);

const buildBlocks = (blocks, n) => {
  let res = new Array(n).fill(0);
  blocks.forEach(([s, e]) => {
    for (let i = s; i <= e; i++) {
      res[i - 1] += 1;
    }
  });
  return res;
};

const getMaxBlock = (blocks) => Math.max(...blocks);

const main = () => {
  const blocks = buildBlocks(numbers, n);
  const max = getMaxBlock(blocks);
  console.log(max);
};

main();
