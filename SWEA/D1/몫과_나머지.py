# 2029. 몫과 나머지 출력하기
for t in range(int(input())):
    num1, num2 = map(int, input().split())
    quotient = num1//num2
    remainder = num1 % num2
    print(f'#{t+1} {quotient} {remainder}')