const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [s_code, m_point, time] = input[0].split(" ");

class SecretInfo {
  constructor(code, point, t) {
    this.secretCode = code;
    this.meetingPoint = point;
    this.time = t;
  }

  printInfo() {
    console.log(`secret code : ${this.secretCode}`);
    console.log(`meeting point : ${this.meetingPoint}`);
    console.log(`time : ${this.time}`);
  }
}

const main = () => {
  const info = new SecretInfo(s_code, m_point, time);
  info.printInfo();
};

main();
