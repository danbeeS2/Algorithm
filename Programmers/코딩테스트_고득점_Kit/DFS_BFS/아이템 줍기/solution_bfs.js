function solution(rectangle, characterX, characterY, itemX, itemY) {
  const S = 2; // 스케일 2배
  const SIZE = 50 * S + 2;

  // 0: 벽, 1: 외곽선(길), 2: 내부(막힘)
  const grid = Array.from({ length: SIZE }, () => Array(SIZE).fill(0));

  const rects = rectangle.map(([x1, y1, x2, y2]) => [
    x1 * S,
    y1 * S,
    x2 * S,
    y2 * S,
  ]);

  // 사각형 내부 2로 채우기
  for (const [x1, y1, x2, y2] of rects) {
    for (let x = x1 + 1; x <= x2 - 1; x++) {
      for (let y = y1 + 1; y <= y2 - 1; y++) {
        grid[x][y] = 2;
      }
    }
  }

  // 외각선 그리기
  for (const [x1, y1, x2, y2] of rects) {
    for (let x = x1; x <= x2; x++) {
      if (grid[x][y1] !== 2) grid[x][y1] = 1; // 상
      if (grid[x][y2] !== 2) grid[x][y2] = 1; // 하
    }

    for (let y = y1; y <= y2; y++) {
      if (grid[x1][y] !== 2) grid[x1][y] = 1; // 좌
      if (grid[x2][y] !== 2) grid[x2][y] = 1; // 우
    }
  }

  // console.log(grid.map(r => r.join('')))

  const bfs = (sx, sy, tx, ty) => {
    const queue = [[sx, sy]];
    let head = 0;

    const visited = Array.from({ length: SIZE }, () => Array(SIZE).fill(-1));
    visited[sx][sy] = 0;

    const directions = [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ];

    while (queue.length > head) {
      const [cx, cy] = queue[head++];

      if (cx === tx && cy === ty) return visited[cx][cy];

      for (const [dx, dy] of directions) {
        const nx = cx + dx;
        const ny = cy + dy;

        if (nx >= SIZE || nx < 0 || ny >= SIZE || ny < 0) continue;
        if (visited[nx][ny] !== -1 || grid[nx][ny] !== 1) continue;

        queue.push([nx, ny]);
        visited[nx][ny] = visited[cx][cy] + 1;
      }
    }

    return -1;
  };

  const sx = characterX * S,
    sy = characterY * S;
  const tx = itemX * S,
    ty = itemY * S;

  return bfs(sx, sy, tx, ty) / S; // 스케일 복원
}
