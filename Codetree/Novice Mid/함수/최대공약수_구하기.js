const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);
const [N, M] = input;

const gcd = (n, m) => {
  let res = 1;
  for (let i = 2; i < Math.min(n, m); i++) {
    while (n % i === 0 && m % i === 0) {
      res *= i;
      n /= i;
      m /= i;
    }
  }
  return res;
};

console.log(gcd(N, M));
