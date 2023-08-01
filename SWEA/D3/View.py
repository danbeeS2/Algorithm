# 1206. [S/W 문제해결 기본] 1일차 - View
for tc in range(1, 11):
    N = int(input())
    building = list(map(int, input().split()))

    view = 0
    for i in range(2, N - 2):
        # 오른쪽 빌딩 두개 확인
        if building[i] > building[i + 1] and building[i] > building[i + 2]:
            # 왼쪽 빌딩 두개 확인
            if building[i] > building[i - 1] and building[i] > building[i - 2]:

                second_h = 0
                for item in [building[i + 1], building[i + 2], building[i - 1], building[i - 2]]:
                    if second_h < item:
                        second_h = item

                # 해당 빌딩에서 두번째로 큰 빌딩 빼기
                view += building[i] - second_h
    print(f'#{tc} {view}')
