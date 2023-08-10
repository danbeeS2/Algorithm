# 1219. [S/W 문제해결 기본] 4일차 - 길찾기
def dfs(v):
    visited[v] = 1  # 방문 체크

    for w in range(1, 101):
        if adj[v][w] == 1 and visited[w] == 0:
            dfs(w)


T = 10
S = 0
G = 99
for tc in range(1, T + 1):
    no, E = map(int, input().split())
    tmp = list(map(int, input().split()))
    adj = [[0] * (101) for _ in range(101)]  # 인접행렬 초기화
    visited = [0] * (101)  # 방문 기록

    # 인접행렬 값 저장하기
    for i in range(E):
        s, e = tmp[i * 2], tmp[i * 2 + 1]
        adj[s][e] = 1  # 유향 그래프

    dfs(S)

    # S와 G가 서로 연결 되어 있는지 확인
    if visited[S] == 1 and visited[G] == 1:
        print(f"#{tc} 1")
    else:
        print(f"#{tc} 0")
