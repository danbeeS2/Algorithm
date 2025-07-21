// 요일 맞추기
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const [m1, d1, m2, d2] = input;

const getDayOfWeek = (days) => {
  const DAYS_OF_WEEK = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  // m1월 d1일 = 월요일 => DAYS_OF_WEEK[0]

  while (days < 0) {
    days += 7;
  }

  return DAYS_OF_WEEK[days % 7];
};

const calcDays = (m, d) => {
  const DAYS_IN_MONTH = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let totalDays = 0;

  for (let month = 1; month < m; month++) {
    totalDays += DAYS_IN_MONTH[month];
  }

  totalDays += d;

  return totalDays;
};

const main = () => {
  const diff = calcDays(m2, d2) - calcDays(m1, d1);
  const res = getDayOfWeek(diff);

  console.log(res);
};

main();
