// 악수와 전염병의 상관관계 2
const fs = require("fs");
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" ").map(Number));

const [N, K, P, T] = input[0]; // N명, K번 전염 가능, 최초 전염자 P, T번의 악수
const records = input.slice(1); // (t초, 사람 x - 사람 y 악수)

const sortBySecond = (records) => {
  return [...records].sort((a, b) => a[0] - b[0]);
};

const virus = (arr, n, first, k) => {
  const people = Array.from({ length: 2 }, () => Array(n + 1).fill(0));
  people[0][first] = 1;

  for (const [t, x, y] of arr) {
    if (people[0][x] === 1 && people[0][y] === 1) {
      people[1][x] += 1;
      people[1][y] += 1;
    } else if (people[0][y] === 0 && people[0][x] === 1) {
      if (people[1][x] < k) {
        people[1][x] += 1;
        people[0][y] = 1; // 감염
      }
    } else if (people[0][x] === 0 && people[0][y] === 1) {
      if (people[1][y] < k) {
        people[1][y] += 1;
        people[0][x] = 1; // 감염
      }
    }
  }
  return people[0].slice(1).join("");
};

const main = () => {
  const sorted = sortBySecond(records);
  const res = virus(sorted, N, P, K);
  console.log(res);
};

main();
