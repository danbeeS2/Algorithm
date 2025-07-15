# 1209. [S/W 문제해결 기본] 2일차 - Sum
T = 10
for tc in range(1, T + 1):
    tc_num = int(input())
    arr = [list(map(int, input().split())) for _ in range(100)]

    max_v = 0
    # 행의 합 & 열의 합
    for i in range(100):
        sum_row = 0
        sum_col = 0
        for j in range(100):
            sum_row += arr[i][j]
            sum_col += arr[j][i]
        if max_v < sum_row:
            max_v = sum_row
        if max_v < sum_col:
            max_v = sum_col

    # 대각선의 합
    first_cross = 0
    second_cross = 0
    for i in range(100):
        first_cross += arr[i][i]
        second_cross += arr[i][99 - i]

    if max_v < first_cross:
        max_v = first_cross
    if max_v < second_cross:
        max_v = second_cross

    print(f"#{tc} {max_v}")


# T = 10
# for tc in range(1, T+1):
#     tc_num = int(input())
#     arr = [list(map(int, input().split())) for _ in range(100)]

#     max_v = 0
#     # 행의 합
#     for i in range(100):
#         sum_row = 0
#         for j in range(100):
#             sum_row += arr[i][j]
#         if max_v < sum_row :
#             max_v = sum_row

#     # 열의 합
#     for j in range(100):
#         sum_col = 0
#         for i in range(100):
#             sum_col += arr[i][j]
#         if max_v < sum_col:
#             max_v = sum_col


#     # 대각선의 합
#     for i in range(100):
#         j = 99
#         first_cross = 0
#         second_cross = 0

#         first_cross += arr[i][i]
#         second_cross += arr[j][i]

#         if max_v < first_cross:
#             max_v = first_cross
#         if max_v < second_cross:
#             max_v = second_cross

#         j -= 1

#     print(f'#{tc} {max_v}')
