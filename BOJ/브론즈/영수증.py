# 25304. 영수증
total_price = int(input())
result = 0
for i in range(int(input())):
    price, num = map(int, input().split())
    result += price * num

if result == total_price:
    print("Yes")
else:
    print("No")
