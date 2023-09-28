# 최단거리는 BFS로 풀자!
# => DFS는 최단거리를 보장하지 못한다.
def bfs(i, j):
    Q = [(i, j)]
    visited[i][j] = 1

    while Q:
        i, j = Q.pop(0)
        for di, dj in direction:
            ni = i + di
            nj = j + dj
            if (
                (0 <= ni < N and 0 <= nj < M)
                and arr[ni][nj] != 0
                and visited[ni][nj] == 0
            ):
                visited[ni][nj] = visited[i][j] + 1
                Q.append((ni, nj))


direction = [(-1, 0), (0, 1), (1, 0), (0, -1)]
N, M = map(int, input().split())
arr = [list(map(int, input())) for _ in range(N)]  # 괴물이 없는 곳: 1, 괴물이 있는 곳: 0
visited = [[False] * M for _ in range(N)]
bfs(0, 0)
print(visited[N - 1][M - 1])

"""
3 3
110
010
011
"""
"""
5 6
101010
111111
000001
111111
111111
"""
