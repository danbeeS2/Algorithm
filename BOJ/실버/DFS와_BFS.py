# 1260. DFS와 BFS
from collections import deque


def dfs(v):
    dfs_visited[v] = True  # 시작번호 방문체크
    dfs_result.append(v)
    for w in range(1, V + 1):  # 작은 번호부터 탐색
        if w in graph[v] and not dfs_visited[w]:  # 인접한 노드이고 방문한 적 없으면
            dfs(w)


def bfs(v):
    Q = deque([v])  # 시작번호 인큐
    bfs_visited[v] = True  # 방문체크

    while Q:
        v = Q.popleft()  # 디큐
        bfs_result.append(v)
        for w in range(1, V + 1):
            if w in graph[v] and not bfs_visited[w]:
                bfs_visited[w] = True  # 방문체크
                Q.append(w)


# 입력
V, E, start = map(int, input().split())
tmp = [list(map(int, input().split())) for _ in range(E)]

# 인접 리스트 만들기
graph = [[] for _ in range(V + 1)]
for i in range(E):
    s, e = tmp[i][0], tmp[i][1]
    graph[s].append(e)
    graph[e].append(s)

dfs_visited = [False] * (V + 1)
bfs_visited = [False] * (V + 1)

dfs_result = []
bfs_result = []

# DFS 호출
dfs(start)
print(*dfs_result)

# BFS 호출
bfs(start)
print(*bfs_result)
