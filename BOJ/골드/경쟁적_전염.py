from collections import deque
import sys; sys.stdin = open("input.txt")


def bfs(i, j, v):
    Q = deque()
    Q.append((i, j))

    for di, dj in direction:                                  # 4방향 탐색 한 번하고 나와야 함
        ni, nj = i + di, j + dj
        if 0 <= ni < N and 0 <= nj < N and arr[ni][nj] == 0:  # 유효한 범위이고, 빈 곳이면
            # print(v)
            arr[ni][nj] = v # 해당 바이러스가 번식
            # print(arr)
            virus[v].append((ni, nj))


N, K = map(int, input().split())  # 배열 크기, 바이러스 종류
arr = [list(map(int, input().split())) for _ in range(N)]
S, X, Y = map(int, input().split())   # S초, 좌표

direction = [(0, -1), (-1, 0), (0, 1), (1, 0)]

# virus = [[] for _ in range(K)]
virus = [deque() for _ in range(K+1)]

# 번호가 낮은 바이러스 순서대로 deque에 넣기
for i in range(N):
    for j in range(N):
        if arr[i][j] != 0:
            virus[arr[i][j]].append((i, j))

# print(virus)
for _ in range(S):  # S초 만큼 반복
    for virus_num in range(1, K+1):
        for _ in range(len(virus[virus_num])):
            r, c = virus[virus_num].popleft()
            bfs(r, c, virus_num)
            # print(virus)

# bfs()


print(arr[X-1][Y-1])