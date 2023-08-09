# 1234. [S/W 문제해결 기본] 10일차 - 비밀번호
def push(item):
    global top
    if top > SIZE - 1:  # top가 스택의 크기를 넘으면
        return  # 함수 종료
    else:  # 스택의 범위 안이면
        top += 1  # top 증가시키고 넣기
        stack[top] = item  # top에 item 넣기


def pop():  # 스택은 항상 비어있는지 확인 => 비어있는데 꺼내면 안 됨
    global top
    if top == -1:  # 스택이 비어 있으면
        return  # 함수 종료
    else:  # 스택이 비어있지 않으면
        result = stack[top]  # result에 top를 받아놓고
        top -= 1  # top를 비운 다음
        return result  # result 반환


T = 10
for tc in range(1, T + 1):
    N, password = input().split()
    SIZE = int(N)
    password = list(password)

    stack = [0] * SIZE
    top = -1  # top 초기화
    # cnt = len(password)  # pop를 해도 스택 안의 데이터가 실제로 지워지지 않으므로 남아있는 데이터만 출력하기 위해
    for p in password:
        if top == -1 or stack[top] != p:
            push(p)
        elif stack[top] == p:
            pop()
            # cnt -= 2

    # 비밀번호 출력
    res = ""
    while top > -1:
        res = pop() + res
    print(f'#{tc} {res}')

    # 비밀번호 출력 2
    # for i in range(cnt):
    #     res += stack[i]
    # print(f'#{tc} {res}')