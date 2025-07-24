// 신기한 타일 뒤집기
const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')

const n = Number(input[0])
const orders = input.slice(1).map(line => {
    const [num, dir] = line.split(' ')
    return [Number(num), dir]
})


const OFFSET = 100000

const paintBlackAndWhite = (orders) => {
    const color = new Array(OFFSET * 2).fill('')

    let start = OFFSET
    orders.forEach(([n, dir]) => {
        if(dir === "L"){
            for (let i = start; i > start - n; i--) {
                color[i] = "W"
            }
            start = start - n + 1
        }

        if(dir === "R"){
            for (let i = start; i < start + n; i++) {
                color[i] = "B"
            }
            start = start + n - 1
        }
    })
    return color
}

const countColorBlock = (painted) => {
    let white = 0
    let black = 0
    painted.forEach((color) => {
        color && (color === 'W' ? white++ : black++)
    })
    return [white, black]
}

const main = () => {
    const painted = paintBlackAndWhite(orders)
    const [white, black] = countColorBlock(painted)
    console.log(white, black)
}

main()