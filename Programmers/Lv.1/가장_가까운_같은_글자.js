// Lv.1 가장 가까운 같은 글자
function solution(s) {
    let answer = [];
    let idxMap = new Map()
    
    // 0   1  2  3  4  5
    //  b  a  n  a  n  a
    // -1 -1 -1  

    for (let i = 0; i < s.length; i++){
        let idx = -1
        if (idxMap.has(s[i])) answer.push(i - idxMap.get(s[i]))
        else answer.push(-1)
        idxMap.set(s[i], i)
        
    }
    console.log(idxMap)
    return answer;
}