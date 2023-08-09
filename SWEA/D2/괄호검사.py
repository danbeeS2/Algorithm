# SWEA 11870. [파이썬 SW 문제해결 기본 - Stack1] 괄호검사
T = int(input())
for tc in range(1, T + 1):
    string = list(input())
    stack = []
    for s in string:
        if s == "(" or s == "{":  # 스택에 열린 괄호 넣기
            stack.append(s)

        elif s == ")" or s == "}":  # 닫는 괄호 처리
            if len(stack) == 0:  # 스택이 비었는데 닫는 괄호가 나오는 경우
                stack = [s]  # 괄호검사 성공 시 스택이 비워지므로 실패 판단을 하기 위해 스택에 값을 넣어줌
                break
            elif (s == "}" and stack[-1] != "{") or (
                s == ")" and stack[-1] != "("
            ):  # stack에 저장한 괄호와 짝이 맞지 않는 경우
                break
            else:
                stack.pop()  # stack에 저장한 괄호와 짝이 맞는 괄호가 오면 pop

    if len(stack) == 0 : # 반복문 완료 후에 스택이 비어 있으면 짝이 다 맞는 괄호
        res = 1
    else :      # 스택이 비어 있지 않으면 0 출력
        res = 0
    print(f'#{tc} {res}')
    