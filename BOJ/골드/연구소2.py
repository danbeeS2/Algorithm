import copy
from collections import deque
import sys;
sys.stdin = open("input.txt")

N, M = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(N)]

direction = [(0, -1), (-1, 0), (0, 1), (1, 0)]


def bfs():
    new_Q = copy.deepcopy(Q)
    new_arr = copy.deepcopy(arr)

    while new_Q:
        ci, cj = new_Q.popleft()
        for di, dj in direction:
            ni, nj = ci + di, cj + dj
            if 0 <= ni < N and 0 <= nj < M and new_arr[ni][nj] == 0:
                new_arr[ni][nj] = 2  # 바이러스 확산
                new_Q.append((ni, nj))

    # 안전 영역 크기 구하기
    cnt = 0
    for i in range(N):
        for j in range(M):
            if new_arr[i][j] == 0:
                cnt += 1
    return cnt


# 최적의 벽을 세우려면 => 완전 탐색해야 함
max_val = 0

def make_wall(cnt):
    global max_val

    if cnt == 3:  # 벽 3개를 세우면 할 일 하기(최대 안전 영역 크기 구하기)
        safe = bfs()
        max_val = max(max_val, safe)
        return

    for i in range(N):  # 벽 3개 세우기
        for j in range(M):
            if arr[i][j] == 0:
                arr[i][j] = 1  # 벽 세우기
                make_wall(cnt + 1)  # 재귀
                arr[i][j] = 0  # 벽 허물기 (초기화)


Q = deque()

# 초기 바이러스 큐에 넣기
for i in range(N):
    for j in range(M):
        if arr[i][j] == 2:
            Q.append((i, j))



make_wall(0)
print(max_val)