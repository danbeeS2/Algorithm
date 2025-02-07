// Lv.1 기사단원의 무기

// 약수의 개수를 구하는 함수
function countFactor(num){
    let cnt = 0
    // 15 => 1, 3, 5, 15
    // 제곱근을 이용하여 최적화
    for (let i = 1; i <= Math.sqrt(num); i++){
        if(num % i === 0){
            // 완전 제곱수이면 중복 제거, 일반적인 수는 두 개의 약수 추가
            cnt += (i * i === num) ? 1 : 2
        }
    }
    return cnt
}

function solution(number, limit, power) {
    let answer = 0;
    let arr = []
    
    for (let n = 1; n <= number; n++){
        let num = countFactor(n) // n의 약수 개수 구하기
        // console.log(n, num)
        answer += num <= limit ? num : power
    }
    return answer;
}