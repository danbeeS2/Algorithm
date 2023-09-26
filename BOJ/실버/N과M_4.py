# 15652. N과 M (4)
def dfs(n, start, lst):  # n: 선택한 숫자 개수, start: 시작할 숫자
    if n == M:  # M개의 숫자 선택(종료조건)
        print(*lst)
        return
    for i in range(start, N + 1):  # 비내림차순
        dfs(n + 1, i, lst + [i])


N, M = map(int, input().split())
dfs(0, 1, [])
