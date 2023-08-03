# 11633. [파이썬 SW문제해결 기본 - LIST1] 구간합
T = int(input())

for tc in range(1, T+1):
    N, M = map(int, input().split())
    arr = list(map(int, input().split()))

    max_val = 0
    min_val = 987654321

    for i in range(N - M + 1):
        sum_num = 0
        for j in range(M):
            sum_num += arr[i+j]

        if max_val < sum_num:
            max_val = sum_num
        if min_val > sum_num:
            min_val = sum_num

    print(f'#{tc} {max_val - min_val}')
