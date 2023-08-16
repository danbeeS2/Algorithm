# 13305. 주유소
N = int(input())
road = list(map(int, input().split()))
price = list(map(int, input().split()))

result = 0
min_v = price[0]           # 처음 출발할 때는 주유소에서 기름을 넣고 출발해야 함
for i in range(N - 1):     # 마지막 주유소에서 기름을 구입할 필요가 없으므로 제외
    if min_v > price[i]:   # 최저 가격 갱신
        min_v = price[i]

    result += min_v * road[i]  # 비용 계산

print(result)