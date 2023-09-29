# 1697. 숨바꼭질 - DFS
from collections import deque


def bfs(start, target):
    Q = deque([start])

    while Q:
        x = Q.popleft()
        if x == target:
            return visited[x]

        for nx in [x + 1, x - 1, x * 2]:
            if 0 <= nx <= 100_000 and not visited[nx]:
                visited[nx] = visited[x] + 1
                Q.append(nx)


N, K = map(int, input().split())
visited = [0] * 100_001

res = bfs(N, K)
print(res)
