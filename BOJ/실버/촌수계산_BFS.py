# 2644. 촌수계산 - BFS
from collections import deque


def bfs(start, end):
    Q = deque([start])
    visited[start] = 1

    while Q:
        v = Q.popleft()

        if v == end:
            return

        for w in graph[v]:
            if not visited[w]:
                visited[w] = visited[v] + 1
                Q.append(w)


# 입력
N = int(input())
S, E = map(int, input().split())
M = int(input())
tmp = [list(map(int, input().split())) for _ in range(M)]

# 인접 리스트
graph = [[] for _ in range(N + 1)]
for i in range(M):
    s, e = tmp[i]
    graph[s].append(e)
    graph[e].append(s)

visited = [0] * (N + 1)
bfs(S, E)

# 출력
print(visited[E] - 1)
