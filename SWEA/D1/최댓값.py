# 2068. 최대수 구하기 (max함수 안 쓰고)
for t in range(int(input())):
    num_list = list(map(int, input().split()))
    max_value = num_list[0]

    for i in range(1, len(num_list)):
        if max_value < num_list[i] :
            max_value = num_list[i]
    print(f"#{t+1} {max_value}")