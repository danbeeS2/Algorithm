# 2071. 평균값 구하기
for t in range(int(input())):
    num_list = list(map(int, input().split()))
    aver = 0
    for n in num_list :
        aver += n
    aver = round(aver / 10)
    print(f'#{t+1} {aver}')