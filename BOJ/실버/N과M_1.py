# 15649. N과 M (1)
# 방법 1
def dfs(n):
    # 종료 조건
    if n == M:  # M개의 수열을 완성
        print(*P)
        return
    # 하부 단계(함수) 호출
    for i in range(1, N+1):
        if visited[i] == 0:  # 선택하지 않은 숫자의 경우 추가
            visited[i] = 1
            P[n] = i
            dfs(n + 1)
            visited[i] = 0


N, M = map(int, input().split())
visited = [0] * (N+1)  # 중복확인을 위한 visited 리스트
P = [0] * M  # 수열을 저장할 리스트
dfs(0)


# 방법 2
# def dfs(n, arr):
#     # 종료 조건
#     if n == M:  # M개의 수열을 완성
#         result.append(arr)
#         return
#     # 하부 단계(함수) 호출
#     for i in range(1, N+1):
#         if visited[i] == 0:  # 선택하지 않은 숫자의 경우 추가
#             visited[i] = 1
#             dfs(n + 1, arr + [i])
#             visited[i] = 0
#
#
# N, M = map(int, input().split())
# result = []            # 정답 리스트를 저장할 리스트
# visited = [0] * (N+1)  # 중복확인을 위한 visited 리스트
#
# dfs(0, [])
# for res in result:
#     print(*res)