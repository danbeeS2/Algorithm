# 2047. 신문 헤드라인
str_list = list(input())
result = []

for s in str_list:
    if ord(s) >= 97 and ord(s) <= 122:
        result.append(chr(ord(s) - 32))
    else:
        result.append(s)
print("".join(result))