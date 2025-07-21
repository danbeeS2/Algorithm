// Date to Date
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const [month1, day1, month2, day2] = input;

const countDday = (startMonth, startDay, endMonth, endDay) => {
  // 각 월별 일수 배열
  const DAYS_IN_MONTH = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let month = startMonth;
  let day = startDay;
  let totalDays = 1; // 시작일 포함

  while (!(month === endMonth && day === endDay)) {
    day += 1;
    if (day > DAYS_IN_MONTH[month]) {
      month += 1;
      day = 1;
    }
    totalDays += 1;
  }
  return totalDays;
};

const main = () => {
  const res = countDday(month1, day1, month2, day2);
  console.log(res);
};

main();

// 다른 풀이
// const calcDday = (startMonth, startDay, endMonth, endDay) => {
//     // 각 월별 일수 배열
//     const DAYS_IN_MONTH = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//     // 같은 월이면 그냥 날짜 차이 + 1
//     if (startMonth === endMonth) {
//         return endDay - startDay + 1;
//     }

//     let totalDays = 0

//     // 첫 달: 시작일부터 그 달 마지막 날까지 포함
//     totalDays += DAYS_IN_MONTH[startMonth] - startDay + 1;

//     // 중간 달: 통째로 다 더하기
//     for (let month = startMonth + 1; month < endMonth; month++) {
//         totalDays += DAYS_IN_MONTH[month];
//     }

//     // 마지막 달: 1일부터 종료일까지 포함
//     totalDays += endDay;

//     return totalDays
// }

// const main = () => {
//     const res = calcDday(month1, day1, month2, day2)
//     console.log(res)
// }

// main()
