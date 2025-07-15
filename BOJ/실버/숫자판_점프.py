N = 5
arr = [list(map(int, input().split())) for _ in range(N)]
# visited = [[False] for _ in range(N)]

direction = [(1, 0), (0, 1), (-1, 0), (0, -1)]
res = set()


def dfs(i, j, cnt, lst):
    if cnt == 5:
        num = "".join(lst)
        res.add(num)
        return

    for di, dj in direction:
        ni, nj = i + di, j + dj
        if 0 <= ni < N and 0 <= nj < N:
            dfs(ni, nj, cnt+1, lst + [str(arr[ni][nj])])



for i in range(N):
    for j in range(N):
        dfs(i, j, 0, [str(arr[i][j])])

print(len(res))



