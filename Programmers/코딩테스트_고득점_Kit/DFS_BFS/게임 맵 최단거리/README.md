# 프로그래머스 - 게임 맵 최단거리

- 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/1844
- 난이도: Level 2
- 핵심 아이디어:
  - 격자 그래프에서 최단 거리는 **BFS**가 정답
  - 시작점(0,0)에서 인접한 칸(상/우/하/좌)으로만 이동
  - 이전 값 + 1로 거리 계산
- 시간복잡도: O(N×M) (모든 칸을 최대 한 번씩 방문)
- 공간복잡도: O(N×M) (visited 배열 + queue)

## BFS 코드

`solution_bfs.js`

## 메모

- 이 문제는 최단 거리를 구하는 문제이므로 BFS 탐색을 함
- `visited` 배열에 방문 여부 + 거리를 함께 기록(0이면 미방문)
- `queue.shift()` 대신 **head 인덱스 증가 방식**으로 O(1) pop
- 도착 지점 찾으면 **즉시 return**(BFS 특성상 그 순간이 최단)


## 태그
#BFS #최단거리 #격자그래프 #네방향탐색 #큐 #그래프탐색