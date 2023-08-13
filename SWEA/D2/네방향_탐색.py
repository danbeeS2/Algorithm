# 14889. 기본 - List2-연습문제1 - 네방향탐색
T = int(input())
for tc in range(1, T + 1):
    N = int(input())
    arr = [list(map(int, input().split())) for _ in range(N)]

    total_sum = 0
    for i in range(N):
        for j in range(N):
            for di, dj in [[0, 1], [1, 0], [0, -1], [-1, 0]]:
                new_i = i + di
                new_j = j + dj

                if 0 <= new_i < N and 0 <= new_j < N:
                    total_sum += abs(arr[new_i][new_j] - arr[i][j])

    print(f"#{tc} {total_sum}")
