# 프로그래머스 - 네트워크 (DFS/BFS)

- 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/43162
- 난이도: Level 3
- 핵심 아이디어:
  - 연결 요소(네트워크) 개수 = 방문 안 한 노드를 시작점으로 DFS/BFS 1회 실행할 때마다 +1
- 시간복잡도: O(N^2) (인접행렬 탐색)
- 공간복잡도: O(N)

## DFS 코드

`solution_dfs.js`

## BFS 코드

`solution_bfs.js`

## 메모

- 이 문제는 좌표 격자 탐색이 아니라 “노드-노드” 그래프이므로 visited는 1차원 사용.


## 태그
#그래프 #연결요소 #인접행렬 #DFS #BFS