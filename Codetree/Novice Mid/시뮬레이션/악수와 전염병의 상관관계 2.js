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

const virus = (events, n, first, k) => {
  const infected = Array(n + 1).fill(false);
  const counts = Array(n + 1).fill(0);

  infected[first] = true;

  for (const [time, x, y] of events) {
    if (infected[x] && infected[y]) {
      counts[x] += 1;
      counts[y] += 1;
    } else if (!infected[y] && infected[x] && counts[x] < k) {
      counts[x] += 1;
      infected[y] = true; // 감염
    } else if (!infected[x] && infected[y] && counts[y] < k) {
      counts[y] += 1;
      infected[x] = true; // 감염
    }
  }
  return infected
    .slice(1)
    .map((v) => (v ? 1 : 0))
    .join("");
};

const main = () => {
  const sorted = sortBySecond(records);
  const res = virus(sorted, N, P, K);
  console.log(res);
};

main();
