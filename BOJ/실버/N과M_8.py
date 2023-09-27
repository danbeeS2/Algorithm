# 15657. N과 M (8)
def dfs(n, start, lst):
    if n == M:
        print(*lst)
        return
    for i in range(start, N):
        dfs(n + 1, i, lst + [arr[i]])


N, M = map(int, input().split())
arr = sorted(list(map(int, input().split())))
print(arr)

dfs(0, 0, [])
