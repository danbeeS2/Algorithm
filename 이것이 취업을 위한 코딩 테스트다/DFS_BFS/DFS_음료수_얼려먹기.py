def dfs(x, y):
    visited[x][y] = True
    for dx, dy in direction:
        nx = x + dx
        ny = y + dy
        if (0 <= nx < N and 0 <= ny < M) and arr[nx][ny] == 0 and not visited[nx][ny]:
            dfs(nx, ny)


direction = [(-1, 0), (0, 1), (1, 0), (0, -1)]
N, M = map(int, input().split())
arr = [list(map(int, input())) for _ in range(N)]
visited = [[False] * M for _ in range(N)]


cnt = 0
for i in range(N):
    for j in range(M):
        if arr[i][j] == 0 and visited[i][j] == 0:
            cnt += 1
            dfs(i, j)

print(cnt)

"""
# 입력:
15 14
00000111100000
11111101111110
11011101101110
11011101100000
11011111111111
11011111111100
11000000011111
01111111111111
00000000011111
01111111111000
00011111111000
00000001111000
11111111110011
11100011111111
11100011111111
# 출력: 8
"""

"""
# 입력:
4 5
00110
00011
11111
00000
# 출력: 8
"""
