# 11871. [파이썬 SW문제해결 기본 - Stack1] 반복문자 지우기
T = int(input())
for tc in range(1, T + 1):
    stack = []
    string = input()
    for s in string:
        if len(stack) == 0 or stack[-1] != s:
            stack.append(s)
        else:
            stack.pop()

    print(f"#{tc} {len(stack)}")
