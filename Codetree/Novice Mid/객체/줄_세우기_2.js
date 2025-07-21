// 줄 세우기 2
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = Number(input[0]);
const arr = input.slice(1).map((line) => line.split(" ").map(Number));

class Student {
  constructor(height, weight, number) {
    this.height = height;
    this.weight = weight;
    this.number = number;
  }

  print() {
    console.log(this.height, this.weight, this.number);
  }
}

const arrToObject = (arr) => arr.map(([h, w], i) => new Student(h, w, i + 1));

const sortStudents = (students) => {
  return [...students].sort((a, b) => {
    if (a.height !== b.height) return a.height - b.height;
    return b.weight - a.weight;
  });
};

const main = () => {
  const students = arrToObject(arr);
  const sorted = sortStudents(students);
  sorted.forEach((student) => student.print());
};

main();
