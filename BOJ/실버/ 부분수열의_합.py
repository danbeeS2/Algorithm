# 1182. 부분수열의 합
def dfs(n, k, sum_v, cnt):  # n:원소의 개수, k: 재귀의 깊이, sum_v: 합, cnt: 사용 횟수
    global res
    # 종료 조건
    if k == n:
        if S == sum_v and cnt > 0:
            res += 1
        return

    # 하부 단계(함수) 호출
    dfs(n, k + 1, sum_v + arr[k], cnt + 1)  # 포함
    dfs(n, k + 1, sum_v, cnt)  # 미포함


N, S = map(int, input().split())
arr = list(map(int, input().split()))
res = 0
dfs(N, 0, 0, 0)
print(res)
