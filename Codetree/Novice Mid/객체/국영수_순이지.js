const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const n = input[0];
const studentsInfo = input.slice(1).map((student) => student.split(" "));

class Student {
  constructor(name, kor, eng, math) {
    this.name = name;
    this.kor = Number(kor);
    this.eng = Number(eng);
    this.math = Number(math);
  }

  print() {
    console.log(this.name, this.kor, this.eng, this.math);
  }
}

const arrayToObject = (arr) =>
  arr.map(([name, kor, eng, math]) => new Student(name, kor, eng, math));

const sortByScore = (arr) => {
  return arr.sort((a, b) => {
    if (a.kor == b.kor) {
      if (a.eng == b.eng) return b.math - a.math;
      return b.eng - a.eng;
    }
    return b.kor - a.kor;
  });
};

const main = () => {
  const students = arrayToObject(studentsInfo);
  sortByScore(students);
  students.map((student) => student.print());
};

main();
