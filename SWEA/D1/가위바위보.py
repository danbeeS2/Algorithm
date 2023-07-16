# 1936. 1대1 가위바위보
a, b = map(int, input().split())
if a-b == -1 or a-b == 2 :
    print('B')
else :
    print('A')
