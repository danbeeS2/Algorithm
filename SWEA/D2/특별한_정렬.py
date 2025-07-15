# 11825. [파이썬 SW문제해결 기본 - LIST2] 특별한 정렬
def selectionSort(a, n):  # 파괴적 메소드 (sort와 같이 원본을 바꿈)
    for i in range(n - 1):
        idx = i
        if i % 2:  # 인덱스가 홀수일 때
            for j in range(i + 1, n):
                if a[idx] > a[j]:
                    idx = j
        else:  # 인덱스가 짝수일 때
            for j in range(i + 1, n):
                if a[idx] < a[j]:
                    idx = j
        a[i], a[idx] = a[idx], a[i]


T = int(input())
for tc in range(1, T + 1):
    N = int(input())
    arr = list(map(int, input().split()))
    selectionSort(arr, N)

    result = []
    for i in range(10):
        result.append(arr[i])

    print(f"#{tc}", *result)
