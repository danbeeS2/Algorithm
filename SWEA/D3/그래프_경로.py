# 11872. [파이썬 SW문제해결 기본 - Stack1] 그래프 경로
def dfs(v):
    visited[v] = 1  # 방문하면 1로 변경
    for w in range(1, V + 1):
        if adj[v][w] == 1 and visited[w] == 0:  # 경로가 있고 방문 안한 정점(w)이 있으면
            dfs(w)  # 재귀 호출
    return None


T = int(input())
for tc in range(1, T + 1):
    V, E = map(int, input().split())
    visited = [0] * (V + 1)  # 방문 체크

    # 인접행렬
    adj = [[0] * (V + 1) for _ in range(V + 1)]
    for i in range(E):
        s, e = map(int, input().split())
        adj[s][e] = 1  # 유향 그래프 이므로 한쪽만 1로 채움

    S, G = map(int, input().split())
    dfs(S)

    # S와 G가 서로 연결되었는지 확인
    if visited[S] == 1 and visited[G] == 1:
        print(f"#{tc} 1")
    else:
        print(f"#{tc} 0")
