function solution(numbers, target) {
  const n = numbers.length;
  let answer = 0;

  const dfs = (idx, sum) => {
    if (idx === n) {
      if (sum === target) answer++;
      return;
    }

    dfs(idx + 1, sum + numbers[idx]);
    dfs(idx + 1, sum - numbers[idx]);
  };

  dfs(0, 0);
  return answer;
}
