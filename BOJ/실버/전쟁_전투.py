N, M = map(int, input().split())  # 가로, 세로
arr = [list(input()) for _ in range(M)]
visited = [[False] * N for _ in range(M)]
direction = [(1, 0), (0, 1), (-1, 0), (0, -1)]


def dfs(i, j, team):
    global score
    visited[i][j] = True

    for di, dj in direction:
        ni, nj = i + di, j + dj
        if 0 <= ni < M and 0 <= nj < N and arr[ni][nj] == team and not visited[ni][nj]:
            score += 1
            dfs(ni, nj, team)


my_score = 0
your_score = 0

for i in range(M):
    for j in range(N):
        if not visited[i][j]:
            score = 1
            dfs(i, j, arr[i][j])
            if arr[i][j] == 'W':
                my_score += score ** 2
            else:
                your_score += score ** 2

print(my_score, your_score)