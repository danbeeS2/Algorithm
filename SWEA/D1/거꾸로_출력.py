# 1545. 거꾸로 출력해 보아요
n = int(input())
result = []

while n >= 0 :
    result.append(f"{n}")
    n -= 1

print(' '.join(result))