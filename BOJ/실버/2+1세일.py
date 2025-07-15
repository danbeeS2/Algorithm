import sys; sys.stdin = open('input.txt')
N = int(input())
arr = sorted(int(input()) for _ in range(N))[::-1]  # 내림차순 정렬
res = sum(arr)

for i in range(2, N, 3):
    res -= arr[i]

print(res)