const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n').map(line => line.split(' ').map(Number))
const n = input[0][0]
const arr = input[1]

let curEnd = n  // 탐색 범위 끝 (시작은 배열 전체)
let res = []

while (curEnd > 0) {
    let maxN = 0
    let idx = -1

    // 현재 탐색 범위에서 최댓값 찾기
    for (let i=0; i<curEnd; i++){
        if (maxN < arr[i]) {
            maxN = arr[i]
            idx = i
        }
    }
    // 최댓값의 순서 저장
    res.push(idx+1)

    // 탐색 범위 왼쪽으로 조정
    curEnd = idx

}

console.log(res.join(' '))