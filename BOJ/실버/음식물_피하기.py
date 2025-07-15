import sys

sys.setrecursionlimit(10 ** 6)


def dfs(i, j):
    global max_val
    visited[i][j] = 1  # 방문 체크
    max_val += 1

    for di, dj in direction:
        ni, nj = i + di, j + dj
        if 0 <= ni < N and 0 <= nj < M and arr[ni][nj] and not visited[ni][nj]:
            dfs(ni, nj)


# 입력 받기
N, M, K = map(int, input().split())  # 세로, 가로, 쓰레기 개수
arr = [[0] * M for _ in range(N)]
for _ in range(K):
    r, c = map(int, input().split())
    arr[r - 1][c - 1] = 1

max_val = 0
res = 0

visited = [[0] * M for _ in range(N)]
direction = [(1, 0), (0, 1), (-1, 0), (0, -1)]

for i in range(N):
    for j in range(M):
        if arr[i][j] == 1:
            max_val = 0
            dfs(i, j)
            if res < max_val:
                res = max_val

print(res)