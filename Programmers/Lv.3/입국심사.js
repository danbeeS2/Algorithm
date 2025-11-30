function solution(n, times) {
  let answer = Infinity;

  // 이진 탐색을 위한 정렬
  const sorted = times.sort((a, b) => a - b);

  let low = 0;
  let high = sorted.at(-1) * n;
  let mid = Math.floor((low + high) / 2);

  const isPossible = (guessTime) => {
    let peopleCnt = 0;
    for (const time of times) {
      peopleCnt += Math.floor(guessTime / time);
    }

    // 추측한 시간에 n명 이상 심사 가능
    if (peopleCnt >= n) return true;
    return false;
  };

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (isPossible(mid)) {
      high = mid - 1;
      answer = Math.min(mid, answer);
    } else {
      low = mid + 1;
    }
  }

  return answer;
}
