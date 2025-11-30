function solution(distance, rocks, n) {
  let answer = 0;

  const allDist = [...rocks.sort((a, b) => a - b), distance];

  let low = 0;
  let high = distance;
  let mid = Math.floor((low + high) / 2);

  const possibleRemove = (guessMinDist) => {
    let removeCnt = 0;
    let prev = 0;

    for (const dist of allDist) {
      // 우리가 추측한 최소거리보다 더 작은게 있으면 돌 제거
      if (dist - prev < guessMinDist) {
        removeCnt++;
      } else {
        prev = dist;
      }
    }

    if (removeCnt <= n) return true;
    return false;
  };

  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (possibleRemove(mid)) {
      // 더 큰 최소거리를 구해야 함
      low = mid + 1;
      answer = mid;
    } else {
      high = mid - 1;
    }
  }

  return answer;
}
