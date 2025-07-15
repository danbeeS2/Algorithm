import sys
sys.stdin=open('input.txt')

T = int(input())
for _ in range(T):
    N, M = map(int, input().split())      # N: 나라 수, M: 비행기 종류
    graph = [[] for _ in range(N+1)]
    visited = [0 for _ in range(N+1)]

    for _ in range(M):
        a, b = map(int, input().split())  # a와 b를 왕복하는 비행기가 있다는 것을 의미 (양방향)
        graph[a].append(b)
        graph[b].append(a)

    now = 1
    # visited[0] = 1
    visited[now] = 1
    # print(visited)
    cnt = 0
    while sum(visited) != N:
        # for _ in range(N):
        for next in graph[now]:

            if visited[next] == 0:
                visited[next] = 1
                cnt += 1
                now = next
                # print(visited)

                # continue




    print(cnt)