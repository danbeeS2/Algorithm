// Lv.4 - 2110 공유기 설치 (이진탐색 - 매개변수 탐색)

const fs = require("fs");
// const input = fs.readFileSync(0, 'utf8').trim().split('\n');
const input = fs.readFileSync("input.txt", "utf8").trim().split("\n");

const [N, C] = input[0].split(" ").map(Number); // N: 집 개수, C: 설치할 공유기 개수
const houses = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

let low = 0;
let high = houses.at(-1);
let mid = Math.floor((low + high) / 2);

const isPossible = (guessDist) => {
  let prev = houses[0];
  let cnt = 1;

  for (let i = 1; i < houses.length; i++) {
    // 추측한 거리보다 크면 설치 가능
    if (houses[i] - prev >= guessDist) {
      cnt++;
      prev = houses[i]
    } 
  }

  return cnt >= C  // 공유기를 C개 이상 설치할 수 있는가
};

let result = 0;

while (low <= high) {
  let mid = Math.floor((low + high) / 2);
  if (isPossible(mid)) {
    // 가능하면 더 큰 최대 거리를 구해야 함
    low = mid + 1;
    result = mid;
  } else {
    high = mid - 1;
  }
}

console.log(result);
