# 7569. 토마토 - BFS
from collections import deque


def bfs():
    Q = deque()

    # 초기 데이터 삽입
    green_tomato = 0
    for h in range(H):
        for i in range(N):
            for j in range(M):
                if arr[h][i][j] == 1:  # 익은 토마토
                    visited[h][i][j] = 1
                    Q.append((h, i, j))
                elif arr[h][i][j] == 0:  # 안 익은 토마토
                    green_tomato += 1

    while Q:
        ch, ci, cj = Q.popleft()

        for dh, di, dj in direction:  # 6방향 탐색
            nh, ni, nj = ch + dh, ci + di, cj + dj
            # 범위 내 + 안 익은 토마토 + 미방문
            if (
                (0 <= nh < H and 0 <= ni < N and 0 <= nj < M)
                and arr[nh][ni][nj] == 0
                and not visited[nh][ni][nj]
            ):
                visited[nh][ni][nj] = visited[ch][ci][cj] + 1
                Q.append((nh, ni, nj))
                green_tomato -= 1  # 안 익은 토마토 1개 익음

    if green_tomato:  # 안 익은 토마토가 남아 있으면
        return -1  # -1 리턴
    else:  # 토마토가 다 익었으면
        return visited[ch][ci][cj] - 1  # 마지막으로 방문한 곳 -1


M, N, H = map(int, input().split())  # M:가로 칸 수, N:세로 칸 수, H:상자의 수
arr = [[list(map(int, input().split())) for _ in range(N)] for _ in range(H)]  # 3차원
visited = [[[0] * M for _ in range(N)] for _ in range(H)]
direction = (
    (0, -1, 0),
    (0, 1, 0),
    (0, 0, -1),
    (0, 0, 1),
    (1, 0, 0),
    (-1, 0, 0),
)  # 6방향: 상/하/좌/우/위/아래

print(bfs())
