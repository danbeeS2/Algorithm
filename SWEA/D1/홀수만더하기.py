# 2072. 홀수만 더하기
for t in range(int(input())):
    num_list = list(map(int, input().split()))
    result = 0

    for n in num_list:
        if n % 2 == 1:
            result += n

    print(f"#{t + 1} {result}")
