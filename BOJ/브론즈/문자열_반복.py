# # 2675. 문자열 반복
import sys

sys.stdin = open("input.txt")

for t in range(int(input())):
    num, string = input().split()
    result = []
    for s in list(string):
        result.append(s * int(num))
    print("".join(result))
