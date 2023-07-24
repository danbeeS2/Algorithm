# 1009. 분산처리
import sys

sys.stdin = open("input.txt")

# for _ in range(int(input())):
#     a, b = map(int, input().split())
#     result = 1

#     if b % 4 == 0:
#         b = 4
#     else:
#         b = b % 4

#     for i in range(1, b + 1):
#         result *= a % 10
#         result %= 10

#         if result == 0:
#             result = 10

#     print(result)

# print(0 % 4)

for _ in range(int(input())):
    a, b = map(int, input().split())

    b %= 4
    if b % 4 == 0:
        b = 4

    data = a**b
    if data % 10 == 0:
        print(10)
    else:
        print(data % 10)
