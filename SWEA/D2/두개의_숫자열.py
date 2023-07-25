# 1959. 두 개의 숫자열
for t in range(int(input())):
    n, m = map(int,input().split())
    if n > m:
        big = n
        small = m
        a = list(map(int, input().split()))
        b = list(map(int, input().split()))
    else:
        big = m
        small = n
        b = list(map(int, input().split()))
        a = list(map(int, input().split()))

    result = 0
    for i in range(big - small + 1) :
        max_val = 0
        for j in range(small):
            max_val += a[i + j] * b[j]
        if max_val > result :
            result = max_val
    print(f"#{t+1} {result}")
