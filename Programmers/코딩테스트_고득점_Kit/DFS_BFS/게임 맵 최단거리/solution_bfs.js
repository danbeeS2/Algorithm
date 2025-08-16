function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const visited = Array.from({ length: n }, () => Array(m).fill(0));

  const directions = [
    [-1, 0],
    [0, 1],
    [1, 0],
    [0, -1],
  ];

  const bfs = (x, y) => {
    const queue = [[x, y]];
    visited[x][y] = 1;

    while (queue.length > 0) {
      const [cx, cy] = queue.shift();

      for (const [dx, dy] of directions) {
        const nx = cx + dx;
        const ny = cy + dy;

        if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;

        if (!visited[nx][ny] && maps[nx][ny] === 1) {
          visited[nx][ny] = visited[cx][cy] + 1;
          queue.push([nx, ny]);
        }
      }
    }
  };
  bfs(0, 0);
  const answer = visited[n - 1][m - 1] === 0 ? -1 : visited[n - 1][m - 1];

  return answer;
}
