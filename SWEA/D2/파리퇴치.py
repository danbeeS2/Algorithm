# 2001. 파리 퇴치
T = int(input())
for tc in range(1, T + 1):
    N, M = map(int, input().split())
    arr = [list(map(int, input().split())) for _ in range(N)]

    max_fly = 0
    for i in range(N):
        for j in range(N):
            fly = 0
            for k in range(M):  # 파리채 크기
                for n in range(M):
                    new_i = i + k
                    new_j = j + n

                    if 0 <= new_i < N and 0 <= new_j < N:
                        fly += arr[new_i][new_j]
                if max_fly < fly:
                    max_fly = fly

    print(f"#{tc} {max_fly}")
