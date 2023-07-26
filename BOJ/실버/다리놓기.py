# 1010. 다리 놓기
def factorial(n):
    if n == 1 or n == 0:
        return 1
    while n:
        return n * factorial(n - 1)


for t in range(int(input())):
    N, M = map(int, input().split())

    result = factorial(M) // (factorial(M - N) * factorial(N))
    print(result)
