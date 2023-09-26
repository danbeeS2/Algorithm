# 15654. N과 M (5)
def dfs(n, lst):
    if n == M:
        result.append(lst)
        return
    for i in range(N):
        if visited[i] == 0:
            visited[i] = 1
            dfs(n + 1, lst + [arr[i]])
            visited[i] = 0


N, M = map(int, input().split())
arr = list(map(int, input().split()))

visited = [0] * N
result = []
dfs(0, [])

result.sort()
for res in result:
    print(*res)
