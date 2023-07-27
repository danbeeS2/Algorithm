# 1037. 약수
import sys

sys.stdin = open("input.txt")

n = int(input())
divisor = list(map(int, input().split()))

result = max(divisor) * min(divisor)
# divisor.sort()
# result = divisor[0] * divisor[n - 1]

print(result)
