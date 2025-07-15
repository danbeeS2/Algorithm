# 16268. 풍선팡2
T = int(input())
for tc in range(1, T + 1):
    N, M = map(int, input().split())
    arr = [list(map(int, input().split())) for _ in range(N)]

    max_flower = 0
    for i in range(N):
        for j in range(M):
            flower = arr[i][j]
            for di, dj in [[0, 1], [1, 0], [0, -1], [-1, 0]]:
                new_i = i + di
                new_j = j + dj

                # 인덱스 체크 (배열을 벗어나지 않으면)
                if 0 <= new_i < N and 0 <= new_j < M:
                    flower += arr[new_i][new_j]
            if max_flower < flower:
                max_flower = flower

    print(f"#{tc} {max_flower}")
