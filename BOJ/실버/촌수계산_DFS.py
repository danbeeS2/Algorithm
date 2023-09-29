# 2644. 촌수계산 - DFS
def dfs(v, cnt):
    global result
    visited[v] = 1  # 방문체크

    if v == e:
        result = cnt
        return

    for w in range(1, N + 1):
        if adj[v][w] == 1 and visited[w] == 0:  # 인접하고 미방문한 곳이면
            dfs(w, cnt + 1)  # dfs 재귀 호출


# 입력
N = int(input())
s, e = map(int, input().split())
M = int(input())
tmp = [list(map(int, input().split())) for _ in range(M)]

# 인접 행렬
adj = [[0] * (N + 1) for _ in range(N + 1)]
for i in range(M):
    a, b = tmp[i]
    adj[a][b] = adj[b][a] = 1

# 방문 리스트
visited = [0] * (N + 1)

result = -1

dfs(s, 0)
print(result)
