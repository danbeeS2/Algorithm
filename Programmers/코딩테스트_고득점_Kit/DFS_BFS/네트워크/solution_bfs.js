function solution(n, computers) {
  let answer = 0;
  let visited = Array(n).fill(false);

  const bfs = (start) => {
    const queue = [start];
    visited[start] = true;

    while (queue.length) {
      const node = queue.shift();
      for (let next = 0; next < n; next++) {
        if (!visited[next] && computers[node][next] === 1) {
          queue.push(next);
          visited[next] = true;
        }
      }
    }
  };

  for (let i = 0; i < n; i++) {
    if (!visited[i]) {
      bfs(i);
      answer++;
    }
  }

  return answer;
}
