import sys
sys.stdin=open('input.txt')
N, K = map(int, input().split())
students = list(map(int, input().split()))
diff = []
for i in range(N-1):
    diff.append(students[i+1] - students[i])
diff.sort()

if diff == []:
    print(0)
else:
    for _ in range(K-1):  # K개의 조를 만드려면 K-1개의 경계 필요
        diff.pop()        #
    print(sum(diff))


"""
인접한 키들의 차를 이용
1. 인접한 키들의 차를 가지는 리스트 구함
2. 해당 리스트를 정렬
3. 작은거 부터 n-k 개 의 합 or 큰거 부터 k -1 개를 제외하고 남은 것으 합이 정답

왜 큰 거 k-1 개를 제외해야 하나? 
차를 한 개 제거하면 그룹이 두 개로 나눠짐
차를 두 개 제거하면 그룹이 세 개로 나눠짐
즉, 그룹이 K 개가 되려면 K-1 개를 제거해야 하고, 키 차이의 합이 최소가 되야 하므로 
차가 큰 것부터 K-1 개 제거하면 남은 값들의 합이 최소가 됨

차들이 큰 것부터 제거하는 문제 -> 그리디
"""


print(diff)
print(sum(diff[:N-K]))