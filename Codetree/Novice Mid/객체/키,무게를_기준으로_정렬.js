// 키, 몸무게를 기준으로 정렬
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const data = input
  .slice(1)
  .map((x) => x.split(" "))
  .map(([n, h, w]) => [n, Number(h), Number(w)]);

class Person {
  constructor(n, h, w) {
    this.name = n;
    this.height = h;
    this.weight = w;
  }

  print() {
    console.log(this.name, this.height, this.weight);
  }
}

const arrayToObject = (arr) => arr.map(([n, h, w]) => new Person(n, h, w));

const sortByHeight = (arr) => {
  return [...arr].sort((a, b) => {
    if (a.height !== b.height) return a.height - b.height;
    return b.weight - a.weight;
  });
};

const main = () => {
  const people = arrayToObject(data);
  const sorted = sortByHeight(people);

  sorted.forEach((person) => person.print());
};

main();
