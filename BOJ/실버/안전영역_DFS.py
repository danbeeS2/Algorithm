# 2468. 안전영역 - DFS
import sys

sys.setrecursionlimit(10**7)  # 재귀 깊이 제한 풀기


def dfs(i, j, num):
    visited[i][j] = 1

    for di, dj in direction:
        ni = i + di
        nj = j + dj
        if 0 <= ni < N and 0 <= nj < N:
            if arr[ni][nj] > num and not visited[ni][nj]:
                dfs(ni, nj, num)


N = int(input())
arr = [list(map(int, input().split())) for _ in range(N)]
direction = [(-1, 0), (0, 1), (1, 0), (0, -1)]

max_h = 0
for item in arr:
    tmp = max(item)
    max_h = max(tmp, max_h)


max_v = 0
for rain in range(max_h + 1):
    visited = [[0] * N for _ in range(N)]
    cnt = 0
    for i in range(N):
        for j in range(N):
            if arr[i][j] > rain and not visited[i][j]:
                cnt += 1
                dfs(i, j, rain)
    max_v = max(cnt, max_v)

print(max_v)
