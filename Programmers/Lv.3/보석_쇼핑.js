function solution(gems) {
  let answer = [0, gems.length - 1];

  let left = 0;
  let totalTypes = new Set([...gems]).size; // 전체 보석 개수
  let count = new Map();

  for (let right = 0; right < gems.length; right++) {
    const gem = gems[right];

    // 1. 오른쪽 확장
    count.set(gem, (count.get(gem) || 0) + 1);

    // 2. 현재 구간이 모든 보석을 포함한다면 → while로 left 줄이기
    while (count.size === totalTypes) {
      if (right - left < answer[1] - answer[0]) {
        answer = [left, right];
      }

      const leftGem = gems[left];
      count.set(leftGem, count.get(leftGem) - 1);

      if (count.get(leftGem) === 0) count.delete(leftGem);

      left++;
    }
  }

  answer = answer.map((x) => x + 1);

  return answer;
}
