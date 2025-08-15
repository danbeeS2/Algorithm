function solution(numbers, target) {
  const n = numbers.length;
  let answer = 0;

  let tmp = 0;

  const dfs = (idx) => {
    if (idx === n) {
      if (tmp === target) answer++;
      return;
    }

    tmp += numbers[idx];
    dfs(idx + 1);
    tmp -= numbers[idx];

    tmp -= numbers[idx];
    dfs(idx + 1);
    tmp += numbers[idx];
  };

  dfs(0, 0);
  return answer;
}
