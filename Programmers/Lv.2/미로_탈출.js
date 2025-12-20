function solution(maps) {
  const row = maps.length;
  const col = maps[0].length;

  const directions = [
    [0, -1],
    [-1, 0],
    [0, 1],
    [1, 0],
  ];

  const bfs = (sx, sy, target) => {
    const visited = Array.from({ length: row }, () => Array(col).fill(-1));

    const queue = [[sx, sy]];
    visited[sx][sy] = 0;

    while (queue.length > 0) {
      const [x, y] = queue.shift();

      if (maps[x][y] === target) return visited[x][y];

      for (const [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;

        if (nx < 0 || nx >= row || ny < 0 || ny >= col) continue;
        if (maps[nx][ny] === "X") continue;
        if (visited[nx][ny] !== -1) continue;

        visited[nx][ny] = visited[x][y] + 1;
        queue.push([nx, ny]);
      }
    }

    return -1;
  };

  let sx, sy, lx, ly;

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (maps[i][j] === "S") [sx, sy] = [i, j];
      if (maps[i][j] === "L") [lx, ly] = [i, j];
    }
  }

  const dist1 = bfs(sx, sy, "L");
  const dist2 = bfs(lx, ly, "E");

  return dist1 === -1 || dist2 === -1 ? -1 : dist1 + dist2;
}
