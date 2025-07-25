// 벌금은 누구에게
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m, k] = input[0].split(" ").map(Number);
const penaltyRecords = input.slice(1).map(Number);

const findFirstStudent = (n, records, threshold) => {
  const penalties = new Array(n).fill(0);

  for (const student of records) {
    penalties[student - 1] += 1;
    if (penalties[student - 1] === threshold) return student;
  }
  return -1;
};

const main = () => {
  console.log(findFirstStudent(n, penaltyRecords, k));
};

main();
