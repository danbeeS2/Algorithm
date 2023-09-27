# 15666. N과 M (12)
def dfs(n, start, lst):
    if n == M:
        print(*lst)
        return

    prev = 0
    for i in range(start, N):
        if prev != arr[i]:
            prev = arr[i]
            dfs(n + 1, i, lst + [arr[i]])


N, M = map(int, input().split())
arr = sorted(list(map(int, input().split())))

dfs(0, 0, [])
