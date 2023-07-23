# 1989. 초심자의 회문 검사
for t in range(int(input())):
    s = list(input().strip())
    result = 0
    mid = len(s) // 2
    front = list(reversed(s[:mid]))

    if len(s) % 2:  # 홀수
        back = s[mid + 1 :]
        if front == back:
            result = 1
        else:
            result = 0
    else:  # 짝수
        back = s[mid:]
        if front == back:
            result = 1
        else:
            result = 0
    print(f"#{t+1} {result}")

# s = list("level")
# mid = len(s)//2
# print(s[mid + 1:])
