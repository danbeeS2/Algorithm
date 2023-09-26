# 15650. N과 M (2)
def dfs(n, s, lst):  # n: 선택 숫자의 개수, s: 시작 인덱스
    if n == M:
        print(*lst)
        return
    for i in range(s, N+1):
        dfs(n+1, i+1, lst+[i])


N, M = map(int, input().split())
dfs(0, 1, [])

# 방법 2
# def dfs(n, s):  # n: 선택 숫자의 개수, s: 시작 인덱스
#     if n == M:
#         print(*P)
#         return
#     for i in range(s, N+1):
#         P[n] = i
#         dfs(n+1, i+1)
#
# N, M = map(int, input().split())
# P = [0] * M
# dfs(0, 1)


# 방법 3
# def dfs(n, lst):
#     if n > N:
#         if len(lst) == M:
#             print(*lst)
#         return
#     dfs(n+1, lst+[n])  # 포함
#     dfs(n+1, lst)      # 미포함
#
#
# N, M = map(int, input().split())
# dfs(1, [])