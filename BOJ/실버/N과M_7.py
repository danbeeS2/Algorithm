# 15656. N과 M (7)
def dfs(n, lst):
    if n == M:
        print(*lst)
        return

    for i in range(N):
        dfs(n + 1, lst + [arr[i]])


N, M = map(int, input().split())
arr = sorted(list(map(int, input().split())))

dfs(0, [])
