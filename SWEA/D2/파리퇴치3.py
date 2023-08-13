# 12712. 파리퇴치3
T = int(input())
for tc in range(1, T + 1):
    N, M = map(int, input().split())
    arr = [list(map(int, input().split())) for _ in range(N)]

    max_val = 0
    for i in range(N):
        for j in range(N):
            # +형태
            sum_val = arr[i][j]
            for k in range(1, M):
                for di, dj in [[0, 1], [1, 0], [0, -1], [-1, 0]]:
                    ni = i + di * k
                    nj = j + dj * k
                    if 0 <= ni < N and 0 <= nj < N:
                        sum_val += arr[ni][nj]
            # 최대값 갱신
            if max_val < sum_val:
                max_val = sum_val

            # x형태
            sum_val = arr[i][j]
            for k in range(1, M):
                for di, dj in [[-1, -1], [-1, 1], [1, 1], [1, -1]]:
                    ni = i + di * k
                    nj = j + dj * k
                    if 0 <= ni < N and 0 <= nj < N:
                        sum_val += arr[ni][nj]
            # 최대값 갱신
            if max_val < sum_val:
                max_val = sum_val

    print(f"#{tc} {max_val}")
