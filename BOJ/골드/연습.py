from collections import deque

def bfs():
    Q = deque()
    Q.append((now_x, now_y))  # 큐에 현재 아기상어 위치 추가
    visited = [[-1] * N for _ in range(N)]   # 방문 리스트 초기화
    visited[now_x][now_y] = 0               # 방문 체크

    while Q:
        i, j = Q.popleft()
        for di, dj in direction:
            ni, nj = i + di, j + dj
            if 0 <= ni < N and 0 <= nj < N:
                if visited[ni][nj] == -1 and arr[ni][nj] <= shark_size:       # 미방문 + 나갈 수 있으면
                    visited[ni][nj] = visited[i][j] + 1                       # 방문 체크 (최단경로 계산)
                    Q.append((ni, nj))                                        # 큐에 위치 추가

    print(visited)
    return visited   # while문이 종료되면 최단경로가 계산된 방문 리스트 반환

# 먹을 물고기 찾기
def find_fish(visited):
    x, y = 0, 0
    min_distance = INF
    for i in range(N):
        for j in range(N):
            if visited[i][j] != -1 and 1 <= arr[i][j] < shark_size:    # bfs로 방문했고 먹을 수 있는 물고기이면
                if min_distance > visited[i][j]:                 # 최단 경로인지 확인 후 물고기 좌표 저장
                    min_distance = visited[i][j]
                    x, y = i, j
    if min_distance == INF:
        return False
    else:
        return x, y, min_distance


max_time = 0   # 엄마 상어에게 도움을 청하지 않고 물고기를 사냥할 수 있는 최대 시간
eat = 0        # 잡아먹은 물고기 수


import sys
sys.stdin = open('input.txt')

# 입력 받기
N = int(input())
arr = [list(map(int, input().split())) for _ in range(N)]   # 0: 빈 칸, 9: 아기상어, 나머지: 물고기 크기

INF = 1e9
direction = [(-1, 0), (0, 1), (1, 0), (0, -1)]
shark_size = 2   # 초기 아기상어 크기

# 아기상어 초기 위치 찾기 (now_x, now_y)
for i in range(N):
    for j in range(N):
        if arr[i][j] == 9:
            now_x, now_y = i, j
            arr[i][j] = 0


while True:
    res = find_fish(bfs())

    if not res:
        print(max_time)
        break
    else:
        now_x, now_y = res[0], res[1]   # 상어 위치 갱신
        arr[now_x][now_y] = 0           # 물고기 사냥 후에는 빈칸이 됨
        max_time += res[2]              # 최단경로(시간) 합산
        eat += 1

    if eat == shark_size:
        shark_size += 1
        eat = 0