# 2941. 크로아티아 알파벳
text = list(input())
croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="]
cnt = 0

while len(text):
    if "".join(text[0:3]) == "dz=":
        cnt += 1
        del text[0:3]
    elif "".join(text[0:2]) in croatia:
        cnt += 1
        del text[0:2]
    else:
        cnt += 1
        del text[0]
print(cnt)


# 진홍이 풀이
text = input()
croatia = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="]
for alpha in croatia:
    text = text.replace(alpha, "!")
    print(text)
print(len(text))
