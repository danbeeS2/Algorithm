# 2605. 줄 세우기
# 입력
N = int(input())
cards = list(map(int, input().split()))
students = []

# 로직
num = 1  # 학생 번호
for card in cards:
    if card == 0:
        students.append(num)
    else:
        idx = num - card - 1
        students.insert(idx, num)
    num += 1

# 출력
print(*students)
