# 10810. 공 넣기
import sys

sys.stdin = open("input.txt")

N, M = map(int, input().split())
arr = ["0" for _ in range(N)]

for _ in range(M):
    start, end, ball = map(int, input().split())
    for i in range(start, end + 1):
        arr[i - 1] = str(ball)

result = " ".join(arr)
print(result)
