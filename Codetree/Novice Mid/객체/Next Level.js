const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [userId, levelStr] = input[0].split(" ");
const level = Number(levelStr);

class User {
  constructor(userId, level) {
    this.id = userId;
    this.level = level;
  }

  print() {
    console.log(`user ${this.id} lv ${this.level}`);
  }
}

const main = () => {
  const user1 = new User("codetree", 10);
  const user2 = new User(userId, level);

  user1.print();
  user2.print();
};

main();
