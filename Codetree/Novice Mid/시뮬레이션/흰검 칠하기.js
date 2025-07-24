// 흰검 칠하기
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = Number(input[0]);
const orders = input.slice(1).map(line => {
    const [num, dir] = line.split(" ");
    return [Number(num), dir];
});

const OFFSET = 100000
const WHITE = 1
const BLACK = 2


const paintBlackAndWhite = (orders) => {
    const color = new Array(OFFSET * 2).fill(0)
    const whiteCount = new Array(OFFSET * 2).fill(0)
    const blackCount = new Array(OFFSET * 2).fill(0)

    let start = OFFSET  // 시작 위치 
    orders.forEach(([num, dir]) => { 
        if (dir === "R") {
            for (let i = start; i < start + num; i++){
                blackCount[i] += 1
                color[i] = BLACK
            }
            start = start + num  - 1  // 시작 위치 변경
        }
        if (dir === "L") {
            for (let i = start; i > start - num; i--){
                whiteCount[i] += 1
                color[i] = WHITE
            }
            start = start - num + 1   // 시작 위치 변경
        } 
    })
    return { color, whiteCount, blackCount };
}


const countColorBlock = ({ color, whiteCount, blackCount }) => {
    const res = new Array(3).fill(0)

    for (let i = 0; i < OFFSET * 2; i++){
        if (whiteCount[i] >= 2 && blackCount[i] >= 2){
            res[2] += 1
        } else if (color[i] === WHITE){
            res[0] += 1
        } else if (color[i] === BLACK){
            res[1] += 1
        }
    }
    
    return res
}

const main = () => {
    const result = paintBlackAndWhite(orders);
    const [white, black, gray] = countColorBlock(result);
    console.log(white, black, gray);
} 

main()
