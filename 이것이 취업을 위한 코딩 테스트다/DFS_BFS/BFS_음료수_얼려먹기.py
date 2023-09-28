from collections import deque


def bfs(x, y):
    Q = deque([(x, y)])
    visited[x][y] = True

    while Q:
        cx, cy = Q.popleft()
        for dx, dy in direction:
            nx, ny = cx + dx, cy + dy
            if 0 <= nx < N and 0 <= ny < M:
                if arr[nx][ny] == 0 and not visited[nx][ny]:
                    visited[nx][ny] = True
                    Q.append((nx, ny))


direction = [[-1, 0], [1, 0], [0, -1], [0, 1]]  # 상하좌우
N, M = map(int, input().split())
arr = [list(map(int, input())) for _ in range(N)]
visited = [[False] * M for _ in range(N)]
cnt = 0
for i in range(N):
    for j in range(M):
        if arr[i][j] == 0 and not visited[i][j]:
            bfs(i, j)
            cnt += 1

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
