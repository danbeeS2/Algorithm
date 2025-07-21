// Time to Time
const fs = require('fs')
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number)

const [hour1, min1, hour2, min2] = input

const countMinute = (startHour, startMinute, endHour, endMinute) => {
    let hour = startHour
    let minute = startMinute
    let elapsedTime = 0  // 경과된 시간

    while(true){
        if(hour === endHour && minute === endMinute) break

        minute++
        elapsedTime++

        if (minute === 60) {
            minute = 0
            hour += 1
        }
    }
    return elapsedTime
}

const main = () => {
    const res = countMinute(hour1, min1, hour2, min2)
    console.log(res)
}

main()


// 다른 풀이
// const calculateMin = (hour, min) => {
//     return hour * 60 + min
// }

// const main = () => {
//     const start = calculateMin(hour1, min1)
//     const end = calculateMin(hour2, min2)

//     const res = end - start
//     console.log(res)
// }

// main()