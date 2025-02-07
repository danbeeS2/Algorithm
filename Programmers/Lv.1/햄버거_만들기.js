// Lv.1 햄버거 만들기
function solution(ingredient) {
    let res = 0;
    let totalIngredient = ingredient.join('')
    let buger = []
    
    // [반례] 입력: [1,2,3,1,2,3,1,1] 기댓값: 2
    
    while(buger.length !== 1){
        buger = totalIngredient.split('1231')  // 빵-야채-고기-빵로 구분
        res += buger.length - 1  // 만들어진 버거 개수 세기
        
        totalIngredient = buger.join('')  // 재료 정렬
    }
       
    return res;
}