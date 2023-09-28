def dfs(x, y):
    if visited[x][y] or arr[x][y] == 1:
        return False
    else:
        visited[x][y] = True
        for dx, dy in direction:
            nx = x + dx
            ny = y + dy
            if (
                (0 <= nx < N and 0 <= ny < M)
                and arr[nx][ny] == 0
                and not visited[nx][ny]
            ):
                dfs(nx, ny)
        return True


direction = [(-1, 0), (0, 1), (1, 0), (0, -1)]
N, M = map(int, input().split())
arr = [list(map(int, input())) for _ in range(N)]
visited = [[False] * M for _ in range(N)]


cnt = 0
for i in range(N):
    for j in range(M):
        cnt += dfs(i, j)

print(cnt)
