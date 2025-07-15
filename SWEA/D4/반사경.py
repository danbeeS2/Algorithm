# 11673. 반사경
T = int(input())
for tc in range(1, T + 1):
    N = int(input())
    arr = [list(map(int, input().split())) for _ in range(N)]

    d = [[0, 1], [1, 0], [0, -1], [-1, 0]]  # 방향
    i, j, idx = 0, 0, 0  # 초기 인덱스, 초기 방향
    cnt = 0

    while 0 <= i < N and 0 <= j < N:  # 유효한 인덱스인지 확인
        if arr[i][j] == 1:  # 거울1
            cnt += 1
            if idx == 0:
                idx = 3
            elif idx == 1:
                idx = 2
            elif idx == 2:
                idx = 1
            elif idx == 3:
                idx = 0

        elif arr[i][j] == 2:  # 거울2
            cnt += 1
            if idx == 0:
                idx = 1
            elif idx == 1:
                idx = 0
            elif idx == 2:
                idx = 3
            elif idx == 3:
                idx = 2

        i = i + d[idx][0]
        j = j + d[idx][1]

    print(f"#{tc} {cnt}")


## 재귀로 풀이
# def count_pass_mirror(arr, i, j, idx):   # i: 초기 인덱스, j: 초기 인덱스, idx: 초기 방향( ==> )
#     global cnt
#     d = [[0, 1], [1, 0], [0, -1], [-1, 0]]

#     if 0 <= i < N and 0 <= j < N:  # 유효한 인덱스인지 확인
#         if arr[i][j] == 0:   # 거울이 없으면 원래 방향대로 전진
#             ni = i + d[idx][0]
#             nj = j + d[idx][1]
#             count_pass_mirror(arr, ni, nj, idx)  # 재귀호출
#         else:
#             if arr[i][j] == 1:  # 거울1
#                 cnt += 1
#                 if idx == 0: idx = 3
#                 elif idx == 1: idx = 2
#                 elif idx == 2: idx = 1
#                 elif idx == 3: idx = 0

#             elif arr[i][j] == 2:  # 거울2
#                 cnt += 1
#                 if idx == 0: idx = 1
#                 elif idx == 1: idx = 0
#                 elif idx == 2: idx = 3
#                 elif idx == 3: idx = 2

#             ni = i + d[idx][0]
#             nj = j + d[idx][1]
#             count_pass_mirror(arr, ni, nj, idx)  # 재귀호출

#     return  # 인덱스가 범위를 넘어가면 종료


# T = int(input())
# for tc in range(1, T+1):
#     N = int(input())
#     arr = [list(map(int, input().split())) for _ in range(N)]

#     cnt = 0
#     count_pass_mirror(arr, 0, 0, 0)

#     print(f'#{tc} {cnt}')
