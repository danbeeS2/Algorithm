const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
// const n = Number(input[0])
const info = input.slice(1).map((x) => x.split(" ").map(Number));

class Student {
  constructor(height, weight, number = 0) {
    this.height = height;
    this.weight = weight;
    this.number = number;
  }

  print() {
    console.log(this.height, this.weight, this.number);
  }
}

const arrayToObject = (arr) => arr.map(([h, w], i) => new Student(h, w, i + 1));

const sortByTall = (arr) => {
  return [...arr].sort((a, b) => {
    if (a.height !== b.height) return b.height - a.height; // 1. 키가 더 큰 학생이 앞에
    if (a.weight !== b.weight) return b.weight - a.weight; // 2. 몸무게가 더 큰 학생이 앞에
    return a.number - b.number; // 3. 번호가 작은 학생이 앞에
  });
};

const main = () => {
  const students = arrayToObject(info);
  const sorted = sortByTall(students);

  sorted.forEach((student) => student.print());
};

main();
