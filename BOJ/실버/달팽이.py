#
#
# N = int(input())                                 # N : 홀수인 자연수
# target = int(input())
#
# num = N ** 2                                     # num: (0, 0)에 시작할 첫 숫자
# arr = [[0] * N for _ in range(N)]                # 달팽이 0으로 초기화
# res = []                                         # target의 인덱스를 저장할 리스트
#
# direction = [(1, 0), (0, 1), (-1, 0), (0, -1)]   # 달팽이 숫자가 채워지는 방향 : 아래쪽, 오른쪽, 위쪽, 왼쪽
#
# nx, ny = 0, 0   # 현재 좌표
# idx = 0         # 현재 방향 인덱스
# for i in range(num, 0, -1):
#     if 0 <= nx < N and 0 <= ny < N and arr[nx][ny] == 0:    # 유효한 범위이고 미방문한 곳이면 값 채우기
#         arr[nx][ny] = i
#
#         # target 인덱스 찾기
#         if i == target:
#             res.extend([nx+1, ny+1])
#
#         # 새로운 좌표
#         nx += direction[idx][0]
#         ny += direction[idx][1]
#
#     if not (0 <= nx < N) or not (0 <= ny < N) or arr[nx][ny] != 0:  # 유효하지 않은 범위이거나 값이 채워져 있으면
#         nx -= direction[idx][0]                                     # 이전 값 초기화
#         ny -= direction[idx][1]
#
#         idx = (idx + 1) % 4                                         # 방향 전환
#
#         nx += direction[idx][0]                                     # 새로운 좌표
#         ny += direction[idx][1]
#
# for row in arr:
#     print(*row)
#
# print(*res)


#------------------------------------------------------------------------------------
# import sys
# sys.stdin = open('input.txt')
# # 입력
# N = int(input())                                 # N : 홀수인 자연수
# target = int(input())
#
# # 필요한 변수
# num = N ** 2                                     # num: (0, 0)에 시작할 첫 숫자
# arr = [[0] * N for _ in range(N)]                # 달팽이 0으로 초기화
# res = []                                         # target의 인덱스를 저장할 리스트
#
# # 달팽이 숫자가 채워지는 방향 : 아래쪽, 오른쪽, 위쪽, 왼쪽
# dx = [1, 0, -1, 0]
# dy = [0, 1, 0, -1]
#
# # 로직
# x, y = 0, 0   # 현재 좌표
# idx = 0         # 현재 방향 인덱스
# for i in range(num, 0, -1):
#     print(i)
#
#     arr[x][y] = i
#     while True:
#         nx = x + dx[idx]
#         ny = y + dy[idx]
#         print(nx, ny)
#         if 0 <= nx < N and 0 <= ny < N and arr[nx][ny] == 0:  # 유효한 범위 내 + 숫자가 채워지지 않았다면 while문 종료
#             # targrt숫자 인덱스 찾기
#             if i == target:
#                 res.extend([nx + 1, ny + 1])
#             x, y = nx, ny
#             break
#         else:  # 그게 아니면 방향 전환
#             idx = (idx + 1) % 4
#
#         # 방향이 바뀌지 않았을 때 모든 방향이 채워져 있으면 무한루프 방지를 위해 break
#         if idx == 0 and all(arr[i][j] != 0 for i in range(N) for j in range(N)):
#             break
#         # break
#
#     print(x, y)
#
# # 출력
# for row in arr:
#     print(*row)
#
# print(*res)


# -------------------------------------------------------------------
# 입력-----------------------------------------------------------
import sys
sys.stdin = open('input.txt')
N = int(input())  # N : 홀수인 자연수
target = int(input())

# 필요한 변수 ------------------------------------------------------
num = N ** 2  # num: (0, 0)에 시작할 첫 숫자
arr = [[0] * N for _ in range(N)]  # 달팽이 0으로 초기화
res = []  # target의 인덱스를 저장할 리스트

# 달팽이 숫자가 채워지는 방향 : 아래쪽, 오른쪽, 위쪽, 왼쪽
dx = [1, 0, -1, 0]
dy = [0, 1, 0, -1]

x, y = 0, 0  # 현재 좌표
idx = 0  # 현재 방향 인덱스

# 로직 --------------------------------------------------------------
for i in range(num, 0, -1):
    # 달챙이 숫자 입력
    arr[x][y] = i

    # target 인덱스 찾기
    if i == target:
        res.extend([x + 1, y + 1])

    # 새로운 좌표 nx, ny
    nx = x + dx[idx]
    ny = y + dy[idx]

    # 새로운 좌표 nx, ny가 범위 밖 또는 방문했던 곳이면
    if not (0 <= nx < N) or not (0 <= ny < N) or arr[nx][ny] != 0:
        # 방향 전환
        idx = (idx + 1) % 4

        # 방향 전환한 새로운 좌표
        nx = x + dx[idx]
        ny = y + dy[idx]

    x, y = nx, ny  # x, y 갱신
# 출력 -------------------------------------------------------------
for row in arr:
    print(*row)
print(*res)
