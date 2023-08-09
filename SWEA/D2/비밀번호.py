# 1234. [S/W 문제해결 기본] 10일차 - 비밀번호
T = 10
for tc in range(1, T + 1):
    N, password = input().split()
    N = int(N)
    password = list(password)
    stack = []

    for p in password:
        if len(stack) == 0 or stack[-1] != p:
            stack.append(p)
        else:
            stack.pop()

    print(f'#{tc} {"".join(stack)}')


