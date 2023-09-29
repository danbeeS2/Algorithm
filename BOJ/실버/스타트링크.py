# 5014. 스타트링크
from collections import deque


def bfs(start, goal, maximum):
    Q = deque([start])
    visited[start] = 1

    while Q:
        x = Q.popleft()
        if x == goal:
            return visited[x] - 1
        for nx in [x + U, x - D]:
            if 0 < nx <= maximum and not visited[nx]:
                visited[nx] = visited[x] + 1
                Q.append(nx)
    return "use the stairs"


F, S, G, U, D = map(int, input().split())
visited = [0] * (F + 1)
print(bfs(S, G, F))
