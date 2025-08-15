# 프로그래머스 - 타겟 넘버 (DFS/BFS)

- 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/43165
- 난이도: Level 2
- 핵심 아이디어:
  - numbers 배열의 각 원소에 + 또는 -를 붙여 모든 경우를 탐색
  - 재귀 호출로 인덱스와 현재 합을 전달하며 DFS 탐색
- 시간복잡도: O(2^N) (각 숫자마다 +/− 두 가지 경우)
- 공간복잡도: O(N) (재귀 스택)

## DFS 코드

`solution_dfs.js`

## 메모

- 완전탐색 문제라 DFS/BFS 둘 다 가능하지만, DFS가 구현이 더 직관적

## 태그

#완전탐색 #재귀 #DFS
