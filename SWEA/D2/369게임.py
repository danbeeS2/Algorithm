# 1926. 간단한 369게임
result = []
for i in range(1, int(input()) + 1):
    if str(i) in ['33','36','39','63','66','69', '93','96','99']:
        result.append('--')
    elif str(i) in ['333','336','339','663','666','669', '993','996','999']:
        result.append('---')
    elif '3' in str(i) or '6' in str(i) or '9' in str(i):
        result.append('-')
    else:
        result.append(str(i))

print(" ".join(result))