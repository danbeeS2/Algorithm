// Lv.1 기사단원의 무기
// 시간 초과
function countFactor(num){
    let cnt = 0
    for (let i = 1; i <= num; i++){
        if(num % i === 0) cnt++
    }
    return cnt
}

function solution(number, limit, power) {
    let answer = 0;
    
    for (let n = 1; n <= number; n++){
        let num = countFactor(n)
        // console.log(n, num)
        answer += num <= limit ? num : power
    }
    return answer;
}