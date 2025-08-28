# 프로그래머스 - K번째 수

- 문제 링크: https://school.programmers.co.kr/learn/courses/30/lessons/42748
- 난이도: Level 1
- 핵심 아이디어:
  - `commands` 배열에 주어진 구간 `[start, end]`로 `array`를 잘라낸 뒤(`slice`)
  - 잘라낸 배열을 오름차순으로 정렬(`sort`)
  - 정렬된 배열의 `k번째 원소`를 뽑아 결과 배열에 추가
- **시간복잡도**: `O(M × K log K)` (M=명령 수, K=구간 길이, 최악 `O(M × N log N)`)
- **공간복잡도**: `O(N + M)` (잘라낸 배열 + 결과 배열)

## 코드

`solution.js`

## 메모

- `slice`는 원본 배열을 건드리지 않고 잘라내기 때문에 안전하게 사용 가능
- `map`을 활용하면 `answer.push` 없이도 깔끔하게 결과 배열 생성

## 태그

#정렬 #배열 #구현
