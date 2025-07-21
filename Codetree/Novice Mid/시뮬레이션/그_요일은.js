// 그 요일은
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [m1, d1, m2, d2] = input[0].split(" ").map(Number);
const targetDOW = input[1];

const getTotalDays = (month, day) => {
  let days = 0;
  const DAYS_IN_MONTH = Object.freeze([
    0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
  ]);

  for (let i = 1; i < month; i++) {
    days += DAYS_IN_MONTH[i];
  }
  days += day;

  return days;
};

const getDowIndex = (dow) => {
  const DAYS_OF_WEEK = Object.freeze([
    "Mon",
    "Tue",
    "Wed",
    "Thu",
    "Fri",
    "Sat",
    "Sun",
  ]);
  return DAYS_OF_WEEK.indexOf(dow);
};

const countTargetDOW = (start, end, targetDowIdx) => {
  let cnt = 0;
  let curDowIdx = getDowIndex("Mon"); // 시작일은 월요일

  for (let date = start; date <= end; date++) {
    if (curDowIdx === targetDowIdx) cnt++;
    curDowIdx = (curDowIdx + 1) % 7;
  }
  return cnt;
};

const main = () => {
  const startDate = getTotalDays(m1, d1);
  const endDate = getTotalDays(m2, d2);
  const targetDowIdx = getDowIndex(targetDOW);

  const res = countTargetDOW(startDate, endDate, targetDowIdx);
  console.log(res);
};

main();
