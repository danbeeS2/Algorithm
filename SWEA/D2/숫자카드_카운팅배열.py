# 11811. [파이썬 SW문제해결 기본 - LIST1] 숫자 카드
T = int(input())
for tc in range(1, T + 1):
    N = int(input())
    card = list(map(int, input()))

    # temp = [0] * len(card)
    counts = [0] * 10  # 0~9까지 숫자 카드

    # 카운팅
    for i in range(N):
        counts[card[i]] += 1

    max_v = 0
    card_num = 0
    i = 0
    for cnt in counts:
        if max_v <= cnt:
            max_v = cnt
            card_num = i
        i += 1
    print(f"#{tc} {card_num} {max_v}")
