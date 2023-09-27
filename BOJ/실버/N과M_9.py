# 15663. N과 M (9)
def dfs(n, lst):
    if n == M:
        print(*lst)
        return
    prev = 0
    for i in range(N):
        if visited[i] == 0 and prev != arr[i]:
            prev = arr[i]
            visited[i] = 1
            dfs(n + 1, lst + [arr[i]])
            visited[i] = 0


N, M = map(int, input().split())
arr = sorted(list(map(int, input().split())))
visited = [0] * N

dfs(0, [])
