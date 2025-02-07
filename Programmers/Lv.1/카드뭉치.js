// Lv.1 카드 뭉치
function solution(cards1, cards2, goal) {
    let res = 'Yes'
    let idx1 = 0
    let idx2 = 0
    
    for (let word of goal){
        // 카드 뭉치 1
        if ( word === cards1[idx1] ){
            idx1++
            continue // 찾으면 다음 단어로 넘어감
        }
        
        // 카드 뭉치 2
        else if ( word === cards2[idx2] ){
            idx2++
            continue // 찾으면 다음 단어로 넘어감
        }
        return 'No'
    }
    console.log(res)
    return res
}