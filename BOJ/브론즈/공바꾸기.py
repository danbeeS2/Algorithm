# 10813. 공 바꾸기
import sys

sys.stdin = open("input.txt")

N, M = map(int, input().split())
arr = [str(i + 1) for i in range(N)]

for _ in range(M):
    idx_1, idx_2 = map(int, input().split())
    arr[idx_1 - 1], arr[idx_2 - 1] = arr[idx_2 - 1], arr[idx_1 - 1]

result = " ".join(arr)
print(result)
