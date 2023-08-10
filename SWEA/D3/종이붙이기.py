# 11874. [파이썬 SW문제해결 기본 - Stack1] 종이붙이기
def paper(n):
    dp = [0] * (n+1)
    dp[0] = 1
    dp[1] = 1
    for i in range(2, n+1):
        dp[i] = dp[i-1] + (dp[i-2] * 2)
    return dp[n]


T = int(input())
for tc in range(1, T+1):
    N = int(input()) // 10
    print(f'#{tc}', paper(N))