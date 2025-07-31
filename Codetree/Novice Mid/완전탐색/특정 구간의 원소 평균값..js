// 특정 구간의 원소 평균값
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const arr = input[1].split(" ").map(Number);

const countMatching = (arr, n) => {
  let count = 0;
  for (let start = 0; start < n; start++) {
    for (let end = start; end < n; end++) {
      let sum = 0;
      for (let i = start; i <= end; i++) {
        sum += arr[i];
      }

      let avg = sum / (end - start + 1);

      let flag = false;
      for (let i = start; i <= end; i++) {
        if (arr[i] === avg) {
          flag = true;
          break;
        }
      }

      if (flag) count++;
    }
  }
  return count;
};

const main = () => {
  const result = countMatching(arr, n);
  console.log(result);
};

main();
