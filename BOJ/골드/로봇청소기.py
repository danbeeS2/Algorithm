# 14503. 로봇청소기
def solve(ci, cj, dr):
    cnt = 0
    while 1:
        arr[ci][cj] = 2  # 방문체크
        cnt += 1  # 청소한 칸 수 세기

        flag = 1
        while flag == 1:
            # 방향 만들어주기 (= 반시계 방향 90도 회전)
            for nd in [(dr + 3) % 4, (dr + 2) % 4, (dr + 1) % 4, dr]:
                ni, nj = ci + di[nd], cj + dj[nd]
                if arr[ni][nj] == 0:  # 유효한 인덱스이고, 미청소 영역이면
                    ci, cj, dr = ni, nj, nd  # 현재 위치 및 방향으로 갱신
                    flag = 0  # 청소헸다고 표시
                    break

            else:  # 4방향 모두 미청소 영역이 없다면
                bi, bj = ci - di[dr], cj - dj[dr]  # 후진
                if arr[bi][bj] == 1:  # 벽이면
                    return cnt  # 종료
                else:
                    ci, cj = bi, bj
    return


N, M = map(int, input().split())
r, c, d = map(int, input().split())
arr = [list(map(int, input().split())) for _ in range(N)]

di = [-1, 0, 1, 0]
dj = [0, 1, 0, -1]

res = solve(r, c, d)
print(res)
