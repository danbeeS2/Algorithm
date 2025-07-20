// 원점으로부터의 거리
const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split('\n')
const data = input.slice(1).map(line => line.split(' ').map(Number))

class Point {
    constructor(x, y, number, dist = 0){
        this.x = x;
        this.y = y;
        this.number = number;
    }

    printNumber() {
        console.log(this.number)
    }

    // 원점에서의 멘하턴 거리 구하기
    getDistanceFromOrigin() {
        return Math.abs(this.x) + Math.abs(this.y)
    }
}

const arrToObject = (arr) => arr.map(([x, y], i) => new Point(x, y, i + 1))

const sortByDist = (arr) => {
    return [...arr].sort((a, b) => {
        const distA = a.getDistanceFromOrigin()
        const distB = b.getDistanceFromOrigin()

        return distA !== distB ? distA - distB : a.number - b.number;
    })
}

const main = () => {
    const points = arrToObject(data)
    const sorted = sortByDist(points)

    sorted.forEach(point => console.log(point.number));
}

main()