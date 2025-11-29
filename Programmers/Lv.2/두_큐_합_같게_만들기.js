function solution(queue1, queue2) {
  const arr = queue1.concat(queue2);

  const total = arr.reduce((acc, cur) => acc + cur, 0);
  if (total % 2 !== 0) return -1;
  const target = total / 2;

  const max = arr.length * 2;
  let start = 0;
  let end = queue1.length;
  let sum = queue1.reduce((acc, cur) => acc + cur, 0);

  let cnt = 0;
  while (cnt <= max) {
    if (sum === target) return cnt;
    else if (sum < target) {
      sum += arr[end % arr.length];
      end++;
    } else {
      sum -= arr[start];
      start++;
    }
    cnt++;
  }

  return -1;
}
