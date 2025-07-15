from collections import deque  # 큐(Queue)를 구현하기 위해 deque 라이브러리 사용

# BFS 정의
def bfs_인접리스트(graph, start, visited):
    Q = deque([start])           # 큐에 시작점 추가
    visited[start] = True        # 현재 시작점 방문 처리

    while Q:                     # 큐가 빌 때 까지 반복
        v = Q.popleft()          # 큐에서 원소 하나(현재 위치) 뽑아내기
        res.append(v)

        for i in graph[v]:       # 해당 원소와 연결된 원소들 중
            if not visited[i]:   # 아직 방문하지 않은 원소(번호)이면
                Q.append(i)      # 큐에 삽입
                visited[i] = True

graph = [
    [],
    [2, 3, 8],
    [1, 7],
    [1, 4, 5],
    [3, 5],
    [3, 4],
    [7],
    [2, 6, 8],
    [1, 7]
]

res = []
visited = [False] * 9            # 방문 리스트 초기화
bfs_인접리스트(graph, 1, visited)   # bfs 함수 호출

#
# def bfs_인접행렬(node):
#     Q = deque([node])                    # 큐에 시작점
#     visited[node] = True               # 현재 시작점 방문 처리
#
#     while Q:                           # 큐가 빌 때 까지 반복
#         now = Q.popleft()              # 큐에서 원소 하나(현재 인덱스) 뽑아내기
#         res.append(now+1)        # 출력
#
#         for next in range(N):                              # 1번부터 N번까지 모든 번호
#             if arr[now][next] == 1 and not visited[next]:  # 현재 번호에서 갈 수 있는 next(=1)이고 미방문 한 곳이면
#                 Q.append(next)          # 큐에 원소 추가
#                 visited[next] = True    # 방문 체크
#
# res = []
# N = 8  # 가장 큰 노드 번호
# visited = [False] * N
# arr = [
#     [ 0, 1, 1, 0, 0, 0, 0, 1],  # 1번 노드
#     [1, 0, 0, 0, 0, 0, 1, 0],  # 2번 노드
#     [ 1, 0, 0, 1, 1, 0, 0, 0],  # 3번 노드
#     [ 0, 0, 1, 0, 1, 0, 0, 0],  # 4번 노드
#     [ 0, 0, 1, 1, 0, 0, 0, 0],  # 5번 노드
#     [ 0, 0, 0, 0, 1, 0, 0, 0],  # 6번 노드
#     [ 0, 1, 0, 0, 0, 1, 0, 1],  # 7번 노드
#     [ 1, 0, 0, 0, 0, 0, 1, 0]   # 8번 노드
# ]
#
# bfs_인접행렬(0)
print(res)