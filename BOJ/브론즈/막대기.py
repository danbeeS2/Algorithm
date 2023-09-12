# 17689. 막대기
import sys

N = int(sys.stdin.readline())
arr = [int(sys.stdin.readline()) for _ in range(N)]
arr.reverse()
cnt = 0
max_h = 0
for i in range(N):
    if arr[i] > max_h:
        cnt += 1
        max_h = arr[i]
print(cnt)
