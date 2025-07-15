# 11785. [파이썬 SW문제해결 기본 - LIST1] min max
T = int(input())
for tc in range(1, T + 1):
    N = int(input())
    arr = list(map(int, input().split()))
    max_val = arr[0]
    min_val = arr[0]

    for i in range(1, N):
        if max_val < arr[i]:
            max_val = arr[i]
        if arr[i] < min_val:
            min_val = arr[i]

        result = max_val - min_val
    print(f"#{tc} {result}")
