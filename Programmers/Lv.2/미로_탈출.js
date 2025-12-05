function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const directions = [
    [0, -1],
    [-1, 0],
    [0, 1],
    [1, 0],
  ];

  const bfs = (sx, sy, target) => {
    const visited = Array.from({ length: n }, () => Array(m).fill(false));
    const queue = [[sx, sy, 0]];
    visited[sx][sy] = true;

    while (queue.length > 0) {
      const [x, y, dist] = queue.shift();

      if (maps[x][y] === target) return dist;

      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;

        if (nx < 0 || nx >= n || ny < 0 || ny >= m) continue;
        if (maps[nx][ny] === "X") continue;
        if (visited[nx][ny] === true) continue;

        visited[nx][ny] = true;
        queue.push([nx, ny, dist + 1]);
      }
    }
    return -1;
  };

  let sx, sy, lx, ly;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (maps[i][j] === "S") [sx, sy] = [i, j];
      if (maps[i][j] === "L") [lx, ly] = [i, j];
    }
  }

  let d1 = bfs(sx, sy, "L");
  if (d1 === -1) return -1;

  let d2 = bfs(lx, ly, "E");
  if (d2 === -1) return -1;

  console.log(d1, d2);

  return d1 + d2;
}
