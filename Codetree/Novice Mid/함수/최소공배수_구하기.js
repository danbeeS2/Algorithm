const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const [N, M] = input;

// 유클리드 호제법
// 공약수는 나머지에도 항상 그대로 남아 있기 때문에
// => 큰 수를 작은 수로 나눈 나머지로 문제를 계속 바꿔 나가면, 결국 최대공약수를 찾을 수 있다.
const gcd = (a, b) => {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
};

const lcm = (a, b) => {
  return (a * b) / gcd(a, b);
};

console.log(lcm(N, M));
