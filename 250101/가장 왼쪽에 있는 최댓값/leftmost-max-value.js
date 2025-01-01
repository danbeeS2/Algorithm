const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n').map(line => line.split(' ').map(Number))

const n = input[0][0]
const arr = input[1]

let maxN = 0
let idx = 0
let res = []

for (let i=0; i<n; i++){
    let num = arr[i]
    if (maxN < num ) {
        maxN = num
        idx = i
    }
}

// 최댓값 초기화
maxN = 0

// 첫번째 최댓값의 순서 저장
res.push(idx+1)

for (let i=0; i<res[0]-1; i++){
    let num = arr[i]
    if (maxN < num ) {
        maxN = num
        idx = i
    }
}

// 두번째 최댓값의 순서 저장
res[0] !== idx+1 ? res.push(idx+1) : ''

console.log(res.join(' '))