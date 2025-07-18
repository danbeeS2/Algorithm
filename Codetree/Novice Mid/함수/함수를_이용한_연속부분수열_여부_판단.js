const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [n1, n2] = input[0].split(" ").map(Number);
let a = input[1].split(" ").map(Number);
let b = input[2].split(" ").map(Number);

const isSubsequence = (sequence, sequenceN, target, targetN) => {
  if (sequenceN < targetN) return false;

  for (let i = 0; i <= sequenceN - targetN; i++) {
    const tmpArr = sequence.slice(i, i + targetN);
    if (tmpArr.join("") == target.join("")) return true;
  }
  return false;
};

console.log(isSubsequence(a, n1, b, n2) ? "Yes" : "No");

// 다른 풀이
const isSubsequence2 = (sequence, target, n1, n2) => {
  if (n1 < n2) return false;

  let j = 0; // target 포인터
  for (let i = 0; i < n1; i++) {
    // 포인터 증가
    if (sequence[i] === target[j]) {
      j++;
      if (j === n2) return true;
    } else {
      // 포인터 초기화
      j = sequence[i] === target[0] ? 1 : 0;
    }
  }
  return false;
};

console.log(isSubsequence2(a, b, n1, n2) ? "Yes" : "No");
