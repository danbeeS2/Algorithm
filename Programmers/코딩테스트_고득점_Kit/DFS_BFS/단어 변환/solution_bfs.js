function solution(begin, target, words) {
  // 목표 단어가 없으면 단어 변환 불가
  if (!words.includes(target)) return 0;

  const len = begin.length;
  const visited = Array(words.length).fill(false);

  const isDiffOne = (a, b) => {
    let cnt = 0;
    for (let i = 0; i < len; i++) {
      if (a[i] !== b[i]) cnt++;
    }

    return cnt === 1;
  };

  const bfs = () => {
    const queue = [[begin, 0]]; // [현재단어, 변환횟수]

    while (queue.length > 0) {
      const [cur, step] = queue.shift();
      if (cur === target) return step;

      for (let i = 0; i < words.length; i++) {
        if (visited[i]) continue;
        if (!isDiffOne(cur, words[i])) continue;

        visited[i] = true;
        queue.push([words[i], step + 1]);
      }
    }
    return 0;
  };

  return bfs();
}
