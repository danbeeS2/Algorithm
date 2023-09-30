# 2468. 안전영역 - BFS
from collections import deque


def bfs(i, j, num):
    Q = deque([(i, j)])
    visited[i][j] = 1

    while Q:
        ci, cj = Q.popleft()
        for di, dj in direction:
            ni = ci + di
            nj = cj + dj

            if ni <= -1 or ni >= N or nj <= -1 or nj >= N:
                continue
            if arr[ni][nj] <= num or visited[ni][nj]:
                continue

            visited[ni][nj] = 1
            Q.append((ni, nj))


N = int(input())
arr = [list(map(int, input().split())) for _ in range(N)]
# 2468. 안전영역 - BFS
direction = [(-1, 0), (0, 1), (1, 0), (0, -1)]
max_h = 0
for item in arr:
    tmp = max(item)
    max_h = max(tmp, max_h)

max_v = 0
for rain in range(max_h + 1):
    cnt = 0
    visited = [[0] * N for _ in range(N)]
    for i in range(N):
        for j in range(N):
            if arr[i][j] > rain and not visited[i][j]:
                bfs(i, j, rain)
                cnt += 1
    max_v = max(max_v, cnt)

print(max_v)
