const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const [A, B] = input[0].split(" ").map(Number);

// A 이상 B 이하의 수 => 369 게임
const count369 = (a, b) => {
    let cnt = 0
    for (let i = a; i <= b; i++){
        if(isClapNumber(i)) cnt++
    }
    console.log(cnt)
}

const isClapNumber = (n) => {
    return isMultipleOfThree(n) || containsThreeSixNine(n)
}

const isMultipleOfThree = (n) => {
    return n % 3 === 0
}

const containsThreeSixNine = (n) => {
    return n.toString()
            .split('')
            .map(Number)
            .some(num => num !== 0 && num % 3 === 0)  // true, false 반환
}

count369(A, B)