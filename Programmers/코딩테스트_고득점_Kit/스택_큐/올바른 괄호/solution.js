function solution(s) {
  if (s.length % 2 === 1) return false;

  const stack = [];

  for (const ch of s) {
    if (ch === "(") {
      stack.push(ch);
    } else {
      if (stack.length === 0) return false;
      stack.pop();
    }
  }

  return stack.length > 0 ? false : true;
}
