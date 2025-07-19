const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const forecasts = input.slice(1, n + 1).map((line) => line.split(" "));

class Weather {
  constructor(date, dayOfWeek, weather) {
    this.date = date;
    this.dayOfWeek = dayOfWeek;
    this.weather = weather;
  }

  print() {
    console.log(this.date, this.dayOfWeek, this.weather);
  }
}

const arrayToObject = (arr) => {
  return arr.map(
    ([date, dayOfWeek, weather]) => new Weather(date, dayOfWeek, weather)
  );
};

const sortingArr = (arr) => {
  arr.sort((a, b) => {
    if (a.date < b.date) return -1;
    if (a.date > b.date) return 1;
    return 0;
  });
  return arr;
};

const findRainyDay = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].weather === "Rain") {
      return arr[i];
    }
  }
  return;
};

const main = () => {
  const weather = arrayToObject(forecasts);
  const sorted = sortingArr(weather);
  const thisDay = findRainyDay(sorted);
  thisDay.print();
};

main();
