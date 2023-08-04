# # 1075. 나누기
# 1021, 11 => 1000 => 1001
# 275, 5 => 200
# 1000, 3 => 1002
import sys

sys.stdin = open("input.txt")
N = (int(input()) // 100) * 100  # N 뒷자리를 00으로 만들기
F = int(input())

while True: 
    if N % F == 0: # N이 F로 나누어 떨어지면
        N = str(N) # N을 문자열로 형 변환 => '00'이 안 나오기 때문
        break # 나누어 떨어진다면 반복문을 돌릴 필요가 없으므로 반복문 탈출
    N += 1 # 나누어 떨어지지 않는다면 N을 1씩 증가

print(N[-2:]) # 반복문이 완료되면 문자열인 N의 뒤 두글자 출력
