// 연속 부분 수열 합의 개수
function solution(elements) {
  let answer = 0;
  const n = elements.length;

  const set = new Set();

  for (let k = 1; k <= n; k++) {
    let sum = 0;
    // console.log(set)
    for (let i = 0; i < n + k; i++) {
      sum += elements[i % n];

      // k개인 부분 수열을 완성
      if (i >= k - 1) {
        set.add(sum);
        sum -= elements[(i - k + 1 + n) % n]; // 시작값 뺴기 (원형 인덱싱 처리)
      }
    }
  }

  return set.size;
}
