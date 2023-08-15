# 3273. 두 수의 합 - 투 포인터
N = int(input())
arr = sorted(list(map(int, input().split())))  # 오름차순 정렬
x = int(input())

s = 0  # start
e = len(arr) - 1  # end
cnt = 0

while s < e:
    if arr[s] + arr[e] < x:  # s+e가 x보다 작으면, s, e 중 작은 값인 s가 켜져야 함
        s += 1
    elif arr[s] + arr[e] > x:  # s+e가 x보다 크면 s, e 중 큰 값인 e가 작아져야 함
        e -= 1
    else:
        cnt += 1
        s += 1  # 이미 최대값 + 최소값을 더해서 x가 만들어졌음
        e -= 1  # => arr는 서로 다른 n개의 정수로 이루어져 있으므로 같은 s, e-1 또는 s+1, e로 x가 만들어질 수 없음

print(cnt)
