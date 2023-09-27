# 15664. N과 M (10)
def dfs(n, s, lst):
    if n == M:
        print(*lst)
        return
    prev = 0
    for i in range(s, N):
        if visited[i] == 0 and prev != arr[i]:
            prev = arr[i]
            visited[i] = 1
            dfs(n + 1, i + 1, lst + [arr[i]])
            visited[i] = 0


N, M = map(int, input().split())
arr = sorted(list(map(int, input().split())))
visited = [0] * N

dfs(0, 0, [])
