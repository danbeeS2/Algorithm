# 2606. 바이러스
def dfs(v):
    global cnt
    visited[v] = True

    for w in graph[v]:
        if not visited[w]:
            dfs(w)
            cnt += 1


# 입력
V = int(input())
E = int(input())
tmp = [list(map(int, input().split())) for _ in range(E)]

# 인접 리스트 만들기
graph = [[] for _ in range(V + 1)]
for i in range(E):
    s, e = tmp[i]
    graph[s].append(e)
    graph[e].append(s)

visited = [False] * (V + 1)
cnt = 0

# dfs 호출
dfs(1)

# 출력
print(cnt)
