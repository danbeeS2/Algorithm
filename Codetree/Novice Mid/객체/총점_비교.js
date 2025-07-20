const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const scores = input.slice(1).map((score) => score.split(" "));

class Student {
  constructor(name, score1, score2, score3) {
    this.name = name;
    this.score1 = Number(score1);
    this.score2 = Number(score2);
    this.score3 = Number(score3);
  }

  print() {
    console.log(this.name, this.score1, this.score2, this.score3);
  }
}

const arrayToObject = (arr) =>
  arr.map(([name, s1, s2, s3]) => new Student(name, s1, s2, s3));

const sortByTotalScore = (arr) => {
  return [...arr].sort(
    (a, b) => a.score1 + a.score2 + a.score3 - (b.score1 + b.score2 + b.score3)
  );
};

const main = () => {
  const students = arrayToObject(scores);
  const sorted = sortByTotalScore(students);

  sorted.map((student) => student.print());
};

main();
