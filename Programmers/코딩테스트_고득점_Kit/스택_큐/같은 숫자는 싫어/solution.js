function solution(arr) {
  const stack = [];

  for (const item of arr) {
    const top = stack.length - 1;
    if (stack[top] !== item) stack.push(item);
  }

  return stack;
}
