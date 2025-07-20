const fs = require("fs");
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" "));

class Person {
  constructor(name, height, weight) {
    this.name = name;
    this.height = Number(height);
    this.weight = Number(weight);
  }

  print() {
    console.log(this.name, this.height, this.weight.toFixed(1));
  }
}

const arrayToObject = (arr) => arr.map(([n, h, w]) => new Person(n, h, w));

const sortByTarget = (arr, target, option = "asc") => {
  return [...arr].sort((a, b) => {
    if (typeof a[target] === "string") {
      if (a[target] > b[target]) return option === "desc" ? -1 : 1;
      if (a[target] < b[target]) return option === "desc" ? 1 : -1;
      return 0;
    }
    return option === "desc" ? b[target] - a[target] : a[target] - b[target];
  });
};

const main = () => {
  const people = arrayToObject(input);
  const sortedByName = sortByTarget(people, "name");
  const sortedByHeight = sortByTarget(people, "height", "desc");

  console.log("name");
  sortedByName.forEach((person) => person.print());
  console.log();
  console.log("height");
  sortedByHeight.forEach((person) => person.print());
};

main();
