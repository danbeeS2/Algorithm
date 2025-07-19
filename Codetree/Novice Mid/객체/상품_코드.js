const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [prod2_id, code2] = input[0].split(" ");

class Product {
  constructor(name, code) {
    this.name = name;
    this.code = code;
  }

  print() {
    console.log(`product ${this.code} is ${this.name}`);
  }
}

const main = () => {
  const product1 = new Product("codetree", 50);
  const product2 = new Product(prod2_id, code2);

  product1.print();
  product2.print();
};

main();
