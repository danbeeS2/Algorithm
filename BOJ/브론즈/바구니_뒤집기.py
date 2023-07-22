# 10811. 바구니 뒤집기
import sys
sys.stdin = open("input.txt")

N, M = map(int, input().split())
arr = [str(i + 1) for i in range(N)]

for _ in range(M):
    start, end = map(int, input().split())
    arr[start - 1 : end] = list(reversed(arr[start - 1 : end]))
    
    # 방법 2
    # arr[start - 1 : end] = arr[start - 1 : end][::-1]

result = " ".join(arr)
print(result)
