// Lv.1 햄버거 만들기
// 시간 초과
function solution(ingredient) {
    let res = 0;
    let totalIngredient = ingredient.join('')
    
    // [반례] 입력: [1, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 1, 1],  기댓값: 2
    
    while(totalIngredient.includes('1231')){
        totalIngredient = totalIngredient.replace('1231', '');  // 첫 번째 햄버거 제거
        res++;  // 햄버거 개수 증가
    }
    
    return res;
}