# 2050. 알파벳을 숫자로 변환
str = list(input())
result = []

# 아스키코드 : A~Z == 65~90
for s in str:
    n = f"{ord(s) - 64}"
    result.append(n)

print(" ".join(result))

# str = list(input())
# result = []
#
# for i in str:
#     if i == 'A':
#         result.append('1')
#     elif i == 'B':
#         result.append('2')
#     elif i == 'C':
#         result.append('3')
#     elif i == 'D':
#         result.append('4')
#     elif i == 'E':
#         result.append('5')
#     elif i == 'F':
#         result.append('6')
#     elif i == 'G':
#         result.append('7')
#     elif i == 'H':
#         result.append('8')
#     elif i == 'I':
#         result.append('9')
#     elif i == 'J':
#         result.append('10')
#     elif i == 'K':
#         result.append('11')
#     elif i == 'L':
#         result.append('12')
#     elif i == 'M':
#         result.append('13')
#     elif i == 'N':
#         result.append('14')
#     elif i == 'O':
#         result.append('15')
#     elif i == 'P':
#         result.append('16')
#     elif i == 'Q':
#         result.append('17')
#     elif i == 'R':
#         result.append('18')
#     elif i == 'S':
#         result.append('19')
#     elif i == 'T':
#         result.append('20')
#     elif i == 'U':
#         result.append('21')
#     elif i == 'V':
#         result.append('22')
#     elif i == 'W':
#         result.append('23')
#     elif i == 'X':
#         result.append('24')
#     elif i == 'Y':
#         result.append('25')
#     else:
#         result.append('26')
# print(result)
# print(' '.join(result))
