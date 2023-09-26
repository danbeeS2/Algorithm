# 15655. N과 M (6)
# 방법 1
def dfs(n, s, lst):
    if n == M:
        print(*lst)
        return
    for i in range(s, N):
        dfs(n+1, i+1, lst+[arr[i]])


N, M = map(int, input().split())
arr = sorted(list(map(int, input().split())))

dfs(0, 0, [])

# 방법 2
# def dfs(n, s, lst):
#     if n == M:
#         print(*lst)
#         return
#     for i in range(s, N):
#         if visited[i] == 0:
#             visited[i] = 1
#             dfs(n+1, i+1, lst+[arr[i]])
#             visited[i] = 0
#
#
# N, M = map(int, input().split())
# arr = sorted(list(map(int, input().split())))
# visited = [0] * N
# dfs(0, 0, [])