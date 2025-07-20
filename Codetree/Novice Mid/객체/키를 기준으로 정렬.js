const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const studentsInfo = input.slice(1).map((student) => student.split(" "));

class Student {
  constructor(name, height, weight) {
    this.name = name;
    this.height = Number(height);
    this.weight = Number(weight);
  }

  print() {
    console.log(this.name, this.height, this.weight);
  }
}

const arrayToObject = (arr) => arr.map(([n, h, w]) => new Student(n, h, w));

const sortByHeight = (arr) => arr.sort((a, b) => a.height - b.height);

const main = () => {
  const students = arrayToObject(studentsInfo);
  const sorted = sortByHeight(students);

  sorted.map((student) => student.print());
};

main();
