// Lv.1 추억 점수
function arrToDict(keys, values) {
    return Object.fromEntries(keys.map((key, idx) => [key, values[idx]]));
}

function solution(name, yearning, photo) {
    // 점수표
    let scores = arrToDict(name, yearning);
    
    // 결과값
    let ans = []; 
    
    for(let arr of photo){
        let tmp = 0
        for(let person of arr){
            if (person in scores) tmp += scores[person] 
        }
        ans.push(tmp)
    }
    
    return ans;
}