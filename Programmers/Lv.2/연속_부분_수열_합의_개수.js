// 연속 부분 수열 합의 개수
function solution(elements) {
  const n = elements.length;
  const set = new Set();

  // 원형 배열을 만들기 위해 두배 확장
  const arr = [...elements, ...elements];

  for (let k = 1; k <= n; k++) {
    let sum = 0;

    // 첫 슬라이딩
    for (let i = 0; i < k; i++) sum += arr[i];
    set.add(sum);

    // 슬라이딩
    for (let i = k; i < n + k; i++) {
      sum += arr[i]; // 새로운 값 더하고
      sum -= arr[i - k]; // 이전 값 빼기
      set.add(sum);
    }
  }
  return set.size;
}
