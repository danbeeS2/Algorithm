# 11811. [파이썬 SW문제해결 기본 - LIST1] 숫자 카드
T = int(input())
for tc in range(1, T +1):
    N = int(input())
    cards = list(map(int, input()))

    card_dict ={0:0, 1:0, 2:0, 3:0, 4:0, 5:0, 6:0, 7:0, 8:0, 9:0}
    for card in cards:
        card_dict[card] += 1

    max_v = 0
    card_num = 0
    for k, v in card_dict.items():
        if v > max_v:
            max_v = v
            card_num = k
        if v == max_v:
            card_num = k

    print(f'#{tc} {card_num} {max_v}')