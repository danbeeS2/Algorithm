function solution(k, dungeons) {
  let answer = -1;

  const visited = Array(dungeons.length).fill(false);

  const dfs = (curK, cnt) => {
    answer = Math.max(answer, cnt);

    for (let i = 0; i < dungeons.length; i++) {
      const [need, used] = dungeons[i];
      if (!visited[i] && curK >= need) {
        visited[i] = true;
        dfs(curK - used, cnt + 1);
        visited[i] = false;
      }
    }
  };

  dfs(k, 0);

  return answer;
}
