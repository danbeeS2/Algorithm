const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [N, K, T] = input[0].split(" ");
const words = input.slice(1);

const filterByPrefix = (words, prefix) => {
  const res = [];
  words.forEach((word) => {
    if (word.length < prefix.length) return;

    for (let i = 0; i < prefix.length; i++) {
      if (word[i] !== prefix[i]) return;
    }
    res.push(word);
  });
  return res;
};

const sortingStrArr = (arr) => arr.sort();

const getNthElement = (arr, n) => arr[n - 1];

const main = () => {
  const filtered = filterByPrefix(words, T);
  const sorted = sortingStrArr(filtered);
  const ans = getNthElement(sorted, K);

  console.log(ans);
};

main();
