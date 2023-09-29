# 2178. 미로 탐색
from collections import deque


def bfs(i, j):
    Q = deque([(i, j)])
    visited[i][j] = 1

    while Q:
        i, j = Q.popleft()
        for di, dj in direction:
            ni = i + di
            nj = j + dj
            # if (0 <= ni < N and 0 <= nj < M) and arr[ni][nj] == 1 and not visited[ni][nj]:
            if ni <= -1 or ni >= N or nj <= -1 or nj >= M:
                continue
            if arr[ni][nj] != 1 or visited[ni][nj]:
                continue

            visited[ni][nj] = visited[i][j] + 1
            Q.append((ni, nj))


# 입력
N, M = map(int, input().split())
arr = [list(map(int, input())) for _ in range(N)]

# 로직 => 최단거리는 bfs
direction = [(-1, 0), (0, 1), (1, 0), (0, -1)]
visited = [[0] * M for _ in range(N)]
bfs(0, 0)

# 출력
print(visited[N - 1][M - 1])
