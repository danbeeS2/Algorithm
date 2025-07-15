# def solve(i, j):
#     global water
#     ni, nj = i, j+1
#
#     if 0 <= nj < W and world[ni][nj] == 0:    # 범위 내 + 빈 곳이면
#         if nj == W-1 and world[ni][nj] == 0:  # 마지막에 벽이 없으면
#             water = 0                         # 물이 빠짐 (초기화)
#         else:
#             water += 1                        # 물 누적
#             solve(ni, nj)                     # 재귀 호출
#
#     if 0 <= nj < W and world[ni][nj] != 0:    # 벽이 나오면 함수 종료
#         return
#
# # 입력 ---------------------------------------------------------------
# import sys
# sys.stdin = open('input.txt')
# H, W = map(int, input().split())  # H: 세로, W: 가로
# block = list(map(int, input().split()))
#
# # 필요한 변수 ----------------------------------------------------------
# world = [[0] * W for _ in range(H)]  # 뒤집힌 2차원 세계 0로 초기화
# res = 0
#
# # 뒤집힌 2차원 세계에 블록 세우기
# for i in range(W):
#     for j in range(block[i]):
#         world[j][i] = block[i]
#
# for i in range(H):
#     for j in range(W):
#         water = 0              # 물 초기화
#         if world[i][j] != 0:
#             solve(i, j)
#             res += water
#
# print(res)

def solve(i, j):
    global water
    ni, nj = i, j+1

    if 0 <= nj < W and world[ni][nj] == 0:        # 범위 내 + 빈 곳이면
        visited[ni][nj] = True                    # 방문 체크
        if nj == W-1 and world[ni][nj] == 0:      # 마지막에 벽이 없으면 (물이 고일 수 없음)
            water = 0                             # 물이 빠짐 (초기화)
        else:
            water += 1                            # 물 누적 (한 칸씩)
            solve(ni, nj)                         # 재귀 호출

    if 0 <= nj < W and world[ni][nj] != 0:        # 벽이 나오면 함수 종료
        return

# 입력 ---------------------------------------------------------------
import sys
sys.stdin = open('input.txt')
H, W = map(int, input().split())                  # H: 세로, W: 가로
block = list(map(int, input().split()))

# 필요한 변수 ----------------------------------------------------------
world = [[0] * W for _ in range(H)]               # 뒤집힌 2차원 세계 0로 초기화
visited = [[False] * W for _ in range(H)]
res = 0

# 뒤집힌 2차원 세계에 블록 세우기
for i in range(W):
    for j in range(block[i]):
        world[j][i] = block[i]

for i in range(H):
    for j in range(W):
        water = 0                                        # 물 초기화
        if world[i][j] != 0 and not visited[i][j]:       # 블록이 있고 미방문(재귀를 돌거라서 중복 제거)
            visited[i][j] = True                         # 방문 체크
            solve(i, j)
            res += water

print(res)
