// 사각형의 총 넓이 2
const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

const n = Number(input[0])
const rects = input.slice(1).map(line => line.split(' ').map(Number))

const OFFSET = 100

const markRectangleArea = (rects) => {
    const board = new Array(OFFSET * 2).fill().map(() => new Array(OFFSET * 2).fill(0))
    rects.forEach(([x1, y1, x2, y2]) => {
        for (let i = x1 + OFFSET; i < x2 + OFFSET; i++){
            for (let j = y1 + OFFSET; j < y2 + OFFSET; j++){
                board[i][j] = 1
            }
        }
    })

    return board
}

const countFilledArea = (board) => {
    let cnt = 0
    board.forEach((row) => {
        cnt += row.reduce((acc, cur) => acc + cur, 0)
    })

    return cnt
}

const main = () => {
    const board = markRectangleArea(rects)
    const cnt = countFilledArea(board)
    console.log(cnt)
}

main()