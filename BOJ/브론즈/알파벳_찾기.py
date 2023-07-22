# 10809. 알파벳 찾기
string = list(input())

alphabet = "abcdefghijklmnopqrstuvwxyz"

find_alpha = {x: "-1" for x in alphabet}

i = 0
for s in string:
    if find_alpha[s] == "-1":
        find_alpha[s] = str(i)
    i += 1

result = [v for v in find_alpha.values()]

print(" ".join(result))
