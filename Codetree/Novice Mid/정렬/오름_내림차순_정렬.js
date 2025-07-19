const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = parseInt(input[0]);
const nums = input[1].split(" ").map(Number);

// 기본 sort()는 요소들을 문자열로 변환해서 사전순(유니코드 순서)으로 비교함
// 숫자 크기 순서 비교를 하기 위해서는 compareFunction (비교 함수)를 사용해야 함
// arr.sort((a, b) => a - b)

// 배열 복사 필요 (sort()는 원본 배열을 직접 바꾸는 mutable 메서드이기 때문)
const sortedAscArr = nums.slice().sort((a, b) => a - b);
const sortedDescArr = nums.slice().sort((a, b) => b - a);

console.log(sortedAscArr.join(" "));
console.log(sortedDescArr.join(" "));

// 다른 풀이
// const fs = require("fs");
// const input = fs.readFileSync(0).toString().trim().split('\n');
// const n = parseInt(input[0]);
// const nums = input[1].split(' ').map(Number);

// // sort()는 원본 배열을 직접 바꾸는 mutable 메서드
// nums.sort((a, b) => a - b)
// console.log(nums.join(' '))
// console.log(nums.reverse().join(' '))

