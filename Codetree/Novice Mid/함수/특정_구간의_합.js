const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split('\n');
const arrA = input[1].split(" ").map(Number);
const queries = input.slice(2).map(line => line.split(" ").map(Number));

const getRangeSumOfArrA = ([start, end]) => {
    let sum = 0
    for (let i = start - 1; i < end; i++){
        sum += arrA[i]
    }
    return sum
}

const solve = (queries) => {
    return queries.map((query) => getRangeSumOfArrA(query))
}

console.log(solve(queries).join('\n'))