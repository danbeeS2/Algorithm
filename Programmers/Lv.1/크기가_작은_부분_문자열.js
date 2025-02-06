// Lv.1 크기가 작은 부분 문자열
function solution(t, p) {
    let cnt = 0;
    const totalLen = t.length
    const partialLen = p.length
    const partialNum = Number(p)
    
    for(let i = 0; i <= totalLen - partialLen; i++ ){
        if (Number(t.slice(i, i+partialLen)) <= partialNum) {
            cnt ++
        }
    }
    return cnt;
}
