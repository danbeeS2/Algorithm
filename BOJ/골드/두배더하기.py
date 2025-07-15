import sys
sys.stdin=open('input.txt')

N = int(input())
B = list(map(int, input().split()))

cnt = 0
while sum(B) != 0:
    isOdd = False

    for i in range(N):
        if B[i] % 2 == 1:  # 홀수
            isOdd = True
            B[i] -= 1
            cnt += 1

    if not isOdd:
        cnt += 1
        for i in range(N):
             B[i] //= 2

print(cnt)