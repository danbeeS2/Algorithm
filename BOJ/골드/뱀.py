from collections import deque
def solve(i, j):
    global d
    sec = 0   # 경과 시간
    snake = deque([(i, j)])   # 뱀의 위치를 담을 리스트 : 초기 뱀 위치, 방향 추가 (0초)

    while snake:
        ci, cj = snake[0]       # 현재 뱀의 머리 좌표와 방향
        arr[ci][cj] = True         # 뱀 위치 저장

        # 방향 전환
        if order[sec] == 'D':
            d = (d + 1) % 4

        elif order[sec] == 'L':
            d = (d - 1) % 4

        ni = ci + di[d]            # 새 좌표 갱신
        nj = cj + dj[d]
        sec += 1                   # 1초 경과

        if 0 <= ni < N and 0 <= nj < N and arr[ni][nj] != True:
            if arr[ni][nj] == False:               # 갈 수 있는 곳이면
                arr[ni][nj] = True                 # 뱀 위치 저장
                snake.appendleft((ni, nj))      # 새 머리 넣기
                rare_i, rare_j = snake.pop()    # 꼬리 빼기
                arr[rare_i][rare_j] = False

            if arr[ni][nj] == 'apple':            # 사과면
                arr[ni][nj] = True                # 뱀 위치 저장
                snake.appendleft((ni, nj))     # 새 머리 넣기

        # if not(0 <= ni < N) or not(0 <= nj < N) or arr[ni][nj] == True:
        # 이러면 위에서 바꾼 arr[ni][nj] = True 때문에 arr[ni][nj] == True 이 조건에 걸려서 함수 종료됨
        # 이렇게 쓰려면 elif로 쓰기
        else:
            return sec

        # print(sec, order[sec])
        # for row in arr:
        #     print(*row)
        # print()


import sys
sys.stdin = open('input.txt')

N = int(input())  # arr 크기
arr = [[False] * N for _ in range(N)]  # 초기 배열 False로 초기화

K = int(input())  # 사과 개수
for _ in range(K):
    r, c = map(int, input().split())
    arr[r-1][c-1] = 'apple'

L = int(input())  # 방향 전환 횟수
order = [0] * 10001

for _ in range(L):
    X, C = input().split()   # X초, C: 방향(L: 왼쪽 D: 오른쪽)
    order[int(X)] = C

di = [0, 1, 0, -1]
dj = [1, 0, -1, 0]
# # direction = [(0, 1), (1, 0), (0, -1), (-1, 0)]
# # 왼쪽(L) : direction[현재 방향 인덱스 -1]
# # 오른쪽(D) : direction[현재 방향 인덱스 +1]
#
# sec = 0  # 경과 시간
d = 0  # 초기 뱀 방향
print(solve(0,0,))
# print(arr)

