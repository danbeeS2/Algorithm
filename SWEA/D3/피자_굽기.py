# 11885. [파이썬 SW문제해결 기본 - Queue] 피자 굽기
T = int(input())
for tc in range(1, T+1):
    N, M = map(int, input().split())
    cheese = list(map(int, input().split()))

    oven = list(range(N))  # 한번에 돌릴 수 있는 피자 인덱스가 저장됨

    while oven:
        idx = oven.pop(0)  # 피자를 화덕에서 꺼냄
        cheese[idx] = cheese[idx] // 2  # 1번 위치에서 치즈 반 녹음

        if cheese[idx] == 0:     # 치즈가 다 녹았으면
            if N < M:            # 마지막으로 돌린 피자의 번호가 M보다 작으면
                oven.append(N)   # 다음 번호의 피자를 오븐에 넣는다
                N += 1

        else:  # 치즈가 안 녹았으면 다시 화덕에 해당 번호의 피자를 넣어야 함
            oven.append(idx)

        if len(oven) == 1:
            print(f'#{tc} {oven[0] + 1}')
            break

        print(oven, cheese[idx])


