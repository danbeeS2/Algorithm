const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const info = input.slice(1, n + 1).map((x) => x.split(" "));

class Person {
  constructor(name, address, city) {
    this.name = name;
    this.address = address;
    this.city = city;
  }

  print() {
    console.log(`name ${this.name}`);
    console.log(`addr ${this.address}`);
    console.log(`city ${this.city}`);
  }
}

const arrayToObject = (arr) => {
  return arr.map(([name, address, city]) => new Person(name, address, city));
};

const findLastName = (objects) => {
  objects.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
  return objects[objects.length - 1];
};

const main = () => {
  const people = arrayToObject(info);
  const lastPerson = findLastName(people);
  lastPerson.print();
};

main();
