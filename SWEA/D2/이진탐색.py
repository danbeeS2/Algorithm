# 11823. [파이썬 SW문제해결 기본 - LIST2] 이진탐색
def binary_search(n, key):
    start = 1
    end = n
    cnt = 0
    while start < end:
        cnt += 1
        mid = (start + end) // 2

        # 1. mid값 = key
        if mid == key:
            return cnt
        # 2. mid값 > key
        elif mid > key:
            end = mid
        # 3. mid값 < key
        else:
            start = mid

    return cnt


T = int(input())
for tc in range(1, T+1):
    page, A, B = map(int, input().split())
    a = binary_search(page, A)
    b = binary_search(page, B)
    result = 0
    if a < b :
        result = "A"
    elif a > b:
        result = "B"

    print(f'#{tc} {result}')