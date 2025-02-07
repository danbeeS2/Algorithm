// Lv.1 햄버거 만들기
function solution(ingredient) {
    let stack = [];
    let res = 0;

    for (let i = 0; i < ingredient.length; i++) {
        stack.push(ingredient[i]);

        // 스택의 끝이 1,2,3,1이면 햄버거 조립 후 제거
        if (stack.length >= 4 && 
            stack[stack.length - 4] === 1 &&
            stack[stack.length - 3] === 2 &&
            stack[stack.length - 2] === 3 &&
            stack[stack.length - 1] === 1) {
            
            // stack.splice(stack.length - 4, 4);
            stack.length -= 4;  // 햄버거 재료 제거
            res++;  // 햄버거 개수 증가
        }
    }
    return res;
}