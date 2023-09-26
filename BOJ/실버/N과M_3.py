# 15651. N과 M (3)
# 방법 1
def dfs(n, lst):
    if n == M:
        print(*lst)
        return
    for i in range(1, N+1):
        dfs(n+1, lst+[i])

N, M = map(int, input().split())
dfs(0, [])

# 방법 2
# def dfs(n, lst):
#     if n == M:
#         result.append(lst)
#         return
#     for i in range(1, N+1):
#         dfs(n+1, lst+[i])
# 
# 
# N, M = map(int, input().split())
# result = []
# dfs(0, [])
# for res in result:
#     print(*res)