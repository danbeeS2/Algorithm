const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [u_code, l_color, time] = input[0].split(" ");

class BombInfo {
  constructor(u_code, l_color, time) {
    this.code = u_code;
    this.color = l_color;
    this.second = time;
  }

  print() {
    console.log(`code : ${this.code}`);
    console.log(`color : ${this.color}`);
    console.log(`second : ${this.second}`);
  }
}

const main = () => {
  const bombInfo = new BombInfo(u_code, l_color, time);
  bombInfo.print();
};

main();
