# 1032.  명령 프롬프트
T = int(input())
result = list(input())

for test_case in range(T - 1):
    for idx, s in enumerate(input()):
        if result[idx] != s:
            result[idx] = "?"

print("".join(result))
