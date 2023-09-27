# 15665. N과 M (11)
def dfs(n, lst):
    if n == M:
        print(*lst)
        return

    prev = 0
    for i in range(N):
        if prev != arr[i]:
            prev = arr[i]
            dfs(n + 1, lst + [arr[i]])


N, M = map(int, input().split())
arr = sorted(list(map(int, input().split())))

dfs(0, [])
