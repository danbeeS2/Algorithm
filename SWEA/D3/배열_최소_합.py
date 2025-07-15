import sys
sys.stdin = open('input.txt')
def perm(n, k, s):  # n:원소의 개수, k:재귀의 깊이, s:합
    global min_v
    ##### 가지치기 #####
    if min_v <= s:    # 합인 s가 최소값 보다 크다면 재귀 호출을 할 필요X
        return
    if n == k:        # 원소의 개수와 k가 같을 때, 합과 최소값 비교 (dfs)
        if min_v > s:
            min_v = s
        return
    else:
        for i in range(n):
            if visited[i] == 0:  # 방문한 적이 없는 열일 때만 합함
                visited[i] = 1
                perm(n, k+1, s+arr[k][i])
                visited[i] = 0
    return min_v


T = int(input())
for tc in range(1, T + 1):
    N = int(input())
    arr = [list(map(int, input().split())) for _ in range(N)]
    min_v = 1000
    visited = [0]*N
    print(f'#{tc} {perm(N, 0, 0)}')