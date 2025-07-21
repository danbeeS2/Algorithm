// DateTime to DateTime
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const [day, hour, min] = input
const [startDay, startHour, startMin] = [11, 11, 11]

const calcMin = (d, h, m) => {
    return (d * 24 * 60) + (h * 60) + m
}


const main = () => {
    const start = calcMin(startDay, startHour, startMin)
    const end = calcMin(day, hour, min)

    const totalMin = end - start
    console.log(totalMin < 0 ? -1 : totalMin)
} 

main()
