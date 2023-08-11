# 1859. 백만 장자 프로젝트
import sys

sys.stdin = open("백만장자_input.txt")

T = int(input())
for tc in range(1, T + 1):
    N = int(input())
    price = list(map(int, input().split()))

    res = 0
    i_max_v = price[N - 1]

    # 원료를 사는 날은 독립적이기 때문에 무엇을 먼저 사든 상관x
    # 시간복잡도를 줄이기 위해서 뒤에서 부터 계산
    for i in range(N - 2, -1, -1):  # N-1(마지막 날)은 구매해도 팔 수 없으므로 그 전날까지 구매
        if i_max_v > price[i]:
            res += i_max_v - price[i]  # 이익

        # i날부터 N-2일까지의 최대값 갱신
        if i_max_v < price[i]:
            i_max_v = price[i]

    print(f"#{tc} {res}")
