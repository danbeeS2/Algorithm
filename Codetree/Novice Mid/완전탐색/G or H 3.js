// G or H 3
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, k] = input[0].split(" ").map(Number);
const data = input.slice(1).map((row) => {
  const [num, alpha] = row.split(" ");
  return [Number(num), alpha];
});

const MAX_NUM = 10_000;
const createArray = (size) => Array(size).fill(0);

// G: 1점, H: 2점으로 배열에 매핑
const assignScores = (arr, data) => {
  for (const [idx, c] of data) {
    arr[idx] = c === "G" ? 1 : 2;
  }
  return arr;
};

const getMaxScore = (n, k, scores) => {
  let currentScore = 0;
  let maxScore = Number.MIN_SAFE_INTEGER;

  // 초기 구간 합 계산
  for (let i = 0; i < k; i++) {
    currentScore += scores[i];
  }

  // 슬라이딩 윈도우 적용
  for (let i = 1; i < MAX_NUM - k - 1; i++) {
    // 앞에서 하나 빼고 뒤에 하나 더함
    currentScore = currentScore - scores[i - 1] + scores[i + k];
    maxScore = Math.max(maxScore, currentScore);
  }
  return maxScore;
};

const main = () => {
  const arr = createArray(MAX_NUM);
  const scores = assignScores(arr, data);
  const result = getMaxScore(n, k, scores);
  console.log(result);
};
main();
