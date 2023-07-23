# 1986. 지그재그 숫자
for i in range(int(input())):
    result = 0
    for j in range(1, int(input())+1):
        if j % 2 :
            result += j
        else:
            result -= j
    print(f'#{i+1} {result}')