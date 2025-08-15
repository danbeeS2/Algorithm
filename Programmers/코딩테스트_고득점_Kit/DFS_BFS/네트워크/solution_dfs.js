function solution(n, computers) {
  let answer = 0;
  let visited = Array(n).fill(false);

  const dfs = (node) => {
    visited[node] = true;

    for (let next = 0; next < n; next++) {
      if (!visited[next] && computers[node][next] === 1) {
        dfs(next);
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      dfs(i);
      answer++;
    }
  }

  return answer;
}
