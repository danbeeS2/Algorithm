// Carry 피하기 2
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const numbers = input.slice(1, n + 1).map(Number);

// Carry: 각 자릿수와 수를 더했을 때 10의 자리를 넘기는 것
const isCarryNumber = (a, b, c) => {
  const num1 = a.toString().split("").map(Number);
  const num2 = b.toString().split("").map(Number);
  const num3 = c.toString().split("").map(Number);

  while (num1.length || num2.length || num3.length) {
    const a = num1.pop() || 0;
    const b = num2.pop() || 0;
    const c = num3.pop() || 0;

    if (a + b + c > 9) return false;
  }
  return true;
};

const getMaxSum = (arr, n) => {
  let sumMax = -1;
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        if (isCarryNumber(arr[i], arr[j], arr[k])) {
          const sum = arr[i] + arr[j] + arr[k];
          sumMax = Math.max(sumMax, sum);
        }
      }
    }
  }
  return sumMax;
};

const main = () => {
  const result = getMaxSum(numbers, n);
  console.log(result);
};
main();
