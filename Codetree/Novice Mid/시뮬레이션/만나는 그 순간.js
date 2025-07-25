// 만나는 그 순간
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const arr = input.slice(1).map((line) => {
  const [dir, dist] = line.split(" ");
  return [dir, Number(dist)];
});

const arrA = arr.slice(0, n);
const arrB = arr.slice(n);

const OFFSET = 1000000;

const checkPosition = (arr) => {
  const timeTable = new Array(OFFSET).fill(0);
  let time = 1;
  for (const [dir, dist] of arr) {
    for (let i = 0; i < dist; i++) {
      timeTable[time] = timeTable[time - 1] + (dir === "R" ? 1 : -1);
      time++;
    }
  }
  return [timeTable, time];
};

const getMeetTime = (arr1, arr2, time) => {
  let minTime = Infinity;
  for (let t = 1; t < time; t++) {
    if (arr1[t] === arr2[t]) {
      minTime = t;
      break;
    }
  }
  return minTime !== Infinity ? minTime : -1;
};

const main = () => {
  const [timesA, t1] = checkPosition(arrA);
  const [timesB, t2] = checkPosition(arrB);

  console.log(getMeetTime(timesA, timesB, t1));
};

main();


// 다른 풀이
// const fs = require("fs")
// const input = fs.readFileSync(0).toString().trim().split("\n")

// const [n, m] = input[0].split(' ').map(Number)
// const arr = input.slice(1).map(line => {
//     const [dir, dist] = line.split(' ')
//     return [dir, Number(dist)]
// })

// const arrA = arr.slice(0, n)
// const arrB = arr.slice(n)

// const OFFSET = 1_000_000

// const checkTime = (arr) => {
//     const checked = new Map()  // key: 위치, value: 시간

//     let pos = OFFSET
//     let time = 1
//     for (const [dir, dist] of arr){
//         const d = dir === "R" ? 1 : -1
//         for (let i = 0; i < dist; i++){
//             pos += d
//             if(!checked.has(pos)) checked.set(pos, [])
//             checked.get(pos).push(time++)
//         }    
//     }

//     return checked
// }



// const getMeetTime = (mapA, mapB) => {
//     let minTime = Infinity

//     for (const [pos, timesA] of mapA){
//         if(!mapB.has(pos)) continue

//         const timesB = mapB.get(pos)  // B가 pos에 있었던 시간들
//         const setA = new Set(timesA)  // A가 pos에 있었던 시간들(Set으로 변환)
//         for (const time of timesB){
//             if (time !== 1 && setA.has(time)){
//                 minTime = Math.min(minTime, time)
//             }
//         }
//     } 
//     return minTime !== Infinity ? minTime : -1
// } 


// const main = () => {
//     const mapA = checkTime(arrA)
//     const mapB = checkTime(arrB)

//     console.log(getMeetTime(mapA, mapB))
// }

// main()
