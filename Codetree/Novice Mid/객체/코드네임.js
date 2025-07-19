const fs = require("fs");
const input = fs
  .readFileSync(0)
  .toString()
  .trim()
  .split("\n")
  .map((line) => line.split(" "));

class Agent {
  constructor(codeName, score) {
    this.codeName = codeName;
    this.score = score;
  }

  print() {
    console.log(`${this.codeName} ${this.score}`);
  }
}

const arrayToObject = (arr) => {
  return arr.map(([codeName, score]) => new Agent(codeName, Number(score)));
};

const findMinScore = (objects) => {
  let minScore = 100;
  let idx = -1;
  for (let i = 0; i < objects.length; i++) {
    if (minScore > objects[i].score) {
      minScore = objects[i].score;
      idx = i;
    }
  }
  return idx;
};

const main = () => {
  const agents = arrayToObject(input);
  const idx = findMinScore(agents);
  agents[idx].print();
};

main();
