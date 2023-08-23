# 11671. 기지국
def is_valid(ni, nj, N):
    if 0 <= ni < N and 0 <= nj < N:
        return True
    return False


def solve(i, j, num):
    global arr
    direction = [[-1, 0], [0, 1], [1, 0], [0, -1]]  # 4방향
    for di, dj in direction:
        for k in range(1, num + 1):
            ni = i + di * k
            nj = j + dj * k
            if is_valid(ni, nj, N) and arr[ni][nj] == "H":
                arr[ni][nj] = "X"
    return arr


def find_H(arr, N):
    cnt = 0
    for i in range(N):
        for j in range(N):
            if arr[i][j] == "H":
                cnt += 1
    return cnt


T = int(input())
for tc in range(1, T + 1):
    N = int(input())
    arr = [list(input()) for _ in range(N)]

    for i in range(N):
        for j in range(N):
            if arr[i][j] == "A":
                solve(i, j, 1)
            if arr[i][j] == "B":
                solve(i, j, 2)
            if arr[i][j] == "C":
                solve(i, j, 3)

    res = find_H(arr, N)
    print(f"#{tc} {res}")
