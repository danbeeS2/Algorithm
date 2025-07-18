const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [y, m, d] = input[0].split(" ").map(Number);

const isLeapYear = (year) => {
  if (year % 4 !== 0) return false;
  if (year % 100 === 0 && year % 400 !== 0) return false;
  return true;
};

const isVaildDate = (year, month, day) => {
  const calendar = {
    1: 31,
    2: isLeapYear(year) ? 29 : 28,
    3: 31,
    4: 30,
    5: 31,
    6: 30,
    7: 31,
    8: 31,
    9: 30,
    10: 31,
    11: 30,
    12: 31,
  };

  return calendar[month] >= day ? true : false;
};

const getSeason = (month) => {
  if ([3, 4, 5].includes(month)) return "Spring";
  if ([6, 7, 8].includes(month)) return "Summer";
  if ([9, 10, 11].includes(month)) return "Fall";
  return "Winter";
};

const getSeasonIfValidDate = (year, month, day) => {
  return isVaildDate(year, month, day) ? getSeason(month) : -1;
};

console.log(getSeasonIfValidDate(y, m, d));
