# 2667. 단지번호붙이기
def dfs(i, j):
    global cnt
    cnt += 1
    visited[i][j] = True

    for di, dj in direction:
        ni = i + di
        nj = j + dj
        if ni <= -1 or ni >= N or nj <= -1 or nj >= N:
            continue
        if arr[ni][nj] != 1 or visited[ni][nj]:
            continue
        # if (0 <= ni < N and 0 <= nj < N) and arr[ni][nj] == 1 and not visited[ni][nj]:
        dfs(ni, nj)


# 입력
N = int(input())
arr = [list(map(int, input())) for _ in range(N)]

# 로직
direction = [(-1, 0), (0, 1), (1, 0), (0, -1)]
visited = [[False] * N for _ in range(N)]
result = []

for i in range(N):
    for j in range(N):
        if arr[i][j] == 1 and not visited[i][j]:
            cnt = 0
            dfs(i, j)
            result.append(cnt)

result.sort()  # 오름차순 정렬

# 출력
print(len(result))
for res in result:
    print(res)
