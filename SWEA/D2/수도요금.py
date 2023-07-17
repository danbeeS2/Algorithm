# 1284. 수도 요금 경쟁
for t in range(int(input())):
    a_price, b_base_price, b_standard, b_plus_price, water = map(int, input().split())
    a = a_price * water
    if water > b_standard:
        b = b_base_price + (water - b_standard) * b_plus_price
    else:
        b = b_base_price
    print(f'#{t+1} {min(a, b)}')