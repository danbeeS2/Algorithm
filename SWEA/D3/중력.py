# 11646. 중력
T = int(input())
for tc in range(1, T + 1):
    n = int(input())
    arr = list(map(int, input().split()))

    result = []
    for i in range(n):
        hurdle = 0
        distance = 0
        for j in range(i + 1, n):
            if arr[i] <= arr[j]:
                hurdle += 1
        distance = n - (i + 1)
        result.append(distance - hurdle)

    max_val = 0
    for res in result:
        if max_val < res:
            max_val = res
    print(f"#{tc} {max_val}")
