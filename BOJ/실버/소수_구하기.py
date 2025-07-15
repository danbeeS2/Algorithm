# 1929. 소수 구하기
# 소수 판별 함수(2이상의 자연수에 대하여)
# 소수 : 1과 자기자신을 제외하면 자연수 중에서 어떤 숫자로도 나누어 떨어지지 않는 숫자
def is_prime_number(x):
    if x < 2:
        return False
    for i in range(2, int(x**0.5) + 1):  # 2부터 (x - 1)까지의 모든 수를 확인하며
        if x % i == 0:  # x가 해당 수로 나누어떨어진다면
            return False  # 소수가 아님
    return True  # 소수임


result = []
M, N = map(int, input().split())
for i in range(M, N + 1):
    if is_prime_number(i):
        result.append(i)

print(*result, sep="\n")


# last = 100;

# v =[True,True,True,True,f,True,f,f,f,True,f];
# che =[list(map(int, input().split())) for _ in range(N)]
# for i in range(2,11):
#   if (v[i]){
#     if (is_prime_number(i)){

#       while(i<=last){
#         i+=i
#         v[i]=False;
#       }
#     }v[i]= False;
#   }

# for (let j=i; j<11; J*)
