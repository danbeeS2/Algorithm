// 원 모양으로 되어있는 방
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n").map(Number);

const n = input[0];
const people = input.slice(1, n + 1);

const getMinDist = (people, n) => {
  let minDist = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    let sumDist = 0;
    let start = i;

    for (let j = 0; j < n; j++) {
      const dist = (j + n - start) % n;
      sumDist += dist * people[j];
    }
    minDist = Math.min(minDist, sumDist);
  }
  return minDist;
};

const main = () => {
  const result = getMinDist(people, n);
  console.log(result);
};
main();
