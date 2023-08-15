# 2578. 빙고
N = 5


def bingo_check(arr):
    cnt = 0
    # 행, 열 빙고 확인
    for i in range(N):
        row, col = 0, 0
        for j in range(N):
            row += arr[i][j]
            col += arr[j][i]
        if row == N:
            cnt += 1
        if col == N:
            cnt += 1

    # 대각선 빙고 확인
    cross1 = 0
    cross2 = 0
    for i in range(N):
        cross1 += arr[i][i]
        cross2 += arr[i][N - 1 - i]
    if cross1 == N:
        cnt += 1
    if cross2 == N:
        cnt += 1

    return cnt


bingo = [list(map(int, input().split())) for _ in range(N)]
numbers = [list(map(int, input().split())) for _ in range(N)]
visited = [[0] * N for _ in range(N)]
call_list = []
for num in numbers:
    for n in num:
        call_list.append(n)

res = 0
for call in call_list:
    res += 1
    for i in range(N):
        for j in range(N):
            if bingo[i][j] == call:
                visited[i][j] = 1
    if bingo_check(visited) >= 3:
        break

print(res)
