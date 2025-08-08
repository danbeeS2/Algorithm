// 아름다운 수
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);

const isBeautiful = (seq) => {
  let index = 0;

  while (index < n) {
    // 현재 숫자 (반복 횟수)
    const count = seq[index];

    // 수열 끝까지 연속된 수열을 만들 수 있는지 확인
    if (index + count > n) return false;

    for (let i = index; i < index + count; i++) {
      if (seq[i] !== count) return false;
    }

    // 다음 그룹의 시작 위치로 이동
    index += count;
  }

  return true;
};

let sequence = [];
let count = 0;
const generateSequences = (depth) => {
  if (depth === n) {
    if (isBeautiful(sequence)) count++;
    return;
  }

  for (let num = 1; num <= 4; num++) {
    sequence.push(num);
    generateSequences(depth + 1);
    sequence.pop();
  }
};

generateSequences(0);
console.log(count);
