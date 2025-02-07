// Lv.1 과일 장수

function solution(k, m, score) {
    let answer = 0;
    // 사과 점수 내림차순 정렬
    let apples = score.sort((a,b) => b - a) // [ 3, 3, 2, 2, 1, 1, 1 ]
    
    // 전체 사과 개수
    const num = apples.length
    
    // 사과 m개씩 포장
    for (let i = 0; i < num; i+= m){
        if(num >= i+m){
            let box = apples.slice(i, i+m)
            answer += box[m-1] * m  // 최저 사과 점수 x 한 상자에 담긴 사과 개수
        }
        // 남는 사과는 버리기
    }
    return answer;
}