# # 1961. 숫자 배열 회전
import sys

sys.stdin = open("input.txt")

for t in range(int(input())):
    # 행렬 N의 값
    N = int(input())

    # N*N 행렬 입력
    arr = [list(map(int, input().split())) for _ in range(N)]

    # 90도, 180,도 270도 회전한 행렬 초기화
    arr_90 = [[0 for _ in range(N)] for _ in range(N)]
    arr_180 = [[0 for _ in range(N)] for _ in range(N)]
    arr_270 = [[0 for _ in range(N)] for _ in range(N)]

    # arr행렬을 90도 회전하면 arr_90 행렬
    for i in range(N):
        for j in range(N):
            arr_90[i][j] = arr[N - 1 - j][i]

    # arr_90 행렬을 90도 회전하면 arr_180 행렬
    for i in range(N):
        for j in range(N):
            arr_180[i][j] = arr_90[N - 1 - j][i]

    # arr_180 행렬을 90도 회전하면 arr_270 행렬
    for i in range(N):
        for j in range(N):
            arr_270[i][j] = arr_180[N - 1 - j][i]

    # 결과 출력
    print(f"#{t+1}")
    for i in range(N):
        for a in range(N):
            print(arr_90[i][a], end="")
        print(end=" ")
        for b in range(N):
            print(arr_180[i][b], end="")
        print(end=" ")
        for c in range(N):
            print(arr_270[i][c], end="")
        print()
